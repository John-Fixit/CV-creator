import React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import styles from "/styles/experience.module.css";
import { useRouter } from "next/router";
import Form1 from "../../../Components/form1";
import { FaArrowLeft } from "react-icons/fa"

function cnct() {
  const router = useRouter();
  const navigateBack =()=>{
    router.back();
  }

  const nextOpt =()=>{
    router.push('/build-cv/section/cnct');
  }

  // const receiveProfile =()=>{

  // }
  return (
    <>
      <div className="container">
        <div className={`border-0 shadow ${styles.experience}`}>
          <div className="row">
            <div className={`col-sm-8 p-2`}>
              <Form1 />
            </div>
            <div className="d-flex justify-content-between my-4">
              <button
                className="btn rounded-pill btn-lg btn-danger"
                onClick={navigateBack}
              >
                <FaArrowLeft /> back
              </button>
              <button
                className="btn rounded-pill btn-lg btn-success"
                onClick={nextOpt}
              >
                <FaArrowLeft/> Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default cnct;
