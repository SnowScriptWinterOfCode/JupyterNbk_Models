
async function run(){
    const elemid = await document.getElementById("name");
    const nameOfEmployee = elemid.value
    console.log(nameOfEmployee);

//    const labels =[];
    // await labels.push(nameOfEmployee);
    // console.log(labels);
// await localStorage.setItem("labels",JSON.stringify(labels.push(nameOfEmployee)));


// Step 1: Retrieve existing object from local storage
let myObject = await JSON.parse(localStorage.getItem('myObject'));

// Step 2: If the object doesn't exist yet, create it with an empty array
if (!myObject) {
    myObject = { labels: [] };
}

// Step 3: Push elements into the array
await myObject.labels.push(`${nameOfEmployee}`);

// Step 4: Store the updated object back into local storage
await localStorage.setItem('myObject', JSON.stringify(myObject));
 }