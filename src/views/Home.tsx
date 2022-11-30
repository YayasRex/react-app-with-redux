import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const goToCategories = () => {
    navigate("/categories");
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={goToCategories}>Go to categories</button>
    </>
  )
};

export default Home;