import React, { Component } from 'react'
import 'antd/dist/antd.css';
import '../index.css';
import { Layout,Table,Button } from 'antd';
import {PlusOutlined,EditOutlined,DeleteOutlined} from '@ant-design/icons';
const { Content,Sider} = Layout;

class ContentProductos extends Component {
    constructor(props) {
      super(props);
      this.state = {selectedRowKeys: []}
    }
    handleClick(item,item2){
      console.log('handleClick: '+ item);
      item2=[];
    }
    onSelectChange = selectedRowKeys => {
        this.setState({ selectedRowKeys });
    };
    render() {
      const columns = [
        {
          title: 'Código',
          dataIndex: 'codigo',
          sortDirections: ['descend', 'ascend'],
          sorter: (a, b) => a.codigo - b.codigo,
        },
        {
            title: 'Estado',
            dataIndex: 'estado'
        },
        {
            title: 'Tipo de producto',
            dataIndex: 'tipo'
        },
        {
          title: 'Nombre',
          dataIndex: 'nombre',
        },
        {
          title: 'Stock',
          dataIndex: 'stock'
        },
        {
          title: 'Precio',
          dataIndex: 'precio',
          sortDirections: ['descend', 'ascend'],
          sorter: (a, b) => a.precio - b.precio,
        },
        {
            title: 'Acciones',
            dataIndex: 'accion',
            render: fila =><>
            <Button type='primary'  style={{background:'#faad14', border:'#ffffff'}} icon={<EditOutlined />}></Button> 
            {" "}
            <Button type='primary' danger icon={<DeleteOutlined />}></Button> 
            </>
        }
      ];
      const data = [];
      const {selectedRowKeys} = this.state;
      for (let i = 0; i < 46; i++) {
          data.push({
          key: i,
          codigo: `${i}`,
          estado: `Estado ${i}`,
          tipo: `Tipo ${i}`,
          nombre: `Precio`,
          stock: `stock ${i}`,
          precio: `${i}`
          });
      }
    
      const rowSelection = {
          selectedRowKeys,
          onChange: this.onSelectChange,
          selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            {
              key: 'odd',
              text: 'Select Odd Row',
              onSelect: changableRowKeys => {
                let newSelectedRowKeys = [];
                newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                  if (index % 2 !== 0) {
                    return false;
                  }
                  return true;
                });
                this.setState({ selectedRowKeys: newSelectedRowKeys });
              },
            },
            {
              key: 'even',
              text: 'Select Even Row',
              onSelect: changableRowKeys => {
                let newSelectedRowKeys = [];
                newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                  if (index % 2 !== 0) {
                    return true;
                  }
                  return false;
                });
                this.setState({ selectedRowKeys: newSelectedRowKeys });
              },
            },
          ],
        };
        return (
            <Layout >
                <Sider  width={100} className="site-layout-background" style={{background:'#f0f2f5'}}>
                    <div style={{padding: '20px 45px'}}>
                        <Button type="primary"  shape="round"  size={'large'} icon={<PlusOutlined/>} onClick={()=>this.handleClick('nuevo',data)}>
                            Nuevo 
                        </Button>
                        <div></div>
                        <Button type='primary' onClick={()=>this.handleClick('editar',data)} shape="round" size={'large'} style={{background:'#faad14', border:'#ffffff'}} icon={<EditOutlined />}>
                            Editar
                        </Button> 
                        <Button type='primary' onClick={()=>this.handleClick('eliminar',data)} shape="round" size={'large'} danger icon={<DeleteOutlined />}>
                            Eliminar
                        </Button> 
                
                    </div>
                </Sider>
                <Layout style={{ padding: '0px 5px 20px 40px' }}>
                  <Content style={{ padding: '0 50px' }}>
                      <div style={{padding:20, minHeight:555}}>
                          <Table rowSelection={rowSelection} columns={columns} dataSource={data} size="small"/>;
                      </div>
                  </Content>
                </Layout>
            </Layout>
        )
    }
}

export default ContentProductos
