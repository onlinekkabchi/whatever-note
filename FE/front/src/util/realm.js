import * as Realm from "realm-web";

export const app = new Realm.App({ id: import.meta.env.VITE_REALM_APP_ID });

export const login = async (email, password) => {
  const credentials = Realm.Credentials.emailPassword(email, password);
  const logged = await app.logIn(credentials);

  return logged;
};

export const logout = async () => {
  await app.currentUser.logOut();
};
