import { BsStarFill, BsStar } from "react-icons/bs";

import { Container } from './styles'
import { Tag } from '../Tag'

export function Movie({ data, ...rest }) {

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

    return (
        <Container {...rest}>
            <h1>{data.title}</h1>
            <div>
            <RatingStars rating={data.rating} />;
            </div>
            <p>
            {data.description}
            </p>
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag =>
                            <Tag key={tag.id} title={tag.name} />
                        )
                    }
                </footer>
            }
        </Container>
    )
}