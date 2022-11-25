import React, { useEffect, useState } from 'react'
import { FaForward, FaPencilAlt, FaArrowLeft } from 'react-icons/fa'
import styles from "/styles/experience.module.css"
import { useRouter } from 'next/router'
function ProfileNote() {
    const router = useRouter()
    const [profile, setprofile] = useState("")
    useEffect(()=>{
        if(!localStorage.eduDetail){
            router.push('/build-cv/section/education')
        }
    }, [])

    const nextOpt=()=>{
        localStorage.setItem('profileBio', JSON.stringify(profile))
        setprofile("")
    }
  return (
    <>
        <div className={`${styles.experience} container border-0`}>
            <div className='col-sm-8 mx-auto shadow-sm'>
                <h2 className='text-end'><span className='text-danger'>Profile</span> <span className='text-color'> Note</span><hr /></h2>
                <div className='form p-3'>
                <h4>what is the profile that the employers can see about you?</h4>
                    <div >
                    <label htmlFor="" className='fw-bold'>Bio:</label>
                    <textarea rows="10" className='form-control' cols="20" placeholder='Short profile of yours...' onChange={(e)=>setprofile(e.target.value)} value={profile}></textarea>
                   
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
                <FaForward/> Next
              </button>
            </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default ProfileNote