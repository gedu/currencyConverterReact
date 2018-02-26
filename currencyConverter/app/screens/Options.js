import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { ConnectAlert } from '../components/alert';
import { ListItem, Separator } from '../components/list';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_IMAGE = `${ICON_PREFIX}-arrow-forward`;

class Options extends Component {
	handleThemePress = () => {
		this.props.navigation.navigate('Themes');
	};

	handleSitePress = () => {
		Linking.openURL('http://fixer.io').catch(() =>
			this.props.alertWithType('error', 'Sorry', "Fixer.io can't be open rigth now.")
		);
	};

	render() {
		return (
			<ScrollView>
				<StatusBar translucent={false} barStyle="default" />
				<ListItem text="Themes" onPress={this.handleThemePress} />
				<Separator />
				<ListItem text="Fixer.io" onPress={this.handleSitePress} />
			</ScrollView>
		);
	}
}

export default ConnectAlert(Options);
