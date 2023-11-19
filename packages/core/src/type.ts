/*
 * @Author: atwlee
 * @Date: 2023-11-18 09:21:32
 * @LastEditors: atwlee
 * @LastEditTime: 2023-11-19 23:32:06
 * @Description:
 * @FilePath: /prettier-charts/packages/core/src/type.ts
 */
// import type { EChartOption } from "echarts"

import type { EChartsOption } from "echarts/types/dist/echarts";
export interface EChartsReactProps {
  readonly options: EChartsOption;
  readonly className?: string;
  readonly style?: React.CSSProperties;
}
