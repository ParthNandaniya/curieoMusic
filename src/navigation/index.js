// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {
	createSwitchNavigator,
	createStackNavigator,
	createAppContainer
} from 'react-navigation';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TrackListScreen from '../screens/TrackListScreen';
import PlayerScreen from '../screens/PlayerScreen';

const AppNavigation = createSwitchNavigator({
	trackList: { screen: TrackListScreen },
	player: { screen: PlayerScreen }
},	{
		initialRouteName: 'player',
		headerMode: 'none',
	}
);

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;
