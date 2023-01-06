import React, { useState } from "react";
import style from "/styles/experience.module.css";
import { useRouter } from "next/router";
function ExperienceLevel() {
  const router = useRouter()
  const levels = [{ level: "Minimal Experince", year: "BEGINNER", id: "0" }, {level: "ENTRY LEVEL", year: "0-3 years", id: "1" }, {level: "others", year: "3+ years", id: "3" }];
  const getInfo = (params) => {
    if(params <2){
        alert('you are welcome to world of Techies!')
    }
      router.push('/build-cv/section/personal_info')
  };
  return (
    <>
        <div className={style.experience}>
      <div className="container text-center">
          <div>
            <h4 className="">How long have you been working?</h4>
            <p className="fs-5">
              We'll find the best templates for your experience level.
            </p>
          </div>
          <div className="row my-3">
           {
            levels.map((item)=>(
              <div className="col-lg-3 col-md-4 col-sm-12 my-2 mx-auto" key={item.id}>
              <section className={style.section} onClick={() => getInfo(`${item.id}`)}>
                <p>{item.level}</p>
                <p>{item.year}</p>
              </section>
            </div>
            ))
           }
          </div>
        </div>
      </div>
    </>
  );
}

export default ExperienceLevel;

