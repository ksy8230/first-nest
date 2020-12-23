import { Controller, Get } from '@nestjs/common';

@Controller('') // prefix의 역할?
export class AppController {
    @Get()
    home() {
        return 'welcome to my api'
    }
}
