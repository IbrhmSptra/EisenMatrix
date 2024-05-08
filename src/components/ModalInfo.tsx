import { TiInfoLarge } from "react-icons/ti";
import { rootState } from "../redux/store";
import { useSelector } from "react-redux";

const ModalInfo = () => {
  const infoState = useSelector((state: rootState) => state.modal.info);
  return (
    <div
      className={`fixed left-0 right-0 mx-8 top-1/2 -translate-y-1/2 shadow-2xl border transition-all duration-300 rounded-lg overflow-hidden z-10 font-montserrat sm:mx-12 md:mx-20 lg:mx-32 xl:mx-40 ${
        infoState ? "scale-100 opacity-100" : "scale-0 opacity-30"
      }`}
    >
      <div className="bg-gray-300 flex items-center h-10">
        <TiInfoLarge size={30} />
        <h1 className="text-darkText text-lg font-bold select-none">
          About EisenMatrix
        </h1>
      </div>
      <div className="bg-white p-4 xl:py-6 xl:px-8 select-none">
        <p>
          The Eisenhower Matrix is a simple decision-making tool that helps you
          make the distinction between tasks that are important, not important,
          urgent, and not urgent. It splits tasks into four boxes that
          prioritize which tasks you should focus on first and which you should
          delegate or delete. Enter all your activities for today, from list
          activites sidebar on top right corner drag and drop activity into 4
          boxes of the Eisenhower matrix. This site does not use a database, but
          instead uses redux-persist
        </p>
      </div>
    </div>
  );
};

export default ModalInfo;
