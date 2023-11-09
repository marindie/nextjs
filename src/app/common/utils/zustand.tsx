import { create } from 'zustand'
import { CSS_DELIMITER } from './commonConstant'
import { cssType } from './commonType'

export const useCssStore = create<{
  props: cssType
  setCssInfo: (props: Partial<cssType>) => void
}>((set) => ({
  props: {
    cssGroup: 'nm' + CSS_DELIMITER,
  },
  setCssInfo: (cssInfo: Partial<cssType>) => {
    set((state) => ({
      ...state,
      props: { ...state.props, ...cssInfo },
    }))
  },
}))
