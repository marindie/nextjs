"use client"

import { debounce } from "lodash";
import { useCallback } from "react";
import { InputType, SelectType } from "../common-type";

export const CCInput = (props: InputType) => {
  const changeHandler = (event: any) => {
    const searchCriteria = event.target.value.toLowerCase();
    if (searchCriteria !== "") {
      const searchResult = props.dataList.filter((item: any) => {
        return (
          item.first.toLowerCase().search(searchCriteria) !== -1 ||
          item.last.toLowerCase().search(searchCriteria) !== -1
        );
      });
      props.setDataList(searchResult);
    } else {
      props.setDataList(props.dataList);
    }
  };

  const debouncedChangeHandler = useCallback(debounce(changeHandler, 400), []);

  const labelWrapOptions = { 
    className: props.labelWrapClass, 
    style: props.labelWrapStyle,
  }  

  const labelOptions = {
    className: props.labelClass,
    style: props.labelStyle,
  }

  const placeLabelWrapOptions = { 
    className: props.placeLabelWrapClass,
    style: props.placeLabelWrapStyle,
  }  

  const placeLabelOptions = {
    className: props.placeLabelClass,
    style: props.placeLabelStyle,
  }  

  const wrapOptions = {
    className: props.wrapClass,
    style: props.wrapStyle,
  }

  const inputOptions = {
    className: props.inputClass,
    style: props.inputStyle,
    type: props.inputType,
    placeholder: props.inputPlaceHolder,
    onChange: props.updateData,
    value: props.data,
    required: true,
  }

  return (
    <div {...wrapOptions}>
      {props.isLabel && (
        <label {...labelWrapOptions}>
          <span {...labelOptions}>{props.label}</span>
        </label>
      )}
      <input {...inputOptions} />
      {props.isLabelAsPlaceholder && (
        <label {...placeLabelWrapOptions}>
          <span {...placeLabelOptions}>
            {props.label}
          </span>
        </label>
      )}
      <span className='highlight'></span>
      <span className='bar'></span>
    </div>
  );
};

export const CCSelect = (props: SelectType) => {

  const labelWrapOptions = {
    className: props.labelWrapClass,
    style: props.labelWrapStyle,
  }  

  const labelOptions = {
    className: props.labelClass,
    style: props.labelStyle,
  }

  const selectOptions = {
    className: props.selectClass,
    style: props.selectStyle,
    onChange: props.onChangeSelect,
    value: props.selectValue,
  }

  const wrapOptions = {
    className: props.wrapClass,
    style: props.wrapStyle,
  }

  const listOptions = {
    className: props.listClass,
    style: props.listStyle,
  }

  return (
    <div {...wrapOptions}>
      <label {...labelWrapOptions}>
        <span {...labelOptions}>
          {props.label}
        </span>
      </label>
      <select {...selectOptions}>
        {props.selectOptions?.map((item: {
          id: string;
          name: string;
          value: string;
        }) => {
          return (
            <option key={item.id} {...listOptions} value={item.value}>{item.name}</option>
          )
        })};
      </select>
    </div>
  )
}

