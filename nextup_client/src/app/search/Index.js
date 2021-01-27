import React, { useState } from 'react';
import {
	StyleSheet,
	Dimensions,
	View
} from 'react-native'
import { useDispatch } from "react-redux"
import { BlurView } from "@react-native-community/blur";
import { 
	Container,
	Input,
	ContainerHeader,
	ContainerCenter,
	ContainerBottom,
	Modal,
	ButtonSearch,
	ButtonBack,
	Scroll,
	ContainerBox,
	ContainerBoxTitle,
	ImageCompany,
	TextCustom
} from './components/styledComponents'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import * as Animatable from 'react-native-animatable'
import generalStyles from './../../assets/styles/general'

export default props => {

	const companies = [
		{
			name: "THAI THAI",
			image: require('./../../assets/images/recomended1.png'),
			subtitle: "Restaurant",
			address: "Plantation, FL 33322"
		},
		{
			name: "THAI2 THAI2",
			image: require('./../../assets/images/recomended1.png'),
			subtitle: "Restaurant",
			address: "Plantation, FL 33322"
		},
		{
			name: "THAI3 THAI3",
			image: require('./../../assets/images/recomended1.png'),
			subtitle: "Restaurant",
			address: "Plantation, FL 33322"
		},
		{
			name: "THAI4 THAI4",
			image: require('./../../assets/images/recomended1.png'),
			subtitle: "Restaurant",
			address: "Plantation, FL 33322"
		},
		{
			name: "THALITA'S NAILS",
			image: require('./../../assets/images/recomended1.png'),
			subtitle: "NAILS Saloon",
			address: "Tamano, FL 33309"
		},
		{
			name: "THAI2 THAI2",
			image: require('./../../assets/images/recomended1.png'),
			subtitle: "Restaurant",
			address: "Plantation, FL 33322"
		},
		{
			name: "THAI3 THAI3",
			image: require('./../../assets/images/recomended1.png'),
			subtitle: "Restaurant",
			address: "Plantation, FL 33322"
		},
		{
			name: "THAI4 THAI4",
			image: require('./../../assets/images/recomended1.png'),
			subtitle: "Restaurant",
			address: "Plantation, FL 33322"
		},
		{
			name: "THALITA'S NAILS",
			image: require('./../../assets/images/recomended1.png'),
			subtitle: "NAILS Saloon",
			address: "Tamano, FL 33309"
		}
	]

	const dispatch = useDispatch({})
	const [searchArrayCompanies, setSearchArrayCompanies] = useState(companies)
	const [valueSearch, setValueSearch] = useState('')

	// method og search 
	const getSearch = () => {

		// empty array
		setSearchArrayCompanies([])

		if (!valueSearch) {
			setSearchArrayCompanies(companies)
			return 
		}

		const arrayFilter = companies.filter(company => {
			
			return company.name.match(new RegExp(valueSearch, 'ig'))
		})

		setSearchArrayCompanies(arrayFilter)
	}

	const goBackEventSearch = () => {
		dispatch({
			type: 'CHANGE_MODE_SEARCH',
			payload: false
		})
	}

	// render companies search
	const renderCompanies = () => {

		const renderCompaniesFilter = searchArrayCompanies.map(company => {
			return <ContainerBox width={generalStyles.WIDTH}>
				<ImageCompany source={company.image}/>
				<ContainerBoxTitle>
					<TextCustom size={20} mb={2} bold="bold">{company.name}</TextCustom>
					<TextCustom size={12}>{company.subtitle}</TextCustom>
					<TextCustom size={11}>{company.address}</TextCustom>
				</ContainerBoxTitle>
			</ContainerBox>
		})

		return <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
			<Scroll showsVerticalScrollIndicator={false}>
				{renderCompaniesFilter}
			</Scroll>
		</View>
	}
	
	return <Animatable.View animation={'slideInRight'} duration={500} style={styles.containerAnimation}>
		<Container height={generalStyles.HEIGHT} width={generalStyles.WIDTH}>
			<BlurView style={styles.blurView}
				reducedTransparencyFallbackColor="gray"
				blurType="dark"
				blurAmount={10}
			/>

			<Container height={generalStyles.HEIGHT} width={generalStyles.WIDTH}>

				<ContainerHeader height={60} width={generalStyles.WIDTH}>
					<ButtonBack onPress={() => goBackEventSearch()}>
						<MaterialCommunityIcons name="arrow-left" size={25} color={generalStyles.colors.colorA1} />
					</ButtonBack>
				</ContainerHeader>
				
				<ContainerCenter height={15} width={generalStyles.WIDTH}>

					<Input 
						onChangeText={v => setValueSearch(v)}
						onKeyPress={() => getSearch()}
						value={valueSearch}
						height={60} width={generalStyles.WIDTH - 50}
						placeholder="Search"
						placeholderTextColor={generalStyles.colors.colorA18}
						selectionColor={generalStyles.colors.colorA18}
					/>

					<ButtonSearch onPress={() => getSearch()}>
						<AntDesign name="search1" size={20} color={generalStyles.colors.colorA1} />
					</ButtonSearch>
					
				</ContainerCenter>
				
				<ContainerBottom height={50} width={generalStyles.WIDTH}>

					{/* <Modal height={generalStyles.HEIGHT/2} width={generalStyles.WIDTH - 40}> */}
						{renderCompanies()}
					{/* </Modal> */}
					
				</ContainerBottom>

			</Container>

		</Container>
	</Animatable.View>
}

const styles = StyleSheet.create({
	blurView:{
		position: "absolute",
		top: 0,
		left: 0,
		width: generalStyles.WIDTH,
		height: generalStyles.HEIGHT,
		zIndex: 10,
	},

	containerBlur: {
		flex: 1,
		position: 'absolute',
	},

	containerAnimation: {
		height: generalStyles.HEIGHT,
		width: generalStyles.WIDTH,
		position: 'absolute',
		left: 0,
		top: 0
	}
})
