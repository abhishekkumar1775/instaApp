import { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { authenticationSuccessful } from "../store/Auth";
import Cron from "./Cron";
import Images from "./Images";
import Setting from "./Setting";

function MainPage() {
  const query = useLocation().search;
  const token = new URLSearchParams(query).get("code");

  console.log({ token });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      authenticationSuccessful({
        authToken: token.substring(0, s.length() - 2),
      })
    );
    dispatch();
  });

  //   console.log(query);
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="DisplayPage">
        <Images />
      </Tab>
      <Tab eventKey="profile" title="Settings">
        <Setting />
      </Tab>
      <Tab eventKey="longer-tab" title="Cron">
        <Cron />
      </Tab>
    </Tabs>
  );
}

export default MainPage;
