"use strict";

const createUser = async (data, db) => {
  const { email, password, full_name, username } = data;

  if (!email || !password || !username)
    return {
      message:
        "Los datos email, password, username del usuario son obligatorios",
    };

  const userCreateResponse = await db.users.create({
    email,
    password,
    full_name: full_name || 'desconocido',
    username,
  });

  return {
    message: "User created",
    dataUser: await userCreateResponse,
  };
};

const getUsers = async (data, db) => {
  const users = await db.users.findAll();

  return {
    message: "La busqueda de los usuarios fue exitosa",
    dataUsers: users,
  };
};

module.exports = {
  getUsers: getUsers,
  createUser: createUser,
};
