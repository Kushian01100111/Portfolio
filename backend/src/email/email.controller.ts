import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
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
        const result = await this.emailService.sendEmail(name, email, message);
        return { message: 'Email sent successfully', data: result }; // Assuming you want to return some data along with a success message
        } catch (error) {
        throw new HttpException({ message: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
  }