console.log("Web Server boshlash");

const http = require("http")
// expressni kochirib olamiz  npm i express

const express = require("express");

const app = express(); //shu belgini qoysek bizga expressni app objectni yuboradi
// app objectida shartli server quramiz
// expressgakirib kelayotgan malumotlarga bogliq bolgan code larmiz yoziladi
//**     1: kirish
app.use(express.static("public")); // bu har qanday kelyatgan zaprosslar uchun public ochiq degan manoni anglatadi faqat public folderni koradi
// google chrome expressga request qilyatganda public folderni client larga ochib beryabmiz css kerek boladigon img larni shu erga joylashadi

app.use(express.json());
// kirib kelayotgan json formatni object holatga ogirib beradi perevod 

app.use(express.urlencoded({extended:true}));
//Html dan traditional form request  formdan biron bir post qilsak qabul qiladi  agar yozmasakn post larni qabul qilmaydi

//***   2: Session

// **    3: bssr view yasagani ejsdan foydalanamiz  'npm i ejs' install qivolamiz
app.set("views", "views"); // folderni korsatyabmiz  viewsdan oqiydi folder ochamiz
app.set("view engine", "ejs"); //ejs ni korsatyabmiz ejsda frontend ni yasaymiz backendni ichida

//**    4:  ROUTING  routerlarga moljallangan  rooterrlarni shakillantirib olaamiz
app.get("/hello",function(req, res){
    res.end('<h1 style = background:blue>Hello World! this is Hello Page </h1>');
});

app.get("/gift", (req,res) => {
    res.end('<h1 style= color:red > This is gift Page</h1>');
});

app.get("/blog",(req,res) =>{
    res.end('<h1 style = color:blue; > Salom bu Blog  B\'olimidasiz siz bu erda blog yozishingiz mumkin</h1>')
});


const server = http.createServer(app); //biz yasab olgan express app variableni pass qilish
let PORT = 3000;
server.listen(PORT, function(){
     console.log("Server ishga tushdi:",PORT);
}); // server succes bolsa iwlasa fucntion ishga tushadi 

//Expressni 4 ta bolimda shakillantirdik va uni serverga yukladik  npm start

//! "dev": "nodemon"  dev run nodemon   