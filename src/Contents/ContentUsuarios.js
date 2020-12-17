import React, { Component } from 'react'
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu } from 'antd';
import { EditOutlined,TableOutlined,DeleteOutlined,FormOutlined} from '@ant-design/icons';
const { Content,Sider} = Layout;

class ContentUsuarios extends Component {
    render() {
        return (
            <Layout >
                <Sider width={200} className="site-layout-background" >
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="1"  icon={<TableOutlined/>} > Ver</Menu.Item>
                        <Menu.Item key="2" icon={<FormOutlined />}>Registrar</Menu.Item>
                        <Menu.Item key="3" icon={<EditOutlined />}>Editar</Menu.Item>
                        <Menu.Item key="4" icon={<DeleteOutlined />}>Eliminar</Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 15px 4px' }}>
                    <Content style={{ padding: '0 50px' }}>
                    <div style={{padding:24, minHeight:555}}>Content usuarios</div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default ContentUsuarios
