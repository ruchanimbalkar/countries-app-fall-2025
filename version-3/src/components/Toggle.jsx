import Switch from "react-switch";
import { FaMoon } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

export default function Toggle({ checked, onChange }) {
  let emptyMoon = <FaRegMoon />;
  let filledMoon = <FaMoon />;
  return (
    <>
      <Switch
        onChange={onChange}
        checked={checked}
        checkedIcon={emptyMoon}
        uncheckedIcon={filledMoon}
        onColor="#f2f5f2"
        offColor="#202C36"
        onHandleColor="#bfbfbf"
        offHandleColor="#404040"
      />{" "}
    </>
  );
}
