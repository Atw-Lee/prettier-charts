/*
 * @Author: atwlee
 * @Date: 2023-11-18 13:02:04
 * @LastEditors: atwlee
 * @LastEditTime: 2023-11-19 23:19:04
 * @Description:
 * @FilePath: /prettier-charts/apps/docs/.dumirc.ts
 */
import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-chakra';

export default defineConfig({
  outputPath: 'docs-dist',
  favicons: ['/logo.svg'],
  logo: '/logo.svg',
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
  monorepoRedirect: {},
  themeConfig: {
    name: 'Prettier Charts',
    ...defineThemeConfig({
      social: {
        github: {
          name: 'github',
          link: 'https://github.com/Atw-Lee/prettier-charts',
        },
      },
      announcementBar: {
        id: 'announcementBar',
        content: '👋 Welcome to prettier-charts!',
        isCloseable: true,
      },
    }),
  },
});
