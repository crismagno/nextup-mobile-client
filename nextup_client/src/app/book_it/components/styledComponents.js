import styled, { css } from "styled-components/native";
import { Dimensions } from 'react-native'
import generalStyles from './../../../assets/styles/general'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

 export const Modal = styled.View`
    padding-top: 30px;
    padding-bottom: 20px;
    align-items: center;
    position: absolute;
    top: ${props => props.top}px;
    width: ${WIDTH - 80}px;
    min-height: 150px;
    z-index: 2000;
    border-top-left-radius: 80px;
    border-top-right-radius: 80px;
    border-bottom-left-radius: 80px;
    margin: 0px 40px !important;
    background-color: #FFF;
`
export const HeaderModal = styled.View`
    flex-direction: row
`
export const HeaderModalStep = styled.View`
    width: 45px;
    height: 6px;
    border: 1px solid #000;
    margin-right: 6px;
    margin-left: 6px;
    margin-bottom: 30px;
    border-radius: 10px;
    background-color: ${props => props.active ? '#000' : '#FFF'};
`
export const TextModal = styled.Text`
    font-size: ${props => props.size}px;
    font-weight: ${props => props.fontWeight};
    text-align: center;
    padding-top: 10px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 10px;
    font-family: ${generalStyles.fontFamily1}
`

export const ButtonStepNext = styled.TouchableOpacity`    
    padding: 15px;
    border-radius: 100px;
    background-color: ${props => props.background};
    border: ${props => props.border || '0px solid #FFF'};
    z-index: 10000000000;
`
export const ButtonStepCancel = styled.TouchableOpacity`    
    padding: 15px;
    border-radius: 100px;
    background-color: ${props => props.background};
    border: ${props => props.border || '0px solid #FFF'};
    z-index: 10000000000;
    /* margin-left: 10px; */
    margin-right: 10px;
`

export const CenterModal = styled.View`
    width: ${WIDTH - 50}px;
    align-items: center;
    justify-content: center;
`

export const BottomModal = styled.View`
    position: relative;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    width: ${WIDTH - 100}px;
    padding: 5px;
    z-index: 10000;
`
export const ButtonStep6 = styled.TouchableOpacity`    
    padding-top: 7px;
    padding-right: 25px;
    padding-bottom: 7px;
    padding-left: 25px;
    border-radius: 100px;
    background-color: ${props => props.primary ? '#F8F8F8' : '#FFF'};
    margin-top: ${props => props.primary ? 10 : 0};
`
export const TextStep6 = styled.Text`    
    font-size: 12px;
    color: ${props => props.primary ? '#8A56AC' : '#0005'};
    border-bottom-width: 0.7px;
    border-color:  ${props => props.primary ? '#8A56AC' : '#0005'};
    font-family: ${generalStyles.fontFamily1}
`

export const BottomSubModal = styled.View`
    position: relative;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    width: ${WIDTH - 100}px;
    padding: 5px;
    z-index: 10000;
`
export const ButtonStep10 = styled.TouchableOpacity`    
    padding: 15px;
    border-radius: 100px;
    background-color: ${props => props.background};
    border: ${props => props.border || '0px solid #FFF'};
    z-index: 10000000000;
    /* margin-left: 10px; */
    margin-right: 10px;
`
export const ContainerPhone = styled.View`
    flex-direction: row;
    margin-right: 20px
`

