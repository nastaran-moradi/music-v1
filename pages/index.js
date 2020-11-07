import React, {Component} from 'react';
import styleGrid from "bootstrap/dist/css/bootstrap-grid.min.css";
import "../styles/Home.module.css";
import List from '../Components/ListComponent';
import Media from '../Components/MediaplyerComponents';
import Main from "../Components/MainComponent";

class Home extends Component {

    state = {
        listState: null,
        homeMusicsState: null,
    }

    constructor(props) {
        super(props);
    }

    ImportListState = (liststateComponent) => {
        this.setState({
            listState: liststateComponent,
        })
    }

    importHomePlayList = (homePlayList) => {
        this.setState({
            homeMusicsState: homePlayList,
        })
    }

    render() {

        {
            if (this.state.homeMusicsState !== null){
                console.log(this.state)
            }
        }
        return (
            <div className='tak-main'>
                <div className={styleGrid['col-2']}>
                    <div className={styleGrid['row']}>
                        <List listState={this.ImportListState}/>
                    </div>
                </div>
                <div className={styleGrid["col-10"]}>
                    <div className={styleGrid['row']}>
                        <Main exportListState={this.state.listState} HomePalyList={this.importHomePlayList}/>
                        <Media exportHomePlayList={this.state.homeMusicsState}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;