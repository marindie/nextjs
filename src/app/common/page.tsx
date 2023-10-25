"use client"

import { useState } from "react";
import { CCInput } from "./comp/CommonComp";
import { useInput } from "./utils/common";

export default function Common() {
  const [ cssStyleName, setCssStyleName ] = useState("normal");
  const { data, updateInputValue } = useInput();
  return (
    <>
      <div>
        <CCInput inputType='text' data={data} updateData={updateInputValue} label={'샘플 INPUT'} labelClass='def-label' wrapClass='group' inputClass='rounded-input' />
      </div>
    </>
  )
}