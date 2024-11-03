"use client"
import { FaRegSquareCheck } from "react-icons/fa6";
import { ImCheckboxUnchecked } from "react-icons/im";

const Button = ({
  text,
  isSelected,
  onClick,
}: {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <h1
      className={`text-red-500 font-light cursor-pointer ${isSelected ? "font-semibold" : "font-light"}`}
      onClick={onClick}
    >
      {isSelected ? (
        <span className="flex items-center gap-4">
          <FaRegSquareCheck />
          {text}
        </span>
      ) : (
        <span className="flex items-center gap-4">
          <ImCheckboxUnchecked />
          {text}
        </span>
      )}
    </h1>
  );
};

export default Button;
