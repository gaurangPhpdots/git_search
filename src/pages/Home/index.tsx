import { Header } from '../../components/Home/Header';
import { Searcher } from '../../components/Home/Searcher';
import { Container, PageContainer } from './styles';

export function Home() {
    return (
        <Container data-testid="home-1">
            <PageContainer>
                <Header />
                <Searcher />                
            </PageContainer>
        </Container>
    );
}