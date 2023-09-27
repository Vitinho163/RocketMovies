import { Container } from './styles'

export function Input({ icon: Icon, ...rest }) {
    return (
        <Container type="text">
            {Icon && <Icon size={16} />}
            <input {...rest}/>
        </Container>
    )
}