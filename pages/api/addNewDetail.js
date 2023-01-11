import connection from "../../Database/Connect";
import { userModel } from "../../Database/Schema";
import nodemailer from "nodemailer";
import cloudinary from "cloudinary";
connection();
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
const transporter = nodemailer.createTransport({
  service: "smtp@gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default async function handler(req, res) {
  if (req.method == "POST") {
    let roundedNo = Math.floor(Math.random() * 1000);
    const userUniqueId = req.body.firstName + roundedNo;
    let userSchemaDetail = {
      surname: req.body.surname,
      firstName: req.body.firstName,
      strAddress: req.body.strAddress,
      cityTown: req.body.cityTown,
      country: req.body.country,
      phoneContact: req.body.phoneContact,
      email: req.body.email,
      password: "",
      githubLink: req.body.githubLink,
      profilePic: req.body.profilePic,
      education: [],
      employment: [],
      language: [],
      skill: [],
      profile: "",
      certifcate: [],
      userUniqueId,
      verify: req.body.verify,
    };
    let mailMessage = {
      from: "CreateMyCv",
      to: `${req.body.email}`,
      subject: "Registration successful",
      html: `Congratulation <b>Dear ${req.body.firstName} ${req.body.surname}</b> your account has been created successfully with CreateMyCv, Your unique id to log in next time is ${userUniqueId}`,
    };
    transporter.sendMail(mailMessage, (err, result) => {
      if (err) {
        console.log(err)
        console.log(err.code)
        err.code == "EENVELOPE"
          ? res.send({
              
              message: "Email entered is invalid, please use a valid email",
              status: false,
            })
          : res.send({
            message: "Network error, please check your connection!",
              status: false,
            });
      } else {
        if (!!req.body.profilePic) {
          cloudinary.v2.uploader
            .upload(req.body.profilePic, function (err, uploadResult) {
              if (err) {
                res.json({
                  message: `Connection error! profile photo not saved, please try again!`,
                  status: false,
                });
              }
            })
            .then((result) => {
              userSchemaDetail.profilePic = result.secure_url;
              const form = new userModel(userSchemaDetail);
              form.save((err, data) => {
                if (err) {
                  res.send({
                    message: "Internet server error, please check your connection!",
                    status: false,
                  });
                } else {
                  res.send({
                    message:
                      "Details saved successfully, you will recieve an email shortly!",
                    status: true,
                    userUniqueId: data.userUniqueId,
                  });
                }
              });
            });
        } 
        else {
          const form = new userModel(userSchemaDetail);
          form.save((err, data) => {
            if (err) {
              console.log(err)
              res.send({
                message: err.message,
                status: false,
              });
            } else {
              res.send({
                message:
                  "Details saved successfully, you will recieve an email shortly!",
                status: true,
                userUniqueId: data.userUniqueId,
              });
            }
          });
        }
      }
    });
    
  }
}
