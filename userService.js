const bcrypt = require('bcrypt');

const DELAY = 50;

const hashPassword = async (plainPassword) => {
  const hash = await bcrypt.hash(plainPassword, 10);

  return hash;
};

const hashPasswordSync = (plainPassword) => {
  const hash = bcrypt.hashSync(plainPassword, 10);

  return hash;
};

const create = (email, password) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ email, password });
    }, DELAY);
  });
};

const signUpWithSyncHash = async (email, password) => {
  const passwordHash = hashPasswordSync(password);
  const user = await create(email, passwordHash);

  return user;
};

const signUpWithAsyncHash = async (email, password) => {
  const passwordHash = await hashPassword(password);
  const user = await create(email, passwordHash);

  return user;
};

module.exports = { signUpWithSyncHash, signUpWithAsyncHash };
