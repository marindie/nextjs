import { debounce } from "lodash";
import { useCallback } from "react";

type InputType = {
  wrapClass?: string;
  wrapStyle?: React.CSSProperties;
  inputClass?: string;
  inputStyle?: React.CSSProperties;
  inputType?: string;
  inputPlaceHolder?: string;
  dataList?: any;
  setDataList?: any;
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
    <div className={props.wrapClass} style={props.wrapStyle}>
      <input className={props.inputClass} style={props.inputStyle} type={props.inputType} placeholder={props.inputPlaceHolder}>

      </input>
    </div>
  );
};

