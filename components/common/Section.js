const Section = ({ children, spacingTop = true, spacingBottom = true }) => {
  return (
    <section className={`section-container ${spacingTop ? 'spacing-above-m' : 'spacing-above-remove'} ${spacingBottom ? 'spacing-below-m' : 'spacing-below-remove'}`}>
      <div className="content-size-sl">
        {children}
      </div>
    </section>
  );
};

export default Section;
