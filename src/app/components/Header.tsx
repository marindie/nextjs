'use client'

import { useCssStore } from '../common/utils/zustand'

const Header = () => {
  const { props: css } = useCssStore()

  return (
    <header>
      <div className={css.cssGroup + 'head_logo'}>
        <a>
          <div
            id='affable-logo'
            style={{ margin: '0 auto', padding: '30px 0;' }}
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
        <a>
          <div
            className={css.cssGroup + 'head_img'}
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
    </header>
  )
}

export default Header
