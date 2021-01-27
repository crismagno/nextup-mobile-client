import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {
	StyleSheet,
	View,
	ToastAndroid
} from 'react-native'

import ContainerCenter from './components/ContainerCenter'
import ContainerBottom from './components/ContainerBottom'
import ContainerPendingConfirmation from './components/ContainerPendingConfirmation'
import ContainerPendingConfirmed from './components/ContainerPendingConfirmed'
import ContainerNotAllowChange from './components/ContainerNotAllowChange'
import ContainerNotAcceptedChange from './components/ContainerNotAcceptedChange'
import ContainerWaitTime from './components/ContainerWaitTime'
import ContainerSeeYou from './components/ContainerSeeYou'

import { BlurView } from "@react-native-community/blur";
import { 
	Modal,
	CenterModal,
	BottomModal,
	TextModal,
	ButtonDefault1
} from './components/styledComponents'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IF from "./../../components/defaults/IF";
import Header from './../../components/app/Header'
import generalStyles from './../../assets/styles/general'

export default props => {

	const dispatch = useDispatch({})

    const goCategorySearch = () => {
        dispatch({
			type: 'CHANGE_MODE_SEARCH',
			payload: true
		})
    }

	const listButtonsMenu = [
		{
			label: "MY QUEUE",
			execEvent: () => props.navigation.navigate('Trending'),
			isActive: false
		},
		{
			label: "SEARCH",
			execEvent: () => goCategorySearch(),
			isActive: false
		},
		{
			label: "CATEGORIES",
			execEvent: () => props.navigation.navigate('Category'),
			isActive: false
		}
	]
	
	// texts modals
	const textSteps = {
		cancelNow: "Cancel your spot now?",
		cancelSuccess: "Your spot has been cancelled",
		waitConfirmation: company => {
			return ""
		} 
	}

	const exampleValueBookIt = {
		// ["normal",  "pendingConfirmation", "pendingConfirmed", "changeTime", "notAllowChangeTime", "notAcceptedChange"]
		requestMoment: "normal",
		requestTime: 0,
		company: {},
		showStep: 1,
		numPeople: 0,
		requestLastMoment: "normal"
	}

	const [stepModal, setStepModal] = useState(0)
	const [waitTime, setWaitTime] = useState(0)
	const [valueBookIt, setValueBookIt] = useState(exampleValueBookIt)
	
	//-------------------------------------------------------------
	// ----- EXECUTE EVENTS ------------------------------------
	
	// event that choose the hours and persons 
	const execBookIt = values => {
		
		// ToastAndroid.show(JSON.stringify(values), ToastAndroid.LONG)
		
		// TODO----------request pending--------------------
		setValueBookIt({
			...valueBookIt,
			numPeople: values.numPeople,
			requestTime: values.requestTime,
			requestMoment: "pendingConfirmation",
			showStep: 2
		})
		
		setTimeout(() => {
			setValueBookIt({
				...valueBookIt,
				requestMoment: "pendingConfirmed",
				showStep: 3
			})
		}, 4000)
		
	}
	
	// event go back on screen -> pendingConfirmation
	const execGoBackPendingConfirmation = () => {
		setValueBookIt({
			...valueBookIt,
			numPeople: 0,
			requestTime: 0,
			requestMoment: "normal",
			showStep: 1
		})
	}

	// event that request change time on screen -> pendingConfirmed
	const execChangeTime = () => {

		// if not allowed change time
		if (true) {
			setValueBookIt({
				...valueBookIt,
				requestMoment: "notAllowChangeTime",
				showStep: 4
			})
		} else {
			setValueBookIt({
				...valueBookIt,
				requestMoment: "normal",
				showStep: 1
			})
		}
		
	}

	// show modal cancel book it
	const execCancel = () => {
		setStepModal(1)
	}

	// close modal cancel book it
	const execCloseCancel = () => {
		setStepModal(0)
	}

	// restart values book it and close modal
	const execInitBookIt = () => {
		setValueBookIt(exampleValueBookIt)
		setStepModal(0)
	}

	const execAcceptedChangeBookIt = () => {
		if (true) {
			setValueBookIt({
				...valueBookIt,
				requestMoment: "notAcceptedChange",
				showStep: 5
			})
		} else {
			setValueBookIt({
				...valueBookIt,
				requestMoment: "pendingConfirmed",
				showStep: 3
			})
		}
	}

	const execCancelAcceptedChangeBookIt = () => {
		setValueBookIt({
			...valueBookIt,
			requestMoment: "pendingConfirmed",
			showStep: 3
		})
	}

	const execEventGoBackNotAcceped = () => {
		setValueBookIt({
			...valueBookIt,
			requestMoment: "pendingConfirmed",
			showStep: 3
		})
	}

	// event go to container wait time ok
	const goToWaitTimeOk = () => {
		setWaitTime(1)
		setStepModal(0)
	}

	// event go to container see you
	const goToContainerSeeYou = () => {
		setWaitTime(2)
		setStepModal(0)

		setTimeout(() => {
			setWaitTime(0)
		}, 2000)
	}

	const toStepModal = step => {
		setStepModal(step)
	}

	//----------------------------------------------------------------------
	// ----- RENDER COMPONENTS ---------------------------------------------

	// component modal
	const renderModal = () => {
		return <View style={styles.containerBlur}>
			<BlurView style={styles.blurView}
				reducedTransparencyFallbackColor="gray"
				blurType="dark"
				blurAmount={15}
			/>
			<Modal top={generalStyles.HEIGHT/3.2}>
				<CenterModal>
					{ renderTextModal() }
				</CenterModal>
				{ renderModalBottom() }
			</Modal>
		</View>
	}

	// bottom modal
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
			{ stepModal == 1 && renderButtonsStep1()}
			{ stepModal == 2 && renderButtonsStep2()}
		</BottomModal>
	}

	// text modal
	const renderTextModal = () => {
		if (stepModal === 1) {
			return <TextModal fontWeight="bold" size={25}>
				{textSteps.cancelNow}
			</TextModal>
		} else if (stepModal === 2) {
			return <TextModal fontWeight="bold" size={25}>
				{textSteps.cancelSuccess}
			</TextModal>
		}
	}

	// buttons modal step 1
	const renderButtonsStep1 = () => {
		return <>
			<ButtonDefault1 onPress={() => toStepModal(2)} 
				background={generalStyles.colors.colorA3}>
				<MaterialCommunityIcons name="check" color={generalStyles.colors.colorA1} size={20} />      
			</ButtonDefault1>
			<ButtonDefault1 onPress={() => execCloseCancel()} 
				background={generalStyles.colors.colorA11}>
				<MaterialCommunityIcons name="close" color={generalStyles.colors.colorA1} size={20} />      
			</ButtonDefault1>
		</>
	}

	// buttons modal step 2
	const renderButtonsStep2 = () => {
		return <ButtonDefault1 onPress={() => execInitBookIt()} 
			background={generalStyles.colors.colorA11}>
			<MaterialCommunityIcons name="arrow-right" color={generalStyles.colors.colorA1} size={20} />      
		</ButtonDefault1>
	}

	const renderConditionalComponents = () => {
		if (valueBookIt.requestMoment === "normal") {
			return <ContainerBottom {...props} 
			execBookIt={execBookIt}/>
		}

		if (valueBookIt.requestMoment === "pendingConfirmation") {
			return <ContainerPendingConfirmation {...props} 
				valuesRequest={valueBookIt}
				execEvent={execGoBackPendingConfirmation}
			/>
		}

		if (valueBookIt.requestMoment === "pendingConfirmed") {
			return <ContainerPendingConfirmed {...props} 
				valuesRequest={valueBookIt}
				execChangeTime={execChangeTime}
				execCancel={execCancel}
			/>
		}

		if (valueBookIt.requestMoment === "notAllowChangeTime") {
			return <ContainerNotAllowChange {...props} 
				valuesRequest={valueBookIt}
				execAcceptedChangeBookIt={execAcceptedChangeBookIt}
				execCancel={execCancelAcceptedChangeBookIt}
			/>
		}

		if (valueBookIt.requestMoment === "notAcceptedChange") {
			return <ContainerNotAcceptedChange {...props} 
				valuesRequest={valueBookIt}
				execEventGoBackNotAcceped={execEventGoBackNotAcceped}
			/>
		}
	}

	const renderWaitTimeComponents = () => {
		if (waitTime === 1) {
			return <ContainerWaitTime {...props}
				valuesRequest={valueBookIt}
				execEvent1={goToContainerSeeYou}
			/>
		}

		if (waitTime === 2) {
			return <ContainerSeeYou {...props}
				valuesRequest={valueBookIt}
			/>
		}
	}

	return <View style={styles.container}>
		<View style={styles.containerTop}>
			<Header {...props} 
				listButtonsMenu={listButtonsMenu}
				showIconLeft={true}
				showIconRight={true}
			/>
		</View>

		{/* condition to render components */}
		<IF condition={waitTime === 0}>
			<View style={styles.containerCenter}>
				<ContainerCenter {...props} 
					valueBookIt={valueBookIt}
					execEvent1={goToWaitTimeOk} 
				/>
			</View>
			<View style={styles.containerBottom}>
				{renderConditionalComponents()}
			</View>
		</IF>
		{stepModal > 0 && renderModal()}

		{/* condition to render components */}
		<IF condition={waitTime > 0}>
			{ renderWaitTimeComponents() }
		</IF>
	</View>
}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		flex: 1,
		backgroundColor: generalStyles.colors.colorA4
	},

	containerTop: {
		width: generalStyles.WIDTH,
		height: "20%",
		borderBottomLeftRadius: 85
	},

	containerCenter: {
		height: generalStyles.HEIGHT/3.4,
		width: generalStyles.WIDTH,
	},

	containerBottom: {
		flex: 1
	},

	blurView:{
		position: "absolute",
		top: 0,
		left: 0,
		width: generalStyles.WIDTH,
		height: generalStyles.HEIGHT,
		zIndex: 10
	},

	containerBlur: {
		flex: 1,
		position: 'absolute'
	}

})
