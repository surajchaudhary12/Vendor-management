import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('greet/:name')
  getGreeting(@Param('name') name: string): string {
    return this.appService.getGreeting(name);
  }

  @Get('info')
  getServiceInfo(): string {
    return this.appService.getServiceInfo();
  }
}
