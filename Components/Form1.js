import React, {useState} from "react";
import styles from "../styles/experience.module.css";
import { useRouter } from "next/router";

function form1() {
  const [firstName, setfirstName] = useState("");
  const [surname, setsurname] = useState("");
  const [strAddress, setstrAddress] = useState("");
  const [cityTown, setcityTown] = useState("");
  const [country, setcountry] = useState("");
  const [postcode, setpostcode] = useState("");
  const [phoneContact, setphoneContact] = useState("");
  const [email, setemail] = useState("")
  const [nationality, setnationality] = useState()

 let userDetail = {firstName, surname, strAddress, cityTown, country, postcode, phoneContact, email, nationality};
 
  return (
    <>
      <div className={`px-3`}>
        <h4>What's the best way for employers to contact you?</h4>
        <p className="fs">
          We'll find the best templates for your experience level.
        </p>
        <div className="form">
          <div className="row my-2">
            <div className="col-sm-6">
              <div className="form-block">
                <label htmlFor="">FIRST NAME</label>
                <div className="form-floating rounded-0">
                  <input
                    type="text"
                    placeholder="e.g John"
                    className="form-control"
                    onChange={(e)=>setfirstName(e)}
                  />
                  <label htmlFor="">e.g John</label>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-block">
                <label htmlFor="">SURNAME</label>
                <div className="form-floating">
                  <input
                    type="text"
                    placeholder="e.g John"
                    className="form-control"
                    onChange={(e)=>setsurname(e)}
                  />
                  <label htmlFor="">e.g John</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-sm-12">
              <div className="form-block">
                <label htmlFor="">STREET ADDRESS</label>
                <div className="form-floating rounded-0">
                  <input
                    type="text"
                    placeholder="e.g John"
                    className="form-control"
                    onChange={(e)=>setstrAddress(e)}
                  />
                  <label htmlFor="">e.g 42 Ashton Street</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-sm-6">
              <div className="form-block">
                <label htmlFor="">CITY/TOWN</label>
                <div className="form-floating rounded-0">
                  <input
                    type="text"
                    placeholder="e.g John"
                    className="form-control"
                    onChange={(e)=>setcityTown(e)}
                  />
                  <label htmlFor="">e.g Oxford</label>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-block">
                <label htmlFor="">COUNTRY</label>
                <div className="form-floating">
                  <input
                    type="text"
                    placeholder="e.g John"
                    className="form-control"
                    onChange={(e)=>setcountry(e)}
                  />
                  <label htmlFor="">Your Country</label>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-block">
                <label htmlFor="">POSTCODE</label>
                <div className="form-floating">
                  <input
                    type="text"
                    placeholder="e.g John"
                    className="form-control"
                    onChange={(e)=>setpostcode(e)}
                  />
                  <label htmlFor="">OX1 3EX</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-sm-6">
              <div className="form-block">
                <label htmlFor="">PHONE</label>
                <div className="form-floating rounded-0">
                  <input
                    type="tel"
                    placeholder="e.g John"
                    className="form-control"
                    onChange={(e)=>setphoneContact(e)}
                  />
                  <label htmlFor="">Phone Number</label>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-block">
                <label htmlFor="">E-MAIL ADDRESS</label>
                <div className="form-floating">
                  <input
                    type="text"
                    placeholder="e.g John"
                    className="form-control"
                    onChange={(e)=>setemail(e)}
                  />
                  <label htmlFor="">E-mail Address</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-sm-6">
              <div className="form-block">
                <label htmlFor="">NATIONALITY</label>
                <div className="form-floating rounded-0">
                  <input
                    type="text"
                    placeholder="e.g John"
                    className="form-control"
                    onChange={(e)=>setnationality(e)}
                  />
                  <label htmlFor="">Nationality</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default form1;
