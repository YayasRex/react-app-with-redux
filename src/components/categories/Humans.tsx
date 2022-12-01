import ElementList from "../common/ElementList";
import { useAppSelector } from '../../store';
import { updatePoints } from "../../store/slices/humans";

const Humans = () => {
  const {humans} = useAppSelector(state => state)
  return (
    <section>
      <h1>Humans</h1>
      <ElementList elements={humans.list} addPoint={updatePoints}/>
    </section>
  )
};

export default Humans;