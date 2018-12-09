import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Album from '../components/Album';
import TrackDetails from '../components/TrackDetails';
import SeekBar from '../components/SeekBar';
import Controls from '../components/Controls';
import Video from 'react-native-video';
// import TrackPlayer from 'react-native-track-player';
// import Sound from 'react-native-sound';
import SoundPlayer from 'react-native-sound-player';

import {
    setTotalLength,
    onSlidingStart,
    onCurrentTimeChange,
    onRepeatPress,
    onShufflePress,
    onPlayPress,
    onPausePress,
    isChangingToggle,
    onNextPress,
    changeCurrentPosition,
    onBackPress,
    onSelectedTrackChange
} from '../actions';

import music from '../music.json';

class PlayerScreen extends Component {
    componentWillMount() {
        const track = music.music[this.props.selectedTrack];
        this.props.setTotalLength(track.duration);
    }
    async componentDidMount() {
        // console.log("loaded");
        // try {
        //     console.log(TrackPlayer);
        //     const { setupPlayer, add } = TrackPlayer;
        //     let b = await setupPlayer({
        //         minBuffer: 10,
        //         maxBuffer: 20,
        //         playBuffer: 10
        //     });
        //     if(b) {
        //         console.log(b);
        //         await add({
        //             id: "1",
        //             url: 'http://storage.googleapis.com/automotive-media/Jazz_In_Paris.mp3',
        //             title: "title",
        //             artist: "artist"
        //         });
        //     }    
        // } catch (e) {
        //     console.log("errr   " + e);
        // }
        
        // TrackPlayer.setupPlayer();
        // SoundPlayer.playUrl('http://storage.googleapis.com/automotive-media/Jazz_In_Paris.mp3');
        // SoundPlayer.onFinishedPlaying((success: boolean) => { // success is true when the sound is played
        //     console.log('finished playing', success)
        // });

        // try {
        //   const info = await SoundPlayer.getInfo() // Also, you need to await this because it is async
        //   console.log('getInfo', info) // {duration: 12.416, currentTime: 7.691}
        // } catch (e) {
        //   console.log('There is no song playing', e)
        // }
        // console.log('player ' + this.refs);
        
    }
    componentWillReceiveProps (nextProps) {
        console.log(nextProps);
    }

    // setDuration = (track) => {
    //     this.props.setTotalLength(track.duration);
    // }
    onSeek = (time) => {
        time = Math.round(time);
        ////////////////////////////////////////////////////////////////////

        this.refs.audio && this.refs.audio.seek(time);
        // this.player.seek(time);

        this.props.onCurrentTimeChange(time);
    }

    onBackPress = () => {
        if(!this.props.repeatOn) {
            if(this.props.shuffleOn) {
                const random = Math.random()*music.music.length;
                this.props.onSelectedTrackChange(Math.floor(random));
            } else {
                if(this.props.currentPosition < 10 && this.props.selectedTrack > 0 ) {
                    //////////////////
                    this.refs.audio && this.refs.audio.seek(0);
                    // this.player.seek(0);

                    this.props.isChangingToggle();
                    this.props.onBackPress();

                    /////////////////
                    const track = music.music[this.props.selectedTrack];
                    this.props.setTotalLength(track.duration);
                } else {
                    /////////////
                    this.refs.audio.seek(0);
                    // this.player.seek(0);

                    this.props.changeCurrentPosition(0);
                }
            }
        } else {
            this.refs.audio.seek(0);
            this.props.changeCurrentPosition(0);
        }
    }

    onNextPress = async () => {
        if(!this.props.repeatOn) {
            if(this.props.shuffleOn) {
                const random = Math.random()*music.music.length;
                this.props.onSelectedTrackChange(Math.floor(random));
            } else {
                if(this.props.selectedTrack < music.music.length - 1) {
                    //////////////////////////
                    this.refs.audio && this.refs.audio.seek(0);
                    // this.player.seek(0);

                    this.props.isChangingToggle();
                    this.props.onNextPress();
                    /////////////////
                    const track = music.music[this.props.selectedTrack];
                    this.props.setTotalLength(track.duration);
                }
            }
        } else {
            this.refs.audio.seek(0);
            this.props.changeCurrentPosition(0);
        }
    }

