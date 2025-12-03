import Switch from "react-switch";
import { IoSaveOutline } from "react-icons/io5";
import { LuSaveOff } from "react-icons/lu";

export default function SaveToggle({ checked, onChange }) {
  let saveOffIcon = <LuSaveOff />;
  let saveOnIcon = <IoSaveOutline />;
  return (
    <>
      <Switch
        onChange={onChange}
        checked={checked}
        checkedIcon={saveOnIcon}
        uncheckedIcon={saveOffIcon}
        onColor="#a7a7a7"
        offColor="#b4b4b4"
        onHandleColor="#202C36"
        offHandleColor="#2B3844"
      />{" "}
    </>
  );
}
