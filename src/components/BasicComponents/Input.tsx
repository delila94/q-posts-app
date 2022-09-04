import { useContext, useEffect } from "react";
import { MyContext } from "../../context/context";
// interface to declare all our prop types
interface Props {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  placeHolder?: string;
  required?: boolean;
  size?: "small" | "medium" | "large";
  type?: string;
  value?: any;
  fullWidth?: boolean;
  variant?: string, // default, primary, info, success, warning, danger, dark
}

// input component, consuming props
const Input: React.FC<Props> = ({
  inputAdornment,
  endAdornment,
  placeHolder,
  type = "text",
  value,
  size = "medium",
  onChange=()=>{},
  required=false,
  fullWidth = false,
  variant='default',
  ...rest
}) => {
  const { propsMessage } = useContext(MyContext);
  useEffect(() => {
    console.log(`${propsMessage} Input`);
  }, []);
  return (
    <div className={`relative ${
        fullWidth ? "w-full" : 'w-fit'
      }`}>
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        {inputAdornment}
      </div>
      <input
        type={type}
        className={`border ${
            fullWidth ? "w-full" : 'w-fit'
          } rounded-md border-gray-300 ${variant} text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block ${inputAdornment ? "pl-10" : null}  ${size === "medium" && "p-2.5"}
        ${size === "large" && "p-3.5"}
        ${size === "small" && "p-1.5"}`}
        placeholder={placeHolder}
        value={value}
        required={required}
        onChange={onChange}
        {...rest}
      />
    <div className="flex absolute inset-y-0 right-0 items-center pr-3">
        {endAdornment}
      </div>
    </div>
  );
};
export default Input;
