import Image from 'next/image';
import Link from 'next/link';
import { Headline } from '@/components/UI/Headline';
import { GridColumn, GridRow } from '@/components/UI/Grid';
import { Element } from '@/components/UI/Element';
import { Button, ButtonContainer, buttonVariants } from '@/components/UI/Button';
import clsx from 'clsx';
import { ArrowRight } from '@/components/UI/Icons';

const TextMedia = ({
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
    quality: 85,
  },
}) => {
  const ContentBlock = () => {
    return (
      <GridColumn columnSize={{ m: 6 }} className="content-block">
        <div className="copy-text">
          <Headline as={tag}>{headline}</Headline>
          <p>{text}</p>
        </div>
        <ButtonContainer>
          <Button href={link.url} className={clsx("has-icon", buttonVariants({ variant: 'tertiary' }))}>
            {link.title} <ArrowRight />
          </Button>
        </ButtonContainer>
      </GridColumn>
    )
  };

  const MediaBlock = () => {
    return (
      <GridColumn columnSize={{ m: 6 }} className="media-block">
        <div className="media image">
          <Image src={img.src} width={img.width} height={img.height} alt={img.alt} priority={img.priority} placeholder={img.placeholder ? 'blur' : 'empty'} quality={img.quality} />
        </div>
      </GridColumn>
    )
  };

  return (
    <Element className="text-media-element-container">
      <GridRow>
        {textAlignment === 'left' ? <ContentBlock /> : <MediaBlock />}
        {textAlignment === 'left' ? <MediaBlock /> : <ContentBlock />}
      </GridRow>
    </Element>
  );
};
TextMedia.displayName = 'TextMedia';

export { TextMedia };