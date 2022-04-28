import React, {useEffect} from 'react'
import { FiWifiOff } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Failure() {
   useEffect(() => {
     document.title = 'GMTsoftware | Error'
   }, [])
  return (
    <>
      <div className='container-fluid'>
        <div className='container'>
          <h1 className='text-center display-3 py-5'>
            Oops Application Not Successful!
          </h1>
          <p className='py-3 text-center'>
            Please try again, if it's persist check your internet connection 
            <FiWifiOff size={35}/>
          </p>
          <div className='text-center'>
            <Link to='/sign-up' className='btn btn-normal btn-dark m-5'>
              Try again
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Failure
