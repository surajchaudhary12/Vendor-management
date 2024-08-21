import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGreeting(name: string): string {
    return `Hello, ${name}!`;
  }

  getServiceInfo(): string {
    return 'This is the AppService, providing core functionalities for the application.';
  }
}
