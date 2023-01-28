import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Cron from "./Cron";
import Images from "./Images";
import Setting from "./Setting";

function MainPage() {
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
