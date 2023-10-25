"use client"

import { CCInput } from "./comp/CommonComp";
import { useInput } from "./utils/common";

export default function Common() {
  const { data, updateInputValue } = useInput();
  return (
    <>
      <div>
        <CCInput data={data} updateData={updateInputValue} label={'샘플 INPUT'}/>
      </div>
    </>
  )
}