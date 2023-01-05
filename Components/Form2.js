import { useEffect, useState } from "react";
import styles from "../styles/experience.module.css";
import { FaForward, FaPlus, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "@emotion/styled";
import axios from "axios";
function Form2() {
  const router = useRouter();
  const [education, seteducation] = useState("");
  const [school, setschool] = useState("");
  const [address, setaddress] = useState("");
  // const [startMonth, setstartMonth] = useState("")
  // const [startYear, setstartYear] = useState("")
  // const [endMonth, setendMonth] = useState("")
  // const [endYear, setendYear] = useState("")
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [present, setpresent] = useState(undefined);
  const [educations, seteducations] = useState([]);
  const [userUniqueId, setuserUniqueId] = useState("");
  useEffect(() => {
    if (!localStorage.personalInfo) {
      router.push("/build-cv/section/personal_info");
    }
    if (localStorage.userUniqueId) {
      setuserUniqueId(JSON.parse(localStorage.userUniqueId));
    }
  }, []);
  useEffect(() => {
    if (localStorage.userUniqueId) {
      setuserUniqueId(JSON.parse(localStorage.userUniqueId));
    }
  }, []);

  const months = [
    { name: "January", id: "1" },
    { name: "February", id: "2" },
    { name: "March", id: "3" },
    { name: "April", id: "4" },
    { name: "May", id: "5" },
    { name: "June", id: "6" },
    { name: "July", id: "7" },
    { name: "August", id: "8" },
    { name: "September", id: "9" },
    { name: "October", id: "10" },
    { name: "November", id: "11" },
    { name: "December", id: "12" },
  ];

  const subEduDetail = () => {
    let eduDetail;
    if (present) {
      eduDetail = { education, school, address, startDate, present };
    } else {
      eduDetail = { education, school, address, startDate, endDate };
    }

    axios
      .post("/api/addEducation", { eduDetail, userUniqueId })
      .then((res) => {
        if (res.data.status) {
          let newEducation = [...educations, eduDetail];
          seteducations(newEducation);
          localStorage.setItem("eduDetail", JSON.stringify(educations));
          seteducation("");
          setschool("");
          setaddress("");
          setstartDate("");
          setendDate("");
          setpresent(undefined);
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err)
        toast.error(err.message);
      });
  };

  const navigateForward = () => {
    router.push("/build-cv/section/profile");
  };

  const navigateBack = () => {
    router.back();
  };

  return (
    <>
      <div className={`${styles.experience} containe px-3 border-0`}>
        <div className="containe">
          <h2 className="text-end">
            <span className="text-danger">Educ</span>
            <span className="text-color">ation</span>
            <hr />
          </h2>
          {/* first form column */}
          <div className="">
            <div className="form row my-2">
              <h5 className="text-color">Education Detail</h5>
              <div className="col-sm-12 my-2">
                <div className="form-group">
                  <label htmlFor="">Education</label>
                  <input
                    type="text"
                    className="form-control bg-light py-2"
                    onChange={(e) => seteducation(e.target.value)}
                    value={education}
                  />
                </div>
              </div>
            </div>
            {/* second form column */}
            <div className="form row">
              <div className="col-sm-6 my-2">
                <div className="form-group">
                  <label htmlFor="">School</label>
                  <input
                    type="text"
                    className="form-control bg-light py-2"
                    placeholder="School"
                    onChange={(e) => setschool(e.target.value)}
                    value={school}
                  />
                </div>
              </div>
              <div className="col-sm-6 my-2">
                <div className="form-group">
                  <label htmlFor="">address</label>
                  <input
                    type="text"
                    className="form-control bg-light py-2"
                    placeholder="address"
                    onChange={(e) => setaddress(e.target.value)}
                    value={address}
                  />
                </div>
              </div>
              <div className="col-sm-5 my-2">
                <div className="form-group">
                  <label htmlFor="">Start date</label>
                  <div className="row">
                    <div className="section col-6">
                      <input
                        type="date"
                        className="form-control"
                        onChange={(e) => setstartDate(e.target.value)}
                        value={startDate}
                      />

                      {/* <select className={`form-control`}>
                    {months.map((month) => (
                      <option value={month.id}>{month.name}</option>
                    ))}
                  </select> */}
                    </div>
                    {/* <div className="section col-6">
                  <select className="form-control dropdown-toggle">{}</select>
                </div> */}
                  </div>
                </div>
              </div>
              <div className="col-sm-2 text-center">
                <input
                  type="checkbox"
                  className="mx-2"
                  onChange={(e) => setpresent(e.target.checked)}
                  value={present}
                />
                <label htmlFor="">Present</label>
              </div>
              <div className="col-sm-5 my-2">
                <div className="form-group">
                  <label htmlFor="">End date</label>
                  <div className="row">
                    <div className="section col-6">
                      <input
                        type="date"
                        className="form-control"
                        onChange={(e) => setendDate(e.target.value)}
                        value={endDate}
                      />
                      {/* <select className={`form-control`}>
                    {months.map((month) => (
                      <option value={month.id}>{month.name}</option>
                    ))}
                  </select> */}
                    </div>
                    {/* <div className="section col-6">
                  <select className="form-control dropdown-toggle">
                    {months.map((month) => (
                      <option value={month.id}>{month.name}</option>
                    ))}
                  </select>
                </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* third form column */}
            <button className="btn bg-color" onClick={subEduDetail}>
              Add &#43;
            </button>
          </div>
          <div className="button my-2 d-flex justify-content-between">
            <button
              className="btn rounded-pill btn-lg btn-danger"
              onClick={navigateBack}
            >
              <FaArrowLeft /> back
            </button>
            <button className="btn bg-color" onClick={navigateForward}>
              Next <FaForward size="3vh" />
            </button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Form2;
