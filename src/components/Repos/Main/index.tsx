import { useUser } from '../../../hooks/useUser';
import { Container } from './styles';
import { BiGitRepoForked, BiStar } from 'react-icons/bi'

export function Main() {
    const { repos } = useUser();

    return (
        <Container>
            <ul>                
                {repos[0]?.id && repos.map((repo) => {
                    return (
                        <li key={repo.id}>
                            <h1>{repo.name}</h1>
                            <div className="desc-link">
                                <span>
                                    {repo.description}
                                </span>                                
                            </div>
                            <div className="fork-star">
                                <BiGitRepoForked size={16} /> {repo.forks_count}
                                <BiStar size={16} /> {repo.stargazers_count}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </Container>
    );
}