import { ButtonHTMLAttributes } from "react";

import '../styles/button.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
}

export function Button({ isOutlined = false, ...props }: Props) {
  return (
    <button
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  );
}