import type { ReactNode } from 'react';
import { useRef, useState } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';

type MagneticButtonProps = HTMLMotionProps<'a'> & {
  children: ReactNode;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function MagneticButton({
  children,
  icon,
  variant = 'primary',
  className,
  onMouseMove,
  onMouseLeave,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      className={clsx('magnetic-button', `magnetic-button--${variant}`, className)}
      style={{ x: offset.x, y: offset.y }}
      whileTap={{ scale: 0.97 }}
      onMouseMove={(event) => {
        const bounds = ref.current?.getBoundingClientRect();
        if (bounds) {
          const x = (event.clientX - bounds.left - bounds.width / 2) * 0.18;
          const y = (event.clientY - bounds.top - bounds.height / 2) * 0.18;
          setOffset({ x, y });
        }
        onMouseMove?.(event);
      }}
      onMouseLeave={(event) => {
        setOffset({ x: 0, y: 0 });
        onMouseLeave?.(event);
      }}
      {...props}
    >
      {icon ? <span className="button-icon">{icon}</span> : null}
      <span>{children}</span>
    </motion.a>
  );
}
