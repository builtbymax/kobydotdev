const Section = ({ children, spacingTop = true, spacingBottom = true, spacingSize = "l" }) => {
  const classNames = [
    'section-container',
    spacingTop ? `spacing-above-${spacingSize}` : 'spacing-above-remove',
    spacingBottom ? `spacing-below-${spacingSize}` : 'spacing-below-remove',
  ].join(' ');

  return (
    <section className={classNames}>
      <div className="content-size-sl">
        {children}
      </div>
    </section>
  );
};

export default Section;
