const baseClasses = {
  1: 'page-title',
  2: 'card-heading',
  3: 'card-subheading',
};

const Heading = ({ level = 1, noUnderline = false, className, children, as, ...props }) => {
  const resolvedLevel = level >= 3 ? 3 : level <= 1 ? 1 : level;
  const Component = as || `h${resolvedLevel}`;
  const classes = [
    baseClasses[resolvedLevel],
    noUnderline ? 'no-underline' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Heading;
