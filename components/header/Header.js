import AvailableBlock from '../common/AvailableBlock';
import Navigation from './Navigation';
import Image from 'next/image';

export default function Header({ dict, lang }) {
  return (
    <header>
      <Navigation dict={dict} lang={lang} />
      <div className="header-background">
        <Image src="/images/header-background.min.svg" width={982} height={517} alt="Header Background" priority />
      </div>
      <div className="content-size-sl header-content-size">
        <div className="header-content">
          <AvailableBlock text={dict.common['available']} lang={lang} />
          <div className="headline">
            <h1>
              <b>{dict.home.header['headline-1']}</b>
              {dict.home.header['headline-2']}
            </h1>
          </div>
        </div>
      </div>
    </header>
  )
};