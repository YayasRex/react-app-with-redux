import React from "react";
import { Link } from 'react-router-dom'
import { IElement } from "../utils/consts";

interface ElementListProps {
  elements: IElement[]
};

const ElementList: React.FC<ElementListProps> = ({ elements }) => {
  return (
    <>
    {elements.map((curr) => {
        return (
          <ul key={curr.id}>
            <li>Name: {curr.name}</li>
            <li>Age: {curr.age}</li>
            <li>Points: {curr.points}</li>
            <Link to={curr.id.toString()}>Show more</Link>
            <li>
              <button onClick={() => {}}>
                Add point
              </button>
            </li>
          </ul>
        );
      })}
    </>
  )
};

export default ElementList;