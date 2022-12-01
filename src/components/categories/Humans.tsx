import { useAppSelector } from '../../store';
import ElementList from "../common/ElementList";

const Humans = () => {
  const {humans} = useAppSelector(state => state)
  return (
    <section>
      <h1>Humans</h1>
      {/* <ElementList elements={humans.list} /> */}
    </section>
  )
};

export default Humans;