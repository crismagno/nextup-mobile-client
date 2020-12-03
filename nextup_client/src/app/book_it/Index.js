import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Dimensions,
	Text
} from 'react-native'

import ContainerTop from './components/ContainerTop'
import ContainerCenter from './components/ContainerCenter'
import ContainerBottom from './components/ContainerBottom'
import ContainerWaitTime from './components/ContainerWaitTime'

import { BlurView } from "@react-native-community/blur";
import { 
	Modal, 
	HeaderModal, 
	HeaderModalStep, 
	CenterModal,
	BottomModal,
	ButtonStepNext,
	ButtonStep6,
	TextStep6,
	TextModal, 
	ButtonStepCancel,
	BottomSubModal,
	ButtonStep10,
	ContainerPhone
} from './components/styledComponents'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IF from "./../defaults/IF";
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default props => {
	
	// texts modals
	const steps = {
		step1To4: "Waiting for Thai Thai's confirmation.",
		step5: "Your spot at Thai Thai for 2:00 PM is confirmed",
		step6: "You're next up in 15 minutes",
		cancelNow: "Cancel your spot now?",
		cancelSuccess: "Your spot has been cancelled",
		step9: {
			text1: "Sorry, Thai Thai didn't accept your request.",
			text2: "Do you want to Keep your previous spot at 2 PM for party of 2?"
		},
		step10: "Thai Thai didn't accept your request. You can contact then",
		phone: '754-723-1122'
	}

	const [showModal, setShowModal] = useState(0)
	const [textStep, setTextStep] = useState(steps)
	const [stepModal, setStepModal] = useState(1)
	const [waitTime, setWaitTime] = useState(false)
	
	const executeBookIt = () => {
		setShowModal(1)

		var num = 0
		var intervalSteps = setInterval(() => {
			if (num === 5) {
				clearInterval(intervalSteps)
			} else {
				num += 1
				setStepModal(num)
			}

		}, 500)
	}

	const execChangeIt = () => {
		setShowModal(0)
		setStepModal(1)
	}

	const toStep = step => {
		setStepModal(step)
	}

	const waitTimeOk = () => {
		setWaitTime(false)
		setStepModal(10)
	}

	// render modal
	const renderModal = () => {
		return <View style={styles.containerBlur}>
			<BlurView style={styles.blurView}
				reducedTransparencyFallbackColor="gray"
				blurType="dark"
				blurAmount={15}
			/>

			{ modalWaiting() }
		</View>
	}

	// modal waiting component
	const modalWaiting = () => {

		let showHeader = true

		if (!(stepModal < 6 || stepModal == 9 || stepModal == 10)) {
			showHeader = false
		}

		return <Modal top={stepModal == 9 ? HEIGHT/3.2 : HEIGHT/2.5}>
			{ showHeader && renderModalHeader() }
			{ renderModalCenter() }
			{ renderModalBottom() }
			{/* { stepModal == 9 && renderModalBottomSub() } */}
		</Modal>
	}

	//header modal
	const renderModalHeader = () => {
		let showHeader = true

		if (!(stepModal > 3 || stepModal == 9 || stepModal == 10)) {
			showHeader = false
		}

		return <HeaderModal>
			<HeaderModalStep active={stepModal == 1} />
			<HeaderModalStep active={stepModal == 2}/>
			<HeaderModalStep active={stepModal == 3}/>
			<HeaderModalStep active={showHeader}/>
		</HeaderModal>
	}

	//center modal
	const renderModalCenter = () => {
		return <CenterModal>
			{ renderTextModal() }
			{ stepModal == 6 && renderButtonCenterStep6() }
		</CenterModal>
	}

	//bottom modal
	const renderModalBottom = () => {
		let flexValue = {
			direction: 'row',
			justify: 'flex-end',
			align: 'center'
		}

		if (stepModal == 6) {
			flexValue['direction'] = 'column'
			flexValue['justify'] = 'center'
		}

		return <BottomModal direction={flexValue.direction} justify={flexValue.justify} align={flexValue.align}>
			{ stepModal == 5 && renderButtonStep5() }
			{ stepModal == 6 && renderButtonsStep6()}
			{ stepModal == 7 && renderButtonsStep7()}
			{ stepModal == 8 && renderButtonsStep8()}
			{ stepModal == 9 && renderButtonsStep9()}
			{ stepModal == 10 && renderButtonsStep10()}
		</BottomModal>
	}

	//bottom modal
	const renderModalBottomSub = () => {
		let flexValue = {
			direction: 'row',
			justify: 'flex-end',
			align: 'center'
		}

		return <BottomSubModal direction={flexValue.direction} justify={flexValue.justify} align={flexValue.align}>
			<Text>dasda</Text>
		</BottomSubModal>
	}

	// render text center
	const renderTextModal = () => {
		if (stepModal < 5) {
			return <TextModal fontWeight="bold" size={25}>
				{textStep.step1To4}
			</TextModal>
		} else if (stepModal === 5) {
			return <TextModal fontWeight="normal" size={20}>
				{textStep.step5}
			</TextModal>
		} else if (stepModal === 6) {
			return <TextModal fontWeight="bold" size={25}>
				{textStep.step6}
			</TextModal>
		} else if (stepModal === 7) {
			return <TextModal fontWeight="bold" size={25}>
				{textStep.cancelNow}
			</TextModal>
		} else if (stepModal === 8) {
			return <TextModal fontWeight="bold" size={25}>
				{textStep.cancelSuccess}
			</TextModal>
		} else if (stepModal === 9) {
			return <>
				<TextModal fontWeight="normal" size={20}>
					{textStep.step9.text1}
				</TextModal>
				<TextModal fontWeight="normal" size={20}>
					{textStep.step9.text2}
				</TextModal>
			</>
		} else if (stepModal === 10) {
			return <TextModal fontWeight="normal" size={20}>
				{textStep.step10}
			</TextModal>
		}
	}

	// button step 5
	const renderButtonStep5 = () => {
		return <ButtonStepNext onPress={() => toStep(6)} background="#D47FA6">
			<MaterialCommunityIcons name="arrow-right" color="#fff" size={23} />      
		</ButtonStepNext>
	}

	// button center step 6
	const renderButtonCenterStep6 = () => {
		return <ButtonStepNext onPress={() => toStep(9)} 
			background="#FFF" border="1px solid #000">
			<MaterialCommunityIcons name="arrow-right" color="#000" size={23} />      
		</ButtonStepNext>
	}

	
	// buttons step 6
	const renderButtonsStep6 = () => {
		return <>
			<ButtonStep6 primary onPress={() => execChangeIt()}>
				<TextStep6 primary>CHANGE IT</TextStep6>     
			</ButtonStep6>
			<ButtonStep6 onPress={() => toStep(7)}>
				<TextStep6>CANCEL SPOT</TextStep6>     
			</ButtonStep6>
		</>
	}

	// buttons step 7
	const renderButtonsStep7 = () => {
		return <>
			<ButtonStepCancel onPress={() => toStep(8)} 
				background="#8A56AC">
				<MaterialCommunityIcons name="check" color="#fff" size={20} />      
			</ButtonStepCancel>
			<ButtonStepCancel onPress={() => toStep(6)} 
				background="#D47FA6">
				<MaterialCommunityIcons name="close" color="#fff" size={20} />      
			</ButtonStepCancel>
		</>
	}

	// buttons step 8
	const renderButtonsStep8 = () => {
		return <ButtonStepCancel onPress={() => execChangeIt(8)} 
			background="#D47FA6">
			<MaterialCommunityIcons name="arrow-right" color="#fff" size={20} />      
		</ButtonStepCancel>
	}

	// buttons step 9
	const renderButtonsStep9 = () => {
		return <>
			<ButtonStepCancel onPress={() => setWaitTime(true)} 
				background="#8A56AC">
				<MaterialCommunityIcons name="check" color="#fff" size={20} />      
			</ButtonStepCancel>
			<ButtonStepCancel onPress={() => execChangeIt()} 
				background="#D47FA6">
				<MaterialCommunityIcons name="close" color="#fff" size={20} />      
			</ButtonStepCancel>
		</>
	}

	// buttons step 10
	const renderButtonsStep10 = () => {
		return <>
			<ContainerPhone>
				<MaterialCommunityIcons style={{ marginRight: 5}} name="phone-outline" color="#5A9638" size={25} />     
				<Text style={{fontSize: 16}}>{steps.phone}</Text> 
			</ContainerPhone>
			<ButtonStep10 onPress={() => execChangeIt()} 
				background="#FFF" border="1px solid #0007">
				<MaterialCommunityIcons name="close" color="red" size={20} />      
			</ButtonStep10>
			<ButtonStep10 onPress={() => execChangeIt()} 
				background="#D47FA6">
				<MaterialCommunityIcons name="arrow-right" color="#fff" size={20} />      
			</ButtonStep10>
		</>
	}

	return <View style={styles.container}>
		<View style={styles.containerTop}>
			<ContainerTop {...props}/>
		</View>

		{/* condition to render components */}
		<IF condition={!waitTime}>
			<View style={styles.containerCenter}>
				<ContainerCenter {...props}/>
			</View>
			<View style={styles.containerBottom}>
				<ContainerBottom {...props} 
					executeBookIt={executeBookIt}/>
			</View>
			{showModal > 0 && renderModal()}
		</IF>

		{/* condition to render components */}
		<IF condition={waitTime}>
			<ContainerWaitTime waitTimeOk={waitTimeOk}/>
		</IF>
	</View>
}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		flex: 1,
		backgroundColor: '#241332',
	},

	containerTop: {
		height: '20%',
		width: WIDTH,
		backgroundColor: '#FFF',
		borderBottomLeftRadius: 85,
		zIndex: 10000
	},

	containerCenter: {
		height: HEIGHT/3.4,
		width: WIDTH,
	},

	containerBottom: {
		flex: 1
	},

	containerMax: {
		position: 'absolute',
		height: HEIGHT,
		width: WIDTH,
		left: 0,
		top: 0,
		zIndex: -1,
		backgroundColor: '#0002'
	},

	blurView:{
		position: "absolute",
		top: 0,
		left: 0,
		width: WIDTH,
		height: HEIGHT,
		zIndex: 10
	},

	containerBlur: {
		flex: 1,
		position: 'absolute',
		// zIndex: 1000
	}

})
