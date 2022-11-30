import React from "react";

const Footer = () => {
    return (    
        <div className="container-fluid footerfondo">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 align-items-center justify-content-center">
                        <h2>Nos encontras en * Nose como insertar iframe para mapa en react lei algo sobre  dangerouslySetInnerHTM*</h2>
                    </div>    
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <p>
                            <a href={"webderedsocial"} target={"blank"} className="me-4"><img src={"images/facebook.svg"} alt="fb" width={34}/></a>
                            <a href={"webderedsocial"} target={"blank"} className="me-4"><img src={"images/instagram.svg"} alt="fb" width={34}/></a>   
                            <a href={"webderedsocial"} target={"blank"} className="me-4"><img src={"images/youtube.svg"} alt="fb" width={34}/></a>    
                        
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )       

}

export default Footer;