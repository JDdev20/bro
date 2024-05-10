import express from "express";
import { envs } from "./envs.plugin";



export const serverConfig = {
    app: express(),
    port: envs.PORT,
  };