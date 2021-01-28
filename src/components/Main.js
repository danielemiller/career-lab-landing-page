import React, {useState} from "react";
import hero from "../hero.svg";
import { Link, useHistory } from "react-router-dom";

const Main = () => {

    const [joined, setJoined] = useState("");
    const history = useHistory();


    const join = (e) =>{
        e.preventDefault();
        if(joined !== ""){
            let today = new Date();
            let date = (today.getMonth()+1) + '-' +today.getDate() + '-' + today.getFullYear();
            history.push(`/thanks/${joined}`, date );
        }

    }

    
    return(
        <React.Fragment>
            <header>
                <img src={hero} />
                <div>
                    <h1>Grow professionally<br/> &amp; connect with <br/>confidence.</h1>
                    <p>Are you a young professional wanting to land job offers with competitive companies? 
                    Interested in continous career growth? Looking for work you find interesting and meaningful?</p>
                
                    <p>Introducing, Career Lab, a software solution crafted to simplify the job search and career planning process.</p>
                    
                    <p>Job hunting is no longer a solo endeavor.</p>
                    <a href="#join">Sign Up Now</a>
                </div>
          
            </header>


            <main>
                <section className="services">
                     <h2 className="services-header">Land job offers and grow your salary with Career Lab...</h2>

                     <div className="service-container">
                        <div className="services-card service-one"></div>
                        <div className="service-description">
                           <h3>Real-time labor market data and analytics</h3>
                           <div>
                           We understand the importance of access to quality labor market information in your
                           job search and career planning. Without proper perspective, it can be really challenging
                           to focus your job search towards opportunities that suit your knowledge and skills. Career Lab's
                           in-depth, localized labor market data and analytics can help you get a true picture of
                           real-time supply and demand in your area.
                           </div>
                           <br/>
                           <div>
                           Use Career Lab to track job openings, hiring trends, and demand for specific skills and
                           credentials. By understanding what jobs and skills are hard to fill, you can quickly 
                           identify employer needs, choose stragetic career goals, and build the skills you need to
                           help you get ahead. 
                           </div>
                           <br/>
                           <div>
                           Career Lab provides integrated labor market information for all phases of the job search
                           process from researching to applying to interviewing and negotiation. All the data and
                           insights you need. All in one place.  
                           </div>
                        </div>
                
                    </div>
                     
                    <div className="service-container">
                        <div className="services-card service-two"></div>
                        <div className="service-description">
                           <h3>Progress tracking of career growth metrics </h3>
                           <div>
                           Ever wonder if your current career choice and path has you set on the right track
                           to achieve the financially comfortable lifestyle you want? Whether that means having
                           a nice car, a nice house, and 2.5 kids or being a globe-trotting digital nomad, 
                           Career Lab gives you the tools you need to make your goals a reality.    
                           </div>
                           <br/>
                           <div>
                           Career Lab helps you design a customized, interactive, flexible map of strategic
                           actions and activities to help you effectively navigate your career and orchestrate
                           your professional brand. Use Career Lab's data driven insights to chart career paths,
                           set career goals, develop a career action plan, and track career progress daily.   
                           </div>
                        </div>
                      
                    </div>

                     <div className="service-container">
                         <div className="services-card service-three"></div>
                         <div className="service-description">

                            <h3>Customized templating of career documents</h3>
                            <div>
                            We get it. Even just imagining the long, tedious application process standing between
                            you and your dream job can be exhausting. Fear no more. Career Lab constructs customized,
                            flexible templates of essential career documents for quickly generating powerful, targeted
                            professional documents. Less time, more interviews.
                          </div>
                          <br/>
                          <div>
                            While getting picked may seem to be based
                            on random factors, Career Lab's machine learning algorithm is designed to get inside
                            the employer's head to understand what turns them on, what turns them off, and what you
                            can do about it. 
                          </div>
                          <br/>
                          <div>
                          Equipped with data-driven insights, Career Lab uses a one-time, interactive process
                          to collect your personal career information. It then automatically generates a customized,
                          formatted master document for each essential career document and organizes each document
                          into components that can be easily added, edited, updated, and deleted.  
                          </div>
                          <br/>
                          <div>
                          Use the components from one or more master documents to quickly craft 
                          targeted, professional documents for different companies and positions in your job search.     
                          </div>
                         </div>
                    </div>



                    <div className="service-container">
                      
                      <div className="services-card service-four"></div>
                      <div className="service-description">
                          <h3>Multiple versions of career documents</h3>
                          <div>
                          At some point, every job seeker must ask themselves the ultimate question.
                          Targeted applications or resume blasts? No one wants to sit around waiting
                          to receive a response from a single employer. But the more you apply to new
                          roles and companies, the more difficult it can be to maintain an organized, 
                          targeted job search. Career Lab gives you the best of both worlds with secure 
                          cloud-storage of multiple versions of targeted career documents within an organized,
                          intuitive, user-friendly database for easy, reliable access.
                          </div>
                          <br/>
                          <div>
                          Career Lab organizes your job search into projects. A newly created project can
                          manage either a single job application for a specific role or multiple job applications
                          for similar roles. You can then pull the components you want from your master
                          documents to create and store targeted versions of all the required documents
                          for the job applications in that project.   
                          </div>
                      </div>
                    </div>
                </section>

                <section>
                    <h2 className="newsletter-header">Join the Student Career Lab newsletter to get our latest updates.</h2>
                    <p className="newsletter-description">
                    At Student Career Lab, we leverage the latest ICT research and development approaches
                    to design cutting-edge, web-based software solutions for advancing the careers of young
                    professionals.    
                    </p>

                    <form id="join" className="newsletter" onSubmit={join}>
                        <input type="email" placeholder="Your email goes here" onChange={(e) => setJoined(e.target.value)} required/>
                        <input type="submit"  value="Join Now!"/>
                    </form>

                </section>
            </main>


        </React.Fragment>
    )
}


export default Main;