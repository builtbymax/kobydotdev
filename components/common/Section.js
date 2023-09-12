const Section = ({ children, spacingTop = true, spacingBottom = true, spacingSize = "l" }) => {
  return (
    <section className={`section-container ${spacingTop ? `spacing-above-${spacingSize}` : 'spacing-above-remove'} ${spacingBottom ? `spacing-below-${spacingSize}` : 'spacing-below-remove'}`}>
      <div className="content-size-sl">
        {children}
      </div>
    </section>
  );
};

export default Section;
