import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import Img from "../../assets/img1.svg";
import Arrow from "../../assets/arrow.svg";
import axios from "axios";

import H1 from "../../components/Title"
import ContainerItens from "../../components/ContainerItems"
import Button from "../../components/button"

import {
    Container,
    Image,
    Input_label,
    Input
} from "./styles";

function App() {

    const [users, setUsers] = useState([]);
    const input_name = useRef();
    const input_age = useRef();
    const History = useHistory();


    async function add_new_user() {
        const { data: new_user } = await axios.post("http://localhost:3001/users", {
            name: input_name.current.value,
            age: input_age.current.value,
        })

        setUsers([...users, new_user]);

        History.push("/usuarios")
    };


    return (
        <Container>

            <Image alt="Logo-image" src={Img} />

            <ContainerItens>

                <H1> Olá! </H1>

                <Input_label> Nome </Input_label>
                <Input ref={input_name} placeholder="Nome" />

                <Input_label> Idade </Input_label>
                <Input ref={input_age} placeholder="Idade" type="number" />

                <Button onClick={add_new_user}>
                    Cadastrar <img alt="Arrow" src={Arrow} />
                </Button>

            </ContainerItens>

        </Container>
    );
}
export default App