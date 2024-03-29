import React, {useState} from "react";
import styles from "/styles/experience.module.css";
import { GrDocumentText} from "react-icons/gr";
import { FaArrowLeft, FaForward } from "react-icons/fa";
import { GrUpload } from "react-icons/gr";
import { useRouter } from "next/router";
import styled from "styled-components"
function SelectCv() {
    const router = useRouter()
    const [select, setselect] = useState(undefined)
    const nextOpt=()=>{
      if(select ==1){
        router.push('/build-cv/section/personal_info')
      }
      else if(select == 2){
        router.push('/build-cv/user/login')
      }
    }

    const selectOpt=(params)=>{
        setselect(params)
    }

  return (
    <>
        <div className={styles.experience}>
      <div className="containe shadow p-3">
          <h4 className="text-center">About to start creating your CV?</h4>
          <div className="row">
            <div className="col-sm-5 mx-auto">
                <div className={`${select == 1 && styles.active} ${styles.section}`} onClick={()=>selectOpt(1)}>
              <div className="rounded h-100 border-0 text-center">
                  <div className="card-header border-0 bg-white text-danger">
                    <GrDocumentText size="2rem" />
                  </div>
                  <div className="card-body">
                    <p className="fs-4" style={{ color: "navy" }}>
                      To Create a New CV
                    </p>
                    <p className="text-danger fw-light">we will need to get some of your informations to kick start your CV creation!</p>
                    <p>continue and follow the step-by-step processes!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 my-2">
                <div className={`${select == 2 && styles.active} ${styles.section}`} onClick={()=>selectOpt(2)}>
              <div className="card h-100 border-0 text-center">
                  <div className="card-header border-0 bg-white text-danger">
                    <GrUpload size="2rem" />
                  </div>
                  <div className="card-body">
                    <p className="fs-4" style={{ color: "navy" }}>
                      I already started creating
                    </p>
                    <p>
                     Proceed to complete your CV with ease
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <BtnStyle>
           <button className={`btn rounded-pill btn-md btn-success ${!select&&"disabled"}`} onClick={nextOpt}>Continue <FaForward /> </button>
           </BtnStyle>
          </div>
      </div>
    </>
  );
}

export default SelectCv;

const BtnStyle = styled.div`

`
