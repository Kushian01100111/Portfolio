import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "../../frontend", "dist")
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EmailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
