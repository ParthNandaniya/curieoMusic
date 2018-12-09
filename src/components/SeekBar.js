	import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image
} from 'react-native';
import Slider from 'react-native-slider';

class SeekBar extends Component {

	render() {
		pad = (n, width, z=0) => {
			n = n + '';
			return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
		}
		minutesAndSeconds = (position) => ([
		  pad(Math.floor(position / 60), 2),
		  pad(position % 60, 2),
		]);
		const elapsed = minutesAndSeconds(this.props.currentPosition);
  		const remaining = minutesAndSeconds(this.props.trackLength - this.props.currentPosition);
		return (
			<View style={styles.container} >
				<View style={{flexDirection: 'row'}}>
					<Text style={styles.text} > {elapsed[0] + ":" + elapsed[1]} </Text>
					<View style={{flex: 1}} />
					<Text style={[styles.text, {width: 40}]} > {this.props.trackLength > 1 && "-" + remaining[0] + ":" + remaining[1]} </Text>
				</View>
				<Slider
		          value={this.props.currentPosition}
		          onValueChange={this.props.onSliderValueChange}
		          maximumValue={this.props.trackLength}
		          minimumTrackTintColor='#fff'
		          maximumTrackTintColor	='rgba(255, 255, 255, 0.14)'
		          thumbTintColor='blue'
		          onSlidingStart={this.props.onSlidingStart}
		          onSlidingComplete={this.props.onSlidingComplete}
		          style={styles.slider}
		          thumbStyle={styles.thumb}
        		  trackStyle={styles.track}
		        />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#000'
  },
  slider: {
    marginTop: 0,
  },
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    textAlign:'center',
  }
});

export default SeekBar;
