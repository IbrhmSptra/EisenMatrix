import { useSelector } from "react-redux";
import { rootState } from "../redux/store";
import Activity from "./Activity";
import { ImSad } from "react-icons/im";
import { Droppable } from "react-beautiful-dnd";

const List = () => {
  const noteState = useSelector((state: rootState) => state.modal.note);
  const activities = useSelector(
    (state: rootState) => state.activities.activities
  );
  return (
    <div
      className={`w-1/2 h-screen py-20 fixed bg-white top-0 z-10 transition-all duration-300 shadow-2xl ${
        noteState ? "right-0" : "-right-1/2"
      }`}
    >
      <h1 className="text-xs font-montserrat px-2 text-center mb-2 lg:text-sm">
        Drag and Drop the activity into 4 box of Eisenhower Matrix
      </h1>
      <Droppable droppableId="activities">
        {(provided) => (
          <div
            className="h-full p-2 space-y-4 overflow-y-scroll select-none xl:px-6"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {activities.length < 1 ? (
              <div className="flex flex-col items-center w-full h-full justify-center space-y-8">
                <h1 className="font-semibold font-montserrat">
                  there's no activity
                </h1>
                <ImSad size={30} />
              </div>
            ) : (
              activities.map((val, i) => (
                <Activity toDo={val.toDo} id={val.id} key={val.id} index={i} />
              ))
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default List;
