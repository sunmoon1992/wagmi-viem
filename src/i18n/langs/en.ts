import { languageDesc } from '@/i18n/config'
import { Rec } from '@/typings'

const files = import.meta.glob('./en/*.ts', { eager: true, import: 'default' })
const filesKeys = Object.keys(files)
const output = filesKeys.reduce((init: Rec, path) => {
  const { section, dictionary } = files[path]
  init[section] = dictionary
  return init
}, {})

export default {
  desc: languageDesc.en,
  output
}
