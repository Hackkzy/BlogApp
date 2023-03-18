import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigator/StackNavigator";

export default function App() {
	return (
		<NativeBaseProvider>
			<NavigationContainer>
				<StackNavigator />
			</NavigationContainer>
		</NativeBaseProvider>
	);
}
