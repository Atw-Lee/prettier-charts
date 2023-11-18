/*
 * @Author: atwlee
 * @Date: 2023-11-18 09:04:08
 * @LastEditors: atwlee
 * @LastEditTime: 2023-11-18 09:55:25
 * @Description:
 * @FilePath: /prettier-charts/src/Core/src/index.tsx
 */
import echarts from "echarts";
import React, { useCallback, useEffect, useRef } from "react";
function EChartsReact() {
  const echartsRef = useRef<HTMLDivElement>(null);

  const initECharts = useCallback(() => {
    console.log("echartsRef", echartsRef);
    const myChart = echarts.init(echartsRef.current);
    myChart.setOption({
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
    });
  }, []);

  const loadEChartsInstance = useCallback(() => {
    initECharts();
  }, []);

  useEffect(() => {
    loadEChartsInstance();
  }, []);

  return <div ref={echartsRef} />;
}

export default EChartsReact;
