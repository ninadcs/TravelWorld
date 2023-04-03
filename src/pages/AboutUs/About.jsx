import React from 'react'
import './about.css'
{/*import image1 from '../assests/img1.jpg';*/}

function About () {
    let message = 'There are many destinations around the globe but only one Travel World'
    return(
        <section className="section-white">
            <div className="container">
              <div className="row">
                  
                  <div className="col-md-12 text-center">
                   <h2 className="section-title">
                      About us
                   </h2>
                   <p className="section-subtitle">There are many destinations around the globe but only one Travel World</p>
                  </div>

                  <div className="col-sm-6 col-md-4">
                    <div className="team-item">

                        <img src="{image1}" className="img1" alt="pic"/>
                        <h3> WHAT WE DO </h3>
                        <div className="site-info">
                          <p> Travel World prides itself on having as many destinations as you require.
                          choose from standard packages to luxury packages; theres a choice for everyone!
                          Check out our social media to keep up with all our latest news.</p> 
                        </div> 

                        {/*<ul className="travel-icon">
                            <li><a href="#" className="twitter">
                                <i className="fa fa-twitter"></i>
                           </a> </li>
                           <li><a href="#" className="facebook">
                                <i className="fa fa-facebook"></i>
                           </a> </li>
    </ul>*/}

                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div className="team-item">

                        
                        <h3> HOW TO MAKE THE MOST OF THE WEBSITE </h3>
                        <div className="site-info">
                          <p> Search for your perfect holiday using the search bar.
                            choose your location, date of travel and how many people, to find the perfect holiday 
                            for you. The packages offered range from bronze, being the basic and most affordable, 
                            to the luxury package which consists of the most high end hotels with the best offers!
                             .</p> 
                        </div> 

                    </div>
                  </div>
                  {/*<div className="col-sm-6 col-md-4">
                    <div className="team-item">

                        <img src="{img1}" className="img1" alt="pic"/>
                        <h3> RECOMMENDED </h3>
                        <div className="site-info">
<p> -</p>
                        </div> 

                    </div>*/}
                  </div>
              </div>
            
            
        </section>
    )
}

export default About