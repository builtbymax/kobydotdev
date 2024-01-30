import clsx from "clsx";

//  --------------------------------------------------------------------------------------------
//  The default css-grid type is 'grid', but you can also pass 'flex' as a prop.
//  To use flex, you need to set the configuration in: 'styles/scss/project/config.scss' to true.
//  To add a new breakpoint for the columns, you also need to add it in the Global SCSS.
//  You can also change the Suffix for the classes in the Global SCSS.
//  --------------------------------------------------------------------------------------------

const GridRow = ({ type = 'grid', children, className }) => {
  return (
    <div className={clsx(`${type}-row`, className)}>
      {children}
    </div>
  );
};
GridRow.displayName = 'GridRow';

const GridColumn = ({ type = 'grid', children, className, columnSize: { 
  xs = 12, 
  s = false, 
  m = false, 
  l = false, 
  xl = false, 
} = {} }) => {
  const colClassSuffix = type === 'grid' ? 'gd' : 'fx';
  const gridClasses = clsx({
    [`${colClassSuffix}-xs-${xs}`]: xs,
    [`${colClassSuffix}-sm-${s}`]: s,
    [`${colClassSuffix}-m-${m}`]: m,
    [`${colClassSuffix}-l-${l}`]: l,
    [`${colClassSuffix}-xl-${xl}`]: xl,
  });

  return (
    <div className={clsx(` ${type}-col`, gridClasses, className, )}>
      {children}
    </div>
  );
};
GridColumn.displayName = 'GridColumn';

export { GridRow, GridColumn };