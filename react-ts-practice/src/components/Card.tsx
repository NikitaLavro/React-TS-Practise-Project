import React, { FC } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width: string;
  height: string;
  variant: CardVariant;
  children?: React.ReactChild | React.ReactNode;
}

const Card: FC<CardProps> = ({ width, height, children, variant }) => {
  return (
    <div
      style={{
        width,
        height,
        background: "gray",
        border: variant === CardVariant.outlined ? "1px solid gray" : "none",
        backgroundColor: variant === CardVariant.primary ? "lightgray" : "",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
