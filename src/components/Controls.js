import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image
} from 'react-native';

class Controls extends Component {
	// componentWillMount () {
	// 	console.log(this.props);	
	// }
	
	render() {
		return (
			<View style={styles.container} >
				<TouchableOpacity
					onPress={this.props.onRepeatPress}
				>
					<Text> Repeat </Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={this.props.onBackPress}
				>
					<Text> back </Text>
				</TouchableOpacity>
				{!this.props.paused ? 
					<TouchableOpacity
						onPress={this.props.onPausePress}
					>
						<Text> pause </Text>
					</TouchableOpacity>
					:
					<TouchableOpacity
						onPress={this.props.onPlayPress}
					>
						<Text> play </Text>
					</TouchableOpacity>
				}
				
				<TouchableOpacity
					onPress={this.props.onNextPress}
				>
					<Text> next </Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={this.props.onShufflePress}
				>
					<Text> shuffle </Text>
				</TouchableOpacity>
			</View>
		);
	}
}
// paused,
//   shuffleOn,
//   repeatOn,
//   onPressPlay,
//   onPressPause,
//   onBack,
//   onForward,
//   onPressShuffle,
//   onPressRepeat,

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
    flexDirection: 'row',
  },
})

export default Controls;
