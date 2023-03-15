import { ImgHTMLAttributes  } from 'react';
import styles from './Avatar.module.css'

interface AvatareProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }:AvatareProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );

}