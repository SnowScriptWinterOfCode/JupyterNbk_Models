const video = document.getElementById("video");
const popup = document.getElementById("popup");
let nameofemp = " ";

//import all the models to be used.

Promise.all([//promise.all waits until the all promises are returned.
    faceapi.nets.ssdMobilenetv1.loadFromUri("./models"),
    faceapi.nets.faceRecognitionNet.loadFromUri("./models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("./models"),
  ]).then(startWebcam)

// to access the user's webcam

function startWebcam() {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function getLabeledFaceDescriptions() {

    let myObject = await JSON.parse(localStorage.getItem('myObject'));
    const labels = await myObject.labels;
    console.log(labels);
     return Promise.all( 
      labels.map(async (label) => {
        const descriptions = [];
        for (let i = 1; i <= 1; i++) {
          const img = await faceapi.fetchImage(`./labels/${label}/${i}.png`);
          const detections = await faceapi
            .detectSingleFace(img)
            .withFaceLandmarks()
            .withFaceDescriptor();
            // console.log(detections.descriptor);
          descriptions.push(detections.descriptor);
        }
        return new faceapi.LabeledFaceDescriptors(label, descriptions);
      }
      )
    )
   }
   

   video.addEventListener("play", async () => {
    const labeledFaceDescriptors = await getLabeledFaceDescriptions();
   
    const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors);

    const canvas = faceapi.createCanvasFromMedia(video);
    document.body.append(canvas);
  
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(canvas, displaySize);
  
  
      
     
      const detections = await faceapi
      .detectAllFaces(video)
      .withFaceLandmarks()
      .withFaceDescriptors();
      // console.log(detections);

    const resizedDetections = faceapi.resizeResults(detections, displaySize);

    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

    const results = resizedDetections.map((d) => {
      return faceMatcher.findBestMatch(d.descriptor);
    });
    // console.log(results[0].label); // prints name if detects or throws error
    // const nameOfEmployee = results[0].label;
    results.forEach((result, i) => {
      const box = resizedDetections[i].detection.box;
      const drawBox = new faceapi.draw.DrawBox(box, {
        label: result,
      }
      );
      drawBox.draw(canvas);
    });
    // console.log(results[0].label);
    if(results[0].label!=null){
      if(nameofemp!=results[0].label){
        document.getElementById("nameofClient").innerHTML =  await `${results[0].label} marked present`;
      popup.classList.add("card-after");
      nameofemp = await results[0].label;
      }
    }
  });
  