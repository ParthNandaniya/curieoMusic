import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Video from 'react-native-video';

class SplashScreen extends Component {
	Video = () => {
		return (
				<Video source={{uri: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"}}   // Can be a URL or a local file.
		    				       ref={(ref) => {
		    				         this.player = ref
		    				       }}                                      // Store reference
		    				       onBuffer={this.onBuffer}                // Callback when remote video is buffering
		    				       onError={this.videoError}               // Callback when video cannot be loaded
		    				       // style={styles.backgroundVideo} 
		    				       />
		);
	}
    render() {
    	
        return (
            <View>
                {this.Video()}
                {console.log("running")}
            </View>
        );
    }
}

export default SplashScreen;
