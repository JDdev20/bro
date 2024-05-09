import { serverConfig } from "./config/plugins/server.plugins";
import { Server } from "./presentation/server";

(async () => {
  main();
})();

function main() {
  // Crea una instancia de Server con la configuración

  const server = new Server(serverConfig);
  server.start(); // Inicia el servidor
}
