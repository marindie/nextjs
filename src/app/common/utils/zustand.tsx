import { create } from 'zustand'
import { cssType } from './commonType'
import { CSS_DELIMITER, CSS_SPACE } from './commonConstant'

export const useCssStore = create<{
  props: cssType
  setCssInfo: (props: Partial<cssType>) => void
}>((set) => ({
  props: {
    cssGroup: 'nm' + CSS_SPACE,
  },
  setCssInfo: (cssInfo: Partial<cssType>) => {
    set((state) => ({
      ...state,
      props: { ...state.props, ...cssInfo },
    }))
  },
}))
