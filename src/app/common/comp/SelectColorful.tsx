import chroma from "chroma-js";
import { ActionMeta, StylesConfig } from "react-select";
import { useComSelect } from "@/app/common/utils/common";

interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

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
  placeholder?: string,
  onChange?: <Option,>(option: Option | null) => void;
  value?: any,
}) => {
  let index = 0;
  const { MakeSelect } = useComSelect();
  return (
    <MakeSelect
      defaultValue={props.optionList ? props.optionList[0] : ''}
      closeMenuOnSelect={ !props.isMulti }
      isMulti={props.isMulti}
      options={props.optionList}
      styles={colourStyles}
      instanceId={props.instanceId}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  )
}

export default SelectColorful;