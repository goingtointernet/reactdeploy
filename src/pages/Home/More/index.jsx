import React from 'react'

function More() {
  return (
    <section id="about">
        <div className="about-container">
          {/*heading******************************/}
          <div className="about-heading">
            <strong>More ABOUT ME</strong>
            <h3>Management with passion for Problem Solving</h3>
            <a href="tel:0435184331">0435184331 <i className="fas fa-phone" /></a>
          </div>
          {/*details******************************/}
          <div className="about-details">
            <p><b>Intrests:</b> Active community member and regular volunteer for animal shelters and animal
              welfare organisations such as Animal Welfare League and AWARE.</p>
            <p><b>Accomplishments:</b> Was part of the pioneer batch for Covid-19 PCR testing in Singapore under Parkway
              Laboratories. Was recognised by then Singapore Health Minister Dr. Lawrence Wong
              for efforts.</p>
            <p>I also attached my <b>Phone Number</b></p>
          </div>
        </div>
      </section>
  )
}

export default More
