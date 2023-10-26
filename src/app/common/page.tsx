"use client"

import { useLayoutEffect, useState } from "react";
import { CCInput, CCSelect } from "./comp/CommonComp";
import { useComInput, useComSelect } from "./utils/common";
import { CSS_DELIMITER, CSS_GROUP_LISTS } from "./utils/common-constant";

export default function Common() {
  const [ selectedCss, setSelectedCss ] = useState('nm');
  const { data, updateInputValue } = useComInput();
  const { data: cssData, setData: setCssData, value: cssValue, onChangeSelect: selChange01 } = useComSelect();

  useLayoutEffect(() => {
    setCssData(CSS_GROUP_LISTS);
    cssData && setSelectedCss(cssData[0].value);
  }, [cssData]);

  return (
    <>
      <div className={selectedCss + CSS_DELIMITER + 'group'}>        
        <CCSelect 
          selectOptions={cssData}
          onChangeSelect={selChange01}
          selectValue={cssValue}
          wrapClass={selectedCss + CSS_DELIMITER + 'wrap'}
          label={'스타일 변경'}
          labelWrapClass={selectedCss + CSS_DELIMITER + 'item'}
          labelClass={selectedCss + CSS_DELIMITER + 'label'}
          selectClass={selectedCss + CSS_DELIMITER + 'rounded_select'}
        />
        <CCInput 
          inputType='text'
          data={data}
          updateData={updateInputValue}
          wrapClass={selectedCss + CSS_DELIMITER + 'wrap'}
          label={'User ID'}
          labelWrapClass={selectedCss + CSS_DELIMITER + 'item'}
          labelClass={selectedCss + CSS_DELIMITER + 'label'}
          inputClass={selectedCss + CSS_DELIMITER + 'rounded_input'}
        />
        <CCInput 
          inputType='password'
          data={data} updateData={updateInputValue}
          wrapClass={selectedCss + CSS_DELIMITER + 'wrap'}
          label={'Password'}
          labelWrapClass={selectedCss + CSS_DELIMITER + 'item'}
          labelClass={selectedCss + CSS_DELIMITER + 'label'}
          inputClass={selectedCss + CSS_DELIMITER + 'rounded_input'}
        />
      </div>
    </>
  )
}