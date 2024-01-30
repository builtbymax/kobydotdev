import { ContentSize } from '@/components/UI/Section';
import { Logo } from '@/components/common/Logo';
import { LocaleSwitch } from "@/components/header/LocaleSwitch";

const Navigation = () => {
  return (
    <nav>
      <ContentSize>
        <div className="navigation-container">
            <Logo color="light" />
            <ul className="additional-menu">
              <li>
                <LocaleSwitch />
              </li>
            </ul>
          </div>
      </ContentSize>
    </nav>
  );
};
Navigation.displayName = 'Navigation';

export { Navigation };