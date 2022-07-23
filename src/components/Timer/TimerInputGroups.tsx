import React from 'react';
import styled from 'styled-components';
import Input from '../Input';

const TimerInputGroups = () => {
    return (
        <TimerInputGroupsContainer>
            <Input title={"Minutes"} type="number" />
            <Input title={"Seconds"} type="number" />
        </TimerInputGroupsContainer>
    );
};


const TimerInputGroupsContainer = styled.div`
    display: flex;
    gap: 10px;
`

export default TimerInputGroups;