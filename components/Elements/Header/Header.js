import { Headline, Subline } from '@/components/UI/Headline';
import { ContentSize } from '@/components/UI/Section';
import { AvailableBlock } from '@/components/Common/AvailableBlock';
import { Navigation } from './Navigation';
import { LogoRender } from './LogoRender';

const Header = ({ dict, lang, layout = 0, headline = '', subline = '' }) => {
  const HomeLayout = () => {
    return (
      <>
        <div className="header-background">
          <LogoRender />
          <div className="gradient-overlay grd-top"></div>
          <div className="gradient-overlay grd-bottom"></div>
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

  const SubLayout = ({ headline, subline }) => {
    return (
      <ContentSize className="header-content-size">
        <div className="header-content">
          <div className="headline">
            <Headline as="h1">{headline}</Headline>
            <Subline>{subline}</Subline>
          </div>
        </div>
      </ContentSize>
    )
  };

  return (
    <header className={`layout-${layout}`}>
      <Navigation />
      {layout === 0 ? <HomeLayout /> : layout === 1 && <SubLayout headline={headline} subline={subline} />}
    </header>
  );
};
Header.displayName = 'Header';

export { Header };


//<div className="background-text">
//<Image src="/images/header-background.min.svg" width={982} height={517} alt="Header Background" priority />
//</div>
//<Image src="/images/logo-3d-render.png" width={1000} height={1000} alt="Header Background" priority />