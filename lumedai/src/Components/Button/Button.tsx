import Link from "next/link";
import React, { ReactElement, ReactNode } from "react";

interface IButton {
  btntext: ReactElement | ReactNode | string;
  btnHoverText?: string;
  className?: string;
  onClick?: () => void,
}

const Button: React.FC<IButton> = (
  {
    btntext,
    btnHoverText,
    className,
    onClick,
  }
) => {
  return (
    <div className={`button ${className} ${btnHoverText? "has-hover-text" : ""}`} onClick={onClick}>
       <Link href="#">
          {btntext &&<span className="btn-normal-text">{btntext}</span>}
          {btnHoverText&& <span className="btn-hover-text">{btnHoverText}</span>}
        </Link>
    </div>
  );
};

export default Button;