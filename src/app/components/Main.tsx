'use client'

import client1 from '@/img/client/client1.png'
import Image from 'next/image'
import { useState } from 'react'
import { useCssStore } from '../common/utils/zustand'

const Main = () => {
  const { props: css } = useCssStore()

  const [animate01, setAnimate01] = useState(true)
  const onStop01 = () => setAnimate01(false)
  const onRun01 = () => setAnimate01(true)

  const iconList = [
    client1,
    // clinet2,
    // clinet3,
    // clinet4,
    // clinet5,
    // clinet6,
    // clinet7,
    // clinet8,
    // clinet9,
    // clinet10,
    // clinet11,
    // clinet12,
    // clinet13,
    // clinet14,
    // clinet15,
    // clinet16,
    // clinet17,
    // clinet18,
    // clinet19,
    // clinet20,
    // clinet21,
    // clinet22,
    // clinet23,
    // clinet24,
    // clinet25,
    // clinet26,
    // clinet27,
    // clinet28,
    // clinet29,
    // clinet30,
    // clinet31,
    // clinet32,
    // clinet33,
    // clinet34,
    // clinet35,
    // clinet36,
    // clinet37,
    // clinet38,
    // clinet39,
    // clinet40,
    // clinet41,
    // clinet42,
    // clinet43,
    // clinet44,
    // clinet45,
    // clinet46,
    // clinet47,
    // clinet48,
    // clinet49,
    // clinet50,
    // clinet51,
    // clinet52,
    // clinet53,
    // clinet54,
    // clinet55,
    // clinet56,
    // clinet57,
    // clinet58,
    // clinet59,
    // clinet60,
    // clinet61,
    // clinet62,
    // clinet63,
    // clinet64,
    // clinet65,
    // clinet66,
    // clinet67,
  ]

  const iconList01: number[] = []
  let idx = 1
  for (idx; idx <= 10; idx++) {
    iconList01.push(idx)
  }

  return (
    <div className='nm'>
      <main
        role='main'
        className={'main'}
      >
        <section className={'section_block'}>
          <div className={'container'}>
            <div className={'column'}>
              <div className={'col_content'}>
                <h1 className={'cont01_title'}>
                  Connect with customers.
                  <br className='is-hidden-touch' />
                  Drive revenue.
                  <br className='is-hidden-touch' />
                  Smarter. Faster.
                </h1>
                <p className={'cont01_summary'}>
                  Consumers seek out authentic user-generated content (UGC) to make informed
                  purchasing decisions. Our shopper engagement platform gives you total control to
                  collect, display, and distribute UGC at a global scale. Inspire confident
                  purchases with Ratings &amp; Reviews, Q&amp;As, Visual &amp; Social Content, and
                  more.
                </p>
                <div style={{ width: '18.4rem' }}>
                  <div className={'signup'}>
                    <svg
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='far'
                      data-icon='envelope'
                      className={'signup_icon'}
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z'
                      ></path>
                    </svg>
                    <input
                      type='email'
                      data-marketo-target='global-modal'
                      placeholder='Enter your email'
                      className={'signup_email'}
                    />
                    <button
                      className={'signup_btn'}
                      data-target='global-modal'
                      data-source='marketo'
                      data-click-type='modal'
                      data-click-text='footer'
                    >
                      Get started
                    </button>
                  </div>
                </div>
              </div>
              <div className={'col_content'}>
                <h1 className='bvblock-hero__title'>
                  Connect with customers.
                  <br className='is-hidden-touch' />
                  Drive revenue.
                  <br className='is-hidden-touch' />
                  Smarter. Faster.
                </h1>
                <p className='bvblock-hero__summary'>
                  Consumers seek out authentic user-generated content (UGC) to make informed
                  purchasing decisions. Our shopper engagement platform gives you total control to
                  collect, display, and distribute UGC at a global scale. Inspire confident
                  purchases with Ratings &amp; Reviews, Q&amp;As, Visual &amp; Social Content, and
                  more.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={'section_block'}>
          <div className={'container'}>
            <div className={'column'}>
              <div className={'txt_img_box'}>
                <a href='https://www.bazaarvoice.com/products/?journey=homepage+promo+block'>
                  <div
                    style={{
                      backgroundImage:
                        'url("https://media.bazaarvoice.com/hp-promo-bg-orange.png")',
                    }}
                  >
                    <div className={'flex'}>
                      <div className={'txt'}>
                        <h5>How to enrich your product pages with UGC</h5>
                        <p>
                          Learn how to optimize your product detail pages (PDPs) for increased
                          traffic, conversion and revenue.
                        </p>
                        <span className={'btn'}>Introducing the Rich PDP</span>
                      </div>
                      <div className={'img'}>
                        <img
                          decoding='async'
                          src='https://media.bazaarvoice.com/hp-promo-rich-pdp-1.png'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className={'txt_img_box'}>
                <a href='https://www.bazaarvoice.com/products/?journey=homepage+promo+block'>
                  <div
                    style={{
                      backgroundImage:
                        'url("https://media.bazaarvoice.com/SEI17-homepage-background.jpg")',
                    }}
                  >
                    <div className={'flex'}>
                      <div className='txt is-7 is-7-mobile'>
                        <h5>Consumer behaviors have shifted for good</h5>
                        <p>
                          Download volume 17 of our flagship Shopper Experience Index report to
                          learn how consumer purchasing preferences are changing – both online and
                          in-store.
                        </p>
                        <span className={'btn'}>Calculate the value of UGC</span>
                      </div>
                      <div className={'img'}>
                        <img
                          decoding='async'
                          src='https://media.bazaarvoice.com/SEI17-homepage-images.png'
                          alt=''
                          style={{ marginTop: '-3rem', marginBottom: '-2rem' }}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={'section_block'}>
          <div>
            <div className={'container'}>
              <div className='bvblock-paragraph__container'>
                <div className={'column'}>
                  <div className={'txt_box'}>
                    <h2 className={'txt_bold'}>Tap into the power of UGC</h2>
                    <div>
                      <p>
                        Whether it’s getting your user-generated content program started or
                        expanding your content strategy, we’re here to be a true strategic partner
                        for your business. Your brand, powered by Bazaarvoice, means smarter
                        shopping for your customers – and business growth for you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={'column'}>
                  <a
                    href='/products/'
                    className={'round_btn'}
                    target='_self'
                  >
                    Explore the Bazaarvoice platform{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={'section_block'}>
          <div className={'container'}>
            <div className={'column'}>
              <div className={'txt_box'}>
                <div className={'txt_bold'}>
                  Trusted by more than 12,000+ of the world’s leading brands and retailers
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='client'>
            <div className='slidewrapper'>
              <div className='slide_container'>
                {/* 슬라이드 왼쪽 1열 */}
                <div
                  className='slide_wrapper'
                  style={{ listStyle: 'none' }}
                  onMouseEnter={onStop01}
                  onMouseLeave={onRun01}
                >
                  <div
                    key='list1-1'
                    className={'slide_left original'.concat(animate01 ? '' : ' stop')}
                  >
                    {iconList01.map((key, index) => (
                      <span key={index}>
                        <Image
                          src={client1}
                          alt=''
                        />
                      </span>
                    ))}
                  </div>
                  <div
                    key='list2-2'
                    className={'slide_left clone'.concat(animate01 ? '' : ' stop')}
                  >
                    {iconList01.map((key, index) => (
                      <span key={index}>
                        <Image
                          src={client1}
                          alt=''
                        />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Main
