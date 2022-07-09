import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;

justify-content: center;
align-items: center;
`;

export const BookListWrapper = styled.ul`
display: flex;
justify-content: center;
justify-self: center;
max-width: 1000px;
background: white;
color: #1e1e1e;
flex-wrap: wrap;
gap: 10px;
margin-top: 3rem;
padding: 20px;
border-radius: 10px;
background: rgba(255, 255, 255, 0.11);
`;