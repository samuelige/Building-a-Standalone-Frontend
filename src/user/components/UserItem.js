import React from "react";
import { Link } from "react-router-dom";

import StyleImage from "../../shared/components/UIElements/StyleImage";
import Card from "../../shared/components/UIElements/Card";
import "./UserItem.css";

const UsersItem = (props) => {
  return (
    <li className='user-item'>
      <Card className='user-item__content'>
        <Link to={`/ ${props.id}/places`}>
          <div className='user-item__image'>
            <StyleImage image={props.image} alt={props.name} />
          </div>
          <div className='user-item__info'>
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount}
              {props.placeCount === 1 ? "place" : "3 places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UsersItem;
