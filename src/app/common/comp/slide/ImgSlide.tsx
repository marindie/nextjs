import Image from 'next/image'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const ImgSlide = (ImgSlideT) => {
  return (
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
  )
}

export default ImgSlide
