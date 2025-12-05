// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import path from 'node:path';
import util from 'node:util';

import Fuse from 'fuse.js';
import ts from 'typescript';

import { WorkerInput, WorkerSuccess, WorkerError } from './code-tool-types';
import { Coingecko } from '@coingecko/coingecko-typescript';

function getRunFunctionSource(code: string): {
  type: 'declaration' | 'expression';
  client: string | undefined;
  code: string;
} | null {
  const sourceFile = ts.createSourceFile('code.ts', code, ts.ScriptTarget.Latest, true);
  const printer = ts.createPrinter();

  for (const statement of sourceFile.statements) {
    // Check for top-level function declarations
    if (ts.isFunctionDeclaration(statement)) {
      if (statement.name?.text === 'run') {
        return {
          type: 'declaration',
          client: statement.parameters[0]?.name.getText(),
          code: printer.printNode(ts.EmitHint.Unspecified, statement.body!, sourceFile),
        };
      }
    }

    // Check for variable declarations: const run = () => {} or const run = function() {}
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (
          ts.isIdentifier(declaration.name) &&
          declaration.name.text === 'run' &&
          // Check if it's initialized with a function
          declaration.initializer &&
          (ts.isFunctionExpression(declaration.initializer) || ts.isArrowFunction(declaration.initializer))
        ) {
          return {
            type: 'expression',
            client: declaration.initializer.parameters[0]?.name.getText(),
            code: printer.printNode(ts.EmitHint.Unspecified, declaration.initializer, sourceFile),
          };
        }
      }
    }
  }

  return null;
}

function getTSDiagnostics(code: string): string[] {
  const functionSource = getRunFunctionSource(code)!;
  const codeWithImport = [
    'import { Coingecko } from "@coingecko/coingecko-typescript";',
    functionSource.type === 'declaration' ?
      `async function run(${functionSource.client}: Coingecko)`
    : `const run: (${functionSource.client}: Coingecko) => Promise<unknown> =`,
    functionSource.code,
  ].join('\n');
  const sourcePath = path.resolve('code.ts');
  const ast = ts.createSourceFile(sourcePath, codeWithImport, ts.ScriptTarget.Latest, true);
  const options = ts.getDefaultCompilerOptions();
  options.target = ts.ScriptTarget.Latest;
  options.module = ts.ModuleKind.NodeNext;
  options.moduleResolution = ts.ModuleResolutionKind.NodeNext;
  const host = ts.createCompilerHost(options, true);
  const newHost: typeof host = {
    ...host,
    getSourceFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return ast;
      }
      return host.getSourceFile(...args);
    },
    readFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return codeWithImport;
      }
      return host.readFile(...args);
    },
    fileExists: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return true;
      }
      return host.fileExists(...args);
    },
  };
  const program = ts.createProgram({
    options,
    rootNames: [sourcePath],
    host: newHost,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program, ast);
  return diagnostics.map((d) => {
    const message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
    if (!d.file || !d.start) return `- ${message}`;
    const { line: tsLine } = ts.getLineAndCharacterOfPosition(d.file, d.start);
    // We add two lines in the beginning, for the client import and the function declaration.
    // So the actual (zero-based) line number is tsLine - 2.
    const lineNumber = tsLine - 2;
    const line = code.split('\n').at(lineNumber)?.trim();
    return line ? `- ${message}\n    at line ${lineNumber + 1}\n      ${line}` : `- ${message}`;
  });
}

const fuse = new Fuse(
  [
    'client.assetPlatforms.get',
    'client.coins.getID',
    'client.coins.categories.get',
    'client.coins.categories.getList',
    'client.coins.list.get',
    'client.coins.list.getNew',
    'client.coins.markets.get',
    'client.coins.topGainersLosers.get',
    'client.coins.circulatingSupplyChart.get',
    'client.coins.circulatingSupplyChart.getRange',
    'client.coins.contract.get',
    'client.coins.contract.marketChart.get',
    'client.coins.contract.marketChart.getRange',
    'client.coins.history.get',
    'client.coins.marketChart.get',
    'client.coins.marketChart.getRange',
    'client.coins.ohlc.get',
    'client.coins.ohlc.getRange',
    'client.coins.tickers.get',
    'client.coins.totalSupplyChart.get',
    'client.coins.totalSupplyChart.getRange',
    'client.derivatives.get',
    'client.derivatives.exchanges.get',
    'client.derivatives.exchanges.getID',
    'client.derivatives.exchanges.getList',
    'client.entities.getList',
    'client.exchangeRates.get',
    'client.exchanges.get',
    'client.exchanges.getID',
    'client.exchanges.getList',
    'client.exchanges.tickers.get',
    'client.exchanges.volumeChart.get',
    'client.exchanges.volumeChart.getRange',
    'client.global.get',
    'client.global.decentralizedFinanceDefi.get',
    'client.global.marketCapChart.get',
    'client.key.get',
    'client.nfts.getID',
    'client.nfts.getList',
    'client.nfts.getMarkets',
    'client.nfts.contract.getContractAddress',
    'client.nfts.contract.marketChart.get',
    'client.nfts.marketChart.get',
    'client.nfts.tickers.get',
    'client.onchain.categories.get',
    'client.onchain.categories.getPools',
    'client.onchain.networks.get',
    'client.onchain.networks.newPools.get',
    'client.onchain.networks.newPools.getNetwork',
    'client.onchain.networks.trendingPools.get',
    'client.onchain.networks.trendingPools.getNetwork',
    'client.onchain.networks.dexes.get',
    'client.onchain.networks.dexes.getPools',
    'client.onchain.networks.pools.get',
    'client.onchain.networks.pools.getAddress',
    'client.onchain.networks.pools.multi.getAddresses',
    'client.onchain.networks.pools.info.get',
    'client.onchain.networks.pools.ohlcv.getTimeframe',
    'client.onchain.networks.pools.trades.get',
    'client.onchain.networks.tokens.getAddress',
    'client.onchain.networks.tokens.multi.getAddresses',
    'client.onchain.networks.tokens.info.get',
    'client.onchain.networks.tokens.topHolders.get',
    'client.onchain.networks.tokens.holdersChart.get',
    'client.onchain.networks.tokens.ohlcv.getTimeframe',
    'client.onchain.networks.tokens.pools.get',
    'client.onchain.networks.tokens.trades.get',
    'client.onchain.pools.megafilter.get',
    'client.onchain.pools.trendingSearch.get',
    'client.onchain.search.pools.get',
    'client.onchain.simple.networks.tokenPrice.getAddresses',
    'client.onchain.tokens.infoRecentlyUpdated.get',
    'client.ping.get',
    'client.publicTreasury.getCoinID',
    'client.publicTreasury.getEntityID',
    'client.search.get',
    'client.search.trending.get',
    'client.simple.price.get',
    'client.simple.supportedVsCurrencies.get',
    'client.simple.tokenPrice.getID',
    'client.tokenLists.getAllJson',
  ],
  { threshold: 1, shouldSort: true },
);

