import { CSSProperties } from "react";

export type InputType = {
  labelWrapClass?: string;
  labelWrapStyle?: React.CSSProperties;
  labelClass?: string;
  labelStyle?: React.CSSProperties;
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

export type SelectType = {
  labelWrapClass?: string;
  labelWrapStyle?: React.CSSProperties;
  label?: string;
  labelClass?: string;
  labelStyle?: React.CSSProperties;  
  wrapClass?: string;
  wrapStyle?: React.CSSProperties;
  selectClass?: string;
  selectStyle?: React.CSSProperties;
  selectOptions: any;
  selectValue: string;
  listClass?: string;
  listStyle?: React.CSSProperties;  
  onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
