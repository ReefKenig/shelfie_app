import { Account, Avatars, Client, Databases } from "react-native-appwrite";

export const client = new Client()
  .setProject("68a85e1800100bbe0090")
  .setPlatform("dev.reefkenig.shelfie");

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);