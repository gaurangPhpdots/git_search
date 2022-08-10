import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    img {
        width: 20%;
        height: auto;
        opacity: 0.8;
        transition: opacity 0.2s;
    }

    h1 {
        color: #C9D1D9;
        font-size: 1.5rem;
        font-weight: 500;
        margin: 1rem 0rem;
    }
`;