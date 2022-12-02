import { useNavigate } from "react-router-dom";
import HeaderContainer from "../components/common/HeaderContainer";

const Home = () => {

  const navigate = useNavigate();

  const goToCategories = () => {
    navigate("/categories");
  };

  return (
    <>
      <h1>Home</h1>
      <HeaderContainer />
      <button onClick={goToCategories}>Go to categories</button>
    </>
  )
};

export default Home;