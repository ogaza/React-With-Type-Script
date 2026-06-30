export type MtpHostGlobalThis = typeof globalThis & {
  appEventHandler?: (strData: string) => void;
  observableChanged?: (strData: string) => void;
};
