import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeActivity } from "../redux/slice/activitiesSlice";
import { Draggable } from "react-beautiful-dnd";

type ActivityProps = {
  id: string;
  index: number;
  toDo: string;
  isDone?: boolean;
};

const Activity = ({ id, toDo, index }: ActivityProps) => {
  const dispatch = useDispatch();
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className="bg-grayField flex items-center gap-x-1 min-h-10 justify-between px-2 py-2 rounded-md"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <p className="text-xs font-neucha flex-1">{toDo}</p>
          <div
            className=" bg-white p-1 rounded-md"
            onClick={() => {
              dispatch(removeActivity(index));
            }}
          >
            <FaRegTrashAlt className="text-secondaryText hover:text-darkText" />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Activity;
