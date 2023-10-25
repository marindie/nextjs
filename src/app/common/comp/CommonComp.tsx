"use client"

import { debounce } from "lodash";
import { useCallback } from "react";
import { useInput } from "../utils/common";

type InputType = {
  wrapClass?: string;
  wrapStyle?: React.CSSProperties;
  inputClass?: string;
  inputStyle?: React.CSSProperties;
  inputType?: string;
  inputPlaceHolder?: string;
  dataList?: any;
  setDataList?: any;
  data?: string;
  updateData?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

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

  return (
    <label>
      {props.label}
      <div className={props.wrapClass} style={props.wrapStyle}>
        <input className={props.inputClass} style={props.inputStyle} type={props.inputType} placeholder={props.inputPlaceHolder} onChange={props.updateData} value={props.data} />
      </div>
    </label>
  );
};

