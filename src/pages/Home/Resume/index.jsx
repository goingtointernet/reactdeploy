import React from 'react'
import { FaDownload } from "react-icons/fa";

function Resume() {
  return (
    <div>
    <section id="career-education">
          {/*Career******************************/}
          <div className="career">
            {/*heading=============*/}
            <h3>Career <span>+</span></h3>
            {/*container===========*/}
            <div className="c-box-container">
              {/*box================*/}
              <div className="c-box">
                <h4>PCR Lab Scientist</h4>
                <strong>SafeWork Laboratories</strong>
                <span>MAR 2022 – OCT 2022</span>
              </div>
              {/*box================*/}
              <div className="c-box">
                <h4>Medical Technologist</h4>
                <strong>Parkway Laboratories</strong>
                <span>FEB 2020 – FEB 2022</span>
              </div>
              {/*box================*/}
              <div className="c-box">
                <h4>Desktop Engineer</h4>
                <strong>Infinite Computer Solutions</strong>
                <span>SEP 2019 – APR 2020</span>
              </div>
              {/*box================*/}
              <div className="c-box">
                <h4>Assistant Manager</h4>
                <strong>Langwarrin Newsagency</strong>
                <span>JAN 2014 – JAN 2018</span>
              </div>
              {/*box================*/}
              <div className="c-box">
                <h4>Laboratory Assistant</h4>
                <strong>Parkway Laboratories</strong>
                <span>JUN 2017 – AUG 2017</span>
              </div>
            </div>
          </div>
          {/*Edu******************************/}
          <div className="career edu">
            {/*heading=============*/}
            <h3>Education <span>+</span></h3>
            {/*container===========*/}
            <div className="c-box-container">
              {/*box================*/}
              <div className="c-box">
                <h4>Postgraduate Diploma</h4>
                <strong>Society of Business Practitioners (SBP)</strong>
                <span>JAN - 2019</span>
              </div>
              {/*box================*/}
              <div className="c-box">
                <h4>Bachelor of Biomedical Science</h4>
                <strong>Deakin University</strong>
                <span>JAN - 2017</span>
              </div>
              {/*box================*/}
              <div className="c-box">
                <h4>Victorian Certificate of Examination</h4>
                <strong>Mount Eliza Secondary College</strong>
                <span>JAN - 2009</span>
              </div>
            </div>
          </div>

        </section>

        <div className="btn-c">
          <a href='/assets/cv/Resume_NickRuslan13032023.pdf' download="NICK_RUSLAN_cv" className="dribble-btn">Get CV <FaDownload/></a>
        </div>

       </div>
  )
}

export default Resume
