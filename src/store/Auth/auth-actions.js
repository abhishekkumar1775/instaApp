export const getNewToken = (authData) => {
  return async (dispatch, getState) => {
    const { auth } = getState();
    const addAuth = async () => {
      let res;
      const response = await fetch(
        "https://api.instagram.com/oauth/access_token",
        {
          method: "POST",
          body: JSON.stringify({
            client_id: 726214525523473,
            client_secret: "d2d238276eceaeac6a66543b1ae58d59",
            code: auth.authCode,
            grant_type: "authorization_code",
            redirect_uri: "https://gleaming-naiad-041388.netlify.app/",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const statusCode = response.status;

      if (!response.ok) {
        const responseText = await response.text();
        const responseJSON = JSON.parse(responseText.toString());

        throw new Error(responseJSON.error);
      }
      const data = await response.json();

      return data;
    };

    try {
      const data = await addAuth();

      console.log(success, { data });
    } catch (error) {
      console.log(error);
    }
  };
};
