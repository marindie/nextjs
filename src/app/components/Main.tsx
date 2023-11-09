'use client'

import { useCssStore } from '../common/utils/zustand'

const Main = () => {
  const { props: css } = useCssStore()

  return (
    <main>
      <div>main</div>
    </main>
  )
}

export default Main
