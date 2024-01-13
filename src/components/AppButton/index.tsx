import { Button } from "@chakra-ui/react";
import React from "react";

type AppButtonProps = {
  value: string;
  colorScheme: string;
  variant: string;
  className?: string;
  disabled?: boolean;
  width?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const AppButton = ({
  value,
  colorScheme,
  variant,
  className,
  disabled,
  width,
  onClick,
}: AppButtonProps) => {
  return (
    <Button
      onClick={onClick}
      colorScheme={colorScheme}
      variant={variant}
      className={className}
      disabled={disabled}
      w={width}
    >
      {value}
    </Button>
  );
};

export default AppButton;
