import { TiInfoLarge } from "react-icons/ti";
import { rootState } from "../redux/store";
import { useSelector } from "react-redux";

const ModalInfo = () => {
  const infoState = useSelector((state: rootState) => state.modal.info);
  return (
    <div
      className={`fixed left-0 right-0 mx-8 top-1/2 -translate-y-1/2 shadow-2xl border transition-all duration-300 rounded-lg overflow-hidden font-montserrat ${
        infoState ? "scale-100 opacity-100" : "scale-0 opacity-30"
      }`}
    >
      <div className="bg-grayField flex items-center h-10">
        <TiInfoLarge size={30} />
        <h1 className="text-darkText text-lg font-bold">About EisenMatrix</h1>
      </div>
      <div className="bg-white p-4">
        <p>
          The Eisenhower Matrix is a simple decision-making tool that helps you
          make the distinction between tasks that are important, not important,
          urgent, and not urgent. It splits tasks into four boxes that
          prioritize which tasks you should focus on first and which you should
          delegate or delete.
        </p>
      </div>
    </div>
  );
};

export default ModalInfo;
