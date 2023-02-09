import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding:0;
}

li, ul {
    list-style: none;
    margin: 0;
    padding:0;
}

li {
    margin-bottom: 10px;
}

h2, p {
margin: 0;
    padding:0;
}

h2 {
    margin-bottom: 15px;
    font-size: 30px;
}

p {
    font-size: 20px;
}

section {
    padding: 20px;
}

button {
    margin-right: 10px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: beige;
    border: none;
    border-radius: 10px;
    text-transform: capitalize;
    font-size: 16px;
}
`;
