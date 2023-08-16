import { Lang, Rec } from '@/typings'

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
