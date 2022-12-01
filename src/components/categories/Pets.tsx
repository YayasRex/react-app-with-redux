import ElementList from "../common/ElementList";
import { useAppSelector } from "../../store";
import { updatePoints } from "../../store/slices/pets";

const Pets = () => {

  const {pets} = useAppSelector(state => state)

  return (
    <section>
      <h1>Pets</h1>
      <ElementList elements={pets.list} addPoint={updatePoints}/>
    </section>
  )
};

export default Pets;