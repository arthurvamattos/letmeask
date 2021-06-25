import { ButtonHTMLAttributes } from "react";

import { Button as StyledButton } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...rest }: ButtonProps) {
  return (
    <StyledButton className={`${isOutlined ? "outlined" : ""}`} {...rest} />
  );
}
