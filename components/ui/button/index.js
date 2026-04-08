import { RightArrow } from "../customIcons";

const Button = ({ children, onClick, icon, className }) => {
  return (
    <button
      onClick={onClick}
      className={`group flex justify-center cursor-pointer items-center gap-2.5 rounded-[5px] bg-primary py-4 px-6 text-sm font-bold text-white ${className}`}
    >
      {children}
      {icon ? icon : <RightArrow />}
    </button>
  );
};

export default Button;
