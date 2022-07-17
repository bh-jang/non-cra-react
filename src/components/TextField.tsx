import React from 'react';
import styled from 'styled-components';

interface Props {
    children?: React.ReactNode;
}

const TextField = ({
    children
}: Props) => {
    return (
        <TextFieldContainer>
            {children}
        </TextFieldContainer>
    );
};

const TextFieldContainer = styled.div`
    color: black;
    font-size: 42px;
`

export default TextField;