import React from 'react'
import { FaDownload } from "react-icons/fa";
function About() {
  return (
    <section id="summery">
        {/*heading*********************************/}
        <div className="summery-heading">
          <strong>Summery</strong>
          <h2>Maintenance &amp; Repair. Data Management. Multitasking</h2>
          <a href='/assets/cv/Resume_NickRuslan13032023.pdf' download="NICK_RUSLAN_cv">Get CV <FaDownload/></a>
        </div>
        {/*==Details*******************************/}
        <div className="summery-details">
          <p>Talented medical scientist with 2 years of experience analyzing specimens and delivering speedy results to
            propel health outcomes for patients. Meticulous when completing activities such as documenting test
            findings, maintaining test equipment and driving quality control. Prompt and professional when
            communicating with clinical staff to deliver test results. I am currently located in Victoria, Australia seeking
            further opportunities. I am willing to move insterstate if the right opportunity arises.
          </p>
        </div>
      </section>
  )
}

export default About
