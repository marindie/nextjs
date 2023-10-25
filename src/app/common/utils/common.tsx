"use client"

import { useState } from "react";

export const useInput = () => {
  const [ data, setData ] = useState<string>();

  const updateInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  }
  
  return { data, updateInputValue };
}

