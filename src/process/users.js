"use strict";
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const userVerify = async () => {
  client.verify.v2.services
    .create({ friendlyName: "Código de verificación " })
    .then((service) => {
      console.log(service.sid);

      client.verify.v2
        .services(service.sid)
        .verifications.create({ to: "+52numero", channel: "sms" })
        .then((verification) => {
          console.log(verification);
        });
    });
};

const userValidation = async () => {
  try {
    client.verify.v2.services('idDelServicio')
      .verificationChecks
      .create({to: '+52numero', code: 'codigo'})
      .then(verification_check => {
        console.log(verification_check)
      });
  } catch (error) {
    console.log('error ', error);
  }
};

const createUser = async (data, db) => {
  const { email, password, fullName, username } = data;

  if (!email || !password || !username)
    return {
      message:
        "Los datos email, password y username del usuario son obligatorios",
    };

  const userValidated = await db.users.findOne({
    where: { username: username, email: email },
  });

  if (!!userValidated)
    return {
      message: "El usuario ya existe intente con algun otro usuario",
    };

  const userCreateResponse = await db.users.create({
    email,
    password,
    fullName: fullName || "desconocido",
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
