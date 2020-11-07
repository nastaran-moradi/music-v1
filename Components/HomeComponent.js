import React, {Component} from 'react';
import Cart from "./MusicCardComponent";
import "../styles/homeMain.module.css";

class HomeMusic extends Component {

    state = {
        page:"",
        musics: [
            {
                cover: "/images/1.jpg",
                title: "eminem",
                desc: "rapgod",
                Src: "/music/Eminem%20-%20Essentials%20(AhangSky_IR)/01.%20Lose%20Yourself.mp3",
            },
            {
                cover: "/images/1.jpg",
                title: "eminem",
                desc: "rapgod",
                Src: "/music/Eminem%20-%20Essentials%20(AhangSky_IR)/02.%20Not%20Afraid.mp3",
            },
            {
                cover: "/images/1.jpg",
                title: "eminem",
                desc: "rapgod",
                Src: "/music/Eminem%20-%20Essentials%20(AhangSky_IR)/03.%20The%20Monster%20(feat.%20Rihanna).mp3",
            },
            {
                cover: "/images/1.jpg",
                title: "eminem",
                desc: "rapgod",
                Src: "/music/Eminem%20-%20Essentials%20(AhangSky_IR)/04.%20The%20Real%20Slim%20Shady.mp3",
            },

        ]
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.homeStateMusics(this.state.musics)
    }

    render() {
        return (
            <div className='tak-home-main'>
                {
                    this.state.musics.map((item, index) => {
                        return (
                            <Cart id={index} key={index} homeMusicSrc={item.Src} musicCover={item.cover} musicTitle={item.title}
                                  musicDesc={item.desc}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default HomeMusic;