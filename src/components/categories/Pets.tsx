import ElementList from "../common/ElementList";
import { useAppSelector } from "../../store";
import { updatePoints } from "../../store/slices/pets";
import { Link } from "react-router-dom";

const Pets = () => {

  const {pets} = useAppSelector(state => state)

  return (
    <section>
      <h1>Pets</h1>
      <ElementList elements={pets.list} addPoint={updatePoints}/>
      <Link to="/categories">Back to categories</Link>
    </section>
  )
};

export default Pets;