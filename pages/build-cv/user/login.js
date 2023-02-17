import React, { useEffect, useState } from "react";
import styles from "/styles/experience.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeft } from "react-icons/fa";
import Loader from "react-spinners/BarLoader"

function Login() {
  const router = useRouter();
  const [userUniqueId, setuserUniqueId] = useState("");
  const [password, setpassword] = useState("");
    const [isLoading, setisLoading] = useState(true)
  const [notValid, setnotValid] = useState(undefined);

  const submit = () => {
    if (!!password) {
        setisLoading(true)
      axios
        .post("/api/login", { userUniqueId, password })
        .then((res) => {
            setisLoading(false)
          if (res.data.status) {
            setpassword("");
            setuserUniqueId("");
            setnotValid(false);
            localStorage.setItem(
              "userUniqueId",
              JSON.stringify(res.data.data.userUniqueId)
            );
            router.push(`/build-cv/section/${res.data.data.verify}`);
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      setnotValid(true);
    }
  };

  const navigateBack=()=>{
    router.back()
  }
  return (
    <>
      <div
        className={` ${styles.experience}`}
      >
        <div >
        <button
          className={`btn rounded bg-color border-danger ${styles.bounceAnim}`}
          onClick={ navigateBack}
        >
          <FaArrowLeft /> back
        </button>
        <div className={`rounded p-2 bg-danger ${styles.anim}`}>
          <div className="card shadow border-0 p-2">
            <h3 className="card-header text-center text-color">
              Log in to continue creating your CV
            </h3>
            <div className="form my-2">
              <label htmlFor="" className="fw-bold">
                Your Unique Id
              </label>
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  placeholder="email"
                  onChange={(e) => setuserUniqueId(e.target.value)}
                />
                <label htmFor="">Unique Id</label>
              </div>
            </div>
            <div className="form my-2">
              <label htmlFor="" className="fw-bold">
                Password
              </label>
              <div className="form-floating">
                <input
                  type="password"
                  className={`form-control ${
                    notValid && "is-invalid border-danger"
                  }`}
                  placeholder="password"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                />
                <label htmFor="">Password</label>
              </div>
              <span className="text-danger">
                {notValid &&
                  "Password is required for the secure of your details"}
              </span>
            </div>
            <button className="btn bg-color" onClick={submit}>
                {
                    isLoading? 
                    <div className="d-flex justify-content-center gap-3">
                    <div class="spinner-border text-light" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <p className="text-light my-auto">Login</p>
                    </div>
                    : "Log In"
                }
                
            </button>
          </div>
        </div>
      </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
