import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SendMessage {
  @ApiProperty({ type: String })
  message: string;

  @ApiPropertyOptional({ type: String })
  group?: string;
}
