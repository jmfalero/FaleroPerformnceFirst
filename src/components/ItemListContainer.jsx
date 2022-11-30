import React from "react";

const ItemlistContainer = ({greeting}) => {
    return (
        <div className="container py-5">
            <div className ="row">
                <div className ="col-md-12">   
                    
                   <p>{greeting}</p>
               
                </div>
           </div>
        </div>   
    )
}

export default ItemlistContainer;
