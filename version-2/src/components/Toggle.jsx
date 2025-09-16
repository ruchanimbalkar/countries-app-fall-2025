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
        checkedIcon={filledMoon}
        uncheckedIcon={emptyMoon}
        onColor="#7f7f7f"
        offColor="#f2f5f2"
        onHandleColor="#bfbfbf"
        offHandleColor="#404040"
      />{" "}
    </>
  );
}
