import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email/email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('message') message: string,
  ) {
    try {
        console.log("here")
      const result = await this.emailService.sendEmail(name, email, message);
      return result;
    } catch (error) {
      return error.message;
    }
  }
}