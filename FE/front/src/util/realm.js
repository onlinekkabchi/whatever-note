import * as Realm from "realm-web";

export const app = new Realm.App({ id: process.env.NEXT_PUBLIC_REALM_APP_ID });

export const login = async (email, password) => {
  const credentials = Realm.Credentials.emailPassword(email, password);
  await app.logIn(credentials);

  return true;
};

export const getValidAccessToken = async (user) => {
  await user.refreshAccessToken();
  return user.accessToken;
};

export const logout = async () => {
  const userId = app.currentUser.id;
  await app.allUsers[userId].logOut();
  return false;
};
