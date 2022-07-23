import React from 'react';
import styled from 'styled-components';
import Button from '../Buttons';

const TimerButtonGroups = () => {
    return (
        <TimerButtonGroupsContainer>
            <Button>Start</Button>
            <Button>Resume/Restart</Button>
            <Button>Stop</Button>
        </TimerButtonGroupsContainer>
    );
};

const TimerButtonGroupsContainer = styled.div`
    display: flex;
    justify-content: space-between;;
`

export default TimerButtonGroups;