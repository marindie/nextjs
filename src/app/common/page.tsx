"use client"

import { useLayoutEffect, useState } from "react";
import { CCInput, CCSelect } from "./comp/CommonComp";
import { useComInput, useComSelect } from "./utils/common";
import { CSS_DELIMITER, CSS_GROUP_LISTS } from "./utils/common-constant";
import Select, { StylesConfig } from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from "axios";
import chroma from 'chroma-js';

const animatedComponents = makeAnimated();

const colorSampleList = [
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
interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

const SelectSample = (props : {
  isDisabled: boolean;
  isLoading: boolean;
  isClearable: boolean;
  isRtl: boolean;
  isSearchable: boolean;
  setIsClearable: (e: boolean) => void;
  setIsRtl: (e: boolean) => void;
  setIsLoading: (e: boolean) => void;
  setIsDisabled: (e: boolean) => void;
  setIsSearchable: (e: boolean) => void;
  optionList: Array<any>;
  instanceId: string;
}) => {
  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={props.optionList ? props.optionList[0] : ''}
        isDisabled={props.isDisabled}
        isLoading={props.isLoading}
        isClearable={props.isClearable}
        isRtl={props.isRtl}
        isSearchable={props.isSearchable}
        name="color"
        options={props.optionList}
        instanceId={props.instanceId}
      />

      <div
        style={{
          color: 'hsl(0, 0%, 40%)',
          display: 'inline-block',
          fontSize: 12,
          fontStyle: 'italic',
          marginTop: '1em',
        }}
      >
        <Checkbox
          checked={props.isClearable}
          onChange={() => props.setIsClearable(!props.isClearable)}
        >
          Clearable
        </Checkbox>
        <Checkbox
          checked={props.isSearchable}
          onChange={() => props.setIsSearchable(!props.isSearchable)}
        >
          Searchable
        </Checkbox>
        <Checkbox
          checked={props.isDisabled}
          onChange={() => props.setIsDisabled(!props.isDisabled)}
        >
          Disabled
        </Checkbox>
        <Checkbox
          checked={props.isLoading}
          onChange={() => props.setIsLoading(!props.isLoading)}
        >
          Loading
        </Checkbox>
        <Checkbox checked={props.isRtl} onChange={() => props.setIsRtl(!props.isRtl)}>
          RTL
        </Checkbox>
      </div>      
    </>      
  )
}

export default function Common() {
  const [ selectedCss, setSelectedCss ] = useState('nm' + CSS_DELIMITER);
  const { data: input01, updateInputValue: setInput01 } = useComInput();
  const { data: input02, updateInputValue: setInput02 } = useComInput();
  const { data: input03, updateInputValue: setInput03 } = useComInput();
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

  const colourStyles: StylesConfig<ColourOption, true> = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    singleValue: (styles) => ({ ...styles, color: 'pink' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',
  
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ':hover': {
        backgroundColor: data.color,
        color: 'white',
      },
    }),
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
        <div className={selectedCss + 'wrap'}>
          <label className={selectedCss + 'gap ' + selectedCss + 'inline_grid'}>
            <span className={selectedCss + 'label'}>스타일 변경</span>
          </label>
          <Select
            defaultValue={CSS_GROUP_LISTS[0]}
            isClearable={true}
            isSearchable={true}
            name="color"
            options={CSS_GROUP_LISTS.map((e: any) => {e.color = colorSampleList[Math.random() * colorSampleList.length | 0]; return e;})}
            styles={colourStyles}
            instanceId={'css-group-select'}
          />        
        </div>
        <CCSelect 
          selectOptions={cssData}
          onChangeSelect={selChange01}
          selectValue={cssValue}
          wrapClass={selectedCss + 'wrap'}
          label={'스타일 변경'}
          labelWrapClass={selectedCss + 'item'}
          labelClass={selectedCss + 'label'}
          selectClass={selectedCss + 'rounded_select'}
        />
      </div>
      <div className={selectedCss + 'group'}>
        {/* 라벨이 없는 기본 */}
        <CCInput 
          inputType='text'
          data={input01}
          updateData={setInput01}
          wrapClass={selectedCss + 'wrap'}
          label={'User ID'}
          labelWrapClass={selectedCss + 'item'}
          labelClass={selectedCss + 'label'}
          inputClass={selectedCss + 'rounded_input'}
        />
        {/* Inline 형태의 라벨 */}
        <CCInput 
          inputType='text'
          data={input02} updateData={setInput02}
          wrapClass={selectedCss + 'wrap'}
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
          wrapClass={selectedCss + 'wrap'}
          label={'Name'}
          placeLabelWrapClass={selectedCss + 'place_label'}
          inputClass={selectedCss + 'rounded_input'}
          isLabelAsPlaceholder={true}
        />
      </div>
      <div className={selectedCss + 'group'}>
        <div className={selectedCss + 'gap ' + selectedCss + 'inline_grid'}>
          {/* 멀티 셀렉드 X 클릭 애니메이션 */}
          <span className={selectedCss + 'gap'} >멀티 셀렉트 & X 버튼 클릭시 애니메이션</span>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={searchResult?.map(e => {e.value = e.email; e.label = e.email; return e})}
            instanceId={'wony'}
          />
        </div>
        <div className={selectedCss + 'gap ' + selectedCss + 'inline_grid'}>
          <span className={selectedCss + 'gap'} >기본 Select</span>
          <SelectSample {...defaultSelectOptions} optionList={searchResult.map(e => {e.value = e.email; e.label = e.email; return e})} instanceId={'selectDefault'} />
        </div>
        <div className={selectedCss + 'gap ' + selectedCss + 'inline_grid'}>
          <span className={selectedCss + 'gap'} >컬러풀한 Select</span>
          <Select
            closeMenuOnSelect={false}
            isMulti
            options={searchResult.map(e => {
              e.value = e.email;
              e.label = e.email;
              e.color = colorSampleList[Math.random() * colorSampleList.length | 0];
              return e})}
            styles={colourStyles}
            instanceId={'selectColorful'}
          />          
        </div>
      </div>
      <pre>{JSON.stringify(searchResult, null, 2)}</pre>
    </>
  )
}