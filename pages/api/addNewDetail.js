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

export default function handler(req, res) {
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
      verify: req.body.verify
    };
    let mailMessage = {
      from: "CreateMyCv",
      to: `${req.body.email}`,
      subject: "Registration successful",
      html: `Congratulation <b>Dear ${req.body.firstName} ${req.body.surname}</b> your account has been created successfully with CreateMyCv, Your unique id to log in next time is ${userUniqueId}`,
    };
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
          res.send(exec(userSchemaDetail, mailMessage, userUniqueId))
        });
    }
    else{
      res.send(exec(userSchemaDetail, mailMessage, userUniqueId))
      console.log(exec(userSchemaDetail, mailMessage, userUniqueId))
    }
  }
}

const exec= async(userSchemaDetail, mailMessage, userUniqueId)=>{
 
    const form = await new userModel(userSchemaDetail);
  const saving = await form.save((err) => {
      if (err) {
        return{
          message:"Network error, please check your connection!",
          status:false
        }
      }
      else {
        transporter.sendMail(mailMessage, (err, result) => {
          if (err) {
            console.log(err)
            return{
              message:"Registration not complete please check your connection",
              status:false
            }
           
          } else {
            return{
              message:"Details saved successfully, you will recieve an email shortly!",
              status:false
            }
          }
        });
      }
    })
    const resp = await saving
    if(resp){
      console.log(resp)
    }
    // return resp
    // return {
    //   message,
    //   status,
    //   userUniqueId
    // }
}
