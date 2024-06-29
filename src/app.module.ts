import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendMessageModule } from './send-message/send-message.module';
import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot();

@Module({
  imports: [SendMessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
