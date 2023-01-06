import connection from "../../../Database/Connect";
import { userModel } from "../../../Database/Schema";

connection()
export default function handler(req, res){
    const id = req.query.id;
    userModel.findOne({userUniqueId: id}, function(err, data){
        if(err){
            res.send({message: "Unexpected error!, please check your connection and reload", status: false})
        }
        else{
            res.send({data, status: true})
        }
    })
}