import { Body, Controller, Post } from '@nestjs/common';
import { MCPService } from './mcp.service';
import { McpInitializeRequest } from './types';

@Controller('mcp')
export class MCPController {
  constructor(private readonly mcpService: MCPService) {}

  @Post()
  handleInitialize(@Body() body: McpInitializeRequest) {
    const method = body.method;
    const id = body.id;

    switch (method) {
      case 'initialize':
        return this.mcpService.initialize(id);
      case 'resources/list':
        return this.mcpService.listResources(id);
      case 'resources/read': {
        const uri = body.params?.uri as string;
        return this.mcpService.readResource(id, uri);
      }
    }

    return 'Method not implemented';
  }
}
