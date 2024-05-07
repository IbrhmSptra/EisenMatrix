import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { useDispatch } from "react-redux";
import {
  closeInfo,
  closeNote,
  toggleInfo,
  toggleNote,
} from "../redux/slice/modalSlice";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex items-center px-6 h-12 justify-between fixed top-0 left-0 right-0 bg-white z-20">
      <h1 className="text-darkText font-bold text-xl">
        <span className="text-secondaryText">Eisen</span>Matrix
      </h1>
      <div className="flex items-center gap-4">
        <IoInformationCircleOutline
          className="cursor-pointer active:text-secondaryText"
          size={30}
          onClick={() => {
            dispatch(toggleInfo());
            dispatch(closeNote());
          }}
        />
        <CgNotes
          size={25}
          className="cursor-pointer active:text-secondaryText"
          onClick={() => {
            dispatch(toggleNote());
            dispatch(closeInfo());
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
