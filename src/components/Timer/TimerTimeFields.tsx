import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import TimerState from '../../store/Timer';

const TimerTimeFields = () => {
    const [state, setState] = useRecoilState(TimerState);
    
    return (
        <TimerTimeFieldsContainer>
            {`${state.minutes.toString().padStart(2, '0')}`}:
            {`${state.seconds.toString().padStart(2, '0')}`}
        </TimerTimeFieldsContainer>
    );
};

const TimerTimeFieldsContainer = styled.div`
    display: flex;
`

export default TimerTimeFields;