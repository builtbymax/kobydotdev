const TextBlock = ({ headline, text}) => {
  return (
    <article className="text-block-inner-container">
      <h3>{headline}</h3>
      <p>{text}</p>
    </article>
  );
};
TextBlock.displayName = 'TextBlock';

export { TextBlock };
