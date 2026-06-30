export {};

declare global {
  interface Window {
    invokeCommand?: (data: string) => void;
    observableChanged?: (data: string) => void;
    __MTP__?: any;
  }
}
