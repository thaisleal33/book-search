
import { createGlobalStyle } from "styled-components";
import bg from '../images/bg.webp';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: url(${bg}) no-repeat center center fixed;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    }
  
    #root {
      height: 100vh;
      width: 100wh;
      position: relative;
    }
  
    ul, li {
      list-style: none;
      background: #333;
    }
  
    body {
      background: transparent;
      overflow: visible;
    }

    #inputSearch {
      background: white;
    }

    .btn.btn-primary {
      background: #0d6efd;
    }

    .booklist {
      background: #333;
      margin-bottom: 1rem;
    }

    a {
      background: #333;
      text-decoration: none;
      color: orange;
      border-radius: 10px
    }

    a:hover {
      color: white;
    }

    .card.about-card {
      background-color: white !important;
      background: white !important;
      color: white !important;
    }

    .hstack {
      background: #fff;
    }

    .react-icon {
      color: #41E0FD;
    }
  `;
