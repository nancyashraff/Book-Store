import { Router } from "express";
import db from "../utils/database.js"
import { userValidationSchema, userUpdateSchema } from "../utils/userValidationSchema.js";
import {matchedData, validationResult, checkSchema} from "express-validator";

const router=Router()

const users=db.users;

const resolveIndexByUserId = (req, res, next) => {
  const {
    params: { id },
  } = req;

  const parseID = parseInt(id);
  if (isNaN(parseID)) return res.sendStatus(400);

  const userIndex = users.findIndex((user) => user.id === parseID);
  if (userIndex === -1) return res.sendStatus(404);
  req.userIndex = userIndex;
  next();
};

router.get("/users",(req,res)=>{
    res.send(users);
})

router.get("/users/:id",(req,res)=>{
    const {
    params: { id },
  } = req;

  const parseID = parseInt(id);
  if (isNaN(parseID)) return res.sendStatus(400);

  const userIndex = users.findIndex((user) => user.id === parseID);
  if (userIndex === -1) return res.sendStatus(404);
  req.userIndex = userIndex;
  res.send(users[req.userIndex]);
})

router.post("/users",checkSchema(userValidationSchema),(req, res)=>{
    const result = validationResult(req);
    if (!result.isEmpty())
      return res.status(400).send({ errors: result.array() });

    const data = matchedData(req);
    const newUser = { id: users.length + 1, ...data };
    users.push(newUser);
    res.status(201).send(newUser);
})

router.put("/users/:id",checkSchema(userUpdateSchema),resolveIndexByUserId,(req, res)=>{
    const { body } = req;
    users[req.userIndex] = { id: users[req.userIndex].id, ...body };
    res.status(200).send(users[req.userIndex]);
})


export default router;