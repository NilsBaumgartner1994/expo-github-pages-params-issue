import {Text, TouchableOpacity, View} from 'react-native';
import {router, useLocalSearchParams} from 'expo-router';

export default function TabOneScreen() {

	const params = useLocalSearchParams(); // TODO: Need to check which one to use

	return (
		<View>
			<Text>{"params"}</Text>
			<Text>{JSON.stringify(params, null, 2)}</Text>
			<TouchableOpacity onPress={() => router.push("/firstScreen")}>
				<Text>{"Go to firstScreen"}</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {
				router.setParams({test: '123'})
			}}>
				<Text>{"Set params test to 123"}</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {
				router.setParams({test: undefined})
			}}>
				<Text>{"Clear params test"}</Text>
			</TouchableOpacity>
		</View>
	)
}