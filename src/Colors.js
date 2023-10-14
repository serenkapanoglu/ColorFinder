import React from 'react';
import { Link } from 'react-router-dom';


function Colors({ colors }) {

  return (
    <div className="Colors">
      <Link to="/colors/new">Add a color</Link>
      <ul>
        {colors.map(c => (
          <li>
            <Link to={`/colors/${c.name}`} >{c.name}</Link>
          </li>
      ))}
      </ul>
    </div>
  );
}

export default Colors;