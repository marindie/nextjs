import { useComSelect } from "../utils/common";

const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

const SelectWithCheckBox = (props : {
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
  const { data: samSelect01, setData: setSamSelect01, MakeSelect } = useComSelect();
  return (
    <>
      <MakeSelect
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

export default SelectWithCheckBox;