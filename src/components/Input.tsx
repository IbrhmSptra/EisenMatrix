import { useDispatch } from "react-redux";
import { closeInfo, closeNote } from "../redux/slice/modalSlice";
import { MdSend } from "react-icons/md";
import { FormEvent, useState } from "react";
import { addActivity } from "../redux/slice/activitiesSlice";

//function for checking if user only input space
const isSpaceOnly = (input: string): boolean => {
  const result = input.trim() == "" ? true : false;
  return result;
};

const Input = () => {
  const dispatch = useDispatch();
  const [toDoInput, settoDoInput] = useState<string>("");

  const submitActivity = (e: FormEvent) => {
    e.preventDefault();
    if (toDoInput == "" || isSpaceOnly(toDoInput)) {
      return;
    }
    dispatch(
      addActivity({
        toDo: toDoInput,
        isDone: false,
        id: Math.random().toString(16).slice(2),
      })
    );
    settoDoInput("");
  };

  return (
    <div className="font-montserrat mt-6 space-y-2">
      <h1 className="text-darkText font-semibold">Add your activities</h1>
      <form
        className="relative overflow-hidden border border-grayField rounded-xl"
        onSubmit={(e) => {
          submitActivity(e);
        }}
      >
        <input
          className="w-full bg-slate-100 py-2 pl-4 pr-11 focus:outline-none"
          type="text"
          placeholder="Insert here...."
          value={toDoInput}
          onFocus={() => {
            dispatch(closeInfo());
            dispatch(closeNote());
          }}
          onChange={(e) => {
            settoDoInput(e.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-white absolute right-0 h-full min-w-10 flex justify-center top-0 items-center border-l-2"
        >
          <MdSend size={25} />
        </button>
      </form>
    </div>
  );
};

export default Input;
