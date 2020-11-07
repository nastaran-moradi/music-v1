import React, {Component} from 'react';
import styleGrid from "bootstrap/dist/css/bootstrap-grid.min.css";
import "../styles/list.module.css";
import {Menu} from 'antd';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import {
    HomeOutlined,
    UnorderedListOutlined,
    SearchOutlined,
    UploadOutlined
} from '@ant-design/icons';

const {SubMenu} = Menu;

class List extends Component {

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
        component: null,
    };

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({openKeys});
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    changeToHome = () => {
        this.setState({
            component: "home",
        })
        this.props.listState("home");
    }

    changeToPlayList = () => {
        this.setState({
            component: "playList",
        })
        this.props.listState("playList");
    }

    changeToUpload = () => {
        this.setState({
            component: "upload",
        })
        this.props.listState("upload");
    }

    changeToSearch = () => {
        this.setState({
            component: "search",
        })
        this.props.listState("search");
    }

    render() {

        return (
            <div className='tak-list-main'>
                <span className='tak'>Taha Kasramehr</span>
                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    style={{width: "100%"}}
                >
                    <SubMenu key="sub2" icon={<HomeOutlined/>} title="Home" onTitleClick={this.changeToHome}>
                        {/*<Menu.Item key="1">Option 1</Menu.Item>*/}
                        {/*<Menu.Item key="2">Option 2</Menu.Item>*/}
                        {/*<Menu.Item key="3">Option 3</Menu.Item>*/}
                        {/*<Menu.Item key="4">Option 4</Menu.Item>*/}
                    </SubMenu>
                    <SubMenu key="sub3" icon={<UnorderedListOutlined/>} title="Play List"
                             onTitleClick={this.changeToPlayList}>
                        {/*<Menu.Item key="5">Option 5</Menu.Item>*/}
                        {/*<Menu.Item key="6">Option 6</Menu.Item>*/}
                        {/*<SubMenu key="sub3" title="Submenu">*/}
                        {/*    <Menu.Item key="7">Option 7</Menu.Item>*/}
                        {/*    <Menu.Item key="8">Option 8</Menu.Item>*/}
                        {/*</SubMenu>*/}
                    </SubMenu>
                    <SubMenu key="sub4" icon={<UploadOutlined/>} title="Upload" onTitleClick={this.changeToUpload}>
                        {/*<Menu.Item key="9">Option 9</Menu.Item>*/}
                        {/*<Menu.Item key="10">Option 10</Menu.Item>*/}
                        {/*<Menu.Item key="11">Option 11</Menu.Item>*/}
                        {/*<Menu.Item key="12">Option 12</Menu.Item>*/}
                    </SubMenu>
                    <SubMenu key="sub5" icon={<SearchOutlined/>} title="Search" onTitleClick={this.changeToSearch}>
                        {/*<Menu.Item key="9">Option 9</Menu.Item>*/}
                        {/*<Menu.Item key="10">Option 10</Menu.Item>*/}
                        {/*<Menu.Item key="11">Option 11</Menu.Item>*/}
                        {/*<Menu.Item key="12">Option 12</Menu.Item>*/}
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default List;