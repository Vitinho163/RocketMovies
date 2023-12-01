import { Container, Profile } from './styles'
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import { Link } from 'react-router-dom'
import { Input } from '../Input'
import { useEffect, useState } from 'react';
export function Header({ onNotesUpdate }) {
    const { signOut, user } = useAuth();
    const [search, setSearch] = useState("");
    const [ notes, setNotes ] = useState([]);

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}`);
            setNotes(response.data);
            onNotesUpdate(response.data);
        }

        fetchNotes();
    }, [search]);

    return (
        <Container>
            <h1>Rocketmovies</h1>
            <Input 
                placeholder="Pesquisar pelo título" 
                onChange={(e) => setSearch(e.target.value)}
            />
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