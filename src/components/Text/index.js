import React from "react";
const variantClasses = {
  h1: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  h2: "font-semibold sm:text-[18px] md:text-[23px] text-[40px]",
  h3: "font-bold sm:text-[26px] md:text-[28px] text-[30px]",
  h4: "font-semibold text-[20px]",
  h5: "text-[18px]",
  h6: "text-[15px]",
  body1: "font-black text-[148px] md:text-[48px] sm:text-[48px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
