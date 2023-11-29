import { useState } from 'react'
import { FiArrowLeft, FiPlus, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { NoteItem } from '../../components/NoteItem';
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Container, Form } from './styles'

export function CreateMovie() {
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
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
                        <Input placeholder="Título" type="text" />
                        <Input placeholder="Sua nota (de 0 a 5)" type="text" />
                    </div>
                    <textarea placeholder='Observações' />
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
                        <Button title="Excluir filme" />
                        <Button title="Salvar filme" />
                    </div>
                </Form>

            </main>
        </Container>
    )
}