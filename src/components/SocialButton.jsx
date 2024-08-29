import React from "react";

export function SocialButton({className, refer}){
    return(
        <a href={refer} className={className}></a>
    );
}