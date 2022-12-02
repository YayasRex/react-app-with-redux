import ElementList from "../common/ElementList";
import { useAppSelector } from '../../store';
import { updatePoints } from "../../store/slices/humans";
import { Link } from "react-router-dom";

const Humans = () => {
  const {humans} = useAppSelector(state => state)
  return (
    <section>
      <h1>Humans</h1>
      <ElementList elements={humans.list} addPoint={updatePoints}/>
      <Link to="/categories">Back to categories</Link>
    </section>
  )
};

export default Humans;