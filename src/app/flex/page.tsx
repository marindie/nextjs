'use client'

import mainLogo from '@/img/client/client1.png'
import img01 from '@/img/nature/avenue01.jpg'
import img02 from '@/img/nature/mountains01.jpg'
import img03 from '@/img/nature/road01.jpg'
import Image from 'next/image'
import { useRef } from 'react'
// import function to register Swiper custom elements
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const FlexItem = () => {
  const progressCircle = useRef(1)
  const progressContent = useRef(0)

  return (
    <div className='page_full'>
      <div className='flex_row_menu bg_blue'>
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
      </div>
    </div>
  )
}

export default FlexItem
