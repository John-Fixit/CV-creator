import React, { useState, useEffect } from 'react'
import style from "/styles/experience.module.css";
import { ToastContainer, toast } from 'react-toastify';
import { FaBackward, FaCheck, FaForward } from 'react-icons/fa';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
function language() {
  const router = useRouter()
    const [languageName, setlanguageName] = useState("")
    const [languageRange, setlanguageRange] = useState("0")
    const [languages, setlanguages] = useState([])
    const [userUniqueId, setuserUniqueId] = useState("")
    useEffect(()=>{
        if(!localStorage.skill){
            router.push('/build-cv/section/skill')
        }
        if(localStorage.language){
          setlanguages(JSON.parse(localStorage.language))
        }
    }, [])
    useEffect(()=>{
      if(localStorage.userUniqueId){
          setuserUniqueId(JSON.parse(localStorage.userUniqueId))
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
      if (languageName != "") {
        axios.post("/api/addLanguage", {userUniqueId, languageDetail, verify: "language"}).then((res)=>{
          console.log(res.data);
          if(res.data.status){
            let newLanguage = [...languages, languageDetail]
        setlanguages(newLanguage)
        localStorage.setItem("langugage", JSON.stringify(languages));
        setlanguageName("");
        setlanguageRange("0");
            toast.success(res.data.message)
          }
          else{
            toast.error(res.data.message);
          }
        }).catch((err)=>{
          toast.error(err.message)
        })
      } else {
        toast.error("Please enter your language before proceeding", toastOption);
      }
    }

    const navigateForward =()=>{
      router.push('/myCV')
    }
    const navigateBack =()=>{
      router.back()
    }
  return (
   <>
    <div className={`${style.experience} px-3 border-0 `}>
      <div className=' container'>
      <div >
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

          <div className="button my-2" >
            <button className="btn bg-color float-end" onClick={submit}>
              <FaCheck /> Done
            </button>
          </div>
     
          <div className="button mt-4 card-footer d-flex justify-content-between">
            <button className="btn btn-danger" onClick={navigateBack}>
              <FaBackward /> Back
            </button>
            <button className="btn btn-success" onClick={navigateForward}>
              <FaForward /> Next
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
      </div>
      </div>
   </>
  )
}

export default language