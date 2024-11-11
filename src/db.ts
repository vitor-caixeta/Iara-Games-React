import { openDB } from 'idb';

const DB_NAME = 'UserDatabase';
const STORE_NAME = 'users';

export const initDB = async () => {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'email' }); // email is the unique key
      }
    },
  });
  return db;
};

export const addUser = async (user: any) => {
  const db = await initDB();
  await db.add(STORE_NAME, user);
};

export const getUser = async (email: any) => {
  const db = await initDB();
  return await db.get(STORE_NAME, email);
};
