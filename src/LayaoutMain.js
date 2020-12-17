import React,{Component} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import ContentProductos from './Contents/ContentProductos';
import ContentVentas from './Contents/ContentVentas';
import ContentClientes from './Contents/ContentClientes';
import ContentProveedor from './Contents/ContentProveedor';
import ContentCompras from './Contents/ContentCompras';
import ContentEmpleados from './Contents/ContentEmpleados';
import ContentUsuarios from './Contents/ContentUsuarios';

const { Header} = Layout;

function mostrarContent(contentActual){
    switch(contentActual){
        case 1:
            return(
                <ContentProductos/>
            );
        case 2:
            return(
                <ContentVentas/>
            );
        case 3:
            return(
                <ContentClientes/>
            );
        case 4:
            return(
                <ContentProveedor/>
            );
        case 5:
            return(
                <ContentCompras/>
            );
        case 6:
            return(
                <ContentEmpleados/>
            );
        case 7:
            return(
                <ContentUsuarios/>
            );
        default:
            return null;
    }
}


class LayaoutMain extends Component {
    constructor(props) {
        super(props);
        this.state = {content: 1}
    }
    
    handleClick(item){
        this.setState({content:item});
    }

    render() {
        return (
            <Layout>
                <Header className="header"  >
                    <div> 
                        <img className="logo" alt='' width={200} height={700} src="/images/loguito2.png"/>
                    </div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" onClick={()=>this.handleClick(1)}>Productos</Menu.Item>
                        <Menu.Item key="2" onClick={()=>this.handleClick(2)}>Ventas</Menu.Item>
                        <Menu.Item key="3" onClick={()=>this.handleClick(3)}>Clientes</Menu.Item>
                        <Menu.Item key="4" onClick={()=>this.handleClick(4)}>Proveedores</Menu.Item>
                        <Menu.Item key="5" onClick={()=>this.handleClick(5)}>Compras</Menu.Item>
                        <Menu.Item key="6" onClick={()=>this.handleClick(6)}>Empleados</Menu.Item>
                        <Menu.Item key="7" onClick={()=>this.handleClick(7)}>Usuarios</Menu.Item>
                    </Menu>
                </Header>
                {mostrarContent(this.state.content)}
            </Layout>
        );
    }
}

export default LayaoutMain;
