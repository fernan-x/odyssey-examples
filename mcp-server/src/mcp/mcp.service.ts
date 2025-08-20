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
          tools: {
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
  listTools(id: number) {
    return {
      jsonrpc: '2.0',
      id,
      result: {
        tools: [
          {
            name: 'path_find',
            title: 'Find a path between two subway stations',
            description:
              'This tool finds a path between two subway stations in Montpellier.',
            inputSchema: {
              type: 'object',
              properties: {
                start: {
                  type: 'string',
                  description: 'The starting subway station (ex: "Antigone")',
                },
                end: {
                  type: 'string',
                  description: 'The ending subway station (ex: "Odysseum")',
                },
              },
              required: ['start', 'end'],
            },
          },
        ],
      },
    };
  }
  callPathFind(id: number, params: Record<string, unknown>) {
    const { start, end } = params as { start: string; end: string };
    console.debug('Finding path from', start, 'to', end);

    // Simulate a path finding operation
    const path = `Path from ${start} to ${end}: [${start} -> ... -> ${end}]`;

    return {
      jsonrpc: '2.0',
      id,
      result: {
        content: [
          {
            type: 'text',
            text: path,
          },
        ],
      },
    };
  }
}
