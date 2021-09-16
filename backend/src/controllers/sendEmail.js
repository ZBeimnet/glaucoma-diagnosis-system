const nodemailer = require('nodemailer');
let transport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.mailtrap.io',
port: 2525,
auth:{
    user:"bereketheramo25@gmail.com",
    pass:"tedagxcaxoqftvlg"
}

})

exports.isGranted = (healthcenter)=>{
    
const message = {
    from:"bereketheramo25@gmail.com",
    to:healthcenter.email,
    subject:"about your application to use Gds",
    text:`you are verified to use the system`
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

exports.sendconfirmationEmail = (healthcenter)=>{
    transport.sendMail({
        from: "bereketheramo25@gmail.com",
        to: healthcenter.email,
        subject: "Please confirm your account",
        html: `<h1>Email Confirmation</h1>
            <h4>Hello ${healthcenter.name}</h4>
            <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
            <a href=http://localhost:5000/healthcenter/confirm/${healthcenter.confirmationCode}> Click here</a>
            </div>`,
      }).catch(err => console.log(err));
}