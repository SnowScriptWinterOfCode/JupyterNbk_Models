const express = require("express");
const multer = require("multer");
const fs = require("fs-extra");
const expressSession = require("express-session");
const { connectMongoose , User } = require("./conn.js");
const flash = require("express-flash");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(expressSession({ secret: "secret", resave:false, saveUninitialized:false, cookie:{maxAge:600000}}
));
app.use(express.static("public"));
app.use(flash());

connectMongoose();

app.set("view engine","ejs");

const storage = multer.diskStorage({
  destination: (req, file , cb) => {
    const name = req.body.name;
    fs.mkdirSync(`./public/labels/${name}`)
      return cb(null ,`./public/labels/${name}`);
  },
  filename: (req,file,cb) => {
      return cb(null,"1.png");
  }
});

const upload = multer({storage: storage});

app.get("/",(req,res) => {
    res.render("home");
})

app.get("/register",(req,res) => {
  res.render("register",{messages:req.flash()});
})

app.get("/face-det",(req,res) => {
  res.render("face-det");
})

app.get("/instruct",(req,res)=>{
  res.render("instruct");
})

app.get("/face-recog",(req,res) => {
  res.render("face-recog");
})


app.post("/register",async (req,res)=>{
  const user = await User.findOne({email : req.body.email});  
  if(!req.body.email || !req.body.email){
      req.flash("error","Email and Password are required");
      return res.redirect("/register");
  }
  else{
  if(user!=null){
      req.flash("error","User already exists");
       return res.redirect("/register");
  }
  else{
      const newUser = await User.create(req.body);
      req.flash("success","Registered succesfully");
  res.redirect("/");
  }
  }
});

app.post("/face-det", upload.single("faceprofile"), async (req,res) => {
  res.redirect("/");
});

app.post("/face-recog", (req,res) => {
  res.redirect("/");
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`App is running on port http://localhost:7000`);
});