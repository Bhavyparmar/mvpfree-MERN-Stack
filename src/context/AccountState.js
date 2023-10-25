import React, { useState } from "react";
import AccContext from "./accContext";

const AccountState=(props)=>{
    
    return(
        <AccContext.Provider value={{}}>
            {props.children}
        </AccContext.Provider>
    )
}

export default AccountState;