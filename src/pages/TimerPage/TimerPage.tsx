import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Buttons';
import Input from '../../components/Input';
import TextField from '../../components/TextField';
import useTimer from '../../hooks/useTimer';

const TimerPage = () => {
    const { remainSeconds } = useTimer();

    return (
        <TimerPageContainer>
            <TimerHeader>
                <TimerHeaderInputWrapper>
                    <Input title={"Minutes"} type="number" />
                    <Input title={"Seconds"} type="number" />
                </TimerHeaderInputWrapper>
                <TimerHeaderButtonWrapper>
                    <Button>Start</Button>
                    <Button>Resume/Restart</Button>
                    <Button>Stop</Button>
                </TimerHeaderButtonWrapper>
            </TimerHeader>
            <TimerBody>
                <TextField>{remainSeconds}</TextField>
            </TimerBody>
        </TimerPageContainer>
    );
};

const TimerPageContainer = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
`
const TimerHeader = styled.div`
    display: flex;
    flex-flow: column;
    gap: 20px;
`

const TimerHeaderInputWrapper = styled.div`
    display: flex;
    gap: 10px;
`

const TimerHeaderButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const TimerBody = styled.div`
    display: flex;
`

export default TimerPage;