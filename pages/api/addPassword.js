import connection from "../../Database/Connect";
connection()
export default function handler(req, res){
    if(req.method == "POST"){
        res.send(req.body)
    }
}