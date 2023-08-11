export class ConsoleLogger {
  log(message?: any, ...optionalParams: any[]): void {
    console.log(message, ...optionalParams);
  }

  warn(message?: any, ...optionalParams: any[]): void {
    console.warn(message, ...optionalParams);
  }

  error(message?: any, ...optionalParams: any[]): void {
    console.error(message, ...optionalParams);
  }
}
