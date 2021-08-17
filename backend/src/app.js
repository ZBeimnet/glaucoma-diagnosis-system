const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');


const app = express();
var port_number = process.env.PORT || 8080;
const localDburl = "mongodb://localhost:27017/gds";
const mongodbAtlasUrl = "mongodb+srv://beka:310203@cluster0.jgnvu.mongodb.net/GDS?retryWrites=true&w=majority";
const patientRouter = require('./routes/patient');

mongoose
  .connect(mongodbAtlasUrl, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database successfuly");
  });
  app.use(cors());
  app.use(morgan('dev'));
  
  app.use(express.json());

  app.get('/',(req,res)=>{
    res.send("Hello world");
    
})
app.use("/patients",patientRouter);

app.listen(port_number,()=>{
    console.log(`GDS is listening at http://localhost:${port_number}`);
})