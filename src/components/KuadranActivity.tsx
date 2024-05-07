import { Draggable } from "react-beautiful-dnd";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

type activityProps = {
  index: number;
  id: string;
  toDo: string;
  isDone: boolean;
  done: () => void;
  remove: () => void;
};

const KuadranActivity = ({
  toDo,
  remove,
  id,
  index,
  done,
  isDone,
}: activityProps) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className={`flex items-center gap-x-1 min-h-10 justify-between px-2 py-2 rounded-md select-none ${
            isDone ? "bg-grayField" : "bg-gray-200"
          }`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <p
            className={`text-xs font-neucha flex-1 ${
              isDone ? "line-through decoration-1" : ""
            }`}
          >
            {toDo}
          </p>
          <div
            className="bg-white p-1 rounded-md cursor-pointer"
            onClick={done}
          >
            <FaCheck className="text-secondaryText hover:text-darkText" />
          </div>
          <div
            className=" bg-white p-1 rounded-md cursor-pointer"
            onClick={remove}
          >
            <FaRegTrashAlt className="text-secondaryText hover:text-darkText" />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default KuadranActivity;
