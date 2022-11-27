import React, { useEffect, useState } from 'react'
import styles from "/styles/experience.module.css"
import { FaArrowLeft, FaForward } from 'react-icons/fa'
import { useRouter } from 'next/router'
function Employment() {
  const router = useRouter()
    const [position, setposition] = useState("")
    const [employer, setemployer] = useState("")
    const [city, setcity] = useState("")
    const [startDate, setstartDate] = useState("")
    const [present, setpresent] = useState(undefined)
    const [endDate, setendDate] = useState("")
    const [description, setdescription] = useState("")

useEffect(()=>{
    if(!localStorage.profile){
        router.push('/build-cv/section/profile')
    }
}, [])
    const submit=()=>{
        let employmentDeatil;
        if(present){
            employmentDeatil = {position, employer, city, startDate, present, description}
        }
        else{
            employmentDeatil = {position, employer, city, startDate, endDate, description}
        }

        localStorage.setItem("employment", JSON.stringify(employmentDeatil))
        setposition("")
        setemployer("")
        setcity('')
        setstartDate('')
        setpresent(undefined)
        setendDate('')
        setdescription('')
    router.push("/build-cv/section/skills");

    }
  return (
    <>
        <div className={`${styles.experience} container px-3 border-0`}>
        <h2 className="text-end">
          <span className="text-danger">Employ</span>
          <span className="text-color">ment</span>
          <hr />
        </h2>
        {/* first form column */}
          <div>
            <div className="form row my-2">
              <h5 className="text-color">Employment Detail</h5>
              <div className="col-sm-12 my-2">
                <div className="form-group">
                  <label htmlFor="">Position</label>
                  <input
                    type="text"
                    className="form-control bg-light py-2"
                    placeholder="Enter your employment"
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
                  <label htmlFor="">Employer</label>
                  <input
                    type="text"
                    className="form-control bg-light py-2"
                    placeholder="Employer"
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
                <label for="">Present</label>
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
            <div className="form">
              <div className="col-sm-12">
                <textarea
                  rows="10"
                  cols="30"
                  placeholder="Description Here..."
                  className="form-control"
                  onChange={(e) => setdescription(e.target.value)}
                  value={description}
                ></textarea>
              </div>
            </div>
          </div>
        <div className="button my-2 d-flex justify-content-between">
          {/* <button className="btn rounded-pill px-3 text-color" style={{border: '1px solid navy'}} onClick={()=>addNewEdu(numEdu.length)}>Add <FaPlus /></button> */}
          <button
            className="btn rounded-pill btn-lg btn-danger"
            onClick={() => navigateBack(router.back())}
          >
            <FaArrowLeft /> back
          </button>
          <button className="btn bg-color" onClick={submit}>
            Done | Next <FaForward size="3vh" />{" "}
          </button>
        </div>
      
      </div>
    </>
  )
}

export default Employment