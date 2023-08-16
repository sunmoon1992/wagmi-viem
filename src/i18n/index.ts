import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { initReactI18next } from 'react-i18next'

import { LANG_CACHE_KEY } from '@/config'
import { languageDesc } from '@/i18n/config'
import { Rec } from '@/typings'

export const languageOptions = Object.values(languageDesc)

const files = import.meta.glob('./langs/*.ts', { eager: true, import: 'default' })
const filesKeys = Object.keys(files)
const resources = filesKeys.reduce((init: Rec, path) => {
  const {
    desc: { lng },
    output
  } = files[path]
  init[lng] = { translation: output }
  return init
}, {})

const fallbackLng = localStorage.getItem(LANG_CACHE_KEY) ?? 'en'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
