'use client'

import mainLogo from '@/img/client/client1.png'
import img01 from '@/img/nature/avenue01.jpg'
import img02 from '@/img/nature/mountains01.jpg'
import img03 from '@/img/nature/road01.jpg'
import Image from 'next/image'
// import function to register Swiper custom elements
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImgSlide from '../common/comp/slide/ImgSlide'

const FlexItem = () => {
  return (
    <div className='page_full'>
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
        <button className='item login_btn'>로그인</button>
      </div>
      <ImgSlide imgList={[img01, img02, img03]} />
      <div>
        <FontAwesomeIcon icon={faCamera} />
        <button className='top_sticky'></button>
      </div>
    </div>
  )
}

export default FlexItem
