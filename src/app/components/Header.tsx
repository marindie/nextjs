"use client"

import { useCssStore } from "../common/utils/zustand";

const Header = (props: {

}) => {
  const { props: css } = useCssStore();

  return (
    <header>
      <div className={css.cssGroup + 'head_logo'}>
        <a>
          <div className={css.cssGroup + 'head_img'} style={{ margin: '0 auto', maxWidth: '500px', padding: '10px 0'}} >
            <img src="https://media.bazaarvoice.com/inspire23-logo-static-white-600px_2x.png" alt="Bazaarvoice INSPIRE" />
          </div>
          <strong>Discover commerce and social trends, and learn from industry pioneers</strong>
          <span>– join our global in-person roadshow which touches down in five cities!</span>
        </a>
      </div>
    </header>
  );
}

export default Header;