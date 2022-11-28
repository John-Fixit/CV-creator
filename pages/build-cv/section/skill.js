import React, { useEffect, useState } from "react";
import style from "/styles/experience.module.css";
import { FaBackward, FaCheck, FaForward } from "react-icons/fa";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
function Skill() {
  const router = useRouter();
  const [skills, setskills] = useState([])
  const [skillName, setskillName] = useState("");
  const [skillRange, setskillRange] = useState('0');

  useEffect(()=>{
      if(!localStorage.employment){
          router.push('/build-cv/section/employment')
      }
  }, [])

  // useEffect(()=>{
  //   if(localStorage.skill){
  //     setskills(JSON.parse(localStorage.getItem('skill')))
  //    }
  // }, [])
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
      let newSkill = [...skills, skillDetail]
      console.log(newSkill);  
      setskills(()=>{return newSkill })
        localStorage.setItem("skill", JSON.stringify(skills));

      setskillName("");
      setskillRange("0");
      toast.success('skill added successfully, add another one? if yes continue adding, else click on NEXT')
    } else {
      return toast.error("Please enter your skill before proceeding", toastOption);
    }
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
              <div className="col-sm-8">
                <input
                  type="range"
                  className="form-range py-0"
                  onChange={(e) => setskillRange(e.target.value)}
                  value={skillRange}
                />
              </div>
            </div>
          </div>

          <div className="button" onClick={submit}>
            <button className="btn bg-color float-end">
              <FaCheck /> Add
            </button>
          </div>
          <div className="button mt-4 card-footer d-flex justify-content-between">
            <button className="btn btn-danger" onClick={()=>navigateBack(router.push('/build-cv/section/employment'))}>
              <FaBackward /> Back
            </button>
            <button className="btn btn-success" onClick={()=>navigateForward(router.push('/build-cv/section/language'))}>
              <FaForward /> Next
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Skill;