import connection from "../../Database/Connect";
import { userModel } from "../../Database/Schema";
connection()
export default function handler(req, res){
    if(req.method==="POST"){
        const {userUniqueId, languageDetail, verify} = req.body;
        userModel.findOneAndUpdate(
            { userUniqueId },
            { $push: { skill: languageDetail }, verify },
            (err, result) => {
              if (err) {
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