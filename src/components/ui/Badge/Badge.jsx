import React from 'react';
import styles from '@/Badge.module.css';

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  rounded = false,
  className = '',
  ...props
}) => {
  const badgeClasses = [
    styles.badge,
    styles[variant],
    styles[size],
    rounded && styles.rounded,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
};

export default Badge;