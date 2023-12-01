import { useState } from 'react'
import { FiArrowLeft, FiPlus, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { NoteItem } from '../../components/NoteItem';
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { Container, Form } from './styles'

export function CreateMovie() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewMovie() {
        await api.post("/notes", {
            title,
            description,
            rating,
            tags
        });

        console.log(title, description, rating, tags)

        alert("Nota criada com sucesso!");
        navigate("/");
    }


    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <div>
                            <FiArrowLeft /><Link to="/">Voltar</Link>
                        </div>
                        <h1>Novo Filme</h1>
                    </header>

                    <div>
                        <Input 
                            placeholder="Título" 
                            type="text" 
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                            placeholder="Sua nota (de 0 a 5)" 
                            type="number" 
                            min="0"
                            max="5"
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>
                    <textarea 
                        placeholder='Observações'
                        onChange={e => setDescription(e.target.value)}
                    />
                    <h2>Marcadores</h2>

                    <div className='tagSpace'>
                    {
                        tags.map((tag, index) => (
                        <NoteItem 
                            key={String(index)}
                            value={tag}
                            onClick={() => handleRemoveTag(tag)}
                        />
                        ))
                    }

                    <NoteItem 
                        isNew 
                        placeholder="Nova tag" 
                        onChange={e => setNewTag(e.target.value)}
                        value={newTag}
                        onClick={handleAddTag}
                    />
                    </div>

                    <div>
                        <Button title="Descartar filme" />
                        <Button
                            title="Salvar filme"
                            onClick={handleNewMovie}
                        />
                    </div>
                </Form>

            </main>
        </Container>
    )
}