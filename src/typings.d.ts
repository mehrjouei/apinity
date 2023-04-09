import { EnvironmentConfig } from "./app/interfaces/config";

declare global {
  interface Window {
    config: EnvironmentConfig;
  }
}