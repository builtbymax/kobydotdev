import Image from 'next/image';
import Link from 'next/link';

export default function Headline({ 
    headline, 
    text, 
    tag = 'h2', 
    textAlignment = 'left',
    link = {
      url: '',
      title: '',
    },
    img = {
      src: '', 
      alt: '',
      width: '', 
      height: '',
      priority: false,
      placeholder: true,
      quality: 80,
    },
}) {
  let headlineElement;
  let textElement;
  const HTag = `${tag}`;

  if (!headline && !text) return null;
  if (headline) headlineElement = <HTag className="headline">{headline}</HTag>;
  if (text) textElement = <p>{text}</p>;

  const ContentBlock = () => {
    return (
      <div className="grid-col gd-xs-12 gd-m-6 content-block">
        <div className="copy-text">
          {headlineElement}
          {textElement}
        </div>
        <div className="cta-container">
          <Link href={link.url} className="cta layout-2 has-icon">
            <span>{link.title}</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="XMLID_512_ Copy" d="M11.6438 6.39474L7.10462 10.9737C6.89453 11.1842 6.63191 11.2895 6.36929 11.2895C6.10667 11.2895 5.84406 11.1842 5.63396 10.9737C5.21377 10.5526 5.21377 9.89474 5.63396 9.47369L8.38734 6.71053H1.05047C0.472712 6.71053 0 6.23684 0 5.6579C0 5.07895 0.472712 4.60526 1.05047 4.60526H8.38734L5.6077 1.81579C5.18751 1.39474 5.18751 0.736842 5.6077 0.315789C6.02789 -0.105263 6.68443 -0.105263 7.10462 0.315789L11.6438 4.89474C12.064 5.31579 12.064 6 11.6438 6.39474Z" fill="white"/>
            </svg>
          </Link>
        </div>
      </div>
    )
  };

  const MediaBlock = () => {
    return (
      <div className="grid-col gd-xs-12 gd-m-6 media-block">
        <div className="media image">
          <Image src={img.src} width={img.width} height={img.height} alt={img.alt} priority={img.priority} placeholder={img.placeholder ? 'blur' : 'empty'} quality={img.quality} />
        </div>
      </div>
    )
  };

  return (
    <div className={`text-media-element-container `}>
      <div className="grid-row">
        {textAlignment === 'left' ? <ContentBlock /> : <MediaBlock />}
        {textAlignment === 'left' ? <MediaBlock /> : <ContentBlock />}
      </div>
    </div>
  );
}