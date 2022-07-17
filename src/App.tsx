import React from 'react';
import styled from 'styled-components';
import Button from './components/Buttons';
import TimerPage from './pages/TimerPage/TimerPage';

const App =  () => {
    return (
        <AppContainer>
            <TimerPage />
        </AppContainer>
    )
}

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
`

export default App;