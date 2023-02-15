import { Link } from '@material-ui/core'
import { useRouter } from 'next/router'
import React from 'react'
import styles from "../styles/error.module.css"
function ErrorPage() {
  const router = useRouter()
  const backHome=()=>{
    router.back()
  }
  return (
    <div className={`${styles.error_container_section}`}>
        <div className={`${styles.error_msg}`}>
           <p className={`${styles.error_text}`}> Requested <span className='text-danger'>Page</span> not found</p>
           <button className='text-decoration-none text-light btn btn-danger' onClick={backHome}>
              Back to your destination
           </button>
        </div>
    </div>
  )
}

export default ErrorPage