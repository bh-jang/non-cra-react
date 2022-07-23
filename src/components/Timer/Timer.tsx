import React from 'react';
import styled from 'styled-components';
import TimerButtonGroups from './TimerButtonGroups';
import TimerInputGroups from './TimerInputGroups';
import TimerTimeFields from './TimerTimeFields';
import TimerTitle from './TimerTitle';

interface Props {
    children: React.ReactNode;
}
const Timer = ({children}: Props) => {
    return (
        <TimerConatiner>
        {
            children
        }
        </TimerConatiner>
    );
};

const TimerConatiner = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
`;

Timer.InputGroups = TimerInputGroups;
Timer.ButtonGroups = TimerButtonGroups;
Timer.TimeFields = TimerTimeFields;
Timer.Title = TimerTitle;

export default Timer;