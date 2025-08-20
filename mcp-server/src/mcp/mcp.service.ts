import { Injectable } from '@nestjs/common';
import { STATIONS } from 'src/datas/sations';

@Injectable()
export class MCPService {
  initialize(id: number) {
    console.debug('Initializing MCP with ID:', id);
    return {
      jsonrpc: '2.0',
      id,
      result: {
        protocolVersion: '2025-06-18',
        capabilities: {
          resources: {
            listChanged: false,
          },
        },
        serverInfo: {
          name: 'mcp-example',
          version: '1.0.0',
        },
      },
    };
  }

  listResources(id: number) {
    return {
      jsonrpc: '2.0',
      id,
      result: {
        resources: [
          {
            uri: 'file://stations.md',
            name: 'stations.md',
            title: 'List of subway stations from Montpellier',
            description: 'List of subway stations from Montpellier',
            mimeType: 'text/markdown',
          },
        ],
        nextCursor: 'next-page-cursor',
      },
    };
  }

  readResource(id: number, uri: string) {
    return {
      jsonrpc: '2.0',
      id,
      result: {
        contents: [
          {
            uri,
            name: 'stations.md',
            title: 'List of subway stations from Montpellier',
            mimeType: 'text/markdown',
            text: STATIONS.map((station) => `- ${station}`).join('\n'),
          },
        ],
      },
    };
  }
}
