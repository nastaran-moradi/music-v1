import React, {Component} from 'react';
import styleGrid from "bootstrap/dist/css/bootstrap-grid.min.css";
import "../styles/main.module.css";
import Cart from "./MusicCardComponent";
import UploadMusic from "./UploadComponent";
import HomeMusic from "./HomeComponent";
import SearchMusic from "./SearchComponent";
import PlayList from "./PlayListComponent";

class Main extends Component {

    state = {
        component: "home",
        homeMusicsState: '',
    }

    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        if (this.props.exportListState !== prevProps.exportListState) {
            this.setState({
                component: this.props.exportListState,
            });
        }
    }

    importHomeMusics = (homeMusicsState) => {
        this.setState({
            homeMusicsState: homeMusicsState,
        })
        this.props.HomePalyList(homeMusicsState)
    }

    render() {
        const componentChanger = () => {
            switch (this.state.component) {

                case 'home':
                    return (
                        <HomeMusic homeStateMusics={this.importHomeMusics}/>
                    );
                    break;
                case 'playList':
                    return (
                        <PlayList/>
                    );
                    break;
                case 'search':
                    return (
                        <SearchMusic/>
                    )
                    break;
                case 'upload':
                    return (
                        <UploadMusic/>
                    )
                    break;

                default:
                    return <h1>No project match</h1>
            }
        }

        return (
            <div className="tak-main-bala">
                {componentChanger()}
            </div>
        );
    }
}

export default Main;