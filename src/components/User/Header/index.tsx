import { useState, useEffect } from 'react';
import { UserData } from '../../../hooks/useUser';
import { api } from '../../../services/api';
import { Container, UserImg } from './styles';
import { RiLogoutCircleLine } from 'react-icons/ri';

interface HeaderProps {
    user: UserData | null,
    logOut: () => void,
    auxUser: string | undefined,
}

export function Header(props: HeaderProps) {
    const [auxUserData, setAuxUserData] = useState<UserData>();
        
    useEffect(() => {
        async function getAuxUserData() {
            await api.get(`users/${props.auxUser}`)
                .then(response => { setAuxUserData(response.data)});
        }

        if (props.auxUser !== null && props.auxUser !== undefined) {
            getAuxUserData();
        }
    }, [props.auxUser]);

    function HeaderIcons() {
        if (props.user !== null) {
            return (
                <>
                    <RiLogoutCircleLine
                        // color={"#A51B0B"}
                        onClick={props.logOut}
                        className="backIcon"
                    />
                    <span>{props.user.login}</span>
                </>
            );
        } else {
            return (
                <>
                    <span>{auxUserData?.login}</span>
                    <RiLogoutCircleLine
                        className="header-icon"
                        color={"#238636"}
                    />
                </>
            );
        }
    }

    function UserAvatar() {
        if (props.user !== null) {
            return (
                <img src={props.user.avatar_url} alt="User Avatar - Github" />
            );
        } else {
            return (
                <img src={auxUserData?.avatar_url} alt="User Avatar - Github" />
            );
        }
    }

    return (
        <Container>
            <HeaderIcons />
            <UserImg>
                <UserAvatar />
            </UserImg>
        </Container>
    );
}