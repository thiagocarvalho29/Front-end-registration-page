import React from "react"

import { ContainerItens as Container } from "./styles"

function ContainerItens({ children, is_blur }) {


    return (
        <Container is_blur={is_blur} >{children}</Container>
    )
}

export default ContainerItens