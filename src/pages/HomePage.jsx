import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Section from "../components/Section/Section.jsx";
import ProfileInfo from "../components/ProfileInfo/ProfileInfo";
const Home = () => {
  return (
    <>
      <Navbar />
      <Section />
      <div style={{ marginLeft: 100 }}>
        <ProfileInfo
          name={"GitHub"}
          username={"yajatbhasin"}
          email={"2021.yajat.bhasinves.ac.in"}
          link={"https://github.com/"}
        />
        <ProfileInfo
          name={"LinkedIn"}
          username={"yajatbhasin"}
          email={"yajatbhasin@gmail.com"}
          link={"https://www.linkedin.com/in/yajat-bhasin-812935260/"}
        />
      </div>
    </>
  );
};
export default Home;
