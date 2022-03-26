import { Controller, Get, Provide } from '@midwayjs/decorator';

@Provide()
@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    return '欢迎访问 Home Page';
  }
}
