import { envs } from "./config/plugins/envs.plugin";
import { Server } from "./presentation/server";
import express from "express";

(async () => {
  main();
})();

function main() {
  // Crea una instancia de Server con la configuración
  const serverConfig = {
    app: express(),
    port: envs.PORT,
  };

  const server = new Server(serverConfig);
  server.start(); // Inicia el servidor
}
