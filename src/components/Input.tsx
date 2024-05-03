import { useDispatch } from "react-redux";
import { closeInfo } from "../redux/slice/modal";
import { MdSend } from "react-icons/md";

const Input = () => {
  const dispatch = useDispatch();
  return (
    <div className="font-montserrat mt-6 space-y-2">
      <h1 className="text-darkText font-semibold">Add your activities</h1>
      <form className="relative overflow-hidden border border-grayField rounded-xl">
        <input
          className="w-full bg-slate-100 py-2 pl-4 pr-11 focus:outline-none"
          type="text"
          placeholder="Insert here...."
          onFocus={() => {
            dispatch(closeInfo());
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
