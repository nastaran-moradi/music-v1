import React, {Component} from 'react';
import styleGrid from 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../styles/media.module.css';
import {Slider, Switch} from 'antd';
import {
    PlayCircleFilled,
    LeftCircleFilled,
    RightCircleFilled,
    PauseOutlined,

} from '@ant-design/icons';

class Media extends Component {

    state = {
        musicIndex: 0,
        disabled: false,
        homeMusics: null,
    };

    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        if (this.props.exportHomePlayList !== prevProps.exportHomePlayList) {
            this.setState({
                homeMusics: this.props.exportHomePlayList,
            })
        }
    }

    handleDisabledChange = disabled => {
        this.setState({disabled});
    };

    onChange = (value) => {
        if (value == "10") {
            document.getElementById('audio').volume = `1.0`;
        } else {
            document.getElementById('audio').volume = `0.${value}`;
        }
    };

    nextMusic = () => {
        this.setState(pre => {
            return {musicIndex: pre.musicIndex + 1}
        })
    }

    lastMusic = () => {
        if(this.state.musicIndex !== 0){
            this.setState(pre => {
                return {musicIndex: pre.musicIndex - 1}
            })
        }
    }

    musicPlay = () => {
        document.getElementById('audio').play();
        document.getElementsByClassName('play')[0].style.display = "none";
        document.getElementsByClassName('pause')[0].style.display = "flex";
    }

    musicPause = () => {
        document.getElementById('audio').pause();
        document.getElementsByClassName('pause')[0].style.display = "none";
        document.getElementsByClassName('play')[0].style.display = "flex";
    }

    render() {

        {
            if (this.state.homeMusics !== null) {
                console.log(this.state)
                console.log(this.state.homeMusics[this.state.musicIndex])
            }
        }

        const {disabled} = this.state;

        return (
            <div className='tak-main-media'>
                {
                    this.state.homeMusics !== null && <audio id="audio">
                        <source src={this.state.homeMusics[this.state.musicIndex].Src} type="audio/mpeg"/>
                        Your browser does not support the audio tag.
                    </audio>
                }
                <div className="tak-media-btn">
                    <LeftCircleFilled style={{fontSize: '46px'}} onClick={this.lastMusic}/>
                </div>
                <div className="tak-media-btn play" onClick={this.musicPlay}>
                    <PlayCircleFilled style={{fontSize: '66px'}}/>
                </div>
                <div className="tak-media-btn pause" onClick={this.musicPause}>
                    <PauseOutlined style={{fontSize: "66px"}}/>
                </div>
                <div className="tak-media-btn">
                    <RightCircleFilled style={{fontSize: '46px'}} onClick={this.nextMusic}/>
                </div>
                <div className="tak-slider-span">
                    <Slider defaultValue={5} disabled={disabled} max={10} onChange={this.onChange}/>
                </div>
            </div>
        );
    }
}

export default Media;