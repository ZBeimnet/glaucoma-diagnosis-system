const nodemailer = require("nodemailer");
let transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "bereketheramo25@gmail.com",
    pass: "tedagxcaxoqftvlg",
  },
});

exports.isGranted = (healthcenter) => {
  const message = {
    from: "bereketheramo25@gmail.com",
    to: healthcenter.email,
    subject: "GDS Request",
    html: `<p>Hi ${healthcenter.name},<br><br>Congratulation, your request to use GDS has been approved!<br><br>Please use the email and password you used to apply as a login credential.<br><br>Best Regards,<br>from GDS team</p>`,
  };
  transport.sendMail(message, (err, Info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(Info);
    }
  });
};

exports.isDenied = (healthcenter) => {
  console.log("here");
  const message = {
    from: "bereketheramo25@gmail.com",
    to: healthcenter.email,
    subject: "GDS Request",
    html: `<p>Hi ${healthcenter.name},<br><br>Unfortunately, your request to use GDS has been declined!<br><br>Please apply again once you meet the requirements.<br><br>Best Regards,<br>from GDS team</p>`,
  };
  transport.sendMail(message, (err, Info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(Info);
    }
  });
};

exports.isRejected = (healthcenter) => {
  console.log("here");
  const message = {
    from: "bereketheramo25@gmail.com",
    to: healthcenter.email,
    subject: "GDS Request",
    html: `<p>Hi ${healthcenter.name},<br><br>Unfortunately, your request to use GDS has been declined!<br><br>Please apply again once you meet the requirements.<br><br>Best Regards,<br>from GDS team</p>`,
  };
  transport.sendMail(message, (err, Info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(Info);
    }
  });
};
