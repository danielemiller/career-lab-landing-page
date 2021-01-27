import React, {useState} from "react";
import { useParams, useHistory } from "react-router-dom";

const ThanksContact = () => {

    const history = useHistory();
    const { email } = useParams();

    console.log(history);


    return(
        <React.Fragment>
           <div className="thanks">
             <p>Thanks for your submission <strong>{email}!</strong></p>
           
            <hr/>
            <p>We look forward to hearing from you and will be in touch shortly.</p>
           
           </div>
        </React.Fragment>
    )

}


export default ThanksContact;