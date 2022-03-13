import React, { useEffect } from "react";
import { Route, useHistory } from "react-router";
export default function RouterView(props) {
  const history = useHistory();
  const pathname = history.location.pathname;
  useEffect(() => {
    // console.log(pathname);
    if (pathname === "/") {
      history.push("/index/news");
    }
  }, []);
  return props.routes.map((item, index) => {
    return (
      <Route
        key={index}
        path={item.path}
        render={(props) => {
          if (item.children) {
            let routes = [];
            item.children.map((item, index) => {
              if (item.contentList) {
                (item.contentList || []).map((item, index) => {
                  routes.push(item);
                });
              } else {
                routes.push(item);
              }
            });
            return <item.component {...props} routes={routes} />;
          } else {
            return <item.component {...props} />;
          }
        }}
      />
    );
  });
}
