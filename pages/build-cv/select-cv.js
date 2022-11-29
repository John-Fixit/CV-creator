import React, {useState} from "react";
import styles from "/styles/experience.module.css";
import { GrDocumentText} from "react-icons/gr";
import { FaArrowLeft, FaForward } from "react-icons/fa";
import { useRouter } from "next/router";
function SelectCv() {
    const router = useRouter()
    const nextOpt=()=>{
      router.push('/build-cv/section/personal_info')
    }

   const  navigateBack=()=>{
    router.back()
    }
  return (
    <>
      <div className="container">
        <div className={styles.experience}>
          <h4 className="text-center">About to start creating your CV?</h4>
          <div className="row">
            <div className="col-sm-6 shadow  mx-auto">
                <div className={`${styles.section}`} >
              <div className="card rounded h-100 border-0 text-center">
                  <div className="card-header border-0 bg-white text-danger">
                    <GrDocumentText size="4rem" />
                  </div>
                  <div className="card-body">
                    <p className="fs-3" style={{ color: "navy" }}>
                      To Create a New CV
                    </p>
                    <p className="text-danger fw-light">we will need to get some of your informations to kick start your CV creation!</p>
                    <p>continue and follow the step-by-step processes!</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-6 my-2 shadow">
                <div className={`${select != 1 && styles.active} ${styles.section}`} onClick={()=>selectOpt(2)}>
              <div className="card h-100 border-0 text-center">
                  <div className="card-header border-0 bg-white text-danger">
                    <GrUpload size="2.5rem" />
                  </div>
                  <div className="card-body">
                    <p className="fs-3" style={{ color: "navy" }}>
                      I already have a CV
                    </p>
                    <p>
                      We will reformat it and fill in your information so that
                      you don't have to.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="d-flex justify-content-between my-4">
           <button className="btn rounded-pill btn-lg btn-danger" onClick={navigateBack}><FaArrowLeft /> back</button>
           <button className="btn rounded-pill btn-lg btn-success" onClick={nextOpt}>Continue <FaForward /> </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectCv;
