import { useUser } from '../../hooks/useUser';
import { Container } from './styles';
import { ReactElement } from 'react';

interface HeaderProps {
    directory: string,
    icon: ReactElement,
}

export function Header(props: HeaderProps) {
    const { user } = useUser();

    return (
        <Container>
            <span>{user.login}/{props.directory}</span>
        </Container>
    );
}