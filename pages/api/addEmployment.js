import connection from "../../Database/Connect";
import { userModel } from "../../Database/Schema";
connection()
export default async function handler(req, res, next) {
  if (req.method === "POST") {
    const { userUniqueId, employmentDetail, verify } = req.body;
    userModel.findOneAndUpdate(
      { userUniqueId },
      { $push: { employment: employmentDetail }, verify },
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
              "Employment added successfully, add another one or click next to continue",
            status: true,
          });
        }
      }
    );
  }
}
