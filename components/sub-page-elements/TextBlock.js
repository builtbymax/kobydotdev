export default function TextBlock({ headline, text, cta}){
  return (
    <article className="text-block-inner-container">
      <h3>{headline}</h3>
      <p>{text}</p>
    </article>
  );
};
