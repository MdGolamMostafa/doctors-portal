import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({dInfo}) => {
    const {name,image,email,img} = dInfo;
    
    return (
            <div  className="col-md-4 col-sm-6 text-center">
            {
               image ? <img style={{height: '200px'}} src={`data:image/png;base64,${image.img}`}/>
                :
                <img style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5000/${img}`} alt=""/>
            }
                <h4>{name}</h4>
            
    <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
            </div>
    
    );
};

export default Doctor;