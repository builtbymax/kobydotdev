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
      height: ''
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
          <Link href={link.url} className="cta layout-0">{link.title}</Link>
        </div>
      </div>
    )
  };

  const MediaBlock = () => {
    return (
      <div className="grid-col gd-xs-12 gd-m-6 media-block">
        <Image src={img.src} width={img.width} height={img.height} alt={img.alt} />
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