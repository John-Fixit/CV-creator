import React, { useEffect, useState } from "react";
import styles from "/styles/experience.module.css";
import { FaArrowLeft, FaForward } from "react-icons/fa";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function Employment() {
  const router = useRouter();
  const [position, setposition] = useState("");
  const [employer, setemployer] = useState("");
  const [city, setcity] = useState("");
  const [startDate, setstartDate] = useState("");
  const [present, setpresent] = useState(undefined);
  const [endDate, setendDate] = useState("");
  const [description, setdescription] = useState("");
  const [employments, setemployments] = useState([]);
  const [userUniqueId, setuserUniqueId] = useState("");
  useEffect(() => {
    if (!localStorage.profileBio) {
      router.push("/build-cv/section/profile");
    }
    if (localStorage.userUniqueId) {
      setuserUniqueId(JSON.parse(localStorage.userUniqueId));
    }
  }, []);


  const submit = () => {
    let employmentDetail;
    if (present) {
      employmentDetail = {
        position,
        employer,
        city,
        startDate,
        present,
        description,
      };
    } else {
      employmentDetail = {
        position,
        employer,
        city,
        startDate,
        endDate,
        description,
      };
    }

    if(!!position && !!employer){
      axios
        .post("/api/addEmployment", {
          userUniqueId,
          employmentDetail,
          verify: "employment",
        })
        .then((res) => {
          if (res.data.status) {
            let newEmployment = [...employments, employmentDetail];
            setemployments(() => {
              return newEmployment;
            });
            localStorage.setItem("employment", JSON.stringify(employments));
            setposition("");
            setemployer("");
            setcity("");
            setstartDate("");
            setpresent(undefined);
            setendDate("");
            setdescription("");
            toast.success(res.data.message);
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
    else{
      toast.error("Please fill all the input before proceeding")
    }
  };

  const navigateForward = () => {
    router.push("/build-cv/section/skill");
  };
  const navigateBack = () => {
    router.back();
  };
  return (
    <>
      <div className={`${styles.experience} px-3`}>
        <div className="col-sm-8 mx-auto mt-5">
          <h2 className="text-end">
            <span className="text-danger">Employ</span>
            <span className="text-color">ment</span>
          </h2>
            <hr />
          {/* first form column */}
          <div>
            <div className="form row my-2">
              <h5 className="text-color">Employment <span className="text-danger">Detail</span></h5>
              <div className="col-sm-12 my-2">
                <div className="form-group">
                  <label htmlFor="">Position</label>
                  <input
                    type="text"
                    className="form-control bg-light py-2"
                    onChange={(e) => setposition(e.target.value)}
                    value={position}
                  />
                </div>
              </div>
            </div>
            {/* second form column */}
            <div className="form row">
              <div className="col-sm-6 my-2">
                <div className="form-group">
                  <label htmlFor="">Organization</label>
                  <input
                    type="text"
                    className="form-control bg-light py-2"
                    onChange={(e) => setemployer(e.target.value)}
                    value={employer}
                  />
                </div>
              </div>
              <div className="col-sm-6 my-2">
                <div className="form-group">
                  <label htmlFor="">City</label>
                  <input
                    type="text"
                    className="form-control bg-light py-2"
                    placeholder="City"
                    onChange={(e) => setcity(e.target.value)}
                    value={city}
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
                    </div>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* third form column */}
            <div className="form">
              <div className="col-sm-12">
                <textarea
                  rows="5"
                  cols="10"
                  placeholder="Description Here..."
                  className="form-control"
                  onChange={(e) => setdescription(e.target.value)}
                  value={description}
                ></textarea>
              </div>
            </div>
            <button className="btn bg-color my-2" onClick={submit}>
              Add &#43;
            </button>
          </div>
          <div className="button my-2 d-flex justify-content-between card-footer">
            <button
              className="btn rounded-pill btn-md btn-danger"
              onClick={navigateBack}
            >
              <FaArrowLeft /> back
            </button>
            <button
              className="btn btn-success rounded-pill"
              onClick={navigateForward}
            >
              Next <FaForward size="3vh" />{" "}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Employment;
