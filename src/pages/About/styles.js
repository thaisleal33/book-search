import styled from 'styled-components';
import { DiReact } from "react-icons/di";

export const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;
    background: #fff;
    color: #1e1e1e;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(8, 7, 16, 0.5);
`;

export const AboutContent = styled.div`
    width: 100%;
    max-width: 300px;
    text-align: center;
    background: #fff;
    padding: 35px 35px 60px;
    
    & > h3 {
        background: #fff;
    }

    & > a {
        padding: 10px;
        cursor: pointer;
        position: relative;
        top: 15px;
    }
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: #fff;
    padding: 10px;
    

    & > p {
        background: #fff;
        margin: 10px auto;
    }
`;

export const ReactIcon = styled(DiReact)`
    display: flex;
    flex-direction: column;
    align-self: center;
    background: #fff;
    color: #41E0FD;
    font-size: 60px;
`;