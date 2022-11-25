import { useEffect, useState } from "react";
import styles from "../styles/experience.module.css";
import { FaForward, FaPlus, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
function Form2() {
    const router = useRouter()
    const [education, seteducation] = useState("")
    const [school, setschool] = useState("")
    const [city, setcity] = useState("")
    // const [startMonth, setstartMonth] = useState("")
    // const [startYear, setstartYear] = useState("")
    // const [endMonth, setendMonth] = useState("")
    // const [endYear, setendYear] = useState("")
    const [startDate, setstartDate] = useState("")
    const [endDate, setendDate] = useState("")
    const [present, setpresent] = useState(undefined)
    const [description,setdescription] = useState("")
    const [numEdu, setnumEdu] = useState([1])

    useEffect(()=>{
        if(!localStorage.personalInfo){
            router.push('/build-cv/section/personal_info')
        }
    }, [])
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

  const addNewEdu=(params)=>{
    setnumEdu((current)=>[...current, params])
  }


  const subEduDetail=()=>{
    let eduDetail;
    if(present){
        eduDetail = {education, school, city, startDate, present, description}
    }
    else{
        eduDetail = {education, school, city, startDate, endDate, description}
    }
    localStorage.setItem('eduDetail', JSON.stringify(eduDetail))
    seteducation("")
    setdescription("")
    setschool("")
    setcity("")
    setstartDate("")
    setendDate("")
    setpresent(undefined)
    router.push('/build-cv/section/profile')
  }

  
  return (
    <>
      <div className={`${styles.experience} container px-3 border-0`}>
        <h2 className="text-end">
          <span className="text-danger">Educ</span>
          <span className="text-color">ation</span>
          <hr />
        </h2>
        {/* first form column */}
       {
            numEdu.map((eduPosition)=>(
               <div >
 <div className="form row my-2">
                <h5 className="text-color">Education Detail {eduPosition}</h5>
          <div className="col-sm-12 my-2">
            <div className="form-group">
              <label htmlFor="">Education</label>
              <input
                type="text"
                className="form-control bg-light py-2"
                placeholder="Enter your education"
                onChange={(e)=>seteducation(e.target.value)} value={education}
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
                onChange={(e)=>setschool(e.target.value)} value={school}
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
                onChange={(e)=>setcity(e.target.value)} value={city}

              />
            </div>
          </div>
          <div className="col-sm-5 my-2">
            <div className="form-group">
              <label htmlFor="">Start date</label>
              <div className="row">
                <div className="section col-6">
                <input type="date" className="form-control"
                onChange={(e)=>setstartDate(e.target.value)} value={startDate}
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
            <input type="checkbox" className="mx-2" onChange={(e)=>setpresent(e.target.checked)} value={present}/>
            <label for="">Present</label>
          </div>
          <div className="col-sm-5 my-2">
            <div className="form-group">
              <label htmlFor="">End date</label>
              <div className="row">
                <div className="section col-6">
                    <input type="date" className="form-control" onChange={(e)=>setendDate(e.target.value)} value={endDate}
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
                <textarea rows="10" cols="30" placeholder="Description Here..." className="form-control" onChange={(e)=>setdescription(e.target.value)} value={description}
></textarea>
            </div>
        </div>
                </div>
            ))
       }
        <div className="button my-2 d-flex justify-content-between">
            {/* <button className="btn rounded-pill px-3 text-color" style={{border: '1px solid navy'}} onClick={()=>addNewEdu(numEdu.length)}>Add <FaPlus /></button> */}
            <button
                className="btn rounded-pill btn-lg btn-danger"
                onClick={navigateBack}
              >
                <FaArrowLeft /> back
              </button>
            <button className="btn bg-color" onClick={subEduDetail}>Done | Next <FaForward size="3vh"/> </button>

        </div>
        <div className="d-flex justify-content-between my-4">
              <button
                className="btn rounded-pill btn-lg btn-danger"
                onClick={()=>navigateBack(router.back())}
              >
                <FaArrowLeft /> back
              </button>
              <button
                className="btn btn-lg bg-color"
                onClick={nextOpt}
              >
                <FaArrowRight/> Next
              </button>
            </div>
      </div>
    </>
  );
}

export default Form2;