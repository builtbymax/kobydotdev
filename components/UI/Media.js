import clsx from 'clsx';
import Image from 'next/image';

const Media = ({ asset, className, ...props }) => {
  if (!asset) return null;
  let assetRender;
  let videoClass = null;

  switch (asset.type) {
    case 'image':
      assetRender = <ImageAsset image={asset} {...props} />;
      break;
    case 'video':
      assetRender = <VideoAsset video={asset} attributes={props} />;
      videoClass = 'video';
      break;
    default:
      assetRender = null;
  }

  return (
    <div className={clsx('media', videoClass, className)}>
      {assetRender}
    </div>
  );
};
Media.displayName = 'Media';

const ImageAsset = ({ image, ...props }) => {
  return (
    <Image
      src={image.url}
      alt={image.alt}
      width={image.width}
      height={image.height}
      // placeholder="blur"
      // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8PjW6HgAGGgI4F5s4KwAAAABJRU5ErkJggg=="
      quality={props.quality}
      priority={props.priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1023px) 50vw, (min-width: 1024px) 1200px"
      {...props}
    />
  );
};
ImageAsset.displayName = 'ImageAsset';

const VideoAsset = ({ video, attributes: {
  controls = true,
  preload = true,
  ...attributes
} = {} }) => {
  return (
    <video {...(controls && {controls})} preload={preload} {...attributes}>
      <source src={video.url} type={video.mimeType} />
    </video>
  );
};
VideoAsset.displayName = 'VideoAsset';

export { Media, ImageAsset, VideoAsset };