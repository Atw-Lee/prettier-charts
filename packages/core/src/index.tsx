/*
 * @Author: atwlee
 * @Date: 2023-11-18 09:04:08
 * @LastEditors: atwlee
 * @LastEditTime: 2023-11-19 23:37:00
 * @Description:
 * @FilePath: /prettier-charts/packages/core/src/index.tsx
 */
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import type { EChartsReactProps } from "./type";
function EChartsReact(props: EChartsReactProps) {
  const { options, className, style } = props;
  const echartsRef = useRef<HTMLDivElement>(null);
  const initECharts = () => {
    const myChart = echarts.init(echartsRef.current);
    myChart.setOption(options);
  };
  const loadEChartsInstance = () => {
    initECharts();
  };
  useEffect(() => {
    loadEChartsInstance();
  }, []);

  return <div ref={echartsRef} className={className} style={style} />;
}

export default EChartsReact;
export type { EChartsReactProps };
