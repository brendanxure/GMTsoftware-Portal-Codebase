import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { FaServer } from 'react-icons/fa';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import './Pricing.css'



function Courseprice() {
    return (
        <div>
             <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon1'>
                  <FaLaptopCode />
                </div>
                <h3>Back-End Dev</h3>
                <h4>IN PERSON </h4>
                <h3>#90,000</h3>
                <ul className='pricing__container-features'> 
                  <li>13 weeks</li>
                  <li>Abuja, Nigeria</li>
                </ul>
                <h4>REMOTE</h4>
                <h3>#75,000</h3>
                <p>13 weeks</p>
               
                    <Link to="/signup"><button className="btn bg-dark text-white">Apply Now</button></Link>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon1'>
                  <FaServer />
                </div>
                <h3>Front-End Dev</h3>
                <h4>IN PERSON </h4>
                <h3>#85,000</h3>
                <ul className='pricing__container-features'> 
                  <li>13 weeks</li>
                  <li>Abuja, Nigeria</li>
                </ul>
                <h4>REMOTE</h4>
                <h3>#70,000</h3>
                <p>13 weeks</p>
                    <Link to="/signup"><button className="btn bg-dark text-white">Apply Now</button></Link>
              </div>
            </Link>
            <Link to='/web-dev' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon1'>
                  <GiCrystalize />
                </div>
                <h3>Full-Stack Dev</h3>
                <h4>IN PERSON </h4>
                <h3>#140,000</h3>
                <ul className='pricing__container-features'> 
                  <li>13 weeks</li>
                  <li>Abuja, Nigeria</li>
                </ul>
                <h4>REMOTE</h4>
                <h3>#120,000</h3>
                <p>13 weeks</p>
                    <Link to="/signup"><button className="btn bg-dark text-white">Apply Now</button></Link>
              </div>
            </Link>

            
          </div>
        </div>
      </div>
  
    </IconContext.Provider>
        </div>
    )
}

export default Courseprice
