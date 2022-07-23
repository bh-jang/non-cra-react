import React from 'react';
import styled from 'styled-components';

interface Props {
    title: string
}

const TimerTitle = ({ title }: Props) => {
    return (
        <TimerTitleContainer>
        { title }
        </TimerTitleContainer>
    );
};

const TimerTitleContainer = styled.header`
    font-size: 36px;
    font-weight: bold;
`

export default TimerTitle;