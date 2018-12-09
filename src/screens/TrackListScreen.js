import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    FlatList,
    VirtualizedList
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/Header';
import {
	onSelectedTrackChange
} from '../actions';
import music from '../music.json';

class TrackListScreen extends Component {
	onTrackPress = (index) => {
		this.props.onSelectedTrackChange(index);
		this.props.navigation.navigate('player');
	}

	renderItem = (track) => {
		return (
			<TouchableOpacity 
				key={track.index} 
				onPress={() => this.onTrackPress(track.index)}
				style={styles.eachTrack}
			>
				<Image
					style={styles.image}
					source={{uri: "http://storage.googleapis.com/automotive-media/" + track.item.image}}
				/>
				<Text style={styles.text} >{track.item.title}</Text>
				
			</TouchableOpacity>
		);
			
	}
	headerComponent = () => {
		return (
			<View>
				<Header title="Track List" />
				<Text style={styles.subHeader} >Click to Play</Text>
			</View>
			);
	}

    render() {
        return (
            <View style={styles.container} >
            	<StatusBar hidden={true} />
				<VirtualizedList
					data={music.music}
					renderItem={this.renderItem}
					getItem={(data, index) => data[index]}
					getItemCount={data => data.length}
					ListHeaderComponent={this.headerComponent}
					// keyExtractor={(item, index) => item.id}
				/>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('player')} >
					<Text style={styles.player} >Go Back To Player</Text>
				</TouchableOpacity>
			</View>
        );
    }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgb(4, 4, 4)',
		flex: 1,
	},
	eachTrack: {
		paddingTop: 20,
		paddingRight: 20,
		paddingLeft: 20,
		// width: '100%',
		flexDirection: 'row',
		height: 60
	},
	header: {
		fontSize: 20,
		flexDirection: 'row',
		textAlign: 'center',
		color: 'rgba(255, 255, 255, 0.70)'
	},
	subHeader: {
		fontSize: 16,
		color: 'white',
		flexDirection: 'row',
		textAlign: 'center'
	},
	text: {
		fontSize: 18,
		color: 'rgba(255, 255, 255, 0.80)',
		paddingLeft: 15
	},
	image: {
		height: 40,
		width: 40,
		borderRadius: 5,
	},
	player: {
		fontSize: 24,
		color: 'rgba(255, 255, 255, 0.60)',
		textAlign: 'center'
	}
})


export default connect(null, {onSelectedTrackChange})(TrackListScreen);
