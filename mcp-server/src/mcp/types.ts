export type McpInitializeRequest = {
  jsonrpc: string;
  id: number;
  method: string;
  params?: Record<string, unknown>;
};
