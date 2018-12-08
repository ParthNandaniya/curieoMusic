import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

const Header = ({title, onTitlePress}) => (
	<View style={styles.container} >
		<Text
			style={styles.title}
			onPress={onTitlePress}
		> 
			{title.toUpperCase()} 
		</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
		height: 70,
	    paddingTop: 20,
	    paddingLeft: 12,
	    paddingRight: 12,
	    flexDirection: 'row',
	},
	title: {
	    flex: 1,
	    textAlign: 'center',
		fontSize: 20,
	    color: 'rgba(255, 255, 255, 0.70)',
	    fontWeight: 'bold',
	}
})

export default Header;
