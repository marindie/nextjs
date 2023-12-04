'use client'

import mainLogo from '@/img/client/client1.png'
import img01 from '@/img/nature/avenue01.jpg'
import img02 from '@/img/nature/mountains01.jpg'
import img03 from '@/img/nature/road01.jpg'
import Image from 'next/image'
// import function to register Swiper custom elements
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

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
      <div className='swiper_full_width'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          className='mySwiper'
        >
          <SwiperSlide>
            <Image
              className='img'
              src={img01}
              alt=''
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className='img'
              src={img02}
              alt=''
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className='img'
              src={img03}
              alt=''
            ></Image>
          </SwiperSlide>
        </Swiper>
        <button className='btn'>여기를 클릭하세요</button>
      </div>
      <div>
        <FontAwesomeIcon icon={faCamera} />
        <button className='top_sticky'></button>
      </div>
    </div>
  )
}

export default FlexItem
