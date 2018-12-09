import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image
} from 'react-native';

class Controls extends Component {
	render() {
		return (
			<View style={styles.container} >
				{!this.props.repeatOn ? 
					<TouchableOpacity
						onPress={this.props.onRepeatPress}
						activeOpacity={0.0}
					>
						<Image style={[styles.secondaryControl, this.props.repeatOn ? [] : styles.off]}
        					source={require('../assets/img/ic_repeat_white.png')}
        				/>
					</TouchableOpacity>
					:
					<TouchableOpacity
						onPress={this.props.onRepeatPress}
						activeOpacity={0.0}
					>
						<Image style={[styles.secondaryControl, this.props.repeatOn ? [] : styles.off]}
        					source={require('../assets/img/ic_repeat_white.png')}
        				/>
					</TouchableOpacity>
				}
				<View style={{width: 40}} />
				<TouchableOpacity
					onPress={this.props.onBackPress}
				>
					<Image source={require('../assets/img/ic_skip_previous_white_36pt.png')}/>
				</TouchableOpacity>
				<View style={{width: 20}} />
				{!this.props.paused ? 
					<TouchableOpacity
						onPress={this.props.onPausePress}
					>
						<View style={styles.playButton}>
				         	<Image source={require('../assets/img/ic_pause_white_48pt.png')}/>
				        </View>
					</TouchableOpacity>
					:
					<TouchableOpacity
						onPress={this.props.onPlayPress}
					>
						<View style={styles.playButton}>
				        	<Image source={require('../assets/img/ic_play_arrow_white_48pt.png')}/>
				        </View>
					</TouchableOpacity>
				}
				<View style={{width: 20}} />
				<TouchableOpacity
					onPress={this.props.onNextPress}
					disabled={this.props.forwardDisabled}
				>
					<Image style={[this.props.forwardDisabled && {opacity: 0.3}]}
        				source={require('../assets/img/ic_skip_next_white_36pt.png')}
        			/>
				</TouchableOpacity>
				<View style={{width: 40}} />
				{!this.props.shuffleOn ? 
					<TouchableOpacity
						activeOpacity={0.0}
						onPress={this.props.onShufflePress}
					>
						<Image style={[styles.secondaryControl, this.props.shuflleOn ? [] : styles.off]}
        					source={require('../assets/img/ic_shuffle_white.png')}
        				/>
					</TouchableOpacity>
					:
					<TouchableOpacity
						activeOpacity={0.0}
						onPress={this.props.onShufflePress}
					>
						<Image style={[styles.secondaryControl, this.props.shuffleOn ? [] : styles.off]}
				        	source={require('../assets/img/ic_shuffle_white.png')}
				        />

					</TouchableOpacity>
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.30,
  }
})

export default Controls;
