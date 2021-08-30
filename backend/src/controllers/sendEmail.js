const nodemailer = require('nodemailer');

exports.isGranted = (healthcenter)=>{
    let transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.mailtrap.io',
    port: 2525,
    auth:{
        user:"bereketheramo25@gmail.com",
        pass:"tedagxcaxoqftvlg"
    }
    
})
const message = {
    from:"bereketheramo25@gmail.com",
    to:healthcenter.email,
    subject:"about your application to use Gds",
    text:"verified"
};
transport.sendMail(message,(err,Info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(Info);
    }
})
}

