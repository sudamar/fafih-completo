const CardGrid = ({ as: Component = 'div', className = '', children, columns = 'auto-fit' }) => {
  const classes = ['ds-card-grid', className].filter(Boolean).join(' ');
  const style = columns === 'auto-fit'
    ? undefined
    : { gridTemplateColumns: columns };

  return (
    <Component className={classes} style={style}>
      {children}
    </Component>
  );
};

export default CardGrid;
