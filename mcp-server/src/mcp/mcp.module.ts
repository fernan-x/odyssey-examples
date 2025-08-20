import { Module } from '@nestjs/common';
import { MCPService } from './mcp.service';
import { MCPController } from './mcp.controller';

@Module({
  imports: [],
  controllers: [MCPController],
  providers: [MCPService],
})
export class MCPModule {}
