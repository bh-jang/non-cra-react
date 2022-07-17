import styled from 'styled-components';

const Button = styled.button`
    background-color: black;
    height: 40px;
    color: white;
    border-radius: 8px;
    min-width: 100px;
    cursor: pointer;

    &:hover {
        background-color: gray;
    }
`

export default Button;