import ElementList from "../common/ElementList";
import { useAppSelector } from "../../store";
import { updatePoints } from "../../store/slices/amphibians";


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