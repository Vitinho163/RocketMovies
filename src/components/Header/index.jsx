import { Container, Profile } from './styles'
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import { Link } from 'react-router-dom'
import { Input } from '../Input'
export function Header() {
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
        <Container>
            <h1>Rocketmovies</h1>
            <Input placeholder="Pesquisar pelo título" />
            <Profile to="/profile">
                <div>
                    <strong>{user.name}</strong>
                    <Link onClick={signOut} >sair</Link>
                </div>
                <img src={avatarUrl} alt={user.name} />
            </Profile>
        </Container>
    )
}