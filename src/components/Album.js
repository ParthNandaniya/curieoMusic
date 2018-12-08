import React, { Component } from 'react';
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
	Image
} from 'react-native';

class Album extends Component {
	render() {
		return (
			<View style={styles.container} >
				<TouchableOpacity
					onPress={this.props.onPress}
				>
					<Image
						style={styles.image}
						source={{uri: "http://storage.googleapis.com/automotive-media/" + this.props.image}}
					/>
				</TouchableOpacity>
				<Text style={styles.albumTitle} > {this.props.albumTitle} </Text>
			</View>
		);
	}
}

const { width, height } = Dimensions.get('window');
const imageSize = width - 48;

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 0,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: 8,
  },
  albumTitle: {
  	paddingTop: 5,
  	fontSize: 15,
  	textAlign: 'center',
  }
})

export default Album;
