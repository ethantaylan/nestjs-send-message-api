import { Injectable } from '@nestjs/common';
import { SendMessage } from './send-message.interface';

@Injectable()
export class SendMessageService {
  private readonly url = 'https://api.wassenger.com/v1/messages';
  private readonly token = process.env.WASSENGER_TOKEN;

  public async sendMessage(message: SendMessage): Promise<any> {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Token: this.token,
      },
      body: JSON.stringify(message),
    };

    try {
      const response = await fetch(this.url, options);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
