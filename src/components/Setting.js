import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

const clickHandler = () => {
  const newWindow = window.open(
    "https://api.instagram.com/oauth/authorize?client_id=726214525523473&redirect_uri=https://gleaming-naiad-041388.netlify.app/&scope=user_profile,user_media&response_type=code",
    "_blank",
    "noopener,noreferrer"
  );
  if (newWindow) newWindow.opener = null;
};

const Setting = () => {
  const { loggedIn } = useSelector((state) => state.auth);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Setting</h1>
      <Button variant="success" onClick={clickHandler} disabled={loggedIn}>
        {loggedIn ? "Already Logged In" : "Click to Login"}
      </Button>
    </div>
  );
};

export default Setting;
