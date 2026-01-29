# Coingecko TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export COINGECKO_PRO_API_KEY="My Pro API Key"
export COINGECKO_DEMO_API_KEY="My Demo API Key"
export COINGECKO_ENVIRONMENT="pro"
npx -y @coingecko/coingecko-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "coingecko_coingecko_typescript_api": {
      "command": "npx",
      "args": ["-y", "@coingecko/coingecko-mcp"],
      "env": {
        "COINGECKO_PRO_API_KEY": "My Pro API Key",
        "COINGECKO_DEMO_API_KEY": "My Demo API Key",
        "COINGECKO_ENVIRONMENT": "pro"
      }
    }
  }
}
```

### Cursor

If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40coingecko%2Fcoingecko-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBjb2luZ2Vja28vY29pbmdlY2tvLW1jcCJdLCJlbnYiOnsiQ09JTkdFQ0tPX1BST19BUElfS0VZIjoiTXkgUHJvIEFQSSBLZXkiLCJDT0lOR0VDS09fREVNT19BUElfS0VZIjoiTXkgRGVtbyBBUEkgS2V5In19)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40coingecko%2Fcoingecko-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40coingecko%2Fcoingecko-mcp%22%5D%2C%22env%22%3A%7B%22COINGECKO_PRO_API_KEY%22%3A%22My%20Pro%20API%20Key%22%2C%22COINGECKO_DEMO_API_KEY%22%3A%22My%20Demo%20API%20Key%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add coingecko_coingecko_mcp_api --env COINGECKO_PRO_API_KEY="My Pro API Key" COINGECKO_DEMO_API_KEY="My Demo API Key" -- npx -y @coingecko/coingecko-mcp
```

## Code Mode

This MCP server is built on the "Code Mode" tool scheme. In this MCP Server,
your agent will write code against the TypeScript SDK, which will then be executed in an
isolated sandbox. To accomplish this, the server will expose two tools to your agent:

- The first tool is a docs search tool, which can be used to generically query for
  documentation about your API/SDK.

- The second tool is a code tool, where the agent can write code against the TypeScript SDK.
  The code will be executed in a sandbox environment without web or filesystem access. Then,
  anything the code returns or prints will be returned to the agent as the result of the
  tool call.

Using this scheme, agents are capable of performing very complex tasks deterministically
and repeatably.

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ------------------- | ------------------------ | --------------- |
| `x-cg-pro-api-key` | `proAPIKey` | proKeyAuth |
| `x-cg-demo-api-key` | `demoAPIKey` | demoKeyAuth |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "coingecko_coingecko_typescript_api": {
      "url": "http://localhost:3000",
      "headers": {
        "x-cg-pro-api-key": "My Pro API Key"
      }
    }
  }
}
```
