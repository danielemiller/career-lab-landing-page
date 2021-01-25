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
            let date = today.getFullYear()+ '-' +(today.getMonth()+1) + '-' + today.getDate();
            history.push(`/thanks/${joined}`, date );
        }

    }



    return(
        <React.Fragment>
            <header>
                <img src={hero} />
                <div>
                    <h1>Brand professionally<br/> &amp; connect with <br/>confidence.</h1>
                    <p>Are you a young professional wanting to land job offers with competitive companies? 
                    Interested in continous career growth? Looking for work you find interesting and meaningful?</p>
                
                    <p>Introducing, Career Lab, a software solution crafted to simplify the job hunt and career planning process.</p>
                    
                    <p>Job hunting is no longer a solo endeavor.</p>
                    <Link to="/contact">Sign Up Now</Link>
                </div>
          
            </header>


            <main>
                <section className="services">
                     <h2>Land job offers and grow your salary with Career Lab...</h2>

                     <div className="service-container">
                         <div className="services-card service-one"></div>
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
                          Equipped with data-driven insights, Career Lab uses a one-time, guided, interactive process
                          to collect your personal career information, generate a customized, formatted master document
                          for each essential career document, and organize each document into components that can be
                          easily added, edited, updated, and deleted.  
                          </div>
                          <br/>
                          <div>
                          Use the components from one or more master documents to quickly craft 
                          targeted, professional documents for different companies and positions in your job hunt.     
                          </div>
                         </div>
                    </div>



                    <div className="service-container">
                      
                      <div className="services-card service-two"></div>
                      <div className="service-description">
                          <h3>Multiple versions of career documents</h3>
                          <div>
                            Construct customized, flexible templates of essential career documents for quickly 
                            generating powerful, targeted professional documents
                          </div>
                          <div>
                             Using a one-time, guided, interactive process, Career Lab collects your personal 
                            career information, generates a formatted master document for each essential career 
                            document, and organizes each document into components that can be easily added, edited,
                            updated, and deleted.
                          </div>
                          <div></div>
                      </div>
                    </div>



                    <div className="service-container">
                        <div className="services-card service-three"></div>
                        <div className="service-description">
                            <h3>Real-time labor market data and analytics</h3>
                            <div></div>
                        </div>
                      
                    </div>

                    
                    <div className="service-container">
                        <div className="services-card service-three"></div>
                        <div className="service-description">
                            <h3>Progress tracking of career growth metrics </h3>
                            <div></div>
                        </div>
                      
                    </div>
                </section>

                <section>
                    <h2>Join our newsletter to get the latest updates.</h2>

                    <form className="newsletter" onSubmit={join}>
                        <input type="email" placeholder="Your email goes here" onChange={(e) => setJoined(e.target.value)} />
                        <input type="submit"  value="Join Now!"/>
                    </form>

                </section>
            </main>


        </React.Fragment>
    )
}


export default Main;