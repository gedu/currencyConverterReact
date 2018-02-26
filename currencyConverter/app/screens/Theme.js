import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
});

export default styles;
import { ListItem, Separator } from '../components/list';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_IMAGE = `${ICON_PREFIX}-arrow-forward`;

class Themes extends Component {
	handleThemePress = (color) => {
		this.props.navigation.goBack();
	};

	render() {
		return (
			<ScrollView>
				<StatusBar translucent={false} barStyle="default" />
                <ListItem 
                    text="Blue" 
                    onPress={() => this.handleThemePress(styles.$blue)} 
                    iconBackground={styles.$blue} />
				<Separator />

				<ListItem text="Orange" onPress={() => this.handleThemePress(styles.$orange)} iconBackground={styles.$orange} />
				<Separator />

				<ListItem text="Green" onPress={() => this.handleThemePress(styles.$green)} iconBackground={styles.$green} />
				<Separator />

				<ListItem text="Purple" onPress={() => this.handleThemePress(styles.$purple)} iconBackground={styles.$purple} />
				<Separator />
			</ScrollView>
		);
	}
}

export default Themes;
