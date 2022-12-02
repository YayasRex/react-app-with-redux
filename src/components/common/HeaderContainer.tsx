import Header from "./Header";
import { getHigh } from "../../utils/process";
import { useAppSelector } from "../../store";
import { IElement } from "../../utils/consts";

const HeaderContainer = () => {
  
  const {amphibians, humans, pets} = useAppSelector(state => state)

  return (
    <>
      <Header element={getHigh(amphibians.list) as IElement} type="Amphibian🦎" />
      <Header element={getHigh(humans.list) as IElement} type="Human🧔" />
      <Header element={getHigh(pets.list) as IElement} type="Pet🐾" />
    </>
  )
};

export default HeaderContainer;