import { Module } from '@nestjs/common';
import { MCPModule } from './mcp/mcp.module';

@Module({
  imports: [MCPModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
