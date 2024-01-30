import clsx from "clsx";

const Element = ({ children, className }) => {
  return (
    <div className={clsx('content-element-container', className)}>
      {children}
    </div>
  );
};
Element.displayName = 'Element';

export { Element };