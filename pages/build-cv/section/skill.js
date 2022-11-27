import React, { useEffect, useState } from "react";
import style from "/styles/experience.module.css";
import { FaBackward, FaCheck } from "react-icons/fa";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
function Skill() {
  const router = useRouter();
  const [skillName, setskillName] = useState("");
  const [skillRange, setskillRange] = useState("0");

  useEffect(()=>{
      if(!localStorage.employment){
          router.push('/build-cv/section/employment')
      }
  }, [])
  const submit = () => {
    let skillDetail = { skillName, skillRange };
    const toastOption = {
      position: "top-left",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    };
    if (skillName != "") {
      localStorage.setItem("skill", JSON.stringify(skillDetail));
      setskillName("");
      setskillRange("");
      router.push("/build-cv/section/language");
    } else {
      toast.error("Please enter your skill before proceeding", toastOption);
    }
    console.log(skillRange);
  };

  return (
    <>
      <div className={`${style.experience} container px-3 border-0 `}>
        <h2 className="text-end">
          <span className="text-danger">Ski</span>
          <span className="text-color">lls</span>
          <hr />
        </h2>
        <div className="card p-3 col-md-6 mx-auto">
          <div className="form my-2">
            <label htmlFor="">Skill</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setskillName(e.target.value)}
              value={skillName}
            />
          </div>
          <div className="form my-2">
            <div className="row">
              <label htmlFor="" className="form-label">
                Level
              </label>
              <div className="col-8">
                <input
                  type="range"
                  className="form-range py-0"
                  onChange={(e) => setskillRange(e.target.value)}
                  value={skillRange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="">Make a choice</label>
              </div>
            </div>
          </div>

          <div className="button my-2" onClick={submit}>
            <button className="btn bg-color float-end">
              <FaCheck /> Done
            </button>
          </div>
          <div className="button my-2" onClick={submit}>
            <button className="btn btn-danger">
              <FaBackward /> Back
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Skill;
