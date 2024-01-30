import { Headline, Subline } from '@/components/UI/Headline';
import { ContentSize } from '@/components/UI/Section';
import { AvailableBlock } from '@/components/common/AvailableBlock';
import { Navigation } from './Navigation';
import Image from 'next/image';

const Header = ({ dict, lang, layout = 0 }) => {

  const HomeLayout = () => {
    return (
      <>
        <div className="header-background">
          <Image src="/images/header-background.min.svg" width={982} height={517} alt="Header Background" priority />
        </div>
        <ContentSize className="header-content-size">
          <div className="header-content">
            <AvailableBlock text={dict.common['available']} lang={lang} />
            <div className="headline">
              <Headline as="h1">
                <b>{dict.home.header['headline-1']}</b>
                {dict.home.header['headline-2']}
              </Headline>
            </div>
          </div>
        </ContentSize>
      </>
    )
  };

  const SubLayout = () => {
    return (
      <ContentSize className="header-content-size">
        <div className="header-content">
          <div className="headline">
            <Headline as="h1">{dict.interview.header['headline']}</Headline>
            <Subline>{dict.interview.header['subline']}</Subline>
          </div>
        </div>
      </ContentSize>
    )
  };

  return (
    <header className={`layout-${layout}`}>
      <Navigation />
      {layout === 0 ? <HomeLayout /> : layout === 1 && <SubLayout />}
    </header>
  );
};
Header.displayName = 'Header';

export { Header };