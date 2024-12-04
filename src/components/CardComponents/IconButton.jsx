import React from "react";

export function IconButton({className, refer}){
    return(
        <a href={refer} className={className}></a>
    );
}