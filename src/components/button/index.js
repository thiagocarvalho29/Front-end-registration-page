import React from "react";

import { Button as Container_button } from "./styles";

function Button({children, ...props}) {
    
    return (
        <Container_button {...props} > {children} </Container_button>
    )
}

export default Button