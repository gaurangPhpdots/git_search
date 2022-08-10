import { useUser } from '../../hooks/useUser';
import { Header } from '../../components/User/Header';
import { Main } from '../../components/User/Main';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { Container, PageContainer } from './styles';
import { Header as Header1 } from '../../components/Header';
import { Main as Main1 } from '../../components/Repos/Main';

export function User() {
    const { user, logOut, userRepos } = useUser();
    return (
        <Container>
            <PageContainer>
                <Header user={user} logOut={logOut} auxUser={undefined} />
                <Main
                    user={user}
                    auxUser={undefined}
                    userRepos={userRepos}
                />
            </PageContainer>
            <PageContainer>
                <Header1 directory={"repositores"} icon={<RiGitRepositoryLine className="header-icon" />} />
                <Main1 />
            </PageContainer>
        </Container>
    );
}