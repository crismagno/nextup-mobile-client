import React, { useState } from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styled, { css } from 'styled-components/native'

const Container = styled.View`
    flex: 1;
    background-color: #000;
`

const Title = styled.Text`
    color: #fff;
    
    ${props => props.primary && css`
        color: red
    `}
`

export default props => {

    return <Container>
        <Title primary>fdfdsfs</Title>
    </Container>
}
