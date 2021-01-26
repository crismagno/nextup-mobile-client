import styled from 'styled-components/native'
import generalStyles from "../../../assets/styles/general";

export const Container = styled.View`
    position: absolute; 
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    left: 0;
    top: 0;
    height: ${props => props.height};
    width: ${props => props.width};
    z-index: 10000;
`
export const Input = styled.TextInput`
    height: ${props => props.height};
    width: ${props => props.width};
    border-bottom-width: 0.6px;
    border-color: #F5F4F6;
    color: #F5F4F6;
    font-size: 20px;
    font-family: ${generalStyles.fonts.fontFamily1};
    padding-right: 50px;
    padding-left: 10px
`
export const ContainerHeader = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    /* border: 1px solid red; */
    height: ${props => props.height};
    width: ${props => props.width};
    padding-left: 20
`
export const ContainerCenter = styled.View`
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: ${props => props.height};
    width: ${props => props.width};
    /* margin-top: 10px; */
    margin-bottom: 10px
`
export const ContainerBottom = styled.View`
    padding-top: 0px;
    align-items: flex-start;
    flex: 1;
    width: ${props => props.width};
`
export const Modal = styled.View`
    background-color: #FFF;
    border-radius: 50px;
    min-height: ${props => props.height};;
    width: ${props => props.width};
`
export const ButtonSearch = styled.TouchableOpacity`
    position: absolute;
    right: 20;
    padding: 10px
`
export const ButtonBack = styled.TouchableOpacity`
    padding: 10px
`
export const Scroll = styled.ScrollView`
    padding-left: 15px;
    padding-right: 15px;
`
export const ContainerBox = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-bottom-color: #FFF3;
    border-bottom-width: 1px;
    width: ${props => props.width};
    padding-top: 20px;
    /* padding-right: 15px; */
    padding-bottom: 20px;
    /* padding-left: 15px; */
`
export const ContainerBoxTitle = styled.View`
`

export const ImageCompany = styled.Image`
    margin-right: 10px;
    width: 50px;
    height: 50px;
    border-radius: 1000;
    border: 1.5px solid #fff
`
export const TextCustom = styled.Text`
    font-size: ${props => props.size || 10}px;
    margin-top: ${props => props.mt || 0}px;
    margin-right: ${props => props.mr || 0}px;
    margin-bottom: ${props => props.mb || 0}px;
    margin-left: ${props => props.ml || 0}px;
    font-weight: ${props => props.bold || 'normal'};
    font-family: ${generalStyles.fonts.fontFamily1};
    color: #FFF;
`
