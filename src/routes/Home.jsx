import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import { Link } from "react-router-dom";
import HomeFirstBlock from "../components/HomeFirstBlock";
import HomeSecondBlock from "../components/HomeSecondBlock";
import HomeThirdBlock from "../components/HomeThirdBlock";
import HomeFourthBlock from "../components/HomeFourthBlock";
import HomeFifthBlock from "../components/HomeFifthBlock";

const HomePage = () => {
  const { findProductByName } = useAppContext();

  return (
    <main>
      <div className="container">
        <div className="home-page grid-block">
          <HomeFirstBlock />

          <HomeSecondBlock />

          <HomeThirdBlock />

          <div className="area-4th-block">
            <HomeFourthBlock />

            <HomeFifthBlock />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
