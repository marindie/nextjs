import { ImgSlideT } from '@/app/common/comp/ComType'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const ImgSlide = ({ imgList }: ImgSlideT) => {
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
        {imgList.map((img: any, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                className='img'
                src={img}
                alt=''
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <button className='btn'>여기를 클릭하세요</button>
    </div>
  )
}

export default ImgSlide
