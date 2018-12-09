import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

class TrackDetail extends Component {
	render() {
		return (
			<View style={styles.container} >
				<TouchableOpacity
					onPress={this.props.onAddPress}
				>
					<Image style={styles.button}
        				source={require('../assets/img/ic_add_circle_outline_white.png')} 
        			/>
				</TouchableOpacity>
				<View style={styles.details} >
					<Text 
						style={styles.title} 
						onPress={this.props.onTitlePress} 
					> 
						{this.props.title} 
					</Text>
					<Text 
						style={styles.artist} 
						onPress={this.props.onArtistPress}
					> 
						{this.props.artist} 
					</Text>
				</View>
				<TouchableOpacity
					onPress={this.props.onMoreButtonPress}
				>
					<View style={styles.moreButton}>
				        <Image style={styles.moreButtonIcon}
				          source={require('../assets/img/ic_more_horiz_white.png')} 
				        />
				    </View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 50,
		backgroundColor: 'black',
		// paddingTop: 24,
		flexDirection: 'row',
		paddingLeft: 20,
		alignItems: 'center',
		paddingRight: 20,
	},
	details: {
	   justifyContent: 'center',
	   alignItems: 'center',
	   flex: 1,
	},
	title: {
		color: 'white',
		textAlign: 'center', 
		fontSize: 16,
		fontWeight: 'bold',
	},
	artist: {
		color: 'rgba(255, 255, 255, 0.70)',
		textAlign: 'center',
		fontSize: 13
	},
	button: {
    	opacity: 0.72,
	},
	moreButton: {
	    borderColor: 'rgb(255, 255, 255)',
	    borderWidth: 2,
	    opacity: 0.72,
	    borderRadius: 10,
	    width: 20,
	    height: 20,
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	moreButtonIcon: {
	    height: 17,
	    width: 17,
	}
});

export default TrackDetail;
