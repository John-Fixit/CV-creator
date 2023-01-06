import connection from "../../Database/Connect";
import { userModel } from "../../Database/Schema";
connection()
export default function handler(req, res){
    if(req.method==="POST"){
        const {userUniqueId, languageDetail} = req.body;
        userModel.findOneAndUpdate(
            { userUniqueId },
            { $push: { skill: languageDetail } },
            (err, result) => {
              if (err) {
                  console.log(err)
                res.send({
                  message:
                    "Unexpected error, please check your connection",
                  status: false,
                });
              } else {
                res.send({
                  message:
                    "Language added successfully, add another one? if yes continue adding, else click on NEXT",
                  status: true,
                });
              }
            }
          );
    }
}