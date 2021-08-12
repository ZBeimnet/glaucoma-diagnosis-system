const express = require('express');
const app = express();
var port_number = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send("Hello world");
    
})

app.listen(port_number,()=>{
    console.log(`GDS is listening at http://localhost:${port_number}`);
})