import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
	$primaryColor: '#4F6D7A',
	$white: '#FFF',
	$border: '#E2E2E2',
	$inputText: '#797979',
	$lightGray: '#F0F0F0',
	$darkText: '#343434',
});

export default class App extends Component<{}> {
	render() {
		return <Home />;
	}
}
