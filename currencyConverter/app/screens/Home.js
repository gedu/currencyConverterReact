import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';

import Container from '../components/container/Container';
import Logo from '../components/logo/Logo';
import InputWithButton from '../components/textinput/TextInputWithButton';
import ClearButton from '../components/buttons/ClearButton';
import LastConverted from '../components/text/LastConverted';
import Header from '../components/header/Header';

const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

export default class Home extends Component {
	handlePressBaseCurrency = () => {
		this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
	};
	handlePressQuoteCurrency = () => {
		this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
	};
	handleTextChange = text => {
		console.log('Text ', text);
	};
	handlePressReverseCurrency = () => {
		console.log('Reverse currency');
	};
	handleOptionPress = () => {
		this.props.navigation.navigate('Options');
	};
	render() {
		return (
			<Container>
				<StatusBar translucent={false} barStyle="light-content" />
				<Header onPress={this.handleOptionPress} />
				<KeyboardAvoidingView behavior="padding">
					<Logo />
					<InputWithButton
						buttonText={'USD'}
						onPress={this.handlePressBaseCurrency}
						onChangeText={this.handleTextChange}
						defaultValue={'100'}
						keyboardType="numeric"
					/>
					<InputWithButton
						buttonText={'GBP'}
						onPress={this.handlePressQuoteCurrency}
						editable={false}
						value={'79.48'}
					/>
					<LastConverted
						base={'100'}
						quote={'USD'}
						date={TEMP_CONVERSION_DATE}
						TEMP_CONVERSION_RATE={TEMP_CONVERSION_RATE}
					/>
					<ClearButton text="Reverse Currencies" onPress={this.handlePressReverseCurrency} />
				</KeyboardAvoidingView>
			</Container>
		);
	}
}
