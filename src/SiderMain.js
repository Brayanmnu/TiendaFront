import React,{Component} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import { EditOutlined,TableOutlined,DeleteOutlined,FormOutlined} from '@ant-design/icons';


const { Sider } = Layout;


class SiderMain extends Component {
    render() {
        return (
            <Sider width={200} className="site-layout-background" >
                <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key="1"  icon={<TableOutlined/>} > Ver</Menu.Item>
                    <Menu.Item key="2" icon={<FormOutlined />}>Registrar</Menu.Item>
                    <Menu.Item key="3" icon={<EditOutlined />}>Editar</Menu.Item>
                    <Menu.Item key="4" icon={<DeleteOutlined />}>Eliminar</Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default SiderMain;
