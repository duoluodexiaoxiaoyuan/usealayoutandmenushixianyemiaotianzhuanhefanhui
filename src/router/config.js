import TuiJian from "../pages/tuijian";
import News from "../pages/tuijian/News";
import Weather from "../pages/tuijian/Weather";
import DaYi from "../pages/DaXue/DaYi";
import DaEr from "../pages/DaXue/DaEr";
import ZhuFu from "../pages/DaXue/ZhuFu";
import { ZhihuSquareFilled } from "@ant-design/icons";
export const routesList = [
  {
    path: "/index",
    component: TuiJian,
    children: [
      {
        title: "祝你一路顺风",
        path: "/index/zhufu",
        component: ZhuFu,
      },
      {
        title: "推荐",
        contentList: [
          {
            path: "/index/news",
            component: News,
            name: "新闻",
          },
          {
            path: "/index/weather",
            component: Weather,
            name: "天气",
          },
        ],
      },
      {
        title: "大学生活",
        contentList: [
          {
            path: "/index/dayi",
            component: DaYi,
            name: "大一",
          },
          {
            path: "/index/daer",
            component: DaEr,
            name: "大二",
          },
        ],
      },
    ],
  },
];
