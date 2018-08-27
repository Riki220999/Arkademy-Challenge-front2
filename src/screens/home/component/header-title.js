import React from "react";
import { View } from "react-native"
import {
	Item,
	Icon,
	Input,
	Button
} from "native-base"

const HeaderTitle = () => (
	<View style={{ padding: 1 }}>
		<Item
			style={{
				marginRight: 50,
				marginLeft: 0,
				backgroundColor: "#fff",
				padding: 5,
				height:45,
				width: 290,
				borderBottomColor: '#F5FCFF',
				borderBottomWidth: 1,
				borderRadius:30,
			}}
		>
			<Icon name="ios-search" />
			<Input placeholder="Search" />
		</Item>

	</View>
)


export { HeaderTitle }