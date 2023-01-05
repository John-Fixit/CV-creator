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

function Cnct() {
  return (
    <>
      <div className="container">
        <div className={`border-0 shadow`} style={{marginTop: '10vh'}}>
          <div className="row">
            <div className={`col-sm-8 mx-auto p-2`}>
              <Form1/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cnct;
