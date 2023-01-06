
import connection from "../../Database/Connect";
import { userModel } from "../../Database/Schema";
connection()
export default function handler(req, res){
    if(req.method === 'POST'){
        const {eduDetail, userUniqueId, verify} = req.body;
        userModel.findOneAndUpdate({userUniqueId}, {$push: {'education': eduDetail}, "verify": verify}, (err, result)=>{
            if(err){
                res.send({message: "Unexpected error, please check your connection", status: false})
            }
            else{
                res.send({message: "Education added successfully, add another one? or click on Next to continue", status: true})
            }
        })
    }
}