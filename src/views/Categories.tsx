import './index.css'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <>
      <h2>Categories</h2>
      <ul className='categories'>
        <li>
          <Link to="pets">Pets</Link>
        </li>
        <li>
          <Link to="humans">Humans</Link>
        </li>
        <li>
          <Link to="amphibians">Amphibians</Link>
        </li>
      </ul>

      <h3>
        <Link to="/">Back to home</Link>
      </h3>
    </>
  )
};

export default Categories;