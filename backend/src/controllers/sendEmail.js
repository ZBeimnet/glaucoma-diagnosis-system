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

exports.isDenied = (healthcenter)=>{
    console.log("here");
    const message = {
        from:"bereketheramo25@gmail.com",
        to:healthcenter.email,
        subject:"about your application to use Gds",
        text:`you are banned from using the system`
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

