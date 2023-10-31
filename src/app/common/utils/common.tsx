"use client"

import { useCallback, useState } from "react";
import Select, { ActionMeta, GroupBase, OnChangeValue, Props } from 'react-select';

export const useComInput = () => {
  const [ data, setData ] = useState<string>('');

  const updateInputValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  }, [setData]);
  
  return { data, updateInputValue };
}

export const useComSelect = () => {
  const [ data , setData ] = useState<any>();
  const [ value , setValue ] = useState<any>();

  const onChangeSelect = useCallback((option: any) => {
    setValue(option);
  }, [setValue]);

  const MakeSelect = useCallback(<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
  >(props: Props<Option, IsMulti, Group>) => {
    return (
      <Select 
        {...props}
      />
    );
  }, []);

  return { data, setData, value, onChangeSelect, MakeSelect }
}
