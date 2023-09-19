import AvailableBlock from '../common/AvailableBlock';
import Navigation from './Navigation';
import Image from 'next/image';

export default function Header({ dict, lang, layout = 0 }) {

  const HomeLayout = () => {
    return (
      <>
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
      </>
    )
  };

  const SubLayout = () => {
    return (
      <div className="content-size-sl header-content-size">
        <div className="header-content">
          <div className="headline">
            <h1>{dict.interview.header['headline']}</h1>
            <p>{dict.interview.header['subline']}</p>
          </div>
        </div>
      </div>
    )
  };

  return (
    <header className={`layout-${layout}`}>
      <Navigation dict={dict} lang={lang} />
      {layout === 0 ? <HomeLayout /> : layout === 1 && <SubLayout />}
    </header>
  )
};