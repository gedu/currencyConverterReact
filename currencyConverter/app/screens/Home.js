import React from 'react';
import { View, StatusBar } from 'react-native';

import Container from '../components/container/Container';
import Logo from '../components/logo/Logo';

export default () => (
	<Container>
		<StatusBar translucent={false} barStyle="light-content" />
		<Logo />
		<View />
	</Container>
);
