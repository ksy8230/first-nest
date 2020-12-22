import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // 꾸며주는 함수와 딱 붙어있어야 한다...
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello') 
  sayHello(): string {
    return 'hello';
  }
}
