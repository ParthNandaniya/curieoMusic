// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {
	createSwitchNavigator,
	createStackNavigator,
	createAppContainer
} from 'react-navigation';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import SplashScreen from '../screens/SplashScreen';
import PlayerScreen from '../screens/PlayerScreen';

const AppNavigation = createSwitchNavigator({
	// splash: { screen: SplashScreen },
	player: { screen: PlayerScreen },
	// auth: AuthStack
},	{
		initialRouteName: 'player',
	}
);

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;
