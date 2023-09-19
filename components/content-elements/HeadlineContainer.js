export default function Headline({ headline, subline, tag = 'h2', inlineComponent = true, alignment = 'left', innerCopy = false}) {
  let headlineElement;
  let sublineElement;
  const HTag = `${tag}`;

  if (!headline && !subline) {
    return null;
  }

  if (headline) {
    headlineElement = <HTag className="headline">{headline}</HTag>;
  }

  if (subline) {
    sublineElement = <p className="subline">{subline}</p>;
  }

  const classNames = [
    'headline-element-container',
    `alignment-${alignment}`,
    inlineComponent ? 'inline-component' : 'standalone',
    innerCopy ? 'inner-copy-width' : 'default-width',
  ].join(' ');

  return (
    <div className={classNames}>
      {headlineElement}
      {sublineElement}
    </div>
  );
}