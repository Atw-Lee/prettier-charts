/*
 * @Author: atwlee
 * @Date: 2023-11-18 08:44:47
 * @LastEditors: atwlee
 * @LastEditTime: 2023-11-19 23:37:32
 * @Description:
 * @FilePath: /prettier-charts/packages/bar/src/stereoscopic/index.tsx
 */
import EChartsReact from "@prettier-charts/core";
import type { EChartsReactProps } from "@prettier-charts/core";

function Index() {
  const options: EChartsReactProps["options"] = {
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };

  return <EChartsReact options={options} style={{ height: "200px" }} />;
}
export default Index;
