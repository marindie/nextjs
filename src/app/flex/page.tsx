'use client'

import mainLogo from '@/img/client/client1.png'
import Image from 'next/image'

const FlexItem = () => {
  return (
    <div>
      <div className='flex_row_menu'>
        <div className='item'>
          <Image
            src={mainLogo}
            alt=''
          />
        </div>
        <div className='item'>전체메뉴</div>
        <div className='item'>메뉴그룹1</div>
        <div className='item'>메뉴그룹2</div>
        <div className='item'>로그인</div>
      </div>
    </div>
  )
}

export default FlexItem
