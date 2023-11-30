'use client'

import { useEffect, useState } from 'react'
import { setTimeout } from 'timers'
import { useCssStore } from '../common/utils/zustand'

const Header = () => {
  const { props: css } = useCssStore()
  const [showLogo01, setShowLogo01] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowLogo01(!showLogo01)
    }, 5000)
  }, [showLogo01])

  return (
    <div className='nm'>
      <header className={'header'}>
        <div
          className={'head_logo'}
          style={{
            background: showLogo01
              ? 'url(https://media.bazaarvoice.com/campaigns/affable/Affable-Gradient-2000x400.png) center center / cover no-repeat rgb(0, 171, 244)'
              : 'url(https://media.bazaarvoice.com/Inspire23-StickyBanner-Gradient-2000x400-1.png) center center / cover no-repeat rgb(0, 171, 244)',
          }}
        >
          <a style={{ display: showLogo01 ? 'block' : 'none' }}>
            <div
              id='affable-logo'
              style={{ margin: '0 auto', padding: '30px 0' }}
            >
              <img
                src='https://media.bazaarvoice.com/campaigns/affable/Affable-Logo.png'
                style={{ maxHeight: '51px' }}
                alt='Bazaarvoice + Affable'
              />
            </div>
            <strong>The affable.ai platform is now part of the Bazaarvoice solution</strong>
            <span>– learn more</span>
            <span className='site-banner__arrow'></span>
          </a>
          <a style={{ display: showLogo01 ? 'none' : 'block' }}>
            <div
              className={'head_img'}
              style={{ margin: '0 auto', maxWidth: '300px', padding: '10px 0' }}
            >
              <img
                src='https://media.bazaarvoice.com/inspire23-logo-static-white-600px_2x.png'
                alt='Bazaarvoice INSPIRE'
              />
            </div>
            <strong>Discover commerce and social trends, and learn from industry pioneers</strong>
            <span>– join our global in-person roadshow which touches down in five cities!</span>
          </a>
        </div>
        <div className={'container'}>
          <nav className={'columns'}>
            <a
              href='https://www.bazaarvoice.com/'
              data-click-type='header'
              data-click-text='Home'
              className={'logo'}
              aria-label='Bazaarvoice homepage'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 500 500'
                style={{ width: '5rem', fill: '#002E6E' }}
              >
                <g>
                  <path
                    className='st0'
                    d='M126.07,280.91L126.07,280.91V152.13h51.74v128.49c0,19.99,16.18,36.17,36.17,36.17s36.16-16.18,36.16-36.17
      c0-19.99-16.17-36.16-36.16-36.16h-15.58V193h15.58c48.51,0,87.91,39.1,87.91,87.61c0,48.22-39.4,87.62-87.91,87.62
      C165.46,368.52,126.07,329.42,126.07,280.91 M351.86,291.2c16.17,0,29.4,13.23,29.4,29.1c0,16.17-13.23,29.1-29.4,29.1
      s-29.4-13.22-29.4-29.1C322.46,304.14,335.4,291.2,351.86,291.2 M351.86,212.7c16.17,0,29.4,13.23,29.4,29.11
      c0,16.17-13.23,29.1-29.4,29.1s-29.4-13.23-29.4-29.1C322.46,225.93,335.4,212.7,351.86,212.7 M487.4,249.45
      c0-130.55-106.14-236.68-237.27-236.68c-131.12,0-237.26,105.85-237.26,236.68v236.68h237.26C380.97,486.13,487.4,380,487.4,249.45
      '
                  ></path>
                  <g>
                    <path
                      className='st0'
                      d='M438.9,424.5c-9.42,0-16.48,7.06-16.48,16.48c0,9.42,7.06,17.07,16.48,16.48c8.83,0,16.48-7.06,16.48-16.48
        C455.38,431.56,448.32,424.5,438.9,424.5z M438.9,454.52c-7.65,0-13.53-5.3-13.53-13.54c0-7.65,5.89-13.54,13.53-13.54
        c7.65,0,13.54,5.89,13.54,13.54C452.44,449.22,446.55,454.52,438.9,454.52z'
                    ></path>
                    <path
                      className='st0'
                      d='M445.47,437c0-3.26-2.72-5.44-5.98-5.44h-7.11v17.94h3.85v-6.52h2.17l3.27,6.52h4.89l-4.35-7.07
        C444.39,441.35,445.47,439.17,445.47,437z M438.19,439.72h-2.05v-4.9h2.05c2.28,0,3.42,0.55,3.42,2.18
        C441.61,439.17,439.89,439.72,438.19,439.72z'
                    ></path>
                  </g>
                </g>
              </svg>
            </a>

            <div className={'header_menus ' + 'column'}>
              <div className={'columns'}>
                <ul
                  id='bvheader-navigation'
                  className={'navigation ' + 'column'}
                >
                  <li
                    id='menu-item-8827'
                    className={'navigation_item'}
                  >
                    <a href='/products/'>Platform</a>
                    <ul className={'navigation_submenu'}>
                      <li
                        id='menu-item-37430'
                        className={'navigation_submenu_item'}
                      >
                        <a href='#'>0th</a>
                        <ul className={'submenu_item_menu'}>
                          <li
                            id='menu-item-37432'
                            className='menu-item menu-item-type-post_type menu-item-object-page bvheader-navigation__item--full menu-item-37432 bvheader-navigation__item'
                          >
                            <a href='https://www.bazaarvoice.com/products/'>
                              <div className='bvheader-navigation__item-img-wrapper'>
                                <img
                                  width='400'
                                  height='187'
                                  src='https://media.bazaarvoice.com/Platform-Rocket-tiny.png'
                                  className='bvheader-navigation__item-img'
                                  alt=''
                                  decoding='async'
                                  loading='eager'
                                  sizes='(max-width: 400px) 100vw, 400px'
                                ></img>
                              </div>
                              Supercharge your commerce engine
                              <div className='bvheader-navigation__item-description'>
                                Let us show you how to leverage user-generated content (UGC) across
                                the entire consumer journey, and win the omnichannel experience.
                              </div>
                              <div className='bvheader-navigation__item-cta'>
                                <div
                                  className='bvheader-navigation__item-cta-link btn btn-secondary js-bv-link'
                                  data-link='/products/'
                                  role='link'
                                  data-target='_self'
                                  aria-label='Platform overview'
                                  aria-describedby='description'
                                >
                                  Platform overview
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id='menu-item-8852'
                        className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8852 bvheader-navigation__item'
                      >
                        <a href='#'>1st</a>
                        <ul className='sub-menu bvheader-navigation__submenu'>
                          <li
                            id='menu-item-8849'
                            className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8849 bvheader-navigation__item'
                          >
                            <a href='#'>COLLECT CONTENT</a>
                            <ul className='sub-menu bvheader-navigation__submenu'>
                              <li
                                id='menu-item-8919'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-8919 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/products/sampling/'>
                                  Sampling
                                  <div className='bvheader-navigation__item-description'>
                                    Get products to advocates and accumulate authentic reviews and
                                    visual content.
                                  </div>
                                </a>
                                <ul className='sub-menu bvheader-navigation__submenu'>
                                  <li
                                    id='menu-item-46972'
                                    className='bv-quick-link menu-item menu-item-type-post_type menu-item-object-page menu-item-46972 bvheader-navigation__item'
                                  >
                                    <a href='https://www.bazaarvoice.com/products/sampling/digital-product-sampling/'>
                                      Bazaarvoice Deals
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li
                                id='menu-item-8920'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8920 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/products/always-on-content/'>
                                  ReviewSource
                                  <div className='bvheader-navigation__item-description'>
                                    Activate fresh product reviews from the Influenster community.
                                  </div>
                                </a>
                              </li>
                              <li
                                id='menu-item-44156'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-44156 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/products/creator-partnerships/'>
                                  Creator Partnerships
                                  <div className='bvheader-navigation__item-description'>
                                    Power consumer discovery of your brand and products through a
                                    trusted voice.
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id='menu-item-8853'
                        className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8853 bvheader-navigation__item'
                      >
                        <a href='#'>2nd</a>
                        <ul className='sub-menu bvheader-navigation__submenu'>
                          <li
                            id='menu-item-8851'
                            className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8851 bvheader-navigation__item'
                          >
                            <a href='#'>DRIVE CONVERSION</a>
                            <ul className='sub-menu bvheader-navigation__submenu'>
                              <li
                                id='menu-item-8925'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8925 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/products/ratings-and-reviews/'>
                                  Ratings &amp; Reviews
                                  <div className='bvheader-navigation__item-description'>
                                    Leverage authentic opinions, photos, and videos to sell your
                                    product.
                                  </div>
                                </a>
                              </li>
                              <li
                                id='menu-item-8928'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8928 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/products/questions-and-answers/'>
                                  Questions &amp; Answers
                                  <div className='bvheader-navigation__item-description'>
                                    Respond to questions on your site or across the retail network.
                                  </div>
                                </a>
                              </li>
                              <li
                                id='menu-item-8930'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8930 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/products/social-commerce/'>
                                  Social Commerce
                                  <div className='bvheader-navigation__item-description'>
                                    Turn social content into shoppable experiences that drive sales
                                    – wherever shoppers are.
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id='menu-item-8855'
                        className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8855 bvheader-navigation__item'
                      >
                        <a href='#'>3rd</a>
                        <ul className='sub-menu bvheader-navigation__submenu'>
                          <li
                            id='menu-item-8854'
                            className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8854 bvheader-navigation__item'
                          >
                            <a href='#'>AMPLIFY CONTENT</a>
                            <ul className='sub-menu bvheader-navigation__submenu'>
                              <li
                                id='menu-item-8931'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8931 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/products/retail-syndication/'>
                                  Retail Syndication
                                  <div className='bvheader-navigation__item-description'>
                                    Distribute content everywhere your products are sold.
                                  </div>
                                </a>
                              </li>
                              <li
                                id='menu-item-9036'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-9036 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/products/social-media-management/'>
                                  Social Media Management
                                  <div className='bvheader-navigation__item-description'>
                                    Manage everything you need to win on social.
                                  </div>
                                </a>
                              </li>
                              <li
                                id='menu-item-9064'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-9064 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/products/brand-activation/'>
                                  In-store &amp; Digital Activations
                                  <div className='bvheader-navigation__item-description'>
                                    Activate the Influenster community to drive traffic.
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id='menu-item-8868'
                        className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8868 bvheader-navigation__item'
                      >
                        <a href='#'>4rd</a>
                        <ul className='sub-menu bvheader-navigation__submenu'>
                          <li
                            id='menu-item-8869'
                            className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8869 bvheader-navigation__item'
                          >
                            <a href='#'>OPTIMIZE STRATEGY</a>
                            <ul className='sub-menu bvheader-navigation__submenu'>
                              <li
                                id='menu-item-9037'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-9037 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/products/insights-and-reports/'>
                                  Insights and Reports
                                  <div className='bvheader-navigation__item-description'>
                                    Actionable insight into your performance, sentiment, advocates,
                                    and competitors.
                                  </div>
                                </a>
                              </li>
                              <li
                                id='menu-item-9039'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-9039 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/products/managed-sampling/'>
                                  Managed Sampling
                                  <div className='bvheader-navigation__item-description'>
                                    Take the hassle out of sampling programs for retailers.
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li
                    id='menu-item-8826'
                    className={'navigation_item'}
                  >
                    <a href='/solutions/'>Solutions</a>
                    <ul className={'navigation_submenu'}>
                      <li
                        id='menu-item-20356'
                        className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20356 bvheader-navigation__item'
                      >
                        <a href='#'>1st</a>
                        <ul className='sub-menu bvheader-navigation__submenu'>
                          <li
                            id='menu-item-20357'
                            className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20357 bvheader-navigation__item'
                          >
                            <a href='#'>COLLECT CONTENT</a>
                            <ul className='sub-menu bvheader-navigation__submenu'>
                              <li
                                id='menu-item-8887'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8887 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/solutions/launch-products/'>
                                  Launch Products
                                  <div className='bvheader-navigation__item-description'>
                                    Jump-start product launches with authentic content.
                                  </div>
                                </a>
                              </li>
                              <li
                                id='menu-item-20359'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-20359 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/solutions/support-core-products/'>
                                  Support Core Products
                                  <div className='bvheader-navigation__item-description'>
                                    Keep your core product pages as fresh as your new ones.
                                  </div>
                                </a>
                              </li>
                              <li
                                id='menu-item-20358'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-20358 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/solutions/improve-content-mix/'>
                                  Improve Content Mix
                                  <div className='bvheader-navigation__item-description'>
                                    Give shoppers confidence to buy wherever they are in their
                                    journey.
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id='menu-item-8829'
                        className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8829 bvheader-navigation__item'
                      >
                        <a href='#'>2nd</a>
                        <ul className='sub-menu bvheader-navigation__submenu'>
                          <li
                            id='menu-item-8835'
                            className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8835 bvheader-navigation__item'
                          >
                            <a href='#'>DRIVE REVENUE</a>
                            <ul className='sub-menu bvheader-navigation__submenu'>
                              <li
                                id='menu-item-9063'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-9063 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/solutions/boost-sales/'>
                                  Boost Sales
                                  <div className='bvheader-navigation__item-description'>
                                    Grow order value online and in-store.
                                  </div>
                                </a>
                              </li>
                              <li
                                id='menu-item-8883'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8883 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/solutions/accelerate-conversion/'>
                                  Accelerate Conversion
                                  <div className='bvheader-navigation__item-description'>
                                    Optimize e-commerce, social, and in-store for conversion.
                                  </div>
                                </a>
                              </li>
                              <li
                                id='menu-item-8884'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8884 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/solutions/increase-profit-margin/'>
                                  Increase Profit Margin
                                  <div className='bvheader-navigation__item-description'>
                                    Reduce costs with superior shopping experiences.
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id='menu-item-8830'
                        className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8830 bvheader-navigation__item'
                      >
                        <a href='#'>3rd</a>
                        <ul className='sub-menu bvheader-navigation__submenu'>
                          <li
                            id='menu-item-8836'
                            className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8836 bvheader-navigation__item'
                          >
                            <a href='#'>SCALE YOUR BRAND</a>
                            <ul className='sub-menu bvheader-navigation__submenu'>
                              <li
                                id='menu-item-8885'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8885 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/solutions/win-at-retail/'>
                                  Win at Retail
                                  <div className='bvheader-navigation__item-description'>
                                    Syndicate content to retailers and strengthen partnerships.
                                  </div>
                                </a>
                              </li>
                              <li
                                id='menu-item-8888'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8888 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/solutions/acquire-customers/'>
                                  Acquire Customers
                                  <div className='bvheader-navigation__item-description'>
                                    Stand out in search and advertising.
                                  </div>
                                </a>
                              </li>
                              <li
                                id='menu-item-8892'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8892 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/solutions/expand-globally/'>
                                  Expand Globally
                                  <div className='bvheader-navigation__item-description'>
                                    Win new customers by expanding into new markets.
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id='menu-item-8831'
                        className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8831 bvheader-navigation__item'
                      >
                        <a href='#'>4th</a>
                        <ul className='sub-menu bvheader-navigation__submenu'>
                          <li
                            id='menu-item-8843'
                            className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8843 bvheader-navigation__item'
                          >
                            <a href='#'>ACTIONABLE INSIGHTS</a>
                            <ul className='sub-menu bvheader-navigation__submenu'>
                              <li
                                id='menu-item-8893'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8893 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/solutions/gain-a-competitive-edge/'>
                                  Gain a Competitive Advantage
                                  <div className='bvheader-navigation__item-description'>
                                    Benchmark and discover competitive insights.
                                  </div>
                                </a>
                              </li>
                              <li
                                id='menu-item-8894'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8894 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/solutions/elevate-marketing/'>
                                  Elevate Marketing
                                  <div className='bvheader-navigation__item-description'>
                                    Drive informed marketing with direct consumer feedback loops.
                                  </div>
                                </a>
                              </li>
                              <li
                                id='menu-item-8897'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8897 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/solutions/improve-products/'>
                                  Improve Products
                                  <div className='bvheader-navigation__item-description'>
                                    Propel product innovations and enhancements.
                                  </div>
                                </a>
                              </li>
                              <li
                                id='menu-item-8898'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8898 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/solutions/reduce-returns/'>
                                  Reduce Returns
                                  <div className='bvheader-navigation__item-description'>
                                    Enable consumers to buy the right product the first time.
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id='menu-item-8834'
                        className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8834 bvheader-navigation__item'
                      >
                        <a href='#'>5th</a>
                        <ul className='sub-menu bvheader-navigation__submenu'>
                          <li
                            id='menu-item-8845'
                            className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8845 bvheader-navigation__item'
                          >
                            <a href='#'>BUILD LOYALTY</a>
                            <ul className='sub-menu bvheader-navigation__submenu'>
                              <li
                                id='menu-item-8899'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8899 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/solutions/drive-advocacy/'>
                                  Drive Advocacy
                                  <div className='bvheader-navigation__item-description'>
                                    Create and strengthen loyal brand advocates.
                                  </div>
                                </a>
                              </li>
                              <li
                                id='menu-item-8900'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8900 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/solutions/establish-trust/'>
                                  Establish Trust
                                  <div className='bvheader-navigation__item-description'>
                                    Expedite the consumer discovery and buying journey.
                                  </div>
                                </a>
                              </li>
                              <li
                                id='menu-item-8901'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8901 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/solutions/talk-with-consumers/'>
                                  Talk with Consumers
                                  <div className='bvheader-navigation__item-description'>
                                    Build relationships through public conversations.
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id='menu-item-8848'
                            className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8848 bvheader-navigation__item'
                          >
                            <a href='#'>FOR RETAIL</a>
                            <ul className='sub-menu bvheader-navigation__submenu'>
                              <li
                                id='menu-item-34355'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-34355 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/solutions/retailers/'>
                                  Drive Retail Growth
                                  <div className='bvheader-navigation__item-description'>
                                    Our solutions, technology, and expertise drive e-commerce growth
                                    for retailers of all sizes and industries.
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li
                    id='menu-item-26711'
                    className={'navigation_item'}
                  >
                    <a href='https://www.bazaarvoice.com/industries/'>Industries</a>
                    <ul className={'navigation_submenu'}>
                      <li
                        id='menu-item-26712'
                        className='menu-item menu-item-type-post_type menu-item-object-page menu-item-26712 bvheader-navigation__item'
                      >
                        <a href='https://www.bazaarvoice.com/industries/apparel-accessories/'>
                          Apparel &amp; Accessories
                          <div className='bvheader-navigation__item-description'>
                            Bring the in-store retail shopping experience to your site with
                            inspiring imagery from customers.
                          </div>
                        </a>
                      </li>
                      <li
                        id='menu-item-26715'
                        className='menu-item menu-item-type-post_type menu-item-object-page menu-item-26715 bvheader-navigation__item'
                      >
                        <a href='https://www.bazaarvoice.com/industries/consumer-electronics/'>
                          Consumer Electronics
                          <div className='bvheader-navigation__item-description'>
                            Provide informative product content at every touchpoint—from discovery
                            to purchase.
                          </div>
                        </a>
                      </li>
                      <li
                        id='menu-item-26716'
                        className='menu-item menu-item-type-post_type menu-item-object-page menu-item-26716 bvheader-navigation__item'
                      >
                        <a href='https://www.bazaarvoice.com/industries/consumer-packaged-goods/'>
                          Consumer Packaged Goods
                          <div className='bvheader-navigation__item-description'>
                            Stand out on the digital shelf with more quality reviews in more places
                            that convert.
                          </div>
                        </a>
                      </li>
                      <li
                        id='menu-item-26717'
                        className='menu-item menu-item-type-post_type menu-item-object-page menu-item-26717 bvheader-navigation__item'
                      >
                        <a href='https://www.bazaarvoice.com/industries/food-beverage/'>
                          Food &amp; Beverage
                          <div className='bvheader-navigation__item-description'>
                            Easily sample new products and keep product pages fresh with new
                            reviews.
                          </div>
                        </a>
                      </li>
                      <li
                        id='menu-item-26713'
                        className='menu-item menu-item-type-post_type menu-item-object-page menu-item-26713 bvheader-navigation__item'
                      >
                        <a href='https://www.bazaarvoice.com/industries/health-beauty/'>
                          Health &amp; Beauty
                          <div className='bvheader-navigation__item-description'>
                            Bring the beauty counter experience to your site with inspiring imagery
                            from customers.
                          </div>
                        </a>
                      </li>
                      <li
                        id='menu-item-26714'
                        className='menu-item menu-item-type-post_type menu-item-object-page menu-item-26714 bvheader-navigation__item'
                      >
                        <a href='https://www.bazaarvoice.com/industries/home-improvement/'>
                          Home Improvement
                          <div className='bvheader-navigation__item-description'>
                            Give DIY shoppers the product content they need at every stage of their
                            journey.
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id='menu-item-46008'
                    className={'navigation_item'}
                  >
                    <a href='https://www.bazaarvoice.com/services/'>Services</a>
                  </li>
                  <li
                    id='menu-item-8828'
                    className={'navigation_item'}
                  >
                    <a href='/resources/'>Resources</a>
                    <ul className={'navigation_submenu'}>
                      <li
                        id='menu-item-9065'
                        className='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-9065 bvheader-navigation__item'
                      >
                        <a href='https://www.bazaarvoice.com/resources/'>
                          Resources Hub
                          <div className='bvheader-navigation__item-description'>
                            Get cutting-edge insights to accelerate your success.
                          </div>
                        </a>
                        <ul className='sub-menu bvheader-navigation__submenu'>
                          <li
                            id='menu-item-46973'
                            className='bv-quick-link menu-item menu-item-type-post_type menu-item-object-resources menu-item-46973 bvheader-navigation__item'
                          >
                            <a href='https://www.bazaarvoice.com/resources/shopper-experience-index-volume-17/'>
                              Shopper Experience Index
                            </a>
                          </li>
                          <li
                            id='menu-item-21158'
                            className='bv-quick-link menu-item menu-item-type-post_type menu-item-object-resources menu-item-21158 bvheader-navigation__item'
                          >
                            <a href='https://www.bazaarvoice.com/resources/the-brand-managers-guide-to-user-generated-content-best-practices/'>
                              Brand manager guide to UGC
                            </a>
                          </li>
                          <li
                            id='menu-item-45513'
                            className='bv-quick-link menu-item menu-item-type-post_type menu-item-object-resources menu-item-45513 bvheader-navigation__item'
                          >
                            <a href='https://www.bazaarvoice.com/resources/a-practical-guide-for-social-media-professionals-to-drive-engagement-and-commerce/'>
                              Social media manager guide to UGC
                            </a>
                          </li>
                          <li
                            id='menu-item-24939'
                            className='bv-quick-link menu-item menu-item-type-post_type menu-item-object-resources menu-item-24939 bvheader-navigation__item'
                          >
                            <a href='https://www.bazaarvoice.com/resources/the-e-commerce-managers-guide-to-user-generated-content/'>
                              E-commerce manager guide to UGC
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id='menu-item-9066'
                        className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-9066 bvheader-navigation__item'
                      >
                        <a href='/blog/'>
                          Blog
                          <div className='bvheader-navigation__item-description'>
                            Strategies, research, and industry trends – your pulse on the
                            marketplace.{' '}
                          </div>
                        </a>
                        <ul className='sub-menu bvheader-navigation__submenu'>
                          <li
                            id='menu-item-28093'
                            className='bv-quick-link menu-item menu-item-type-taxonomy menu-item-object-category menu-item-28093 bvheader-navigation__item'
                          >
                            <a href='https://www.bazaarvoice.com/blog/topic/long-reads/'>
                              Long reads
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id='menu-item-9067'
                        className='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-9067 bvheader-navigation__item'
                      >
                        <a href='https://www.bazaarvoice.com/success-stories/'>
                          Case Studies
                          <div className='bvheader-navigation__item-description'>
                            Our clients’ success speaks for itself.
                          </div>
                        </a>
                        <ul className='sub-menu bvheader-navigation__submenu'>
                          <li
                            id='menu-item-30337'
                            className='bv-quick-link menu-item menu-item-type-post_type menu-item-object-page menu-item-30337 bvheader-navigation__item'
                          >
                            <a href='https://www.bazaarvoice.com/bazaarvoice-is-1-in-ugc/'>
                              Bazaarvoice is #1 in UGC
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id='menu-item-16346'
                        className='menu-item menu-item-type-post_type menu-item-object-page menu-item-16346 bvheader-navigation__item'
                      >
                        <a href='https://www.bazaarvoice.com/roi-calculator/'>
                          Calculate the value of UGC
                          <div className='bvheader-navigation__item-description'>
                            Discover the impact user-generated content could have on your sales both
                            online and in-store.
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id='menu-item-17341'
                    className={'navigation_item'}
                  >
                    <a href='/company/'>Company</a>
                    <ul className={'navigation_submenu'}>
                      <li
                        id='menu-item-31229'
                        className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-31229 bvheader-navigation__item'
                      >
                        <a href='#'>1st</a>
                        <ul className='sub-menu bvheader-navigation__submenu'>
                          <li
                            id='menu-item-31230'
                            className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-31230 bvheader-navigation__item'
                          >
                            <a href='#'>WHO WE ARE</a>
                            <ul className='sub-menu bvheader-navigation__submenu'>
                              <li
                                id='menu-item-17342'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-17342 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/company/'>
                                  About Bazaarvoice
                                  <div className='bvheader-navigation__item-description'>
                                    Bazaarvoice brings a people-first approach to advanced
                                    technology, connecting thousands of brands and retailers to the
                                    voices of their customers.
                                  </div>
                                </a>
                                <ul className='sub-menu bvheader-navigation__submenu'>
                                  <li
                                    id='menu-item-17343'
                                    className='bv-quick-link menu-item menu-item-type-post_type menu-item-object-page menu-item-17343 bvheader-navigation__item'
                                  >
                                    <a href='https://www.bazaarvoice.com/company/careers/'>
                                      Careers
                                    </a>
                                  </li>
                                  <li
                                    id='menu-item-21160'
                                    className='bv-quick-link menu-item menu-item-type-post_type menu-item-object-page menu-item-21160 bvheader-navigation__item'
                                  >
                                    <a href='https://www.bazaarvoice.com/company/leadership/'>
                                      Leadership Team
                                    </a>
                                  </li>
                                  <li
                                    id='menu-item-29488'
                                    className='bv-quick-link menu-item menu-item-type-post_type menu-item-object-page menu-item-29488 bvheader-navigation__item'
                                  >
                                    <a href='https://www.bazaarvoice.com/company/diversity-equity-and-inclusion/'>
                                      Diversity, Equity &amp; Inclusion
                                    </a>
                                  </li>
                                  <li
                                    id='menu-item-33742'
                                    className='bv-quick-link menu-item menu-item-type-post_type menu-item-object-page menu-item-33742 bvheader-navigation__item'
                                  >
                                    <a href='https://www.bazaarvoice.com/company/awards-and-recognition/'>
                                      Bragging Rights (Our Awards)
                                    </a>
                                  </li>
                                  <li
                                    id='menu-item-21161'
                                    className='bv-quick-link menu-item menu-item-type-post_type menu-item-object-page menu-item-21161 bvheader-navigation__item'
                                  >
                                    <a href='https://www.bazaarvoice.com/company/stronger-together/'>
                                      Community outreach
                                    </a>
                                  </li>
                                  <li
                                    id='menu-item-22688'
                                    className='bv-quick-link menu-item menu-item-type-post_type menu-item-object-page menu-item-22688 bvheader-navigation__item'
                                  >
                                    <a href='https://www.bazaarvoice.com/company/bazaarvoice-faqs/'>
                                      Frequently Asked Questions
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li
                                id='menu-item-17430'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-17430 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/press/'>
                                  Press room
                                  <div className='bvheader-navigation__item-description'>
                                    Get the latest Bazaarvoice news from around the world.
                                  </div>
                                </a>
                                <ul className='sub-menu bvheader-navigation__submenu'>
                                  <li
                                    id='menu-item-32314'
                                    className='bv-quick-link menu-item menu-item-type-post_type menu-item-object-page menu-item-32314 bvheader-navigation__item'
                                  >
                                    <a href='https://www.bazaarvoice.com/events/'>Events</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id='menu-item-31231'
                        className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-31231 bvheader-navigation__item'
                      >
                        <a href='#'>2nd</a>
                        <ul className='sub-menu bvheader-navigation__submenu'>
                          <li
                            id='menu-item-31232'
                            className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-31232 bvheader-navigation__item'
                          >
                            <a href='#'>WORKING WITH US</a>
                            <ul className='sub-menu bvheader-navigation__submenu'>
                              <li
                                id='menu-item-18057'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-18057 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/company/the-bazaarvoice-advantage/'>
                                  The Bazaarvoice Advantage
                                  <div className='bvheader-navigation__item-description'>
                                    Get shoppers what they need at every stage of their journey.
                                  </div>
                                </a>
                                <ul className='sub-menu bvheader-navigation__submenu'>
                                  <li
                                    id='menu-item-30352'
                                    className='bv-quick-link menu-item menu-item-type-post_type menu-item-object-page menu-item-30352 bvheader-navigation__item'
                                  >
                                    <a href='https://www.bazaarvoice.com/company/influenster-product-review-app/'>
                                      Influenster Community
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li
                                id='menu-item-17344'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-17344 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/partners/'>
                                  Partner Program
                                  <div className='bvheader-navigation__item-description'>
                                    Tools, resources, and insights to grow your business and delight
                                    clients.
                                  </div>
                                </a>
                                <ul className='sub-menu bvheader-navigation__submenu'>
                                  <li
                                    id='menu-item-36560'
                                    className='bv-quick-link menu-item menu-item-type-post_type menu-item-object-page menu-item-36560 bvheader-navigation__item'
                                  >
                                    <a href='https://www.bazaarvoice.com/agency-partners/'>
                                      Why agencies partner with us
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li
                                id='menu-item-18609'
                                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-18609 bvheader-navigation__item'
                              >
                                <a href='https://www.bazaarvoice.com/company/trust/'>
                                  Trust
                                  <div className='bvheader-navigation__item-description'>
                                    Security, privacy, and compliance are baked into everything we
                                    do.
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>{' '}
                <div className={'sidelinks'}>
                  <div className={'flex'}>
                    <div className={'order01'}>
                      <div className={'contact'}>
                        <div className={'menu_container'}>
                          <ul
                            id='menu-aux-menu'
                            className={'menu'}
                          >
                            <li
                              id='menu-item-45923'
                              className={'menu_item'}
                            >
                              <a href='https://www.bazaarvoice.com/contact/'>Contact us</a>
                            </li>
                            <li
                              id='menu-item-45924'
                              className={'menu_item'}
                            >
                              <a
                                href='https://www.bazaarvoice.com/pricing/'
                                aria-current='page'
                              >
                                Pricing
                              </a>
                            </li>
                          </ul>
                        </div>{' '}
                      </div>
                    </div>

                    <div className={'order02'}>
                      <div className={'login'}>
                        <span className={'selection'}>Log in</span>
                        <div className={'filter'}>
                          <ul
                            id='menu-login'
                            className={'menu'}
                          >
                            <li
                              id='menu-item-370'
                              className={'menu_item'}
                            >
                              <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://portal.bazaarvoice.com/'
                              >
                                Bazaarvoice Portal
                              </a>
                            </li>
                            <li
                              id='menu-item-3802'
                              className={'menu_item'}
                            >
                              <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://app.curalate.com/login'
                              >
                                Social Commerce
                              </a>
                            </li>
                          </ul>
                        </div>{' '}
                      </div>
                    </div>
                    <div className={'order03'}>
                      <div className={'language'}>
                        <span className={'selection'}>EN</span>
                        <div className={'filter'}>
                          <ul
                            id='menu-language-toggle'
                            className={'menu'}
                          >
                            <li
                              id='menu-item-87'
                              className={'menu_item'}
                            >
                              <a
                                href='/'
                                data-label='EN'
                              >
                                English
                              </a>
                            </li>
                            <li
                              id='menu-item-89'
                              className={'menu_item'}
                            >
                              <a
                                href='/fr/'
                                data-label='FR'
                              >
                                French
                              </a>
                            </li>
                            <li
                              id='menu-item-90'
                              className={'menu_item'}
                            >
                              <a
                                href='/de/'
                                data-label='DE'
                              >
                                German
                              </a>
                            </li>
                          </ul>
                        </div>{' '}
                      </div>
                    </div>
                  </div>
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
                      data-ld-data-id='5149'
                      data-ld-type='trackedEvent'
                      data-ld-name='High intent - Start demo request from top nav'
                      data-ld-conversion='undefined'
                    >
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={'hamburger'}
              aria-label='Toggle mobile navigation'
            >
              <span></span>
            </button>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
