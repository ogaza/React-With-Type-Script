export {};

declare global {
  interface Window {
    invokeCommand?: (data: string) => void;
    __MTP__?: any;
  }
}
