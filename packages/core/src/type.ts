/*
 * @Author: atwlee
 * @Date: 2023-11-18 09:21:32
 * @LastEditors: atwlee
 * @LastEditTime: 2023-11-18 09:57:29
 * @Description:
 * @FilePath: /prettier-charts/src/Core/src/type.ts
 */
// import type { EChartOption } from "echarts"

import type { EChartsOption } from "echarts/types/dist/echarts";
export interface EChartsReactProps {
  readonly options: EChartsOption;
}
