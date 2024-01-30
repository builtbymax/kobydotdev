import { cva } from "class-variance-authority";
import clsx from "clsx";
import { forwardRef } from "react";
import Link from "next/link";

const buttonVariants = cva(['cta'], {
    variants: {
      variant: {
        default: 'layout-0',
        secondary: 'layout-1',
        tertiary: 'layout-2',
      },
      size: {
        default: 'size-m',
        small: 'size-s',
        large: 'size-l',
        xlarge: 'size-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = forwardRef(({ className, variant, size, ...props }, ref) => {
  const Comp = props.href ? Link : 'button';
  return (
    (<Comp className={clsx(buttonVariants({ variant, size, className }))} ref={ref} {...props} />)
  );
});
Button.displayName = "Button";

const ButtonContainer = ({ children, alignment = 'left', vertical = false, className }) => {
  const alignmentClass = `alignment-${alignment}`;
  const verticalClass = vertical ? 'vertical-container' : 'horizontal-container';
  return (
    <div className={clsx('cta-container', alignmentClass, verticalClass, className)}>
      {children}
    </div>
  );
};
ButtonContainer.displayName = "ButtonContainer";

export { Button, ButtonContainer, buttonVariants }

//
// Example usage:
// <ButtonContainer alignment="left">
//   <Button href="/">Button as Link</Button>
// </ButtonContainer>
// <ButtonContainer alignment="center">
//   <Button>Button</Button>
// </ButtonContainer>
//