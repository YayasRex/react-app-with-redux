import { useAppSelector } from "../../store";
import { updatePoints } from "../../store/slices/amphibians";
import ElementList from "../common/ElementList";


const Amphibians = () => {

  const { amphibians } = useAppSelector(state => state);

  return (
    <section>
      <h1>Amphibians</h1>
      <ElementList elements={amphibians.list} addPoint={updatePoints}/>
    </section>
  )
};

export default Amphibians;