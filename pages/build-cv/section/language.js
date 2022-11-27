import React, { useState, useEffect } from 'react'
import style from "/styles/experience.module.css";
import { ToastContainer, toast } from 'react-toastify';
import { FaBackward, FaCheck } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css'
function language() {
    const [languageName, setlanguageName] = useState("")
    const [languageRange, setlanguageRange] = useState("0")

    useEffect(()=>{
        if(!localStorage.employment){
            router.push('/build-cv/section/employment')
        }
    }, [])
    const submit = () => {
      let languageDetail = { languageName, languageRange };
      const toastOption = {
        position: "top-left",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      };
      if (langugageName != "") {
        localStorage.setItem("langugage", JSON.stringify(languageDetail));
        setlanguageName("");
        setlanguageRange("");
        router.push("/myCV");
      } else {
        toast.error("Please enter your skill before proceeding", toastOption);
      }

    }
  return (
   <>
    <div className={`${style.experience} container px-3 border-0 `}>
        <h2 className="text-end">
          <span className="text-danger">Lang</span>
          <span className="text-color">uage</span>
          <hr />
        </h2>
        <div className="card p-3 col-md-6 mx-auto">
          <div className="form my-2">
            <label htmlFor="">Language</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setlanguageName(e.target.value)}
              value={languageName}
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
                  onChange={(e) => setlanguageRange(e.target.value)}
                  value={languageRange}
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
  )
}

export default language