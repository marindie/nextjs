import chroma from "chroma-js";
import { StylesConfig } from "react-select";
import { useComSelect } from "@/app/common/utils/common";

interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

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

export const colourStyles: StylesConfig<ColourOption, true> = {
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

const SelectColorful = (props: {
  isMulti?: true,
  optionList: Array<any>,
  instanceId: string,
}) => {
  let index = 0;
  const { data: select01, setData: setSelect01, MakeSelect } = useComSelect();
  
  return (
    <MakeSelect
      closeMenuOnSelect={ !props.isMulti }
      isMulti={props.isMulti}
      options={props.optionList.map(e => {
        e.color = colorSampleList[index++ % colorSampleList.length | 0];
        return e})}
      styles={colourStyles}
      instanceId={props.instanceId}
    />
  )
}

export default SelectColorful;