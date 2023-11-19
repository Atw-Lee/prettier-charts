/*
 * @Author: atwlee
 * @Date: 2023-11-18 12:51:46
 * @LastEditors: atwlee
 * @LastEditTime: 2023-11-18 14:14:09
 * @Description:
 * @FilePath: /prettier-charts/.fatherrc.base.ts
 */
import { defineConfig } from "father";

export default defineConfig({
  esm: {
    output: "es",
  },
  cjs: {
    output: "lib",
  },
});
