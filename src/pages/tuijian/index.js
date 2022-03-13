import React, { useEffect, useState } from "react";
import { Route, useHistory } from "react-router";
import RouterView from "../../router/RouterView";
import { Layout, Menu, Breadcrumb } from "antd";
import { routesList } from "../../router/config";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./index.css";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function TuiJian(props) {
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();
  const [selectKeys, setSelectKeys] = useState([]);
  const [selectOpenKeys, setSelectOpenKeys] = useState([]);
  //submenu中所有的keys
  // const [rootSubmenuKeys, setRootSubmenuKeys] = useState([]);

  useEffect(() => {
    const pathname = props.location.pathname;
    console.log(props);
    setSelectKeys([pathname]);
    routesList.map((item, index) => {
      item.children.map((item, index) => {
        let initSelectOpenKeys = index + "";
        console.log(item);
        (item.contentList || []).map((item, index) => {
          if (item.path === pathname) {
            console.log(initSelectOpenKeys);
            setSelectOpenKeys([initSelectOpenKeys]);
          }
        });
      });
    });
  }, []);
  const onCollapse = (collapsed) => {
    // console.log(collapsed);
    setCollapsed(collapsed);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu
          theme="dark"
          selectedKeys={selectKeys}
          mode="inline"
          openKeys={selectOpenKeys}
          onOpenChange={(openKeys) => {
            // openKeys就是我要开的，我关了以后openKeys就没掉了
            console.log(openKeys);
            setSelectOpenKeys(openKeys);
            // 查看selectOpenKeys中是否包含openKeys里面的数组的值
            // const latestOpenKey = openKeys.find(
            //   (key) => selectOpenKeys.indexOf(key) === -1
            // );
            // if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            //   this.setState({ openKeys });
            // } else {
            //   this.setState({
            //     openKeys: latestOpenKey ? [latestOpenKey] : [],
            //   });
            // }
          }}
        >
          {routesList.map((item, index) => {
            {
              if (item.children) {
                return item.children.map((item, index) => {
                  if (item.contentList) {
                    return (
                      <SubMenu
                        key={index}
                        icon={<UserOutlined />}
                        title={item.title}
                      >
                        {(item.contentList || []).map((item, index) => {
                          return (
                            <Menu.Item
                              key={item.path}
                              onClick={({ item, key, keyPath, domEvent }) => {
                                history.push(key);
                                setSelectKeys(key);
                              }}
                            >
                              {item.name}
                            </Menu.Item>
                          );
                        })}
                      </SubMenu>
                    );
                  } else {
                    return (
                      <Menu.Item
                        key={item.path}
                        icon={<PieChartOutlined />}
                        onClick={({ item, key, keyPath, domEvent }) => {
                          history.push(key);
                          setSelectKeys(key);
                        }}
                      >
                        {item.title}
                      </Menu.Item>
                    );
                  }
                });
              }
            }
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <RouterView routes={props.routes} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
