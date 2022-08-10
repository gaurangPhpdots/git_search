import { Header } from '../../components/Home/Header';
import { Searcher } from '../../components/Home/Searcher';
import { Container, PageContainer } from './styles';

export function Home() {
    return (
        <Container>
            <PageContainer>
                <Header />
                <Searcher />                
            </PageContainer>
        </Container>
    );
}