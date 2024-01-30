import clsx from "clsx";

const HeadlineContainer = ({ children, inlineComponent = true, alignment = 'left'}) => {
  const alignmentClass = `alignment-${alignment}`;
  const inlineComponentClass = inlineComponent ? 'inline-component' : 'standalone';

  return (
    <div className={clsx("headline-element-container", {[alignmentClass]: alignment}, [inlineComponentClass])}>
      {children}
    </div>
  );
};
HeadlineContainer.displayName = 'HeadlineContainer';

const Headline = ({ as: Tag = "h1", children, className, tagStyle = Tag }) => {
  return (
    <Tag className={clsx(`headline-style-${tagStyle}`, className)}>
      {children}
    </Tag>
  )
};
Headline.displayName = 'Headline';

const Subline = ({ children, className }) => {
  return (
    <p className={clsx('subline', className)}>
      {children}
    </p>
  )
};
Subline.displayName = 'Subline';

const Roofline = ({ children, className }) => {
  return (
    <p className={clsx('roofline', className)}>
      {children}
    </p>
  )
};
Roofline.displayName = 'Roofline';

export { HeadlineContainer, Headline, Subline, Roofline };

//
// Example usage:
// <HeadlineContainer>
//   <Roofline>Roofline</Roofline>
//   <Headline as="h2">Headline</Headline>
//   <Subline>Subline</Subline>
// </HeadlineContainer>
//