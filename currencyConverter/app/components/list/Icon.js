import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Icon = (checkmark, visible) => {
	const iconStyle = [styles.icon];
	if (visible) {
		iconStyle.push(styles.iconVisible);
	}

	return (
		<View style={iconStyle}>
			{checkmark ? (
				<Image resizeMode="contain" style={style.checkIcon} source={require('./images/check.png')} />
			) : null}
		</View>
	);
};

export default Icon;
