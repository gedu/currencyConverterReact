import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import Container from '../components/container/Container';
import Logo from '../components/logo/Logo';
import InputWithButton from '../components/textinput/TextInputWithButton';

class Home extends Component {
	handlePressBaseCurrency = () => {
		console.log('BASE');
	};
	handlePressQuoteCurrency = () => {
		console.log('Quote');
	};
	handleTextChange = text => {
		console.log('Text ', text);
	};
	render() {
		return (
			<Container>
				<StatusBar translucent={false} barStyle="light-content" />
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
			</Container>
		);
	}
}

export default Home;
