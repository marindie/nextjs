'use client'

import { useCssStore } from '../common/utils/zustand'

const Main = () => {
  const { props: css } = useCssStore()

  return (
    <main
      role='main'
      className={css.cssGroup + 'main'}
    >
      <section className={css.cssGroup + 'section_block'}>
        <div className={css.cssGroup + 'container'}>
          <div className={css.cssGroup + 'column'}>
            <div className={css.cssGroup + 'col_content'}>
              <h1 className={css.cssGroup + 'cont01_title'}>
                Connect with customers.
                <br className='is-hidden-touch' />
                Drive revenue.
                <br className='is-hidden-touch' />
                Smarter. Faster.
              </h1>
              <p className={css.cssGroup + 'cont01_summary'}>
                Consumers seek out authentic user-generated content (UGC) to make informed
                purchasing decisions. Our shopper engagement platform gives you total control to
                collect, display, and distribute UGC at a global scale. Inspire confident purchases
                with Ratings &amp; Reviews, Q&amp;As, Visual &amp; Social Content, and more.
              </p>
              <div style={{ width: '18.4rem' }}>
                <div className={css.cssGroup + 'signup'}>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='far'
                    data-icon='envelope'
                    className={css.cssGroup + 'signup_icon'}
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
                    className={css.cssGroup + 'signup_email'}
                  />
                  <button
                    className={css.cssGroup + 'signup_btn'}
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
            <div className={css.cssGroup + 'col_content'}>
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
                collect, display, and distribute UGC at a global scale. Inspire confident purchases
                with Ratings &amp; Reviews, Q&amp;As, Visual &amp; Social Content, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={css.cssGroup + 'section_block'}>
        <div className={css.cssGroup + 'container'}>
          <div className={css.cssGroup + 'column'}>
            <div className={css.cssGroup + 'txt_img_box'}>
              <a href='https://www.bazaarvoice.com/products/?journey=homepage+promo+block'>
                <div
                  style={{
                    backgroundImage: "url('https://media.bazaarvoice.com/hp-promo-bg-orange.png')",
                  }}
                >
                  <div className={css.cssGroup + 'flex'}>
                    <div className={css.cssGroup + 'txt'}>
                      <h5>How to enrich your product pages with UGC</h5>
                      <p>
                        Learn how to optimize your product detail pages (PDPs) for increased
                        traffic, conversion and revenue.
                      </p>
                      <span className={css.cssGroup + 'btn'}>Introducing the Rich PDP</span>
                    </div>
                    <div className={css.cssGroup + 'img'}>
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
            <div className={css.cssGroup + 'txt_img_box'}>
              <a href='https://www.bazaarvoice.com/products/?journey=homepage+promo+block'>
                <div
                  style={{
                    backgroundImage: "url('https://media.bazaarvoice.com/hp-promo-bg-green.png')",
                  }}
                >
                  <div className={css.cssGroup + 'flex'}>
                    <div className='column is-7 is-7-mobile'>
                      <h5>Supercharge your commerce engine</h5>
                      <p>
                        Shoppers seek out content from other consumers to help them make informed
                        and confident purchases – both online and in-store.
                      </p>
                      <span className={css.cssGroup + 'btn'}>Calculate the value of UGC</span>
                    </div>
                    <div className={css.cssGroup + 'img'}>
                      <img
                        decoding='async'
                        src='https://media.bazaarvoice.com/hp-promo-calculator-1.png'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main