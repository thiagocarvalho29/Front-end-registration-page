import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Img2 from "../../assets/img2.svg";
import Arrow from "../../assets/arrow.svg";
import Bin from "../../assets/bin.svg";
import axios from "axios";

import H1 from "../../components/Title"
import ContainerItens from "../../components/ContainerItems"
import Button from "../../components/button"

import {
    Container,
    Image,
    User
} from "./styles";

function Users() {

    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function fetch_users() {
            const { data: new_users } = await axios.get("http://localhost:3001/users")

            setUsers(new_users)
        }
        fetch_users()
    }, [users])

    async function delete_user(user_id) {
        await axios.delete(`http://localhost:3001/users/${user_id}`)

        const new_user = users.filter(user => user.id !== user_id)

        setUsers(new_user);
    };

    function Push() {
        history.push("/")
    };


    return (
        <Container>

            <Image alt="Avatar" src={Img2} />

            <ContainerItens is_blur={true}>

                <H1> Usuários </H1>

                <ul>
                    {users.map(user => (
                        <User key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.age}</p>
                            <button onClick={() => delete_user(user.id)}>
                                <img alt="bin" src={Bin} />
                            </button>
                        </User>
                    ))
                    }
                </ul>

                <Button is_back={true} onClick={Push}>
                    <img alt="Arrow" src={Arrow} /> Voltar
                </Button>

            </ContainerItens>

        </Container>
    );
}
export default Users