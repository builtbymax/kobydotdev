export default function Headline({ headline, subline, tag = 'h2', inlineComponent = true, alignment = 'left'}) {
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

  return (
    <div className={`headline-element-container alignment-${alignment} ${inlineComponent ? 'inline-component' : 'standalone'}`}>
      {headlineElement}
      {sublineElement}
    </div>
  );
}