import { Express } from "express";

// Define la interfaz
interface AppConfig {
  app: Express;
  port: number | undefined;
}

export class Server {
  public readonly config: AppConfig;

  constructor(config: AppConfig) {
    this.config = config;
  }

  public start() {
    const port = this.config.port; // Valor predeterminado: 3000
    this.config.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}
