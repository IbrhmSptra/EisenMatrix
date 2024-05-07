import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { rootState } from "../redux/store";
import KuadranActivity from "./KuadranActivity";
import { useDispatch } from "react-redux";
import {
  removeKuadran2,
  toggleDoneKuadran2,
} from "../redux/slice/activitiesSlice";

const Kuadran2 = () => {
  const dispatch = useDispatch();
  const activities = useSelector(
    (state: rootState) => state.activities.kuadran2
  );
  return (
    <div className="px-2 py-4 flex flex-col justify-between min-h-48 bg-kuadran2">
      <h1 className="font-montserrat font-semibold text-sm text-center min-h-10">
        Not Urgent, Important
      </h1>
      <Droppable droppableId="kuadran2">
        {(provided) => (
          <div
            className="space-y-2 mt-2 h-full"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {activities.length < 1 ? (
              <h1 className="text-center text-xs font-neucha translate-y-10">
                Theres No Activity
              </h1>
            ) : (
              activities.map((val, i) => (
                <KuadranActivity
                  key={val.id}
                  toDo={val.toDo}
                  isDone={val.isDone}
                  id={val.id}
                  index={i}
                  done={() => {
                    dispatch(toggleDoneKuadran2(i));
                  }}
                  remove={() => {
                    dispatch(removeKuadran2(i));
                  }}
                />
              ))
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Kuadran2;
