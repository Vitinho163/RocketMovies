import { useState, useEffect } from 'react';
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { FiArrowLeft } from 'react-icons/fi';
import { BsStarFill, BsStar, BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button } from '../../components/Button';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { useAuth } from "../../hooks/auth";

import { Container } from './styles'

export function MoviePreview() {
    const [data, setData] = useState(null);

    const params = useParams();

    const { user } = useAuth();

    const avatar = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : avatarPlaceholder;

    const RatingStars = ({ rating }) => {
        const maxRating = 5;
        const filledStars = Math.floor(rating);
        const remainingStars = maxRating - filledStars;
        
        const starArray = [];
        
        // Adiciona estrelas preenchidas
        for (let i = 0; i < filledStars; i++) {
            starArray.push(<BsStarFill key={i} />);
        }
        
        // Adiciona estrelas vazias
        for (let i = 0; i < remainingStars; i++) {
            starArray.push(<BsStar key={filledStars + i} />);
        }
        
        return <>{starArray}</>;
    };

    async function handleDelete() {
        const userConfirm = window.confirm("Tem certeza que deseja excluir?");

        if (userConfirm) {
            try {
            await api.delete(`/notes/${params.id}`);
            alert("O filme foi excluído com sucesso!");
            navigate("/");
            } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            }
            }
        }
    }

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`);
            setData(response.data);
        }

        fetchNote();
    }, []);

    return (
        <Container>
            <Header />
            {
                data && 
                <main>
                    <div>
                        <Link to="/">
                        <FiArrowLeft />Voltar
                        </Link>
                    </div>
                    <div>
                        <h1>{data.title}</h1>
                        <div>
                        <RatingStars rating={data.rating} />
                        </div>
                    </div>
                    <div>
                        <img src={avatar} alt={`Foto de ${user.name}`} />
                        <span>Por {user.name}</span>
                        <BsClock />
                        <span>{data.updated_at}</span>
                    </div>
                    {
                        data.tags &&
                        <div>
                            {
                                data.tags.map(tag => (
                                    <Tag 
                                        key={String(tag.id)} 
                                        title={tag.name}
                                    />
                                ))
                            }
                        </div>
                    }
                    <p>
                        {data.description}
                    </p>
                    <div>
                    <br />
                    <Button
                        title="Excluir filme"
                        highlighted={false}
                        onClick={handleDelete}
                    />
                    </div>
                </main>
            }

        </Container>
    )
} 