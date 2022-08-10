import styled from 'styled-components';

export const Container = styled.div`
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    padding: 1rem 1rem;
    position: relative;
    

    svg {
        position: absolute;
        top: 1.1rem;
        left: 1rem;
        cursor: pointer;

        &:hover {
            filter: brightness(1.1);
        }
    }

    .header-icon {
        top: 1.1rem;
        left: calc(100% - 2rem);
        cursor: default;
    }
`;

