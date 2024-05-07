import Navbar from "./components/Navbar";
import ModalInfo from "./components/ModalInfo";
import Input from "./components/Input";
import List from "./components/List";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Kuadran1 from "./components/Kuadran1";
import Kuadran2 from "./components/Kuadran2";
import Kuadran3 from "./components/Kuadran3";
import Kuadran4 from "./components/Kuadran4";
import { useDispatch } from "react-redux";
import {
  addKuadran1,
  addKuadran2,
  addKuadran3,
  addKuadran4,
  removeActivity,
  removeKuadran1,
  removeKuadran2,
  removeKuadran3,
  removeKuadran4,
} from "./redux/slice/activitiesSlice";
import { useSelector } from "react-redux";
import { rootState } from "./redux/store";
import { closeNote } from "./redux/slice/modalSlice";

function App() {
  const dispatch = useDispatch();
  const activities = useSelector(
    (state: rootState) => state.activities.activities
  );
  const kuadran1 = useSelector((state: rootState) => state.activities.kuadran1);
  const kuadran2 = useSelector((state: rootState) => state.activities.kuadran2);
  const kuadran3 = useSelector((state: rootState) => state.activities.kuadran3);
  const kuadran4 = useSelector((state: rootState) => state.activities.kuadran4);
  console.log(kuadran4);

  //function ON DRAG START -----------------------------------
  const onDragStart = () => {
    dispatch(closeNote());
  };

  //function ON DRAG END-----------------------------------
  const onDragEnd = (result: DropResult) => {
    console.log(result);
    const { destination, source } = result;
    console.log("destination", destination);
    console.log("source", source);

    //list to kuadran 1
    if (
      destination?.droppableId === "kuadran1" &&
      source.droppableId === "activities"
    ) {
      const add = activities[source.index];
      dispatch(addKuadran1(add));
      dispatch(removeActivity(source.index));
    }
    //list to kuadran 2
    if (
      destination?.droppableId === "kuadran2" &&
      source.droppableId === "activities"
    ) {
      const add = activities[source.index];
      dispatch(addKuadran2(add));
      dispatch(removeActivity(source.index));
    }
    //list to kuadran 3
    if (
      destination?.droppableId === "kuadran3" &&
      source.droppableId === "activities"
    ) {
      const add = activities[source.index];
      dispatch(addKuadran3(add));
      dispatch(removeActivity(source.index));
    }
    //list to kuadran 4
    if (
      destination?.droppableId === "kuadran4" &&
      source.droppableId === "activities"
    ) {
      const add = activities[source.index];
      dispatch(addKuadran4(add));
      dispatch(removeActivity(source.index));
    }

    //------------------------------------------------------------------

    //kuadran 1 to other kuadran
    if (
      destination?.droppableId === "kuadran2" &&
      source.droppableId === "kuadran1"
    ) {
      const add = kuadran1[source.index];
      dispatch(addKuadran2(add));
      dispatch(removeKuadran1(source.index));
    }
    if (
      destination?.droppableId === "kuadran3" &&
      source.droppableId === "kuadran1"
    ) {
      const add = kuadran1[source.index];
      dispatch(addKuadran3(add));
      dispatch(removeKuadran1(source.index));
    }
    if (
      destination?.droppableId === "kuadran4" &&
      source.droppableId === "kuadran1"
    ) {
      const add = kuadran1[source.index];
      dispatch(addKuadran4(add));
      dispatch(removeKuadran1(source.index));
    }

    //kuadran 2 to other kuadran
    if (
      destination?.droppableId === "kuadran1" &&
      source.droppableId === "kuadran2"
    ) {
      const add = kuadran2[source.index];
      dispatch(addKuadran1(add));
      dispatch(removeKuadran2(source.index));
    }
    if (
      destination?.droppableId === "kuadran3" &&
      source.droppableId === "kuadran2"
    ) {
      const add = kuadran2[source.index];
      dispatch(addKuadran3(add));
      dispatch(removeKuadran2(source.index));
    }
    if (
      destination?.droppableId === "kuadran4" &&
      source.droppableId === "kuadran2"
    ) {
      const add = kuadran2[source.index];
      dispatch(addKuadran4(add));
      dispatch(removeKuadran2(source.index));
    }

    //kuadran 3 to other kuadran
    if (
      destination?.droppableId === "kuadran2" &&
      source.droppableId === "kuadran3"
    ) {
      const add = kuadran3[source.index];
      dispatch(addKuadran2(add));
      dispatch(removeKuadran3(source.index));
    }
    if (
      destination?.droppableId === "kuadran1" &&
      source.droppableId === "kuadran3"
    ) {
      const add = kuadran3[source.index];
      dispatch(addKuadran1(add));
      dispatch(removeKuadran3(source.index));
    }
    if (
      destination?.droppableId === "kuadran4" &&
      source.droppableId === "kuadran3"
    ) {
      const add = kuadran3[source.index];
      dispatch(addKuadran4(add));
      dispatch(removeKuadran3(source.index));
    }

    //kuadran 1 to other kuadran
    if (
      destination?.droppableId === "kuadran2" &&
      source.droppableId === "kuadran4"
    ) {
      const add = kuadran4[source.index];
      dispatch(addKuadran2(add));
      dispatch(removeKuadran4(source.index));
    }
    if (
      destination?.droppableId === "kuadran3" &&
      source.droppableId === "kuadran4"
    ) {
      const add = kuadran4[source.index];
      dispatch(addKuadran3(add));
      dispatch(removeKuadran4(source.index));
    }
    if (
      destination?.droppableId === "kuadran1" &&
      source.droppableId === "kuadran4"
    ) {
      const add = kuadran4[source.index];
      dispatch(addKuadran1(add));
      dispatch(removeKuadran4(source.index));
    }
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
        <Navbar />
        <ModalInfo />
        <List />
        <div className="px-6 pt-8 pb-10">
          <Input />
          <div className="grid grid-cols-2 mt-10">
            <Kuadran1 />
            <Kuadran2 />
            <Kuadran3 />
            <Kuadran4 />
          </div>
        </div>
      </DragDropContext>
    </>
  );
}

export default App;
