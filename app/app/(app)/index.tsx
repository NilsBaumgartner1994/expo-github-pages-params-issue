import {View, Text} from 'react-native';
import {Redirect, usePathname, useRootNavigationState} from 'expo-router';

export default function TabOneScreen() {

	return <Redirect to="/(app)/firstScreen" />

	return (
		<View>
			<Text>{"Hello"}</Text>
		</View>
	)
}