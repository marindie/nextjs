'use client'

import axios from 'axios'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import makeAnimated from 'react-select/animated'
import { CCInput } from './comp/InputBox'
import SelectColorful from './comp/SelectColorful'
import SelectWithCheckBox from './comp/SelectWithCheckBox'
import { useComInput, useComSelect } from './utils/common'
import { CSS_GROUP_LISTS, CSS_SPACE } from './utils/commonConstant'
import { useCssStore } from './utils/zustand'

const animatedComponents = makeAnimated()

export const colorSampleList = [
  '#00B8D9',
  '#0052CC',
  '#5243AA',
  '#FF5630',
  '#FF8B00',
  '#FFC400',
  '#36B37E',
  '#00875A',
  '#253858',
  '#666666',
]

export default function Common() {
  const { props: css, setCssInfo } = useCssStore()
  const { data: input01, updateInputValue: setInput01 } = useComInput()
  const { data: input02, updateInputValue: setInput02 } = useComInput()
  const { data: input03, updateInputValue: setInput03 } = useComInput()
  const {
    data: select01,
    setData: setSelect01,
    value: selectVal01,
    onChangeSelect: setSelectVal01,
    MakeSelect,
  } = useComSelect()
  const {
    data: select02,
    setData: setSelect02,
    value: selectVal02,
    onChangeSelect: setSelectVal02,
  } = useComSelect()
  const {
    data: select03,
    setData: setSelect03,
    value: selectVal03,
    onChangeSelect: setSelectVal03,
  } = useComSelect()
  const {
    data: cssData,
    setData: setCssData,
    value: cssValue,
    onChangeSelect: setCssValue,
  } = useComSelect()
  const [searchResult, setSearchResult] = useState<Array<any>>([])

  const [isClearable, setIsClearable] = useState(true)
  const [isSearchable, setIsSearchable] = useState(true)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isRtl, setIsRtl] = useState(false)
  const defaultSelectOptions = {
    isClearable,
    isSearchable,
    isDisabled,
    isLoading,
    isRtl,
    setIsClearable,
    setIsSearchable,
    setIsDisabled,
    setIsLoading,
    setIsRtl,
  }

  // const checkBoxArray = [
  //   {
  //     value: isClearable,
  //     setValue: setIsClearable,
  //     text: 'Clearable',
  //   },
  //   {
  //     value: isSearchable,
  //     setValue: setIsSearchable,
  //     text: 'Searchable',
  //   },
  //   {
  //     value: isDisabled,
  //     setValue: setIsDisabled,
  //     text: 'Disabled',
  //   },
  //   {
  //     value: isLoading,
  //     setValue: setIsLoading,
  //     text: 'Loading',
  //   },
  //   {
  //     value: isRtl,
  //     setValue: setIsRtl,
  //     text: 'RTL',
  //   },
  // ]

  useLayoutEffect(() => {
    let index = 0
    setCssData(CSS_GROUP_LISTS)
    cssData && setCssInfo({ cssGroup: cssData[0].value + CSS_SPACE })
    searchResult &&
      axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then((res) => {
          const newData = res.data.map((e: any) => {
            e.value = e.email
            e.label = e.email
            e.color = colorSampleList[index++ % colorSampleList.length | 0]
            return e
          })
          setSearchResult(newData)
          setSelectVal01(newData[0])
          setSelectVal02(newData[0])
          setSelectVal03(newData[0])
        })
        .catch()
  }, [cssData])

  function useTraceUpdate(props: any) {
    const prev = useRef(props)
    useEffect(() => {
      const changedProps = Object.entries(props).reduce((ps: any, [k, v]) => {
        if (prev.current[k] !== v) {
          ps[k] = [prev.current[k], v]
        }
        return ps
      }, {})
      if (Object.keys(changedProps).length > 0) {
        console.log('Changed props:', changedProps)
      }
      prev.current = props
    })
  }

  return (
    <>
      <>{console.log(selectVal02)}</>
      <div>
        <div className={css.cssGroup + 'flex_wrap'}>
          <label className={css.cssGroup + 'gap ' + css.cssGroup + 'inline_grid'}>
            <span className={css.cssGroup + 'label'}>스타일 변경</span>
          </label>
          <SelectColorful
            optionList={CSS_GROUP_LISTS.map((e: any) => {
              e.color = colorSampleList[Number(e.id.slice(-2)) % colorSampleList.length | 0]
              return e
            })}
            instanceId='cssGroupList'
            onChange={setCssValue}
          />
        </div>
      </div>
      <div className={css.cssGroup + 'flex'}>
        {/* 라벨이 없는 기본 */}
        <CCInput
          inputType='text'
          data={input01}
          updateData={setInput01}
          wrapClass={css.cssGroup + 'flex_wrap'}
          label={'User ID'}
          labelWrapClass={css.cssGroup + 'item'}
          labelClass={css.cssGroup + 'label'}
          inputClass={css.cssGroup + 'rounded_input'}
        />
        {/* Inline 형태의 라벨 */}
        <CCInput
          inputType='text'
          data={input02}
          updateData={setInput02}
          wrapClass={css.cssGroup + 'flex_wrap'}
          label={'Name'}
          labelWrapClass={css.cssGroup + 'item'}
          labelClass={css.cssGroup + 'label'}
          inputClass={css.cssGroup + 'rounded_input'}
          isLabel={true}
        />
        {/* Placeholder 형태의 라벨 */}
        <CCInput
          inputType='text'
          data={input03}
          updateData={setInput03}
          wrapClass={css.cssGroup + 'flex_wrap'}
          label={'Name'}
          placeLabelWrapClass={css.cssGroup + 'place_label'}
          inputClass={css.cssGroup + 'rounded_input'}
          isLabelAsPlaceholder={true}
        />
      </div>
      <div className={css.cssGroup + 'flex'}>
        <div
          className={
            css.cssGroup + 'gap ' + css.cssGroup + 'inline_grid ' + css.cssGroup + 'fitem_equal'
          }
        >
          {/* 멀티 셀렉드 X 클릭 애니메이션 */}
          <span className={css.cssGroup + 'gap'}>멀티 셀렉트 & X 버튼 클릭시 애니메이션</span>
          <MakeSelect
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={searchResult?.map((e) => {
              e.value = e.email
              e.label = e.email
              return e
            })}
            instanceId={'wony'}
            onChange={setSelectVal01}
            value={selectVal01}
          />
        </div>
        <div
          className={
            css.cssGroup + 'gap ' + css.cssGroup + 'inline_grid ' + css.cssGroup + 'fitem_equal'
          }
        >
          <span className={css.cssGroup + 'gap'}>기본 Select</span>
          <SelectWithCheckBox
            {...defaultSelectOptions}
            optionList={searchResult.map((e) => {
              e.value = e.email
              e.label = e.email
              return e
            })}
            instanceId={'selectDefault'}
            onChange={setSelectVal02}
            value={selectVal02}
          />
        </div>
        <div
          className={
            css.cssGroup + 'gap ' + css.cssGroup + 'inline_grid ' + css.cssGroup + 'fitem_equal'
          }
        >
          <span className={css.cssGroup + 'gap'}>컬러풀한 Select</span>
          <SelectColorful
            isMulti
            optionList={searchResult}
            instanceId='colorfulSelect'
            onChange={setSelectVal03}
            value={selectVal03}
          />
        </div>
      </div>
      <pre>{JSON.stringify(cssValue, null, 2)}</pre>
      <pre>{JSON.stringify(searchResult, null, 2)}</pre>
    </>
  )
}
