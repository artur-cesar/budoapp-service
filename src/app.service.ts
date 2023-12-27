import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return String('Running in ' + process.env.NODE_ENV);
  }
}
