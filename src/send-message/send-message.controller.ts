import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SendMessageService } from './send-message.service';
import { SendMessage } from './send-message.interface';

@Controller('send-message')
@ApiTags('posts')
export class SendMessageController {
  constructor(private readonly sendMessageService: SendMessageService) {}

  @Post()
  public create(@Body() message: SendMessage): Promise<any> {
    return this.sendMessageService.sendMessage(message);
  }
}
