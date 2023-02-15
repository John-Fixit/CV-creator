// import 
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const phoneNumber = process.env.PHONE_NUMBER

export default function handler (req, res){
    client.messages
      .create({ body: "John Fixit is send you SMS message", from: phoneNumber, to: `+2349160261836` })
      .then((message) =>{
        console.log(message.sid);
        res.send(message.sid);
      }, (err)=>{
        console.log(err)
      })
}