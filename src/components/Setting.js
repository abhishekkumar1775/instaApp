import Button from "react-bootstrap/Button";

const clickHandler = () => {
  const newWindow = window.open(
    "https://api.instagram.com/oauth/authorize?client_id=726214525523473&redirect_uri=https://gleaming-naiad-041388.netlify.app/&scope=user_profile,user_media&response_type=code",
    "_blank",
    "noopener,noreferrer"
  );
  if (newWindow) newWindow.opener = null;
};

const Setting = () => {
  return (
    <div>
      <h1>Setting</h1>
      <Button variant="success" onClick={clickHandler}>
        Login to instagram
      </Button>
    </div>
  );
};

export default Setting;
