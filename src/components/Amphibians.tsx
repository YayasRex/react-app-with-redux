import { useAppSelector } from "../store";
import ElementList from "./ElementList";

const Amphibians = () => {

  const { amphibians } = useAppSelector(state => state);

  return (
    <section>
      <h1>Amphibians</h1>
      <ElementList elements={amphibians.list} />
    </section>
  )
};

export default Amphibians;