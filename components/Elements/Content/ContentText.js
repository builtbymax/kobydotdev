import clsx from "clsx";
import { renderText } from "@/utils/rte";

const ContentText = ({ content, className, ...props }) => {
  const { title, text } = content;
  const textElement = renderText(text);
  
  return (
    <div className={clsx('text-element-container', className)} {...props}>
      <div className="copy-text">
        <h3>{title}</h3>
        {textElement}
      </div>
    </div>
  );
};
ContentText.displayName = 'ContentText';

export { ContentText };
