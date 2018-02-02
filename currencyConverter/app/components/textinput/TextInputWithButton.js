import React, { PropTypes } from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

const TextInputWithButton = props => {
	const { buttonText, onPress, editable = true } = props;
	const buttonHighlightStyle = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorMod);

	const containerStyles = [styles.container];

	if (!editable) {
		containerStyles.push(styles.containerDisabled);
	}

	return (
		<View style={containerStyles}>
			<TouchableHighlight style={styles.buttonContainer} onPress={onPress} underlayColor={buttonHighlightStyle}>
				<Text style={styles.buttonText}>{buttonText}</Text>
			</TouchableHighlight>
			<View style={styles.border} />
			<TextInput style={styles.input} {...props} underlineColorAndroid="transparent" />
		</View>
	);
};

export default TextInputWithButton;
