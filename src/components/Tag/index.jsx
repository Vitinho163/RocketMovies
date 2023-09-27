import { Container } from "./styles";

export function Tag({ title, icon, ...rest }) {

    return (
        <Container{...rest}>
            {title}
            {icon}
        </Container>
    )
}