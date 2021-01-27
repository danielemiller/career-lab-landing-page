import React, {useState} from "react";
import { useParams, useHistory } from "react-router-dom";

const ThanksJoin = () => {

    const history = useHistory();
    const { name } = useParams();

    console.log(history);

    return(
        <React.Fragment>
           <div className="thanks">
             <p>Thanks <strong>{name}!!</strong></p>
             <p>You joined <strong>{history.location.state}</strong></p>
           
            <hr/>
            <p>We will send you a confirmation email shortly with information on how to stay connected.</p>
           
           </div>
        </React.Fragment>
    )

}


export default ThanksJoin;