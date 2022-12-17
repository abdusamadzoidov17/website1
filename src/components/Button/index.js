import React from "react";
import PropTypes from "prop-types";

const variants = { FillDeeporangeA700: "bg-deep_orange_A700 text-white_A700" };
const sizes = { sm: "p-[16px] md:p-[9px] sm:px-[15px] sm:py-[7px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className}  ${variants[variant] || ""} ${
        sizes[size] || ""
      } `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(["FillDeeporangeA700"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  variant: "FillDeeporangeA700",
  size: "sm",
};

export { Button };
