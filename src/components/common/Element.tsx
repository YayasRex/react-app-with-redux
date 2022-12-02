import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store";
import { IElement } from "../../utils/consts";
import { getElement } from "../../utils/process";

const Element = () => {
  
  const navigate = useNavigate();
  const {type, id} = useParams();
  const [element, setElement] = useState<null | IElement>(null);
  const {amphibians, humans, pets} = useAppSelector(state => state)
  const elemt = (ls: IElement[]) => {
    const elem = getElement(ls, Number(id));
    if (elem) setElement(elem);
    else {
      alert("Invalid id");
      navigate("/");
    }
  };


  useEffect(() => {
    switch (type) {
      case "amphibians": {
        elemt(amphibians.list as IElement[]);
        break;
      }
      case "humans": {
        elemt(humans.list as IElement[]);
        break;
      }
      case "pets": {
        elemt(pets.list as IElement[]);
        break;
      }
      default: {
        alert("INVALID CATEGORY");
        navigate("/");
      }
    }
  }, []);

  return (
    <section>
      <h1>WORKS {type?.toUpperCase()} ID: {id} ~ Description: {element?.description}</h1>
    </section>
  )
};

export default Element;