import styled from 'styled-components';

export const AppFooter = styled.footer`
display: flex;
justify-content: center;
width: 100%;
height: 50px;
align-items: center;
background: #333;
position: fixed;
bottom: 0;
left: 0;
& > strong {
  color: white;
  font-weight: 700;
  text-align: center;
  background: inherit;
}
 a {
    color: #FFC107;
    background: inherit;
}
span {
  background: inherit;
  color: red;
}
`;

