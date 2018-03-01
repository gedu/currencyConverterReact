import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import Container from '../components/container/Container';
import Logo from '../components/logo/Logo';
import InputWithButton from '../components/textinput/TextInputWithButton';
import ClearButton from '../components/buttons/ClearButton';
import LastConverted from '../components/text/LastConverted';
import Header from '../components/header/Header';

import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

class Home extends Component {
	handlePressBaseCurrency = () => {
		this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
	};
	handlePressQuoteCurrency = () => {
		this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
	};
	handleTextChange = amount => {
		this.props.dispatch(changeCurrencyAmount(amount));
	};
	handlePressReverseCurrency = () => {
		this.props.dispatch(swapCurrency());
	};
	handleOptionPress = () => {
		this.props.navigation.navigate('Options');
	};
	render() {
		let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
		if (this.props.isFetching) {
			quotePrice = '...';
		}

		return (
			<Container>
				<StatusBar translucent={false} barStyle="light-content" />
				<Header onPress={this.handleOptionPress} />
				<KeyboardAvoidingView behavior="padding">
					<Logo />
					<InputWithButton
						buttonText={this.props.baseCurrency}
						onPress={this.handlePressBaseCurrency}
						onChangeText={this.handleTextChange}
						defaultValue={this.props.amount.toString()}
						keyboardType="numeric"
					/>
					<InputWithButton
						buttonText={this.props.quoteCurrency}
						onPress={this.handlePressQuoteCurrency}
						editable={false}
						value={quotePrice}
					/>
					<LastConverted
						base={this.props.baseCurrency}
						quote={this.props.quoteCurrency}
						date={this.props.lastConvertedDate}
						TEMP_CONVERSION_RATE={this.props.conversionRate}
					/>
					<ClearButton text="Reverse Currencies" onPress={this.handlePressReverseCurrency} />
				</KeyboardAvoidingView>
			</Container>
		);
	}
}

const mapStateToProps = state => {
	const baseCurrency = state.currencies.baseCurrency;
	const quoteCurrency = state.currencies.quoteCurrency;
	const conversionSelector = state.currencies.conversions[baseCurrency] || {};
	const rates = conversionSelector.rates || {};

	return {
		baseCurrency,
		quoteCurrency,
		amount: state.currencies.amount,
		conversionRate: rates[quoteCurrency] || 0,
		isFetching: conversionSelector.isFetching,
		lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date();
	};
};

export default connect(mapStateToProps)(Home);
