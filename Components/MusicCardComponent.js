import React, {Component} from 'react';
import styleGrid from 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../styles/card.module.css';
import {Card} from 'antd';

const {Meta} = Card;

class Cart extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styleGrid['col-3']}>
                <div className="tak-card">
                    <Card
                        hoverable
                        style={{width: "100%"}}
                        cover={<img alt="example" src={this.props.musicCover} className='card-img-music-cover'/>}
                    >
                        <Meta title={this.props.musicTitle} description={this.props.musicDesc}/>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Cart;