import React, { Component } from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/list';
import currencies from '../data/currencies';

const TEMP_CURRENCY_SELECTED = 'CAD';

class CurrencyList extends Component {
	handlePress = () => {
		this.props.navigation.goBack(null);
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar barStyle="default" translucent={false} />
				<FlatList
					data={currencies}
					renderItem={({ item }) => (
						<ListItem
							key={item}
							text={item}
							selected={item === TEMP_CURRENCY_SELECTED}
							nPress={this.handlePress}
						/>
					)}
					ItemSeparatorComponent={Separator}
				/>
			</View>
		);
	}
}

export default CurrencyList;
