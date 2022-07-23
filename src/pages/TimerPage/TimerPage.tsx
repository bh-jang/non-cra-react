import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Buttons';
import Input from '../../components/Input';
import TextField from '../../components/TextField';
import useTimer from '../../hooks/useTimer';
import Timer from '../../components/Timer/Timer';

const TimerPage = () => {
    return (
        <TimerPageContainer>
            <Timer>
                <TimerWrapper>
                    <Timer.Title title="첫 번째 디자인 타이머" />
                    <Timer.InputGroups />
                    <Timer.ButtonGroups />
                    <TimerFieldsContainer>
                        <Timer.TimeFields />
                    </TimerFieldsContainer>
                </TimerWrapper>
            </Timer>
            <hr style={{width: "100%"}} />
            <Timer>
                <TimerWrapper>
                    <Timer.Title title="두 번째 디자인 타이머" />
                    <TimerFieldsContainer>
                        <Timer.TimeFields />
                    </TimerFieldsContainer>
                    <Timer.InputGroups />
                    <Timer.ButtonGroups />
                </TimerWrapper>
            </Timer>
        </TimerPageContainer>
    );
};

const TimerPageContainer = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
`

const TimerWrapper = styled.div`
    width: min-content;
    display: flex;
    flex-flow: column;
    gap: 20px;
`

const TimerFieldsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 36px;
`

export default TimerPage;