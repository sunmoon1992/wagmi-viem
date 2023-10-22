import { Lang, Rec } from '@/typings'

/**
 * 语言代码参考：https://www.cnblogs.com/woshimrf/p/language-code-lcid.html
 */
export const languageDesc: { [key in Lang]: Rec } = {
  en: {
    key: 'English',
    lng: 'en'
  },
  'zh-CN': {
    key: '简体中文',
    lng: 'zh-CN'
  }
}
