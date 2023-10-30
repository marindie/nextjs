"use client"

import { useLayoutEffect, useState } from "react";
import { CCInput } from "./comp/InputBox";
import { useComInput, useComSelect } from "./utils/common";
import { CSS_DELIMITER, CSS_GROUP_LISTS } from "./utils/common-constant";
import makeAnimated from 'react-select/animated';
import axios from "axios";
import SelectColorful from "./comp/SelectColorful";
import SelectWithCheckBox from "./comp/SelectWithCheckBox";

const animatedComponents = makeAnimated();

export default function Common() {
  const [ selectedCss, setSelectedCss ] = useState('nm' + CSS_DELIMITER);
  const { data: input01, updateInputValue: setInput01 } = useComInput();
  const { data: input02, updateInputValue: setInput02 } = useComInput();
  const { data: input03, updateInputValue: setInput03 } = useComInput();
  const { data: select01, setData: setSelect01, MakeSelect } = useComSelect();
  const { data: select02, setData: setSelect02 } = useComSelect();
  const { data: cssData, setData: setCssData, value: cssValue, onChangeSelect: selChange01 } = useComSelect();
  const [ searchResult, setSearchResult ] = useState<Array<any>>([]);

  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
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
  };



  useLayoutEffect(() => {
    setCssData(CSS_GROUP_LISTS);
    cssData && setSelectedCss(cssData[0].value + CSS_DELIMITER);
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        setSearchResult(res.data);
      })
      .catch();

  }, [cssData]);

  return (
    <>
      <div>
        <div className={selectedCss + 'flex_wrap'}>
          <label className={selectedCss + 'gap ' + selectedCss + 'inline_grid'}>
            <span className={selectedCss + 'label'}>스타일 변경</span>
          </label>
          <SelectColorful optionList={CSS_GROUP_LISTS} instanceId='cssGroupList' />
        </div>
      </div>
      <div className={selectedCss + 'flex'}>
        {/* 라벨이 없는 기본 */}
        <CCInput 
          inputType='text'
          data={input01}
          updateData={setInput01}
          wrapClass={selectedCss + 'flex_wrap'}
          label={'User ID'}
          labelWrapClass={selectedCss + 'item'}
          labelClass={selectedCss + 'label'}
          inputClass={selectedCss + 'rounded_input'}
        />
        {/* Inline 형태의 라벨 */}
        <CCInput 
          inputType='text'
          data={input02} updateData={setInput02}
          wrapClass={selectedCss + 'flex_wrap'}
          label={'Name'}
          labelWrapClass={selectedCss + 'item'}
          labelClass={selectedCss + 'label'}
          inputClass={selectedCss + 'rounded_input'}
          isLabel={true}
        />        
        {/* Placeholder 형태의 라벨 */}
        <CCInput 
          inputType='text'
          data={input03} updateData={setInput03}
          wrapClass={selectedCss + 'flex_wrap'}
          label={'Name'}
          placeLabelWrapClass={selectedCss + 'place_label'}
          inputClass={selectedCss + 'rounded_input'}
          isLabelAsPlaceholder={true}
        />
      </div>
      <div className={selectedCss + 'flex'}>
        <div className={selectedCss + 'gap ' + selectedCss + 'inline_grid ' + selectedCss + 'fitem_equal'}>
          {/* 멀티 셀렉드 X 클릭 애니메이션 */}
          <span className={selectedCss + 'gap'} >멀티 셀렉트 & X 버튼 클릭시 애니메이션</span>
          <MakeSelect
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={searchResult?.map(e => {e.value = e.email; e.label = e.email; return e})}
            instanceId={'wony'}
          />
        </div>
        <div className={selectedCss + 'gap ' + selectedCss + 'inline_grid ' + selectedCss + 'fitem_equal'}>
          <span className={selectedCss + 'gap'} >기본 Select</span>
          <SelectWithCheckBox {...defaultSelectOptions} optionList={searchResult.map(e => {e.value = e.email; e.label = e.email; return e})} instanceId={'selectDefault'} />
        </div>
        <div className={selectedCss + 'gap ' + selectedCss + 'inline_grid ' + selectedCss + 'fitem_equal'}>
          <span className={selectedCss + 'gap'} >컬러풀한 Select</span>
          <SelectColorful isMulti optionList={searchResult.map(e => {e.value = e.email; e.label = e.email; return e})} instanceId='colorfulSelect' />
        </div>
      </div>
      <pre>{JSON.stringify(searchResult, null, 2)}</pre>
    </>
  )
}