import ElementList from "../common/ElementList";
import { useAppSelector } from "../../store";
import { updatePoints } from "../../store/slices/amphibians";
import {Link} from "react-router-dom"

const Amphibians = () => {

  const { amphibians } = useAppSelector(state => state);

  return (
    <section>
      <h1>Amphibians</h1>
      <ElementList elements={amphibians.list} addPoint={updatePoints}/>
      <Link to="/categories">Back to categories</Link>
    </section>
  )
};

export default Amphibians;