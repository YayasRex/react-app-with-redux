import './index.css'
import React from "react";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { IElement } from "../../utils/consts";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

interface ElementListProps {
  elements: IElement[],
  addPoint: ActionCreatorWithPayload<number, string>
};

const ElementList: React.FC<ElementListProps> = ({ elements, addPoint }) => {
  
  const dispatch = useDispatch();
  
  return (
    <>
    {elements.map(({ id, name, age, points, imageUrl }) => {
        return (
          <ul key={id}>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Points: {points}</li>
            <Link to={id.toString()}>Show more</Link>
            <img src={imageUrl} alt="" />
            <li>
              <button onClick={() => dispatch(addPoint(id))}>
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