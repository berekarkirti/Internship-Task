// import { cva } from "class-variance-authority";
// import clsx from "clsx";

// const buttonVariants = cva(
//   "inline-flex items-center justify-center  font-bold  ",
//   {
//     variants: {
//       variant: {
//         primary: "bg-primary rounded-md text-white hover:bg-light font-bold ",
//         hero: "border border-white text-white rounded-sm  hover:bg-theme hover:text-white hover:border-theme ",
//         secondary: "bg-theme   text-white rounded-[4px] hover:bg-white hover:text-theme border border-theme ",
//         header: "bg-theme  font-medium   text-white rounded-[4px] ",
//         reverse: "text-theme  font-bold border rounded-[4px] border-theme   hover:bg-theme hover:text-white ", 
//       },

//       disableHoverOnGroup: {
//         true: "group-hover:hover:bg-transparent group-hover:hover:text-inherit", // Stops hover effect
//         false: "",
//       },
//       size: {
//         sm: "px-3 py-1 lg:py-3  text-sm",
//         md: "px-6 py-4 text-sm",
//         lg: "px-8 py-3 text-base ",
        

//         //header
//         hd: "px-4 py-1.5 text-sm",

//         //about 
//         at: "px-4 py-1 text-xs",

//         //hero
//         hr: "px-6 py-2 text-sm",

//         //contact
//         ct: " w-full px-6 py-3  text-md",

//         //career
//         cr: " w-[250px] py-3 text-base",

//         //case study
//         cs: "w-[245px] py-3 text-md",
//       },
//     },
//     defaultVariants: {
//       variant: "primary",
//       size: "md",
//       disableHoverOnGroup: false,

//     },

    
//   }
// );

// // Button component
// export default function Button({ variant, size, className,   disableHoverOnGroup = false,
//   children, ...props }) {
//   return (
//     <button
//       className={clsx(buttonVariants({ variant, size  , disableHoverOnGroup}), className)}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }

import React from "react";
import { cva } from "class-variance-authority";
import clsx from "clsx";

// Define button variants with gradient styles
const buttonVariants = cva(
  "inline-flex items-center justify-center font-bold transition-all duration-700 ease-in-out", // Base styles
  {
    variants: {
      variant: {
        gradient:
          "bg-gradient-to-r from-pink-600 via-orange-500 to-pink-600 bg-[length:200%_200%] text-white hover:animate-gradientMove",
        primary: "bg-primary rounded-md text-white hover:bg-light",
        hero: "border border-white text-white rounded-sm hover:bg-theme hover:text-white hover:border-theme",
        secondary: "bg-theme text-white rounded-[4px] hover:bg-white hover:text-theme border border-theme",
        header: "bg-theme font-medium text-white rounded-[4px]",
        reverse: "text-theme font-bold border rounded-[4px] border-theme hover:bg-theme hover:text-white",
      },
      size: {
        sm: "px-3 py-1 text-sm",
        md: "px-6 py-4 text-base",
        lg: "px-8 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "gradient", // Default to gradient style
      size: "md",
    },
  }
);

// Button component
export default function Button({
  variant,
  size,
  className,
  children,
  as = "button", // Allows using `<a>` instead of `<button>`
  ...props
}) {
  const Component = as; // Dynamic component type (e.g., 'a' or 'button')
  return (
    <Component
      className={clsx(buttonVariants({ variant, size }), "flex justify-center items-center", className)}
      {...props}
    >
      <span className="text-center">{children}</span>
    </Component>
  );
}
