import { IElement } from "../../utils/consts";

interface HeaderProps {
  element: IElement,
  type: string
}

const Header: React.FC<HeaderProps> = ({element, type}) =>  {
  return (
    <p>
      The {type} most popular: {element.name}, with {element.points} points.
    </p>
  )
};

export default Header;