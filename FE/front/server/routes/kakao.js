import express from "express";
import axios from "axios";
const router = express.Router();

const kakao = {
  clientID: "c148a94558540f7e0f14a832a24814b5",
  redirectURL: "http://localhost:8080/login/kakao",
  accessTokenURL: "https://kauth.kakao.com/oauth/token",
};

router.use((req, res, next) => {
  next();
});

router.get("/", (req, res) => {
  res.status(200).send({ message: "login" });
});

router.get("/kakao", async (req, res) => {
  const code = req.query.code;
  const ref = req.headers.referer;

  // console.log(req);
  // console.log(ref);

  try {
    // Exchange the authorization code for an access token
    const tokenParams = new URLSearchParams({
      grant_type: "authorization_code",
      client_id: kakao.clientID,
      redirect_uri: kakao.redirectURL,
      code: code,
    });

    const response = await axios.post(
      kakao.accessTokenURL,
      tokenParams.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = response.data.access_token;

    res.redirect(`${ref}?token=${accessToken}`);
  } catch (error) {
    res.status(500).send({
      message: "Error exchanging authorization code for access token",
      error: error,
    });
  }
});

export default router;
