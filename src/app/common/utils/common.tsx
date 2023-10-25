"use client"

import { useCallback, useState } from "react";

export const useInput = () => {
  const [ data, setData ] = useState<string>('');

  const updateInputValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  }, [setData]);
  
  return { data, updateInputValue };
}

