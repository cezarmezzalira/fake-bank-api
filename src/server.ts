import './util/module-alias';
import express, { Application } from 'express';
import routes from './routes';

export class SetupServer {
  private app: Application;

  constructor(private port = 3000) {
    this.app = express();
  }

  public async init(): Promise<void> {
    this.setupExpress();
    this.setupRoutes();
    await this.setupDatabase();
  }

  private setupExpress(): void {
    this.app.use(express.json());
  }

  private setupRoutes(): void {
    this.app.use(routes);
  }

  private async setupDatabase(): Promise<void> {
    // TODO
  }

  public getApp(): Application {
    return this.app;
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server listen on port: ${this.port}`);
    });
  }
}
