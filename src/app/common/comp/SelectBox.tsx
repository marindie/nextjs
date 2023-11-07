import { SelectType } from '../utils/commonType'

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
        <span {...labelOptions}>{props.label}</span>
      </label>
      <select {...selectOptions}>
        {props.selectOptions?.map((item: { id: string; name: string; value: string }) => {
          return (
            <option
              key={item.id}
              {...listOptions}
              value={item.value}
            >
              {item.name}
            </option>
          )
        })}
        ;
      </select>
    </div>
  )
}
