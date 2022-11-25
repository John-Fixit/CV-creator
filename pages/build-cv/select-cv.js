import React, {useState} from "react";
import styles from "/styles/experience.module.css";
import { GrDocumentText, GrUpload,} from "react-icons/gr";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
function SelectCv() {
    const router = useRouter()
    const [select, setselect] = useState(1)
    const selectOpt=(params)=>{
        setselect(params)
        if(params == 1){
            router.push('/build-cv/section/cnct')
        }
        else{
         router.back();
        }
    }


    const navigateBack = ()=>{
        router.back()
    }

    const nextOpt =()=>{
        if(select == 1){
            router.push('/build-cv/section/cnct')
        }
        else{
            window.alert('please wait... other options is on development');
        }
    }

  return (
    <>
      <div className="container">
        <div className={styles.experience}>
          <h4 className="text-center">How Do ypu want to start?</h4>
          <div className="row">
            <div className="col-sm-6 shadow">
                <div className={`${select == 1 && styles.active} ${styles.section}`} onClick={()=>selectOpt(1)}>
              <div className="card rounded h-100 border-0 text-center">
                  <div className="card-header border-0 bg-white text-danger">
                    <GrDocumentText size="4rem" />
                  </div>
                  <div className="card-body">
                    <p className="fs-3" style={{ color: "navy" }}>
                      Create a New CV
                    </p>
                    <p>We will help you create a CV - step By step...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 my-2 shadow">
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
            </div>
          </div>
          <div className="d-flex justify-content-between my-4">
           <button className="btn rounded-pill btn-lg btn-danger" onClick={navigateBack}><FaArrowLeft /> back</button>
           <button className="btn rounded-pill btn-lg btn-success" onClick={nextOpt}><FaArrowLeft /> Next</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectCv;
