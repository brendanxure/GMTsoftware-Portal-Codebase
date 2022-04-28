import React, {useEffect} from 'react'
import { FcHome } from 'react-icons/fc'

import { Link } from 'react-router-dom'

function Success() {
 useEffect(() => {
   document.title = 'GMTsoftware | Success'
 }, [])
  return (
    <>
      <div className='container-fluid'>
        <div className='container'>
          <h1 className='text-center display-3 py-5'>
            Dear applicant, thanks for applying!
          </h1>
          <p className='py-3'>
            Your application has been received, We’re thrilled to hear from you.
            Our admission team can’t wait to process your application, you'll
            receive a short message soon in your email address for next step
            regarding your application. Cheers{' '}
            <span role='img' aria-labelledby='emoji'>
              🎉🎉🎉!
            </span>
          </p>

          {/* <div className='container'>
            <div className='card-deck mb-3 text-center'>
              <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 card mb-4 shadow-sm'>
                  <div className='card-header'>
                    <h4 className='my-0 font-weight-normal'>Free</h4>
                  </div>
                  <div className='card-body'>
                    <h1 className='card-title pricing-card-title'>
                      $0 <small className='text-muted'>/ mo</small>
                    </h1>
                    <ul className='list-unstyled mt-3 mb-4'>
                      <li>10 users included</li>
                      <li>2 GB of storage</li>
                      <li>Email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type='button'
                      className='btn btn-lg btn-block btn-outline-primary'
                    >
                      Sign up for free
                    </button>
                  </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 card mb-4 shadow-sm'>
                  <div className='card-header'>
                    <h4 className='my-0 font-weight-normal'>Pro</h4>
                  </div>
                  <div className='card-body'>
                    <h1 className='card-title pricing-card-title'>
                      $15 <small className='text-muted'>/ mo</small>
                    </h1>
                    <ul className='list-unstyled mt-3 mb-4'>
                      <li>20 users included</li>
                      <li>10 GB of storage</li>
                      <li>Priority email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type='button'
                      className='btn btn-lg btn-block btn-primary'
                    >
                      Get started
                    </button>
                  </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 card mb-4 shadow-sm'>
                  <div className='card-header'>
                    <h4 className='my-0 font-weight-normal'>Enterprise</h4>
                  </div>
                  <div className='card-body'>
                    <h1 className='card-title pricing-card-title'>
                      $29 <small className='text-muted'>/ mo</small>
                    </h1>
                    <ul className='list-unstyled mt-3 mb-4'>
                      <li>30 users included</li>
                      <li>15 GB of storage</li>
                      <li>Phone and email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type='button'
                      className='btn btn-lg btn-block btn-primary'
                    >
                      Contact us
                    </button>
                  </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 card mb-4 shadow-sm'>
                  <div className='card-header'>
                    <h4 className='my-0 font-weight-normal'>Enterprise</h4>
                  </div>
                  <div className='card-body'>
                    <h1 className='card-title pricing-card-title'>
                      $29 <small className='text-muted'>/ mo</small>
                    </h1>
                    <ul className='list-unstyled mt-3 mb-4'>
                      <li>30 users included</li>
                      <li>15 GB of storage</li>
                      <li>Phone and email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type='button'
                      className='btn btn-lg btn-block btn-primary'
                    >
                      Contact us
                    </button>
                  </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 card mb-4 shadow-sm'>
                  <div className='card-header'>
                    <h4 className='my-0 font-weight-normal'>Enterprise</h4>
                  </div>
                  <div className='card-body'>
                    <h1 className='card-title pricing-card-title'>
                      $29 <small className='text-muted'>/ mo</small>
                    </h1>
                    <ul className='list-unstyled mt-3 mb-4'>
                      <li>30 users included</li>
                      <li>15 GB of storage</li>
                      <li>Phone and email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type='button'
                      className='btn btn-lg btn-block btn-primary'
                    >
                      Contact us
                    </button>
                  </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 card mb-4 shadow-sm'>
                  <div className='card-header'>
                    <h4 className='my-0 font-weight-normal'>Enterprise</h4>
                  </div>
                  <div className='card-body'>
                    <h1 className='card-title pricing-card-title'>
                      $29 <small className='text-muted'>/ mo</small>
                    </h1>
                    <ul className='list-unstyled mt-3 mb-4'>
                      <li>30 users included</li>
                      <li>15 GB of storage</li>
                      <li>Phone and email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type='button'
                      className='btn btn-lg btn-block btn-primary'
                    >
                      Contact us
                    </button>
                  </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 card mb-4 shadow-sm'>
                  <div className='card-header'>
                    <h4 className='my-0 font-weight-normal'>Enterprise</h4>
                  </div>
                  <div className='card-body'>
                    <h1 className='card-title pricing-card-title'>
                      $29 <small className='text-muted'>/ mo</small>
                    </h1>
                    <ul className='list-unstyled mt-3 mb-4'>
                      <li>30 users included</li>
                      <li>15 GB of storage</li>
                      <li>Phone and email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type='button'
                      className='btn btn-lg btn-block btn-primary'
                    >
                      Contact us
                    </button>
                  </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 card mb-4 shadow-sm'>
                  <div className='card-header'>
                    <h4 className='my-0 font-weight-normal'>Enterprise</h4>
                  </div>
                  <div className='card-body'>
                    <h1 className='card-title pricing-card-title'>
                      $29 <small className='text-muted'>/ mo</small>
                    </h1>
                    <ul className='list-unstyled mt-3 mb-4'>
                      <li>30 users included</li>
                      <li>15 GB of storage</li>
                      <li>Phone and email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type='button'
                      className='btn btn-lg btn-block btn-primary'
                    >
                      Contact us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className='text-center'>
            <Link to='/' className='btn btn-normal btn-dark m-5'>
              Back to Home <FcHome size={35} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Success
