import { useState } from 'react';

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { api } from '../../services/api';

import { Input } from "../../components/Input";
import { Button } from '../../components/Button';

import { Container, Form, Background } from "./styles";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        


    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assiste</p>
                <h2>Crie sua conta</h2>
                <Input placeholder="Nome" type="text" icon={FiUser} onChange={e => setName(e.target.value)} />
                <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)} />
                <Input placeholder="Senha" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)} />
                <Button title="Cadastrar" onClick={handleSignUp} />
                <div className='buttonText'>
                    <FiArrowLeft /><Link to="/">Voltar para login</Link>
                </div>
            </Form>
            <Background />
        </Container>
    )
}