    onSliderValueChange = (value) => {
        value = Math.round(value);
        this.props.changeCurrentPosition(value);
    }
    setDuration = (data) => {
        const track = music.music[this.props.selectedTrack];
        this.props.setTotalLength(track.duration);
    }
    setTime = (data) => {
        this.props.changeCurrentPosition(Math.floor(data.currentTime));
    }
    onShuffleButtonPress = () => {
        const random = Math.random()*music.music.length;
        this.props.onShufflePress();
        this.props.onSelectedTrackChange(Math.floor(random));
    }
    // video = () => {
        // const track = music.music[this.props.selectedTrack];
        // TrackPlayer.setupPlayer().then(async () => {

        //     // Adds a track to the queue
        //     await TrackPlayer.add({
        //         id: '1',
        //         url: 'http://storage.googleapis.com/automotive-media/Jazz_In_Paris.mp3',
        //         title: 'Track Title',
        //         artist: 'Track Artist',
        //         // artwork: require('track.png')
        //     });

        //     // Starts playing it
        //     TrackPlayer.play();

        // });
        // return (<Text>asdsa</Text>);
    // }
    // audio = async () => {
    //     if(!this.props.isChanging) {
    //         console.log("asd");
    //     } else {
    //         console.log('bbb');
    //     }
        
    // }

    // playButton = async () => {
    //     try {
    //         console.log('aaa');
    //       SoundPlayer.playUrl('http://storage.googleapis.com/automotive-media/Jazz_In_Paris.mp3');
    //       // this.props.onPlayPress();
    //     } catch (e) {
    //       console.log("can't play video");
    //     }
    // }
    video = () => {
        if(!this.props.changing) {
            // if(this.props.shuffleOn) {
            //     const random = Math.random()*music.music.length;
            //     this.props.onSelectedTrackChange(Math.floor(random));
            //     const track = music.music[this.props.selectedTrack];
            //     const source = 'http://storage.googleapis.com/automotive-media/' + track.source;
            // } else {
                const track = music.music[this.props.selectedTrack];
                const source = 'http://storage.googleapis.com/automotive-media/' + track.source;
            // }
            return (<Video source={{uri: source}} 
                        ref="audio"
                        paused={this.props.paused}              
                        resizeMode="cover"          
                        repeat={this.props.repeatOn}                
                        onLoadStart={this.loadStart} // Callback when video starts to load
                        onLoad={this.setDuration}   
                        onProgress={this.setTime} 
                        playInBackground={true}
                        onEnd={this.onNextPress}          
                        onError={this.videoError}    // Callback when video cannot be loaded
                        style={styles.audio} />);
            // return (<Text>audio not working</Text>);
        }
        return null;
    }

    render() {
    	const track = music.music[this.props.selectedTrack];
        const source = 'http://storage.googleapis.com/automotive-media/' + track.source;

        return (
            <View style={styles.container} >
            	<StatusBar hidden={true} />
            	<Header title="player" />
            	<Album image={track.image} albumTitle={track.album} />
            	<TrackDetails title={track.title} artist={track.artist} />
            	<SeekBar 
                    trackLength={this.props.totalLength}
                    currentPosition={this.props.currentPosition}
                    onSlidingComplete={time => this.onSeek(time)}
                    onSlidingStart={() => this.props.onSlidingStart}
                    onSliderValueChange={this.onSliderValueChange}
                />
                <Controls 
                    paused={this.props.paused}
                    repeatOn={this.props.repeatOn}
                    shuffleOn={this.props.shuffleOn}
                    onRepeatPress={this.props.onRepeatPress}
                    onBackPress={this.onBackPress}
                    onPlayPress={this.props.onPlayPress}
                    onPausePress={this.props.onPausePress}
                    onNextPress={this.onNextPress}
                    onShufflePress={this.onShuffleButtonPress}
                    forwardDisabled={!(this.props.selectedTrack < music.music.length - 1) ? true : false}
                />
                {this.video()}
                <Text> main screen </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(4,4,4)',
    },
    audio: {
        height: 0,
        width: 0,
    }
})
const mapStateToProps = ({ globalReducer }) => {
	const { 
        selectedTrack, 
        paused, 
        currentPosition, 
        totalLength,
        repeatOn,
        shuffleOn,
        isChanging
    } = globalReducer;

	return ({
		selectedTrack,
        paused,
        currentPosition,
        totalLength,
        repeatOn,
        shuffleOn,
        isChanging
	});
}

export default connect(mapStateToProps, {
    setTotalLength,
    onSlidingStart,
    onCurrentTimeChange,
    onRepeatPress,
    onShufflePress,
    onPlayPress,
    onPausePress,
    isChangingToggle,
    onNextPress,
    changeCurrentPosition,
    onBackPress,
    onSelectedTrackChange
})(PlayerScreen);