function getMethodSuggestions(fullyQualifiedMethodName: string): string[] {
  return fuse
    .search(fullyQualifiedMethodName)
    .map(({ item }) => item)
    .slice(0, 5);
}

const proxyToObj = new WeakMap<any, any>();
const objToProxy = new WeakMap<any, any>();

type ClientProxyConfig = {
  path: string[];
  isBelievedBad?: boolean;
};

function makeSdkProxy<T extends object>(obj: T, { path, isBelievedBad = false }: ClientProxyConfig): T {
  let proxy: T = objToProxy.get(obj);

  if (!proxy) {
    proxy = new Proxy(obj, {
      get(target, prop, receiver) {
        const propPath = [...path, String(prop)];
        const value = Reflect.get(target, prop, receiver);

        if (isBelievedBad || (!(prop in target) && value === undefined)) {
          // If we're accessing a path that doesn't exist, it will probably eventually error.
          // Let's proxy it and mark it bad so that we can control the error message.
          // We proxy an empty class so that an invocation or construction attempt is possible.
          return makeSdkProxy(class {}, { path: propPath, isBelievedBad: true });
        }

        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
          return makeSdkProxy(value, { path: propPath, isBelievedBad });
        }

        return value;
      },

      apply(target, thisArg, args) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a function. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.apply(target, proxyToObj.get(thisArg) ?? thisArg, args);
      },

      construct(target, args, newTarget) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a constructor. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.construct(target, args, newTarget);
      },
    });

    objToProxy.set(obj, proxy);
    proxyToObj.set(proxy, obj);
  }

  return proxy;
}

function parseError(code: string, error: unknown): string | undefined {
  if (!(error instanceof Error)) return;
  const message = error.name ? `${error.name}: ${error.message}` : error.message;
  try {
    // Deno uses V8; the first "<anonymous>:LINE:COLUMN" is the top of stack.
    const lineNumber = error.stack?.match(/<anonymous>:([0-9]+):[0-9]+/)?.[1];
    // -1 for the zero-based indexing
    const line =
      lineNumber &&
      code
        .split('\n')
        .at(parseInt(lineNumber, 10) - 1)
        ?.trim();
    return line ? `${message}\n  at line ${lineNumber}\n    ${line}` : message;
  } catch {
    return message;
  }
}

const fetch = async (req: Request): Promise<Response> => {
  const { opts, code } = (await req.json()) as WorkerInput;

  const runFunctionSource = code ? getRunFunctionSource(code) : null;
  if (!runFunctionSource) {
    const message =
      code ?
        'The code is missing a top-level `run` function.'
      : 'The code argument is missing. Provide one containing a top-level `run` function.';
    return Response.json(
      {
        message: `${message} Write code within this template:\n\n\`\`\`\nasync function run(client) {\n  // Fill this out\n}\n\`\`\``,
        logLines: [],
        errLines: [],
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const diagnostics = getTSDiagnostics(code);
  if (diagnostics.length > 0) {
    return Response.json(
      {
        message: `The code contains TypeScript diagnostics:\n${diagnostics.join('\n')}`,
        logLines: [],
        errLines: [],
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const client = new Coingecko({
    ...opts,
  });

  const logLines: string[] = [];
  const errLines: string[] = [];
  const console = {
    log: (...args: unknown[]) => {
      logLines.push(util.format(...args));
    },
    error: (...args: unknown[]) => {
      errLines.push(util.format(...args));
    },
  };
  try {
    let run_ = async (client: any) => {};
    eval(`${code}\nrun_ = run;`);
    const result = await run_(makeSdkProxy(client, { path: ['client'] }));
    return Response.json({
      result,
      logLines,
      errLines,
    } satisfies WorkerSuccess);
  } catch (e) {
    return Response.json(
      {
        message: parseError(code, e),
        logLines,
        errLines,
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }
};

export default { fetch };
