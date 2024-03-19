import Hero from "../components/Hero";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      {userInfo ? (
        <>
          <h2
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            Welcome {userInfo.name}
          </h2>
        </>
      ) : (
        <>
          <Hero />
        </>
      )}
    </>
  );
};
export default HomeScreen;
