import * as Realm from "realm-web";

export const app = new Realm.App({ id: "whatever-note-1-wjxit" });

export const login = async (email, password) => {
  const credentials = Realm.Credentials.emailPassword(email, password);
  const logged = await app.logIn(credentials);

  return logged;
};
