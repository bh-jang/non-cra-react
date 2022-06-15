import React from 'react';
import styled from 'styled-components';
import Button from './components/Buttons';

const App =  () => {
    return (
        <AppContainer>
            <Button>Styled Component Button</Button>
        </AppContainer>
    )
}

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
`

export default App;