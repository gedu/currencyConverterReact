import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import Home from './screens/Home';
import Navigator from './config/routes';

import { AlertProvider } from './components/alert';

import store from './config/store';

EStyleSheet.build({
	$primaryBlue: '#476D7A',
	$primaryOrange: '#D57A66',
	$primaryGreen: '#00BD9D',
	$primaryPurple: '#9E768F',

	$primaryColor: '#4F6D7A',
	$white: '#FFF',
	$border: '#E2E2E2',
	$inputText: '#797979',
	$lightGray: '#F0F0F0',
	$darkText: '#343434',
});

export default class App extends Component<{}> {
	render() {
		return (
			<Provider store={store}>
				<AlertProvider>
					<Navigator onNavigationStateChange={null} />
				</AlertProvider>
			</Provider>
		);
	}
}
