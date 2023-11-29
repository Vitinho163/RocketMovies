import { Container, Profile } from './styles'
import { useAuth } from '../../hooks/auth';

import { Link } from 'react-router-dom'
import { Input } from '../Input'
export function Header() {
    const { signOut } = useAuth();

    return (
        <Container>
            <h1>Rocketmovies</h1>
            <Input placeholder="Pesquisar pelo título" />
            <Profile to="/profile">
                <div>
                    <strong>João Victor</strong>
                    <Link onClick={signOut} >sair</Link>
                </div>
                <img src="https://github.com/vitinho163.png" alt="foto do perfil" />
            </Profile>
        </Container>
    )
}