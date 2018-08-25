import React from "react"
import {
	createStackNavigator,
	createBottomTabNavigator
} from "react-navigation";
import homescreen from '../src/screens/home'
import cartscreen from "../src/screens/cart"
import detailscreen from "../src/screens/detail"
import transactionscreen from "../src/screens/transactions"
import {
	Icon
} from 'native-base';

const HomeStack = createStackNavigator({
	Home: homescreen,
	Detail: detailscreen,
}, {
	initialRouteName: 'Home',
	navigationOptions: {
		headerStyle: {
			backgroundColor: '#4286f4',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
		},
	},
})

HomeStack.navigationOptions = ({
	navigation
}) => {
	let {
		routeName
	} = navigation.state.routes[navigation.state.index];
	let navigationOptions = {};

	if (routeName === 'Detail') {
		navigationOptions.tabBarVisible = false;
	}

	return navigationOptions;
};

const CartStack = createStackNavigator({
	Cart: cartscreen
}, {
	initialRouteName: 'Cart',
	navigationOptions: {
		headerStyle: {
			backgroundColor: '#4286f4',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
			color: "#fff"
		},
	},
})

const TransactionStack = createStackNavigator({
	Transaction: transactionscreen
}, {
	initialRouteName: 'Transaction',
	navigationOptions: {
		headerStyle: {
			backgroundColor: '#ff0066',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
		},
	},
})

const RootStack = createBottomTabNavigator({
	Home: HomeStack,
	Cart: CartStack,
	
}, {
	navigationOptions: ({
		navigation
	}) => ({
		tabBarIcon: ({
			focused,
			tintColor
		}) => {
			const {
				routeName
			} = navigation.state;
			let iconName;
			if (routeName === 'Home') {
				iconName = `ios-home${focused ? '' : '-outline'}`;
			} else if (routeName === 'Cart') {
				iconName = `ios-cart${focused ? '' : '-outline'}`;
			} else if (routeName === 'Transaction') {
				iconName = `ios-contact${focused ? '' : '-outline'}`;
			}

			return <Icon name = {
				iconName
			}
			style = {
				{
					color: tintColor,
					fontSize: 30
				}
			}
			/>;
		},
	}),
	tabBarOptions: {
		activeTintColor: '#4286f4',
		style: {
			backgroundColor: '#fff',
		},
	}
})

export default RootStack