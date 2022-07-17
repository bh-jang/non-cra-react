import React from 'react';
import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    title?: string
}

const Input = ({ ...props }: Props) => {
    const { title } = props;

    return (
        <InputContainer>
            {
                title && 
                <InputTitleContainer>
                    <InputTitle>{title}{" "}</InputTitle>
                </InputTitleContainer>
            }
            <StyledInput {...props} />
        </InputContainer>
    );
};

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
`
const InputTitleContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 5px;
    padding-bottom: 5px;
    box-sizing: border-box;
    height: 20px;
`

const StyledInput = styled.input`
    height: 36px;
    border-radius: 8px;
    border: 1px solid #666;
    color: #333;
    font-size: 16px;
    min-width: 80px;
`

const InputTitle = styled.span`
    color: #333;
    font-size: 14px;
`

export default Input;