import { useSelector } from "react-redux";
import { rootState } from "../redux/store";
import { Droppable } from "react-beautiful-dnd";
import KuadranActivity from "./KuadranActivity";
import { useDispatch } from "react-redux";
import {
  removeKuadran3,
  toggleDoneKuadran3,
} from "../redux/slice/activitiesSlice";

const Kuadran3 = () => {
  const dispatch = useDispatch();
  const activities = useSelector(
    (state: rootState) => state.activities.kuadran3
  );
  return (
    <div className="px-2 py-4 flex flex-col justify-between min-h-48 bg-kuadran3">
      <h1 className="font-montserrat font-semibold text-sm text-center min-h-10">
        Urgent, Not Important
      </h1>
      <Droppable droppableId="kuadran3">
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
                  id={val.id}
                  isDone={val.isDone}
                  index={i}
                  done={() => {
                    dispatch(toggleDoneKuadran3(i));
                  }}
                  remove={() => {
                    dispatch(removeKuadran3(i));
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

export default Kuadran3;
