import clsx from "clsx";

const ContentSize = ({ size = 'sl', children, className }) => {
  return (
    <div className={clsx(`content-size-${size}`, className)}>
      {children}
    </div>
  );
};
ContentSize.displayName = 'ContentSize';

const Section = ({ spacing: { 
  top = true, 
  bottom= true, 
  bottomSize = 'm', 
  topSize = 'm', 
} = {}, children, className }) => {
  const spacingTopClass = top ? `spacing-above-${topSize}` : 'spacing-above-remove';
  const spacingBottomClass = bottom ? `spacing-below-${bottomSize}` : 'spacing-below-remove';

  return (
    <section className={clsx('section-container', spacingTopClass, spacingBottomClass, className)}>
      {children}
    </section>
  );
};
Section.displayName = 'Section';

export { Section, ContentSize };
