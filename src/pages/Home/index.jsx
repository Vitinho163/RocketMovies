import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Header } from "../../components/Header";
import { Movie } from '../../components/Movie';
import { Container } from "./styles"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Home() {
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();

    const handleNotesUpdate = (newNotes) => {
        setNotes(newNotes);
    };

    function handleDetails(id) {
        navigate(`/preview/${id}`);
    }

    return (
        <Container>
            <Header onNotesUpdate={handleNotesUpdate} />
            <div className='mainTitle'>
                <h1>Meus filmes</h1>
                <Link to="/new">
                    <FiPlus />
                    Adicionar filme
                </Link>
            </div>
            <div className="movieTags">
            {
                notes.map(note => (
                <Movie  
                    key={String(note.id)}
                    data={note}
                    onClick={() => handleDetails(note.id)}
                />
            ))
            }

                

                

            </div>
        </Container>
    );
}
