const baseClass = 'ds-card';

const variantClasses = {
  default: baseClass,
  accent: `${baseClass} card-accent-left`,
};

const Card = ({ as: Component = 'div', variant = 'default', className = '', children, ...props }) => {
  const classes = [variantClasses[variant] || variantClasses.default, className].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Card;
