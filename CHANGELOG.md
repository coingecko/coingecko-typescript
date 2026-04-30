# Changelog

## 5.1.0 (2026-04-30)

Full Changelog: [v5.0.0...v5.1.0](https://github.com/coingecko/coingecko-typescript/compare/v5.0.0...v5.1.0)

### Features

* Annotate execute readOnlyHint ([4de7dab](https://github.com/coingecko/coingecko-typescript/commit/4de7dab47b9bb3088ec44f8039336def344c794c))


### Bug Fixes

* Remove Makefile ([37c2f87](https://github.com/coingecko/coingecko-typescript/commit/37c2f87cda60328a45d9cc48f61cdf4920c8b3c2))

## 5.0.0 (2026-04-30)

Full Changelog: [v4.0.0...v5.0.0](https://github.com/coingecko/coingecko-typescript/compare/v4.0.0...v5.0.0)

### ⚠ BREAKING CHANGES

* AIP updates; fix!: Pydantic response model

### Features

* AIP updates; fix!: Pydantic response model ([f7aa98b](https://github.com/coingecko/coingecko-typescript/commit/f7aa98be6512fec49a262f68dfe07b6f37dce630))
* support setting headers via env ([c4bfb7b](https://github.com/coingecko/coingecko-typescript/commit/c4bfb7b0b30d30c71c1bdc9331af530fece6bfff))


### Bug Fixes

* Remove orphaned MCP tools ([2eefd83](https://github.com/coingecko/coingecko-typescript/commit/2eefd839db943c2c2dac4103b777dbb19c69d532))


### Chores

* avoid formatting file that gets changed during releases ([718ec79](https://github.com/coingecko/coingecko-typescript/commit/718ec796efa7baf232427e5d434d5cbfc402508d))
* **format:** run eslint and prettier separately ([f0272cc](https://github.com/coingecko/coingecko-typescript/commit/f0272cc9d663d42f4eeff18c6bb28d4cec108cf3))
* **internal:** codegen related update ([1c00380](https://github.com/coingecko/coingecko-typescript/commit/1c00380824b566940a4b6358fdbd2ce78f405912))
* **internal:** more robust bootstrap script ([17ef44c](https://github.com/coingecko/coingecko-typescript/commit/17ef44c3e3db95df23226e6d0934b2e3563b86af))
* restructure docs search code ([753a1d8](https://github.com/coingecko/coingecko-typescript/commit/753a1d8b1d5c53d04c817fe6e14839b2268096a2))

## 4.0.0 (2026-04-17)

Full Changelog: [v3.1.7...v4.0.0](https://github.com/coingecko/coingecko-typescript/compare/v3.1.7...v4.0.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.
* Re-prioritize MCP tooling

### Features

* **api:** api update ([5d7092d](https://github.com/coingecko/coingecko-typescript/commit/5d7092dd794e5e0fec267e783fd11894b58a3f20))
* **api:** api update ([88f7535](https://github.com/coingecko/coingecko-typescript/commit/88f7535c2b21a8ce0fc2cf82bd56c9ed4b4b3d5d))
* **api:** api update ([2425cc6](https://github.com/coingecko/coingecko-typescript/commit/2425cc68f50da6bdb1ee3b36a0d0c34105631a8c))
* **api:** api update ([578bfba](https://github.com/coingecko/coingecko-typescript/commit/578bfba4aa7483d6886ebfa664f9b0192a8e8d87))
* **api:** api update ([33a6ea2](https://github.com/coingecko/coingecko-typescript/commit/33a6ea267fc0cc7823ffb05bf1e408104089aa74))
* **api:** api update ([9be3bfe](https://github.com/coingecko/coingecko-typescript/commit/9be3bfebe853f78cc0fe408cbb9e6c516356a06d))
* **api:** api update ([c7cf66d](https://github.com/coingecko/coingecko-typescript/commit/c7cf66dae206869a6f960b3966f603dbaa84a43a))
* **api:** api update ([14c2d5e](https://github.com/coingecko/coingecko-typescript/commit/14c2d5e82761827875b66383bd0f9dea9c99dc44))
* **api:** api update ([5885c61](https://github.com/coingecko/coingecko-typescript/commit/5885c61172222d9368cc3ca1b0c35d8f1e5b0f55))
* **api:** api update ([f5e8c36](https://github.com/coingecko/coingecko-typescript/commit/f5e8c36ce49096e32b3f853d19d8f195c92dd770))
* **api:** manual updates ([8441326](https://github.com/coingecko/coingecko-typescript/commit/84413268a45f2b55feaee8c91324c099aaab6cb0))
* **api:** manual updates ([e9c62ee](https://github.com/coingecko/coingecko-typescript/commit/e9c62ee20051912ed4a7c00e7ef0991fd44441c9))
* **api:** New endpoints ([f5d13e0](https://github.com/coingecko/coingecko-typescript/commit/f5d13e06cfb547208f98755ffa00a4cad572889e))
* **api:** Update example response ([d163a61](https://github.com/coingecko/coingecko-typescript/commit/d163a61aa6392059cd65eb496f6926405b00ec27))
* **client:** add support for endpoint-specific base URLs ([b356451](https://github.com/coingecko/coingecko-typescript/commit/b356451ee15a78d85c75e584665d4506b4397a58))
* **mcp:** add an option to disable code tool ([f029472](https://github.com/coingecko/coingecko-typescript/commit/f029472640afad4474955fe2742c249cfa97cc22))
* **mcp:** add code execution tool ([abd8635](https://github.com/coingecko/coingecko-typescript/commit/abd8635b0c4fab62d30c48d961d699b584e764e6))
* **mcp:** add detail field to docs search tool ([35f25d0](https://github.com/coingecko/coingecko-typescript/commit/35f25d05c35e48b963ed4941cf60569a6bf25989))
* **mcp:** add docs search tool ([00b47d5](https://github.com/coingecko/coingecko-typescript/commit/00b47d511cfdcc2d910d312fc5191ed29b9540f6))
* **mcp:** add initial server instructions ([2bae525](https://github.com/coingecko/coingecko-typescript/commit/2bae5251b65e052b4b42123601bde24ce8edaf50))
* **mcp:** add logging when environment variable is set ([cafaf6b](https://github.com/coingecko/coingecko-typescript/commit/cafaf6bfadfc32b5547ef20cd1af1e8cd43ce952))
* **mcp:** add option for including docs tools ([1d4963b](https://github.com/coingecko/coingecko-typescript/commit/1d4963b3abcf2cb774450f5913a570a23f501f40))
* **mcp:** add option to infer mcp client ([74d6c6b](https://github.com/coingecko/coingecko-typescript/commit/74d6c6b7666b4a572b6fa4420bf2d988e796663c))
* **mcp:** add typescript check to code execution tool ([af79303](https://github.com/coingecko/coingecko-typescript/commit/af7930323fbf949a35cbd25c810c40414d6e668f))
* **mcp:** add unix socket option for remote MCP ([5882167](https://github.com/coingecko/coingecko-typescript/commit/5882167067675b6a9318607b80cf1deb11802aa7))
* **mcp:** allow setting logging level ([e853c6c](https://github.com/coingecko/coingecko-typescript/commit/e853c6caf73dc13b8de0f89bd08b628daec6a640))
* **mcp:** enable experimental docs search tool ([e824d72](https://github.com/coingecko/coingecko-typescript/commit/e824d7264732a1fa9b1667ecfcb8a4032a9f8c99))
* **mcp:** enable optional code execution tool on http mcp servers ([d245aeb](https://github.com/coingecko/coingecko-typescript/commit/d245aeb412cf3263126081c6a2a6335da026c381))
* **mcp:** expose client options in `streamableHTTPApp` ([bbd3f7f](https://github.com/coingecko/coingecko-typescript/commit/bbd3f7fb0f2b1b885cee6c85344e3b0ea1e0778a))
* **mcp:** handle code mode calls in the Stainless API ([8a6b99f](https://github.com/coingecko/coingecko-typescript/commit/8a6b99fa36ed5376816f05bb547436d331ba4385))
* **mcp:** parse query string as mcp client options in mcp server ([adcd8fa](https://github.com/coingecko/coingecko-typescript/commit/adcd8fa8ead3852f8539b0e0220957434175f173))
* **mcp:** remote server with passthru auth ([b7ccf5a](https://github.com/coingecko/coingecko-typescript/commit/b7ccf5aa47d10aa042ad7f17c1d5044239d9c71e))
* **mcp:** return logs on code tool errors ([21c3c65](https://github.com/coingecko/coingecko-typescript/commit/21c3c656867ad7da94bf2feea8c0c95d447d80cc))
* **mcp:** set X-Stainless-MCP header ([317c1b4](https://github.com/coingecko/coingecko-typescript/commit/317c1b4eb9e044e66cfab7f0cf81c5d095619f99))
* **mcp:** support filtering tool results by a jq expression ([e0f7de2](https://github.com/coingecko/coingecko-typescript/commit/e0f7de28437a7884a796052c40e3c5ff74fa562f))
* Re-prioritize MCP tooling ([6209fec](https://github.com/coingecko/coingecko-typescript/commit/6209fec47535b0c9d64fbe0d54bb4196559ed71c))
* Surface more tools for MCP ([6ccba84](https://github.com/coingecko/coingecko-typescript/commit/6ccba845f00190b25d4da6064fcfe1b1048ac339))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([75c2827](https://github.com/coingecko/coingecko-typescript/commit/75c282747c272c58024ee295063ce50b657873ce))
* **ci:** set permissions for DXT publish action ([138fd3c](https://github.com/coingecko/coingecko-typescript/commit/138fd3ce6ab17f0b04964724da9bf6b1bee94bd2))
* **client:** avoid memory leak with abort signals ([dadee02](https://github.com/coingecko/coingecko-typescript/commit/dadee02325e570bfd5103966569383dedf5e18e6))
* **client:** avoid removing abort listener too early ([908d107](https://github.com/coingecko/coingecko-typescript/commit/908d107459f10094dfc75174d5db0a73e86690d9))
* **client:** explicitly copy fetch in withOptions ([15d6359](https://github.com/coingecko/coingecko-typescript/commit/15d635933691519f19a77954cf8ed273c9f3c6d8))
* **client:** get fetchOptions type more reliably ([bfcf183](https://github.com/coingecko/coingecko-typescript/commit/bfcf1832d40f7409749def9cb4c572772bdb6e27))
* **client:** preserve URL params already embedded in path ([6ed9ffd](https://github.com/coingecko/coingecko-typescript/commit/6ed9ffdd6e88ec0af56bbb8c7b99aafb41749307))
* coerce nullable values to undefined ([e3682ab](https://github.com/coingecko/coingecko-typescript/commit/e3682aba2c4a2e3003e191f92617c869a9f287e7))
* **docs:** fix mcp installation instructions for remote servers ([2cb9f7a](https://github.com/coingecko/coingecko-typescript/commit/2cb9f7abfe250c02dee9db7daac5b247aeec7412))
* **mcp:** add client instantiation options to code tool ([7fee0f8](https://github.com/coingecko/coingecko-typescript/commit/7fee0f84f5be69457f60575ef33190f920572b3c))
* **mcp:** allow falling back for required env variables ([827d244](https://github.com/coingecko/coingecko-typescript/commit/827d24435f2f22843cb1134140513a3d0fe3a7ba))
* **mcp:** avoid sending `jq_filter` to base API ([540ad24](https://github.com/coingecko/coingecko-typescript/commit/540ad2497f5e22dda7b020c3540f4d3ad284bf9a))
* **mcpb:** pin @anthropic-ai/mcpb version ([cd0a76f](https://github.com/coingecko/coingecko-typescript/commit/cd0a76ffeef994bbe86d48b83a6e4d2735cb20fa))
* **mcp:** correct code tool API endpoint ([2a3a062](https://github.com/coingecko/coingecko-typescript/commit/2a3a06214f48a257ba1df5093b0e7ff06e4ef1d7))
* **mcp:** correct code tool api output types ([c9bc35c](https://github.com/coingecko/coingecko-typescript/commit/c9bc35cf084d6eafb48c2ed48872ed823c58bb7a))
* **mcp:** do not fallback on baseUrl if environment env variable is set ([46a03f0](https://github.com/coingecko/coingecko-typescript/commit/46a03f001209d1b980939cdd66f949688ad6a2d0))
* **mcp:** fix cli argument parsing logic ([9c57445](https://github.com/coingecko/coingecko-typescript/commit/9c5744577eb239c7591f36e89499493f4aaa9372))
* **mcp:** fix options parsing ([fbf5dbb](https://github.com/coingecko/coingecko-typescript/commit/fbf5dbbbff5740b54acb09d01bd0520ae63830c7))
* **mcp:** fix query options parsing ([580fa9a](https://github.com/coingecko/coingecko-typescript/commit/580fa9a48cb9c83b04c4606fd3ce64d25e5c231e))
* **mcp:** fix tool description of jq_filter ([7dc2755](https://github.com/coingecko/coingecko-typescript/commit/7dc275597e223a9e7ee4092368886412a1af954d))
* **mcp:** fix uploading dxt release assets ([a0c3294](https://github.com/coingecko/coingecko-typescript/commit/a0c32945178c9a3d15c6c890589d891a3869556c))
* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([ba36b8d](https://github.com/coingecko/coingecko-typescript/commit/ba36b8d1641632ba7d7d8ab0b0289de8d1710b71))
* **mcp:** include required section for top-level properties and support naming transformations ([426f523](https://github.com/coingecko/coingecko-typescript/commit/426f52391d919372a847a9f05b838cef090f0d9e))
* **mcp:** pass base url to code tool ([cfc755c](https://github.com/coingecko/coingecko-typescript/commit/cfc755cea8c4f4a2cc35a6f24891a902887d1e56))
* **mcp:** relax input type for asTextContextResult ([5b31a3a](https://github.com/coingecko/coingecko-typescript/commit/5b31a3ac91b7614f9700bc3c150831fd8d6b7bf0))
* **mcp:** resolve a linting issue in server code ([321828a](https://github.com/coingecko/coingecko-typescript/commit/321828a0bc07a90749d3423afd722b955395f8e9))
* **mcp:** return correct lines on typescript errors ([d747bd3](https://github.com/coingecko/coingecko-typescript/commit/d747bd3209526aa15eb84784c006d079888ef131))
* **mcp:** return tool execution error on api error ([f803047](https://github.com/coingecko/coingecko-typescript/commit/f8030479c9307676c1b2f882c4f302f3d7fb8dd4))
* **mcp:** return tool execution error on jq failure ([aa1340c](https://github.com/coingecko/coingecko-typescript/commit/aa1340cc7ce6c9555f60ab822bc5a31b0f98646b))
* **mcp:** reverse validJson capability option and limit scope ([53c1704](https://github.com/coingecko/coingecko-typescript/commit/53c170460f7407a59cfe798461ff4bf14a997b5c))
* **mcp:** support jq filtering on cloudflare workers ([c282ffa](https://github.com/coingecko/coingecko-typescript/commit/c282ffa27f9346c4501b797f552b9e7b0298f5e3))
* **mcp:** update code tool prompt ([315dcf5](https://github.com/coingecko/coingecko-typescript/commit/315dcf5790e97553a2c92e0c04689b778923e0bb))
* **mcp:** update prompt ([5e99a3a](https://github.com/coingecko/coingecko-typescript/commit/5e99a3a7cf39b1e8cc88b1801874dc1e20a8d244))
* Merge public_treasury config ([d1b7774](https://github.com/coingecko/coingecko-typescript/commit/d1b777451a4dc8fce2bdcb85ea5d1f500ab43eb0))
* publish script — handle NPM errors correctly ([4e6a793](https://github.com/coingecko/coingecko-typescript/commit/4e6a793c2e986947a342908182403841c503273c))
* Stainless config to match the latest endpoints ([4ca5e2e](https://github.com/coingecko/coingecko-typescript/commit/4ca5e2efd54ef00cfa15408859ad1c7bfeae432b))


### Performance Improvements

* faster formatting ([e83bf5b](https://github.com/coingecko/coingecko-typescript/commit/e83bf5b25ef0c896bf536ef37e4965877c719ee7))


### Chores

* add docs to RequestOptions type ([c2dfd02](https://github.com/coingecko/coingecko-typescript/commit/c2dfd0280c85a14d5d393f374181aa8468c57a3c))
* add package to package.json ([36b52c9](https://github.com/coingecko/coingecko-typescript/commit/36b52c981889f00694fd02f60489320a785a8f63))
* add registry url so setup node generated .npmrc, I dont thinkt this will fix but trying ([35e8b5e](https://github.com/coingecko/coingecko-typescript/commit/35e8b5e6669b9fd0a7db5c4cb3afd8883a9c8e5e))
* avoid type error in certain environments ([d1dbd0f](https://github.com/coingecko/coingecko-typescript/commit/d1dbd0fb5c7127c3564a0de0580f153b2b809eae))
* break long lines in snippets into multiline ([aaf10fc](https://github.com/coingecko/coingecko-typescript/commit/aaf10fc93eb324906765578747f09079637acd98))
* ci build action ([66c6013](https://github.com/coingecko/coingecko-typescript/commit/66c6013051eee18ec549fc8da30d1d8060b33818))
* **ci:** enable for pull requests ([e6578d3](https://github.com/coingecko/coingecko-typescript/commit/e6578d3eae4e30107b8ad2548d81a7fb88159268))
* **ci:** escape input path in publish-npm workflow ([b90cf7d](https://github.com/coingecko/coingecko-typescript/commit/b90cf7d6874a99fbb36a85cb0714c67bf15970e7))
* **ci:** only run for pushes and fork pull requests ([b54f71d](https://github.com/coingecko/coingecko-typescript/commit/b54f71d781f06769d4d531db290c140b42fabd98))
* **ci:** skip lint on metadata-only changes ([9259a33](https://github.com/coingecko/coingecko-typescript/commit/9259a338feaad3c50e090d2e4bb0735acbbfdf8b))
* **ci:** skip uploading artifacts on stainless-internal branches ([bd57a94](https://github.com/coingecko/coingecko-typescript/commit/bd57a942ddd33754309d4947c53a022ca3f1e3cd))
* **ci:** upgrade `actions/github-script` ([e14f30f](https://github.com/coingecko/coingecko-typescript/commit/e14f30f7a964fb0f4baad802f157e1d8df299720))
* **client:** do not parse responses with empty content-length ([ab8acbe](https://github.com/coingecko/coingecko-typescript/commit/ab8acbe9afc8681a1cbb5ca6b7cb0421818cbe69))
* **client:** fix logger property type ([2cb85a4](https://github.com/coingecko/coingecko-typescript/commit/2cb85a48ecf83f3d333a62cf6036df0b19afc46f))
* **client:** improve path param validation ([38e333d](https://github.com/coingecko/coingecko-typescript/commit/38e333da596f98482a640341cc8ac63ddcdb6942))
* **client:** qualify global Blob ([0a7d0c2](https://github.com/coingecko/coingecko-typescript/commit/0a7d0c2b3d43ae096ff747e3459492579311ca58))
* **client:** refactor imports ([36f0acf](https://github.com/coingecko/coingecko-typescript/commit/36f0acf5a7d984e41f7b539414e020366fecb546))
* **client:** restructure abort controller binding ([95cbca8](https://github.com/coingecko/coingecko-typescript/commit/95cbca8aa1221a782584f01397abfbc91a26aa8e))
* **codegen:** internal codegen update ([077ab08](https://github.com/coingecko/coingecko-typescript/commit/077ab08d78329cd829b650b50de5868d8d0304ea))
* **deps:** update dependency @types/node to v20.17.58 ([59c03b6](https://github.com/coingecko/coingecko-typescript/commit/59c03b6f1cf9114ca058a8dd0f32e3277279536e))
* do not install brew dependencies in ./scripts/bootstrap by default ([8222497](https://github.com/coingecko/coingecko-typescript/commit/82224971a2792034e72bd01475f7b5f50289d2e5))
* **docs:** use simpler mcp tool name ([0f8f66d](https://github.com/coingecko/coingecko-typescript/commit/0f8f66d13e2a1da640d6e5cdb34e0039e337dac4))
* extract some types in mcp docs ([720280e](https://github.com/coingecko/coingecko-typescript/commit/720280ef2ed14d1d3fe3d8ea5d8d84b854c5b3d8))
* **internal:** add health check to MCP server when running in HTTP mode ([e67ee3e](https://github.com/coingecko/coingecko-typescript/commit/e67ee3ec17fbb7aa74be4d1518ff38f2fc3bb8c9))
* **internal:** add pure annotations, make base APIResource abstract ([0a7e13d](https://github.com/coingecko/coingecko-typescript/commit/0a7e13d1777f3d8c0041a5b3a28d8956d614ac53))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([d2c5d2c](https://github.com/coingecko/coingecko-typescript/commit/d2c5d2c94373b2ef74ef57c515822ff65a55e955))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([0f14ff1](https://github.com/coingecko/coingecko-typescript/commit/0f14ff1cfaf9856f5552b4147383903978810a62))
* **internal:** avoid type checking errors with ts-reset ([b9a91f5](https://github.com/coingecko/coingecko-typescript/commit/b9a91f5b09ee76cd89d350d57afb28a097eace45))
* **internal:** bump @modelcontextprotocol/sdk, @hono/node-server, and minimatch ([98ac251](https://github.com/coingecko/coingecko-typescript/commit/98ac2518018970601c0f7c33904eceed60269554))
* **internal:** codegen related update ([1258a82](https://github.com/coingecko/coingecko-typescript/commit/1258a82a9d212591d5db07edadf10562bcd3afaf))
* **internal:** codegen related update ([3fc7a0c](https://github.com/coingecko/coingecko-typescript/commit/3fc7a0c737f4896c5a2123942a4ff8448d71ee2b))
* **internal:** codegen related update ([a6dc59e](https://github.com/coingecko/coingecko-typescript/commit/a6dc59e16b8d7c067d8b49b99413909a94099d59))
* **internal:** codegen related update ([eac863d](https://github.com/coingecko/coingecko-typescript/commit/eac863d3a37f1c2bb7e59b42401013dada5868f0))
* **internal:** codegen related update ([1c4f603](https://github.com/coingecko/coingecko-typescript/commit/1c4f603f5d6a1dddf0f80b8a96d1f040a7ab2449))
* **internal:** codegen related update ([37b24cd](https://github.com/coingecko/coingecko-typescript/commit/37b24cddd4cbdcc79387e18465014e1159cb78ec))
* **internal:** codegen related update ([4ae87d5](https://github.com/coingecko/coingecko-typescript/commit/4ae87d50c5f8e3d87459f7c2fef89c32a68d2aa0))
* **internal:** codegen related update ([6d4938d](https://github.com/coingecko/coingecko-typescript/commit/6d4938d6efa9ce2f9f84471a1edef558674b1b51))
* **internal:** codegen related update ([41bbab5](https://github.com/coingecko/coingecko-typescript/commit/41bbab5e3dda0de3b4d744962618894d35ec3e3b))
* **internal:** codegen related update ([b3d39f5](https://github.com/coingecko/coingecko-typescript/commit/b3d39f509ec6e0b1616e160b9aa460a7173818db))
* **internal:** codegen related update ([a5d24dc](https://github.com/coingecko/coingecko-typescript/commit/a5d24dc06ca810e34b6eaed3cec8ba5e00e1eaa4))
* **internal:** codegen related update ([404631b](https://github.com/coingecko/coingecko-typescript/commit/404631b60ffcbab704e4c2f8ba2d908b7853475c))
* **internal:** codegen related update ([2768afe](https://github.com/coingecko/coingecko-typescript/commit/2768afe412bb6574bf3fa255681dfa3443fa6135))
* **internal:** codegen related update ([6b79c30](https://github.com/coingecko/coingecko-typescript/commit/6b79c30fe564e07e37eefb8f9e17ba46e677490e))
* **internal:** codegen related update ([fe62d00](https://github.com/coingecko/coingecko-typescript/commit/fe62d003621bd61a76985b0e6b6b4197cf667059))
* **internal:** codegen related update ([9054a95](https://github.com/coingecko/coingecko-typescript/commit/9054a95cd5bddfd1b5428f0f7c851f7eef926c82))
* **internal:** codegen related update ([86b89f4](https://github.com/coingecko/coingecko-typescript/commit/86b89f4256870f4d0d16e0876c0f8370a1273e76))
* **internal:** codegen related update ([d17744c](https://github.com/coingecko/coingecko-typescript/commit/d17744c9e1e0e00de7a147c233f0247838249f43))
* **internal:** codegen related update ([cf7b848](https://github.com/coingecko/coingecko-typescript/commit/cf7b8484303df36ede05da9d7c1414bea6747c61))
* **internal:** codegen related update ([512eb38](https://github.com/coingecko/coingecko-typescript/commit/512eb380120076840caeeef1b9fc536243223b37))
* **internal:** codegen related update ([03be2bf](https://github.com/coingecko/coingecko-typescript/commit/03be2bf33ab9454ad612f41f943fab1cc93373fd))
* **internal:** codegen related update ([081cdee](https://github.com/coingecko/coingecko-typescript/commit/081cdeeedb24e6b8f5dd29f0cb00b4b03f1e0710))
* **internal:** fix incremental formatting in some cases ([a439909](https://github.com/coingecko/coingecko-typescript/commit/a4399099929dec76c714c073cfdfd3739a7bf192))
* **internal:** fix MCP docker image builds in yarn projects ([5f46e24](https://github.com/coingecko/coingecko-typescript/commit/5f46e243cb3dc4292f989c82795bf4267c0a71b3))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([578129b](https://github.com/coingecko/coingecko-typescript/commit/578129b130254cf3bad546328db7f981339be1ff))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([b51f78d](https://github.com/coingecko/coingecko-typescript/commit/b51f78db3084e778837c216b512bbb8b96335f69))
* **internal:** fix MCP server import ordering ([dcc5ac6](https://github.com/coingecko/coingecko-typescript/commit/dcc5ac69e396478083fa36df28a934d64565797a))
* **internal:** fix MCP server TS errors that occur with required client options ([1ed7fb4](https://github.com/coingecko/coingecko-typescript/commit/1ed7fb41193f1963b666c5b3f3e89a7c008903b2))
* **internal:** formatting change ([c0e34f5](https://github.com/coingecko/coingecko-typescript/commit/c0e34f5aead43b178386d8c36ee958d5270c9a94))
* **internal:** gitignore .mcpb files ([7bacb41](https://github.com/coingecko/coingecko-typescript/commit/7bacb41c1e08b0b6bfe4e15c2e848a5703355959))
* **internal:** grammar fix (it's -&gt; its) ([53fc78e](https://github.com/coingecko/coingecko-typescript/commit/53fc78e08995dd9660918923daaf0cb4808f2b66))
* **internal:** ignore .eslintcache ([f96ef05](https://github.com/coingecko/coingecko-typescript/commit/f96ef0531629e58213780bf664e8bd635ccd43f4))
* **internal:** improve layout of generated MCP server files ([b747646](https://github.com/coingecko/coingecko-typescript/commit/b7476466083b54d1719fdb9ddcec04dc92e667f9))
* **internal:** improve local docs search for MCP servers ([dc59ab7](https://github.com/coingecko/coingecko-typescript/commit/dc59ab7e8710d168c024ede874d85dfe3bf5617d))
* **internal:** improve local docs search for MCP servers ([9811884](https://github.com/coingecko/coingecko-typescript/commit/9811884f0f0cef9d3bcedf42ee42563355c8d867))
* **internal:** make generated MCP servers compatible with Cloudflare worker environments ([2654d84](https://github.com/coingecko/coingecko-typescript/commit/2654d8478d64652156435b1b8073c1f0bcf2f4b6))
* **internal:** make mcp-server publishing public by defaut ([c1fc494](https://github.com/coingecko/coingecko-typescript/commit/c1fc494efe7add03a9602c4318926f15f134c6be))
* **internal:** move publish config ([e0c7557](https://github.com/coingecko/coingecko-typescript/commit/e0c7557632af02be10b1ba5d65250f2cb6e59abd))
* **internal:** move stringifyQuery implementation to internal function ([af180c8](https://github.com/coingecko/coingecko-typescript/commit/af180c8d1ec70bb5b479049825e3536942d01b28))
* **internal:** refactor array check ([08151d0](https://github.com/coingecko/coingecko-typescript/commit/08151d02241f7a515c713c6afb44f5e903c0926d))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([922aadd](https://github.com/coingecko/coingecko-typescript/commit/922aadd5913371424e0366a4410e6b106af6c7e2))
* **internal:** remove .eslintcache ([7b70ed2](https://github.com/coingecko/coingecko-typescript/commit/7b70ed2777f18984c12b45aa9c5ef6b4295c58aa))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([24b2c4d](https://github.com/coingecko/coingecko-typescript/commit/24b2c4d6189e98839e874958bd650321c69a9e93))
* **internal:** remove redundant imports config ([1cfee57](https://github.com/coingecko/coingecko-typescript/commit/1cfee572ee70ab97f763a271c44b38c0e8b07f23))
* **internal:** show error causes in MCP servers when running in local mode ([397d8c1](https://github.com/coingecko/coingecko-typescript/commit/397d8c1ce0194ba31c7c21cb30b09d3059fccfe4))
* **internal:** support custom-instructions-path flag in MCP servers ([086a8a6](https://github.com/coingecko/coingecko-typescript/commit/086a8a6bf65180104019e91831ec0b35dbdb4605))
* **internal:** support local docs search in MCP servers ([39d2d19](https://github.com/coingecko/coingecko-typescript/commit/39d2d1945ed471117c6d5576f878bd532c4cab88))
* **internal:** support oauth authorization code flow for MCP servers ([e356f46](https://github.com/coingecko/coingecko-typescript/commit/e356f46b2a7822710e685e9b3c86a684588c3cc6))
* **internal:** support type annotations when running MCP in local execution mode ([d6ffafb](https://github.com/coingecko/coingecko-typescript/commit/d6ffafbad6d1f027990626a9d29aec587602473e))
* **internal:** support x-stainless-mcp-client-envs header in MCP servers ([b84775d](https://github.com/coingecko/coingecko-typescript/commit/b84775dffe0d861fa0fbf410a5747a13d3f502ba))
* **internal:** support x-stainless-mcp-client-permissions headers in MCP servers ([d695bc1](https://github.com/coingecko/coingecko-typescript/commit/d695bc1f09479e8b8c5895d563a97b42f59ba866))
* **internal:** tweak CI branches ([d727076](https://github.com/coingecko/coingecko-typescript/commit/d727076f35cb92e1443f0298cff729fa7d5e3a63))
* **internal:** update `actions/checkout` version ([daf1ac0](https://github.com/coingecko/coingecko-typescript/commit/daf1ac08b9a4d7354a3b0f160cf1e4f7dcc1b9ec))
* **internal:** update comment in script ([4e73226](https://github.com/coingecko/coingecko-typescript/commit/4e73226ac56229136685e87558746cf4b5ec394f))
* **internal:** update dependencies to address dependabot vulnerabilities ([c6ec1d3](https://github.com/coingecko/coingecko-typescript/commit/c6ec1d30df704cab938ed7e27a593c5a425a00bb))
* **internal:** update gitignore ([7571f0d](https://github.com/coingecko/coingecko-typescript/commit/7571f0d266b01c61e3ef107772f12859f034d8b1))
* **internal:** update global Error reference ([219beb9](https://github.com/coingecko/coingecko-typescript/commit/219beb9151ea05678dd01dc4ae7f07d94a6eed36))
* **internal:** update lock file ([06ead12](https://github.com/coingecko/coingecko-typescript/commit/06ead126a0482e54df73e8e61ab5424cbb4ac983))
* **internal:** upgrade babel, qs, js-yaml ([72d694b](https://github.com/coingecko/coingecko-typescript/commit/72d694b7df89722f83e8c6b1daa0af34a00d659e))
* **internal:** upgrade eslint ([04bd781](https://github.com/coingecko/coingecko-typescript/commit/04bd781e01bb49ba4baa950784318e1c19da32f5))
* **internal:** use link instead of file in MCP server package.json files ([2604eec](https://github.com/coingecko/coingecko-typescript/commit/2604eecf74163e12c583b6991292d99864427833))
* **internal:** use npm pack for build uploads ([668f673](https://github.com/coingecko/coingecko-typescript/commit/668f67352c2241cd4ba785177dd27aa6cb56e5a9))
* **internal:** use x-stainless-mcp-client-envs header for MCP remote code tool calls ([ddac6bc](https://github.com/coingecko/coingecko-typescript/commit/ddac6bc318d556938c94c051b1b9ee51d8a7388f))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([191e6e2](https://github.com/coingecko/coingecko-typescript/commit/191e6e2552628dd3638c35b76dc38ebe5dd81e7e))
* make some internal functions async ([97ae2fc](https://github.com/coingecko/coingecko-typescript/commit/97ae2fc3acf7b139198ec8592127f50f3218a3e9))
* mcp code tool explicit error message when missing a run function ([a37ad16](https://github.com/coingecko/coingecko-typescript/commit/a37ad1609421299d6b157c90e07b3748a7b54fab))
* **mcp-server:** add support for session id, forward client info ([a6285f7](https://github.com/coingecko/coingecko-typescript/commit/a6285f73ab694c34c3207a19475cd86264bca1f7))
* **mcp-server:** improve instructions ([2aeef2d](https://github.com/coingecko/coingecko-typescript/commit/2aeef2df5c387994c95241de7fce3185978c33d4))
* **mcp-server:** increase local docs search result count from 5 to 10 ([df2ea38](https://github.com/coingecko/coingecko-typescript/commit/df2ea38879510bc61129a550386e8a8a2f29732f))
* **mcp-server:** log client info ([a79194e](https://github.com/coingecko/coingecko-typescript/commit/a79194e73175999b08c42c6ed89bf8f3595d3318))
* **mcp-server:** return access instructions for 404 without API key ([51caa26](https://github.com/coingecko/coingecko-typescript/commit/51caa26dd0cd77fb0defd55b2a4115434ac58941))
* **mcp:** add cors to oauth metadata route ([73883c6](https://github.com/coingecko/coingecko-typescript/commit/73883c6aea086672fa0e3da78be91a81c369ecbc))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([8226931](https://github.com/coingecko/coingecko-typescript/commit/822693179839e631bcdbe9dc02aba50bc0af59a7))
* **mcp:** add intent param to execute tool ([668d8d4](https://github.com/coingecko/coingecko-typescript/commit/668d8d46f5552d0778a0904c28ee74876f64d72a))
* **mcp:** add line numbers to code tool errors ([5a1380f](https://github.com/coingecko/coingecko-typescript/commit/5a1380ffe1bde6f5f143738f334b0e6c97b26272))
* **mcp:** allow pointing `docs_search` tool at other URLs ([fac0c39](https://github.com/coingecko/coingecko-typescript/commit/fac0c39f23b2c24c3b9d0af078002d25f924218c))
* **mcp:** clarify http auth error ([0dd0dbf](https://github.com/coingecko/coingecko-typescript/commit/0dd0dbf8ef50b2e71726b1a7940d519afe99187e))
* **mcp:** document remote server in README.md ([f95b1e5](https://github.com/coingecko/coingecko-typescript/commit/f95b1e5bda3c10bf4716f99d0d96e2561f208008))
* **mcp:** formatting ([2523d15](https://github.com/coingecko/coingecko-typescript/commit/2523d156e7d478a156164a331c53c85cb67c8ba1))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([1eca251](https://github.com/coingecko/coingecko-typescript/commit/1eca2514c6b3238235fb0ed0a2c511721afe1da5))
* **mcp:** minor cleanup of types and package.json ([20a7de0](https://github.com/coingecko/coingecko-typescript/commit/20a7de04e5dec48b18e213f62fe2e8ee2ea25318))
* **mcp:** pass intent param to execute handler ([0e88b4e](https://github.com/coingecko/coingecko-typescript/commit/0e88b4e8682f2745df4fc5253d7a87bac4b53d9b))
* **mcp:** provides high-level initMcpServer function and exports known clients ([6a2476c](https://github.com/coingecko/coingecko-typescript/commit/6a2476c355f35f0cb12a70b753d3d63cd09c5f52))
* **mcp:** refactor streamable http transport ([33b2ba7](https://github.com/coingecko/coingecko-typescript/commit/33b2ba77f4c99feac05b02f1cb4d433789b24af6))
* **mcp:** remove deprecated tool schemes ([116baf7](https://github.com/coingecko/coingecko-typescript/commit/116baf7a9f593fd01ab942ec4705cf9022144dee))
* **mcp:** rename dxt to mcpb ([2d423f3](https://github.com/coingecko/coingecko-typescript/commit/2d423f3bc71baea99af046cf14899c9ed27f4db7))
* **mcp:** rework imports in tools ([fccae9a](https://github.com/coingecko/coingecko-typescript/commit/fccae9a57c148cac69751423f5596ae677785126))
* **mcp:** up tsconfig lib version to es2022 ([c714cfc](https://github.com/coingecko/coingecko-typescript/commit/c714cfca3a103dcb6f474ab38bee77545628dec9))
* **mcp:** update lockfile ([9df2a0e](https://github.com/coingecko/coingecko-typescript/commit/9df2a0e403c9c3576169a86737b07ab897b5e21b))
* **mcp:** update package.json ([80e8aa3](https://github.com/coingecko/coingecko-typescript/commit/80e8aa3b153d577a6c3e15df42afc29ec6afccdd))
* **mcp:** update README ([e4b4034](https://github.com/coingecko/coingecko-typescript/commit/e4b40341ff9c029e2d954d37ef18a4044bc3a860))
* **mcp:** update types ([314ea4e](https://github.com/coingecko/coingecko-typescript/commit/314ea4ea83a18aed60432f6a8ac2ad0a60f365b7))
* **mcp:** upgrade dependencies ([6b8914f](https://github.com/coingecko/coingecko-typescript/commit/6b8914f695ee5a61bb3a273a50442a163c329af6))
* **mcp:** upgrade jq-web ([3c7fa4b](https://github.com/coingecko/coingecko-typescript/commit/3c7fa4bb85b6a52d42d2fbe0c185b80df4d2f556))
* **mcp:** upload dxt as release asset ([14ac389](https://github.com/coingecko/coingecko-typescript/commit/14ac389f3388ef85c1d8cc5c2af1afc3b58f6e56))
* npm trusted publisher supprot ([7dad4ec](https://github.com/coingecko/coingecko-typescript/commit/7dad4ecc400128f506ba61f5086c90e01fe64739))
* point npm registry not yarnpkg and remove tokens from env var ([d75a74e](https://github.com/coingecko/coingecko-typescript/commit/d75a74e8d6bf131c9c17e25131d48e46b2cecef1))
* **readme:** update badges ([b6a481f](https://github.com/coingecko/coingecko-typescript/commit/b6a481f92e699fcf6a92a624c836b226199000a7))
* **readme:** use better example snippet for undocumented params ([a35d8e9](https://github.com/coingecko/coingecko-typescript/commit/a35d8e98e7093a38aaabaa3691e97b1e035d6a72))
* remove release doctor, we don't need npm token anymore so its redundant ([76cc604](https://github.com/coingecko/coingecko-typescript/commit/76cc60418c6806f24f02232293557bc0efd87613))
* replace yarn with npx ([6c6afe8](https://github.com/coingecko/coingecko-typescript/commit/6c6afe83d29ac72378931afc8575329fbd5c6674))
* trusted publisher requires npm&gt;11, node20 doesnt include npm>11 ([4ee9b74](https://github.com/coingecko/coingecko-typescript/commit/4ee9b742d9b763d747b4c0f0656845fcd94eb051))
* **ts:** reorder package.json imports ([159fec5](https://github.com/coingecko/coingecko-typescript/commit/159fec5e348cb1d8e439683ec139977deaaaffa5))
* update @stainless-api/prism-cli to v5.15.0 ([945955a](https://github.com/coingecko/coingecko-typescript/commit/945955a55208d34d2bb4f34f8450a6c3deba6843))
* update CI script ([1ded6ea](https://github.com/coingecko/coingecko-typescript/commit/1ded6ea869e985580bba305a12df6b82a8598208))
* update lockfile ([b2bc3ed](https://github.com/coingecko/coingecko-typescript/commit/b2bc3edb04da12c7f633349be4e9ac0c85619321))
* use latest @modelcontextprotocol/sdk ([6fa3e5d](https://github.com/coingecko/coingecko-typescript/commit/6fa3e5d391119d4a1bc921b1a5b211a1a55a2fcc))
* use structured error when code execution tool errors ([5dad257](https://github.com/coingecko/coingecko-typescript/commit/5dad25798e962ec98fa1bc3bfc279d1d5d30f2f5))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([ea4002b](https://github.com/coingecko/coingecko-typescript/commit/ea4002b4cd46d8b427aa01d5743903c2ad994326))
* **mcp:** add a README link to add server to VS Code or Claude Code ([c446643](https://github.com/coingecko/coingecko-typescript/commit/c446643b06348e17f7437afba530e5a80b593330))
* prominently feature MCP server setup in root SDK readmes ([9047366](https://github.com/coingecko/coingecko-typescript/commit/9047366bb5c5fd61e06826fb87deb21f6e454b22))


### Refactors

* **types:** replace Record with mapped types ([cd28aac](https://github.com/coingecko/coingecko-typescript/commit/cd28aacf3d487a12382c3687272e356a2132fc06))

## 3.1.7 (2026-04-17)

Full Changelog: [v3.1.6...v3.1.7](https://github.com/coingecko/coingecko-typescript/compare/v3.1.6...v3.1.7)

## 3.1.6 (2026-04-15)

Full Changelog: [v3.1.5...v3.1.6](https://github.com/coingecko/coingecko-typescript/compare/v3.1.5...v3.1.6)

### Chores

* add registry url so setup node generated .npmrc, I dont thinkt this will fix but trying ([35e8b5e](https://github.com/coingecko/coingecko-typescript/commit/35e8b5e6669b9fd0a7db5c4cb3afd8883a9c8e5e))

## 3.1.5 (2026-04-15)

Full Changelog: [v3.1.4...v3.1.5](https://github.com/coingecko/coingecko-typescript/compare/v3.1.4...v3.1.5)

### Chores

* trusted publisher requires npm&gt;11, node20 doesnt include npm>11 ([4ee9b74](https://github.com/coingecko/coingecko-typescript/commit/4ee9b742d9b763d747b4c0f0656845fcd94eb051))

## 3.1.4 (2026-04-15)

Full Changelog: [v3.1.3...v3.1.4](https://github.com/coingecko/coingecko-typescript/compare/v3.1.3...v3.1.4)

### Chores

* remove release doctor, we don't need npm token anymore so its redundant ([76cc604](https://github.com/coingecko/coingecko-typescript/commit/76cc60418c6806f24f02232293557bc0efd87613))
* replace yarn with npx ([6c6afe8](https://github.com/coingecko/coingecko-typescript/commit/6c6afe83d29ac72378931afc8575329fbd5c6674))

## 3.1.3 (2026-04-15)

Full Changelog: [v3.1.2...v3.1.3](https://github.com/coingecko/coingecko-typescript/compare/v3.1.2...v3.1.3)

### Chores

* point npm registry not yarnpkg and remove tokens from env var ([921afb3](https://github.com/coingecko/coingecko-typescript/commit/921afb30d67444885d600ee731a2b6b0754fed38))

## 3.1.2 (2026-04-14)

Full Changelog: [v3.1.1...v3.1.2](https://github.com/coingecko/coingecko-typescript/compare/v3.1.1...v3.1.2)

### Chores

* **internal:** codegen related update ([c5b7848](https://github.com/coingecko/coingecko-typescript/commit/c5b7848db087f9e4e33c6dbe368f2d81fd3ded79))
* **internal:** codegen related update ([9fb880d](https://github.com/coingecko/coingecko-typescript/commit/9fb880da6c9dc93c37dbdfcb24f77326d57f3535))
* **internal:** fix MCP docker image builds in yarn projects ([55db6fc](https://github.com/coingecko/coingecko-typescript/commit/55db6fccb950123747a66ae85b9bd834586e8ae6))
* **internal:** fix MCP server import ordering ([edd40aa](https://github.com/coingecko/coingecko-typescript/commit/edd40aa83f1212f74d489b996286560e636de602))
* **internal:** improve local docs search for MCP servers ([a4a7632](https://github.com/coingecko/coingecko-typescript/commit/a4a76325c5e81e380d3766092e9c0b1c0629bec3))
* **internal:** show error causes in MCP servers when running in local mode ([8afeac0](https://github.com/coingecko/coingecko-typescript/commit/8afeac08abcab44ee43c54347151cbf2b5052a58))
* **internal:** support type annotations when running MCP in local execution mode ([12a76cc](https://github.com/coingecko/coingecko-typescript/commit/12a76cce2cfb0131c3edaa32d6eea4e4601a78d4))
* **internal:** use link instead of file in MCP server package.json files ([24e1c38](https://github.com/coingecko/coingecko-typescript/commit/24e1c38bb7db1d8df129f10a03b5a1e5c1b44cdf))
* **mcp-server:** increase local docs search result count from 5 to 10 ([40f495c](https://github.com/coingecko/coingecko-typescript/commit/40f495cf8f7d26c7ee9508f1063bc61ab1d1ccea))
* **mcp-server:** log client info ([6f0dc70](https://github.com/coingecko/coingecko-typescript/commit/6f0dc70e136ed5f86c232620218ac7ab21d9f50b))
* npm trusted publisher supprot ([564ce5a](https://github.com/coingecko/coingecko-typescript/commit/564ce5a15538adbd195c2fd9f3bd585effba04e5))

## 3.1.1 (2026-03-31)

Full Changelog: [v3.1.0...v3.1.1](https://github.com/coingecko/coingecko-typescript/compare/v3.1.0...v3.1.1)

### Chores

* **ci:** escape input path in publish-npm workflow ([b90cf7d](https://github.com/coingecko/coingecko-typescript/commit/b90cf7d6874a99fbb36a85cb0714c67bf15970e7))
* **ci:** skip lint on metadata-only changes ([9259a33](https://github.com/coingecko/coingecko-typescript/commit/9259a338feaad3c50e090d2e4bb0735acbbfdf8b))
* **internal:** codegen related update ([a6dc59e](https://github.com/coingecko/coingecko-typescript/commit/a6dc59e16b8d7c067d8b49b99413909a94099d59))
* **internal:** fix MCP server TS errors that occur with required client options ([1ed7fb4](https://github.com/coingecko/coingecko-typescript/commit/1ed7fb41193f1963b666c5b3f3e89a7c008903b2))
* **internal:** improve local docs search for MCP servers ([9811884](https://github.com/coingecko/coingecko-typescript/commit/9811884f0f0cef9d3bcedf42ee42563355c8d867))
* **internal:** support custom-instructions-path flag in MCP servers ([086a8a6](https://github.com/coingecko/coingecko-typescript/commit/086a8a6bf65180104019e91831ec0b35dbdb4605))
* **internal:** support local docs search in MCP servers ([39d2d19](https://github.com/coingecko/coingecko-typescript/commit/39d2d1945ed471117c6d5576f878bd532c4cab88))
* **internal:** support x-stainless-mcp-client-permissions headers in MCP servers ([d695bc1](https://github.com/coingecko/coingecko-typescript/commit/d695bc1f09479e8b8c5895d563a97b42f59ba866))
* **internal:** tweak CI branches ([d727076](https://github.com/coingecko/coingecko-typescript/commit/d727076f35cb92e1443f0298cff729fa7d5e3a63))
* **internal:** update gitignore ([7571f0d](https://github.com/coingecko/coingecko-typescript/commit/7571f0d266b01c61e3ef107772f12859f034d8b1))
* **mcp-server:** add support for session id, forward client info ([a6285f7](https://github.com/coingecko/coingecko-typescript/commit/a6285f73ab694c34c3207a19475cd86264bca1f7))

## 3.1.0 (2026-03-14)

Full Changelog: [v3.0.0...v3.1.0](https://github.com/coingecko/coingecko-typescript/compare/v3.0.0...v3.1.0)

### Features

* **mcp:** add an option to disable code tool ([f029472](https://github.com/coingecko/coingecko-typescript/commit/f029472640afad4474955fe2742c249cfa97cc22))


### Bug Fixes

* **client:** preserve URL params already embedded in path ([6ed9ffd](https://github.com/coingecko/coingecko-typescript/commit/6ed9ffdd6e88ec0af56bbb8c7b99aafb41749307))
* **mcp:** update prompt ([5e99a3a](https://github.com/coingecko/coingecko-typescript/commit/5e99a3a7cf39b1e8cc88b1801874dc1e20a8d244))


### Chores

* **ci:** skip uploading artifacts on stainless-internal branches ([bd57a94](https://github.com/coingecko/coingecko-typescript/commit/bd57a942ddd33754309d4947c53a022ca3f1e3cd))
* **internal:** bump @modelcontextprotocol/sdk, @hono/node-server, and minimatch ([98ac251](https://github.com/coingecko/coingecko-typescript/commit/98ac2518018970601c0f7c33904eceed60269554))
* **internal:** codegen related update ([eac863d](https://github.com/coingecko/coingecko-typescript/commit/eac863d3a37f1c2bb7e59b42401013dada5868f0))
* **internal:** codegen related update ([1c4f603](https://github.com/coingecko/coingecko-typescript/commit/1c4f603f5d6a1dddf0f80b8a96d1f040a7ab2449))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([578129b](https://github.com/coingecko/coingecko-typescript/commit/578129b130254cf3bad546328db7f981339be1ff))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([b51f78d](https://github.com/coingecko/coingecko-typescript/commit/b51f78db3084e778837c216b512bbb8b96335f69))
* **internal:** make generated MCP servers compatible with Cloudflare worker environments ([2654d84](https://github.com/coingecko/coingecko-typescript/commit/2654d8478d64652156435b1b8073c1f0bcf2f4b6))
* **internal:** move stringifyQuery implementation to internal function ([af180c8](https://github.com/coingecko/coingecko-typescript/commit/af180c8d1ec70bb5b479049825e3536942d01b28))
* **internal:** support x-stainless-mcp-client-envs header in MCP servers ([b84775d](https://github.com/coingecko/coingecko-typescript/commit/b84775dffe0d861fa0fbf410a5747a13d3f502ba))
* **internal:** update dependencies to address dependabot vulnerabilities ([c6ec1d3](https://github.com/coingecko/coingecko-typescript/commit/c6ec1d30df704cab938ed7e27a593c5a425a00bb))
* **internal:** use x-stainless-mcp-client-envs header for MCP remote code tool calls ([ddac6bc](https://github.com/coingecko/coingecko-typescript/commit/ddac6bc318d556938c94c051b1b9ee51d8a7388f))
* **mcp-server:** improve instructions ([2aeef2d](https://github.com/coingecko/coingecko-typescript/commit/2aeef2df5c387994c95241de7fce3185978c33d4))
* **mcp-server:** return access instructions for 404 without API key ([51caa26](https://github.com/coingecko/coingecko-typescript/commit/51caa26dd0cd77fb0defd55b2a4115434ac58941))

## 3.0.0 (2026-02-25)

Full Changelog: [v2.5.0...v3.0.0](https://github.com/coingecko/coingecko-typescript/compare/v2.5.0...v3.0.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **api:** api update ([049520b](https://github.com/coingecko/coingecko-typescript/commit/049520b1442490daaa3ee8c752f7390d442f8cad))
* **api:** api update ([006ad17](https://github.com/coingecko/coingecko-typescript/commit/006ad17f169ca009dac4fc387f75efc22d44c7b0))
* **mcp:** add initial server instructions ([4727c1d](https://github.com/coingecko/coingecko-typescript/commit/4727c1def5fd5ec57e899ecaabcfbd3f5ceb6b43))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([709db14](https://github.com/coingecko/coingecko-typescript/commit/709db14b1eec8dee286d020993659cedfe702655))
* **client:** avoid removing abort listener too early ([dd69028](https://github.com/coingecko/coingecko-typescript/commit/dd690289f60c7bbe38aea6b02e69779cdb49081c))
* **docs:** fix mcp installation instructions for remote servers ([529d899](https://github.com/coingecko/coingecko-typescript/commit/529d89933816fef9c63b5c97b63ec4a4dfa2911a))
* **mcp:** allow falling back for required env variables ([4ac4ab7](https://github.com/coingecko/coingecko-typescript/commit/4ac4ab74a2c9d4b7739b358d8f7676ceff686150))
* **mcp:** correct code tool api output types ([85a2fad](https://github.com/coingecko/coingecko-typescript/commit/85a2fad8f64ba42f2e213befd4e363a1237b9975))
* **mcp:** do not fallback on baseUrl if environment env variable is set ([bac001b](https://github.com/coingecko/coingecko-typescript/commit/bac001b39e86a35c7318e4745aa6c1d8f2dbd1fc))
* **mcp:** fix options parsing ([a50613e](https://github.com/coingecko/coingecko-typescript/commit/a50613e970d8b10b5cc9c4e10f5c97347cdc06b9))
* **mcp:** update code tool prompt ([299bb47](https://github.com/coingecko/coingecko-typescript/commit/299bb4718946475a33816393fab9547f7808db90))


### Chores

* break long lines in snippets into multiline ([392be37](https://github.com/coingecko/coingecko-typescript/commit/392be37dc3f51c1cf6cd3d7856d9351db86afb4d))
* **ci:** upgrade `actions/github-script` ([548c9d0](https://github.com/coingecko/coingecko-typescript/commit/548c9d039ca4126c06645d4066f84d19e0c8dcd9))
* **client:** do not parse responses with empty content-length ([0fe83fa](https://github.com/coingecko/coingecko-typescript/commit/0fe83fad7206814cb31254f6600162096ec2c50a))
* **client:** restructure abort controller binding ([0fea683](https://github.com/coingecko/coingecko-typescript/commit/0fea6830efaa90141d0769d4ff7ab4897913daea))
* **internal:** add health check to MCP server when running in HTTP mode ([be34eea](https://github.com/coingecko/coingecko-typescript/commit/be34eeac5dcd6cf079be3f33d827a6c734f05c8f))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([bf9f8a7](https://github.com/coingecko/coingecko-typescript/commit/bf9f8a739dc66f8880cfd2283febc973bdff6945))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([c1aac5d](https://github.com/coingecko/coingecko-typescript/commit/c1aac5dd5418e686562164f3f9fe8108043ac5ef))
* **internal:** avoid type checking errors with ts-reset ([d7a0a46](https://github.com/coingecko/coingecko-typescript/commit/d7a0a4656a981f0c29cbd8323617d7cfc855e7ac))
* **internal:** codegen related update ([7043217](https://github.com/coingecko/coingecko-typescript/commit/70432178fba54d13c226629569b4bfc7ce0f927c))
* **internal:** codegen related update ([3d557d4](https://github.com/coingecko/coingecko-typescript/commit/3d557d4c52f6bc1feda88f24caceb2720878ee4a))
* **internal:** codegen related update ([9311153](https://github.com/coingecko/coingecko-typescript/commit/93111532d304cf124b1ddfeaf7d7ef1d40097f59))
* **internal:** codegen related update ([e9c0d74](https://github.com/coingecko/coingecko-typescript/commit/e9c0d74f80aceb7b6e241115220e16225d20bf10))
* **internal:** codegen related update ([19e1b16](https://github.com/coingecko/coingecko-typescript/commit/19e1b164c7ab37644dfea9c2130369b22eb4dd93))
* **internal:** codegen related update ([b699d5c](https://github.com/coingecko/coingecko-typescript/commit/b699d5cc6d784bd8f01fedc581c8cb81103b83a9))
* **internal:** improve layout of generated MCP server files ([8661703](https://github.com/coingecko/coingecko-typescript/commit/8661703c850274654d1ebba44dbf799bb24911b6))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([724f462](https://github.com/coingecko/coingecko-typescript/commit/724f462c28e3d716945bc0c7d65439c3170b4ce7))
* **internal:** support oauth authorization code flow for MCP servers ([af1c9a0](https://github.com/coingecko/coingecko-typescript/commit/af1c9a0faaa69610218f6f3b15b7304ca7cfd78f))
* **internal:** update `actions/checkout` version ([908d952](https://github.com/coingecko/coingecko-typescript/commit/908d9527e03452f0868f8e008eeabf5b073753b4))
* **internal:** update lock file ([025e8a3](https://github.com/coingecko/coingecko-typescript/commit/025e8a3743e936b1d3e80f76421f2f4ac6e08f95))
* **internal:** upgrade babel, qs, js-yaml ([9fbad0a](https://github.com/coingecko/coingecko-typescript/commit/9fbad0a722306f0a6136a13f3f16608acbc954ee))
* **mcp:** add intent param to execute tool ([abcf2c9](https://github.com/coingecko/coingecko-typescript/commit/abcf2c94ccbea76a797906a42fb41f210529cc62))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([95c8fca](https://github.com/coingecko/coingecko-typescript/commit/95c8fca097858f3f3fd9897eace57adff1a2edc2))
* **mcp:** pass intent param to execute handler ([364b2f5](https://github.com/coingecko/coingecko-typescript/commit/364b2f5da74f69b286f64d146bcb4d08c7ce44c0))
* **mcp:** remove deprecated tool schemes ([b20be48](https://github.com/coingecko/coingecko-typescript/commit/b20be485120dd8f34ed3fcf8c5fe15a6ff85838f))
* **mcp:** up tsconfig lib version to es2022 ([65e14b4](https://github.com/coingecko/coingecko-typescript/commit/65e14b48a5f9bcb4206f6ee0794eaa635e789912))
* **mcp:** upgrade dependencies ([800fdc7](https://github.com/coingecko/coingecko-typescript/commit/800fdc79d2001efdbaa8fcd5cbce8632b9b65a10))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([d2ead25](https://github.com/coingecko/coingecko-typescript/commit/d2ead25de955ac200f47cf8e2241e21c9e4c4f65))

## 2.5.0 (2025-12-18)

Full Changelog: [v2.4.0...v2.5.0](https://github.com/coingecko/coingecko-typescript/compare/v2.4.0...v2.5.0)

### Features

* **api:** api update ([d24d42a](https://github.com/coingecko/coingecko-typescript/commit/d24d42ab977f88ad0b78a69a5723c34f7bbb8873))
* **api:** manual updates ([25a7b6e](https://github.com/coingecko/coingecko-typescript/commit/25a7b6ed66a83e167cf43b2df320cf12c7b41298))

## 2.4.0 (2025-12-18)

Full Changelog: [v2.3.0...v2.4.0](https://github.com/coingecko/coingecko-typescript/compare/v2.3.0...v2.4.0)

### Features

* **mcp:** add typescript check to code execution tool ([329555d](https://github.com/coingecko/coingecko-typescript/commit/329555d9b0995ed05d0057b37a36c6b525601647))
* **mcp:** handle code mode calls in the Stainless API ([9f8bda4](https://github.com/coingecko/coingecko-typescript/commit/9f8bda4cb89a872541a2eb06966c5cfa696b851f))
* **mcp:** return logs on code tool errors ([e5e49e3](https://github.com/coingecko/coingecko-typescript/commit/e5e49e38e84bd0a65bf3c9e9cfc75cb75c406a0d))


### Bug Fixes

* **mcp:** add client instantiation options to code tool ([db4755e](https://github.com/coingecko/coingecko-typescript/commit/db4755ec2059967770b8df2c3b7d178d2f9e4bae))
* **mcp:** correct code tool API endpoint ([b70e1fd](https://github.com/coingecko/coingecko-typescript/commit/b70e1fd15448fdbe32d567f6655feb7e59500a5c))
* **mcp:** pass base url to code tool ([5cb8c99](https://github.com/coingecko/coingecko-typescript/commit/5cb8c998d082c941062a6ac32c329907737c11f9))
* **mcp:** return correct lines on typescript errors ([da27574](https://github.com/coingecko/coingecko-typescript/commit/da27574641c40f66e112d0a2c3ef14d280fe7156))
* **mcp:** return tool execution error on api error ([38ab9c1](https://github.com/coingecko/coingecko-typescript/commit/38ab9c1d251ec80128a1109db1af28132e19b144))


### Chores

* **client:** fix logger property type ([1c4beb7](https://github.com/coingecko/coingecko-typescript/commit/1c4beb7720638761d438f723d33cc87b6c5b24e0))
* **internal:** codegen related update ([11fef84](https://github.com/coingecko/coingecko-typescript/commit/11fef84c7a12a4242d0ac579633c385fdf00d2ac))
* **internal:** codegen related update ([56aec1c](https://github.com/coingecko/coingecko-typescript/commit/56aec1c864439b15ac7bbd65875267e8c553c376))
* **internal:** upgrade eslint ([5b5aa20](https://github.com/coingecko/coingecko-typescript/commit/5b5aa2043b13741eaece9ea29d42b5272fd001a2))
* **mcp:** update lockfile ([d887158](https://github.com/coingecko/coingecko-typescript/commit/d88715842f0aec829f1c8f2210a007c6a63bb986))
* use latest @modelcontextprotocol/sdk ([528d877](https://github.com/coingecko/coingecko-typescript/commit/528d8772bb6b895a4251595575e5dfda26548c36))

## 2.3.0 (2025-11-26)

Full Changelog: [v2.2.0...v2.3.0](https://github.com/coingecko/coingecko-typescript/compare/v2.2.0...v2.3.0)

### Features

* **mcp:** add detail field to docs search tool ([33f632a](https://github.com/coingecko/coingecko-typescript/commit/33f632ad6e74b3694a1d5d7c7f399cc178118ab3))
* **mcp:** enable optional code execution tool on http mcp servers ([bc5fd75](https://github.com/coingecko/coingecko-typescript/commit/bc5fd7530692827bfdf149d8008ff277270b2695))


### Bug Fixes

* **mcpb:** pin @anthropic-ai/mcpb version ([c59c43b](https://github.com/coingecko/coingecko-typescript/commit/c59c43bd3c18b3c6d50c4820ae0d448c6aab1f97))
* **mcp:** return tool execution error on jq failure ([6f02caf](https://github.com/coingecko/coingecko-typescript/commit/6f02caf47f6e99b740b309f96632ccc4adc073f9))


### Chores

* extract some types in mcp docs ([074c871](https://github.com/coingecko/coingecko-typescript/commit/074c871e520eda38f56efd21ba1ae1d9c4b9a861))
* **internal:** codegen related update ([ddd54ba](https://github.com/coingecko/coingecko-typescript/commit/ddd54ba989b581464bcfcb85c7688524a526b023))
* **internal:** codegen related update ([12f6d45](https://github.com/coingecko/coingecko-typescript/commit/12f6d45b1d62b6b648a42da25c08534e5c681def))
* **internal:** grammar fix (it's -&gt; its) ([625e0b5](https://github.com/coingecko/coingecko-typescript/commit/625e0b5d790f7cbb5f1ef29fd90db48b4f99be4e))
* **internal:** use npm pack for build uploads ([ad7186d](https://github.com/coingecko/coingecko-typescript/commit/ad7186db7c452088604eecefe3d2873718d4cfac))
* mcp code tool explicit error message when missing a run function ([033128d](https://github.com/coingecko/coingecko-typescript/commit/033128dc3cd0dd6fe9edaace9bb01ecdba6bea95))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([32e66a5](https://github.com/coingecko/coingecko-typescript/commit/32e66a59ee776d6258c5bdbb748562291f201f46))
* **mcp:** add line numbers to code tool errors ([73d6e38](https://github.com/coingecko/coingecko-typescript/commit/73d6e38f443c2993b2b5bef5ffa2267ebbcbf71d))
* **mcp:** clarify http auth error ([d97ddd0](https://github.com/coingecko/coingecko-typescript/commit/d97ddd03ebbf83a4408464803ad31360f9ab6421))
* **mcp:** upgrade jq-web ([51a0690](https://github.com/coingecko/coingecko-typescript/commit/51a0690cf7261f0bd84cd70898fc7498d590a1ee))
* use structured error when code execution tool errors ([1430487](https://github.com/coingecko/coingecko-typescript/commit/1430487616c923b0370e6501dc69ed6cddec45d1))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([140719e](https://github.com/coingecko/coingecko-typescript/commit/140719eff1eb532d8fe22ab2495944677c478a65))
* **mcp:** add a README link to add server to VS Code or Claude Code ([5f5f077](https://github.com/coingecko/coingecko-typescript/commit/5f5f077ce4ac50864b94619b717fdd2764312223))

## 2.2.0 (2025-10-06)

Full Changelog: [v2.1.0...v2.2.0](https://github.com/coingecko/coingecko-typescript/compare/v2.1.0...v2.2.0)

### Features

* **api:** api update ([bef0195](https://github.com/coingecko/coingecko-typescript/commit/bef0195312491895b4c59223def1c906fc171f8c))

## 2.1.0 (2025-10-04)

Full Changelog: [v2.0.0...v2.1.0](https://github.com/coingecko/coingecko-typescript/compare/v2.0.0...v2.1.0)

### Features

* **mcp:** add option for including docs tools ([4b06334](https://github.com/coingecko/coingecko-typescript/commit/4b063349938e77d92ac037620ea25185a7d1b761))


### Bug Fixes

* **mcp:** fix cli argument parsing logic ([14aa303](https://github.com/coingecko/coingecko-typescript/commit/14aa303f8d646ae60409e92c839438e8264b0acc))
* **mcp:** resolve a linting issue in server code ([d4ce5a7](https://github.com/coingecko/coingecko-typescript/commit/d4ce5a799a7293585fefcd6eade3dfe04c401fbf))


### Performance Improvements

* faster formatting ([18630ab](https://github.com/coingecko/coingecko-typescript/commit/18630ab93f7b26cdd070f105c7075ba71842bb4f))


### Chores

* **internal:** codegen related update ([04c9350](https://github.com/coingecko/coingecko-typescript/commit/04c9350dfac56124abbb07b1ce43d3a2c6477357))
* **internal:** fix incremental formatting in some cases ([25390ea](https://github.com/coingecko/coingecko-typescript/commit/25390eaca179a4d2148a38a1b3e06e02c47a9dca))
* **internal:** ignore .eslintcache ([b00e5f2](https://github.com/coingecko/coingecko-typescript/commit/b00e5f2251326086f553e4a786db777bf2378cc8))
* **internal:** remove .eslintcache ([cea5876](https://github.com/coingecko/coingecko-typescript/commit/cea587686defd148ed7a52be43bfaf700a6ea6ee))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([95a0279](https://github.com/coingecko/coingecko-typescript/commit/95a0279097836fbc7a83cd8acc87300f8d09d547))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([33713b2](https://github.com/coingecko/coingecko-typescript/commit/33713b21be59715d2b327ba340b692404e2706c5))
* **mcp:** allow pointing `docs_search` tool at other URLs ([bc2214d](https://github.com/coingecko/coingecko-typescript/commit/bc2214d1addcc36990cf63959237cfe108cada40))
* update lockfile ([0b03271](https://github.com/coingecko/coingecko-typescript/commit/0b032715918ccf609bd6f06c04e29f412705ce96))

## 2.0.0 (2025-09-23)

Full Changelog: [v1.15.0...v2.0.0](https://github.com/coingecko/coingecko-typescript/compare/v1.15.0...v2.0.0)

### ⚠ BREAKING CHANGES

* Re-prioritize MCP tooling

### Features

* **mcp:** enable experimental docs search tool ([946c99c](https://github.com/coingecko/coingecko-typescript/commit/946c99c94358ac8d5ce3a8a501ee32ebdd367e89))
* Re-prioritize MCP tooling ([6ea7ceb](https://github.com/coingecko/coingecko-typescript/commit/6ea7ceba72c952b429550a163c8ec1e3e58a6a33))
* Surface more tools for MCP ([fe6fed0](https://github.com/coingecko/coingecko-typescript/commit/fe6fed0ca48c5cbb67f4725f1bb90bbb1f2e8888))

## 1.15.0 (2025-09-22)

Full Changelog: [v1.14.0...v1.15.0](https://github.com/coingecko/coingecko-typescript/compare/v1.14.0...v1.15.0)

### Features

* **api:** api update ([33a6ea2](https://github.com/coingecko/coingecko-typescript/commit/33a6ea267fc0cc7823ffb05bf1e408104089aa74))


### Bug Fixes

* Merge public_treasury config ([d1b7774](https://github.com/coingecko/coingecko-typescript/commit/d1b777451a4dc8fce2bdcb85ea5d1f500ab43eb0))
* Stainless config to match the latest endpoints ([4ca5e2e](https://github.com/coingecko/coingecko-typescript/commit/4ca5e2efd54ef00cfa15408859ad1c7bfeae432b))

## 1.14.0 (2025-09-20)

Full Changelog: [v1.13.0...v1.14.0](https://github.com/coingecko/coingecko-typescript/compare/v1.13.0...v1.14.0)

### Features

* **mcp:** add docs search tool ([00b47d5](https://github.com/coingecko/coingecko-typescript/commit/00b47d511cfdcc2d910d312fc5191ed29b9540f6))


### Bug Fixes

* **ci:** set permissions for DXT publish action ([138fd3c](https://github.com/coingecko/coingecko-typescript/commit/138fd3ce6ab17f0b04964724da9bf6b1bee94bd2))
* coerce nullable values to undefined ([e3682ab](https://github.com/coingecko/coingecko-typescript/commit/e3682aba2c4a2e3003e191f92617c869a9f287e7))
* **mcp:** fix query options parsing ([580fa9a](https://github.com/coingecko/coingecko-typescript/commit/580fa9a48cb9c83b04c4606fd3ce64d25e5c231e))
* **mcp:** fix uploading dxt release assets ([a0c3294](https://github.com/coingecko/coingecko-typescript/commit/a0c32945178c9a3d15c6c890589d891a3869556c))


### Chores

* ci build action ([66c6013](https://github.com/coingecko/coingecko-typescript/commit/66c6013051eee18ec549fc8da30d1d8060b33818))
* **codegen:** internal codegen update ([077ab08](https://github.com/coingecko/coingecko-typescript/commit/077ab08d78329cd829b650b50de5868d8d0304ea))
* do not install brew dependencies in ./scripts/bootstrap by default ([8222497](https://github.com/coingecko/coingecko-typescript/commit/82224971a2792034e72bd01475f7b5f50289d2e5))
* **internal:** codegen related update ([86b89f4](https://github.com/coingecko/coingecko-typescript/commit/86b89f4256870f4d0d16e0876c0f8370a1273e76))
* **internal:** gitignore .mcpb files ([7bacb41](https://github.com/coingecko/coingecko-typescript/commit/7bacb41c1e08b0b6bfe4e15c2e848a5703355959))
* **mcp:** rename dxt to mcpb ([2d423f3](https://github.com/coingecko/coingecko-typescript/commit/2d423f3bc71baea99af046cf14899c9ed27f4db7))
* **mcp:** upload dxt as release asset ([14ac389](https://github.com/coingecko/coingecko-typescript/commit/14ac389f3388ef85c1d8cc5c2af1afc3b58f6e56))

## 1.13.0 (2025-09-03)

Full Changelog: [v1.12.0...v1.13.0](https://github.com/coingecko/coingecko-typescript/compare/v1.12.0...v1.13.0)

### Features

* **mcp:** allow setting logging level ([44e711d](https://github.com/coingecko/coingecko-typescript/commit/44e711de2b329b8e6f4bfdf414d3fa1357590726))
* **mcp:** expose client options in `streamableHTTPApp` ([6772de1](https://github.com/coingecko/coingecko-typescript/commit/6772de1dde4998268a49e296012a3bba08ba9f0d))


### Chores

* **internal:** codegen related update ([3171b83](https://github.com/coingecko/coingecko-typescript/commit/3171b836e8836eda4cd92afc6faa3b5796208970))

## 1.12.0 (2025-08-29)

Full Changelog: [v1.11.3...v1.12.0](https://github.com/coingecko/coingecko-typescript/compare/v1.11.3...v1.12.0)

### Features

* **mcp:** add code execution tool ([fd832aa](https://github.com/coingecko/coingecko-typescript/commit/fd832aadc778f5f703d69b3c695fbb2ba3fb3398))
* **mcp:** add option to infer mcp client ([cc16c77](https://github.com/coingecko/coingecko-typescript/commit/cc16c77ba0a2bbfa5af462df06116e6d605ee757))
* **mcp:** parse query string as mcp client options in mcp server ([b0581d0](https://github.com/coingecko/coingecko-typescript/commit/b0581d08d24c3a1926fce462625cb67989fa12a7))


### Chores

* add package to package.json ([a8506f8](https://github.com/coingecko/coingecko-typescript/commit/a8506f89f3257301254692ba017165ba42ed6eb9))
* **client:** qualify global Blob ([1d928c3](https://github.com/coingecko/coingecko-typescript/commit/1d928c3e9acfb2375d9017c09e491a391302e2f6))
* **internal:** codegen related update ([c35261c](https://github.com/coingecko/coingecko-typescript/commit/c35261c7a3757b627db2627986305aa022216b71))
* **internal:** codegen related update ([e3e7482](https://github.com/coingecko/coingecko-typescript/commit/e3e74826ea71d72713ccdcc520743138919bcd20))
* **internal:** make mcp-server publishing public by defaut ([b331749](https://github.com/coingecko/coingecko-typescript/commit/b33174921e5d14976bfe3244d2ece6629be98e29))
* **internal:** refactor array check ([4e2e7e2](https://github.com/coingecko/coingecko-typescript/commit/4e2e7e2f9e28a0cdb781b8cdc8d03742450b3071))
* **internal:** update global Error reference ([e53ff08](https://github.com/coingecko/coingecko-typescript/commit/e53ff08bbfdb439af8cb9de50df08fda81c64752))
* **mcp:** add cors to oauth metadata route ([0c92a85](https://github.com/coingecko/coingecko-typescript/commit/0c92a85a4cfcf215d247447fd6aa78ef4b6fa83b))
* **mcp:** update package.json ([b157db7](https://github.com/coingecko/coingecko-typescript/commit/b157db7edeea20ecf5649c7145ece9ac66e219c4))
* **mcp:** update types ([7247a4c](https://github.com/coingecko/coingecko-typescript/commit/7247a4c6015c7dbf44143ab1e7e0670572135287))
* update CI script ([19977b1](https://github.com/coingecko/coingecko-typescript/commit/19977b1b745418f89542033fe103311242c9c39b))

## 1.11.3 (2025-08-16)

Full Changelog: [v1.11.2...v1.11.3](https://github.com/coingecko/coingecko-typescript/compare/v1.11.2...v1.11.3)

### Features

* **mcp:** add logging when environment variable is set ([27dbd18](https://github.com/coingecko/coingecko-typescript/commit/27dbd18b7dc3f2a861fb3ed1109091bc3445d934))
* **mcp:** add unix socket option for remote MCP ([b3c3670](https://github.com/coingecko/coingecko-typescript/commit/b3c3670815b2c37165027fbe122a232fb431948d))
* **mcp:** remote server with passthru auth ([d0e4de6](https://github.com/coingecko/coingecko-typescript/commit/d0e4de6a1e1e9a875c86b08258c7c3672ce8996b))


### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([a63b83a](https://github.com/coingecko/coingecko-typescript/commit/a63b83a9de3d177536aeef904b695b7115ba3d77))
* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([82b3638](https://github.com/coingecko/coingecko-typescript/commit/82b363894a9b2be5e9da35e674cea9b3a88bdb17))
* **mcp:** reverse validJson capability option and limit scope ([247d3d0](https://github.com/coingecko/coingecko-typescript/commit/247d3d026590b397e10a74ae96ecc9abff19b93c))


### Chores

* **deps:** update dependency @types/node to v20.17.58 ([52e177f](https://github.com/coingecko/coingecko-typescript/commit/52e177f73e043b937eac819bcb2bba44216501cb))
* **internal:** codegen related update ([3a1d62e](https://github.com/coingecko/coingecko-typescript/commit/3a1d62e861491eed9316207318873473e30ae93d))
* **internal:** formatting change ([6ec2acf](https://github.com/coingecko/coingecko-typescript/commit/6ec2acf964d0df5b64642bec03631679f32f41b3))
* **internal:** move publish config ([bee2d32](https://github.com/coingecko/coingecko-typescript/commit/bee2d321ee1551059f2ad402aef8293431b0594a))
* **internal:** update comment in script ([b56e4c9](https://github.com/coingecko/coingecko-typescript/commit/b56e4c91e0a7f59ca8f5014995cae740a05d32d9))
* **mcp:** document remote server in README.md ([323f5b7](https://github.com/coingecko/coingecko-typescript/commit/323f5b7aec31afb679d6fa8da38d50888eb7e73d))
* **mcp:** minor cleanup of types and package.json ([6d0d1e1](https://github.com/coingecko/coingecko-typescript/commit/6d0d1e15c94ecef45a7e04941ab370ef49df7dc8))
* **mcp:** refactor streamable http transport ([fbdb003](https://github.com/coingecko/coingecko-typescript/commit/fbdb003028b1cb88bb06bc52e01b025ffd641435))
* **mcp:** update README ([544a3d2](https://github.com/coingecko/coingecko-typescript/commit/544a3d2c62dcfc4b20091cc87d9398278b0ca8a3))
* update @stainless-api/prism-cli to v5.15.0 ([4c37db1](https://github.com/coingecko/coingecko-typescript/commit/4c37db118cea22c19b8927586408115bd462e015))

## 1.11.2 (2025-07-31)

Full Changelog: [v1.11.1...v1.11.2](https://github.com/coingecko/coingecko-typescript/compare/v1.11.1...v1.11.2)

### Bug Fixes

* **mcp:** fix tool description of jq_filter ([55ba3c1](https://github.com/coingecko/coingecko-typescript/commit/55ba3c1a715589e7199d7b0f35a47eab7db1d10a))

## 1.11.1 (2025-07-30)

Full Changelog: [v1.11.0...v1.11.1](https://github.com/coingecko/coingecko-typescript/compare/v1.11.0...v1.11.1)

### Chores

* **internal:** codegen related update ([6181afb](https://github.com/coingecko/coingecko-typescript/commit/6181afbed5f2ee3c098c0a6d88c6fa69e34cb35e))
* **internal:** remove redundant imports config ([c6cda80](https://github.com/coingecko/coingecko-typescript/commit/c6cda80136c4e7c764fc9917dd458a01fabf8ef1))

## 1.11.0 (2025-07-20)

Full Changelog: [v1.10.3...v1.11.0](https://github.com/coingecko/coingecko-typescript/compare/v1.10.3...v1.11.0)

### Features

* **api:** api update ([9be3bfe](https://github.com/coingecko/coingecko-typescript/commit/9be3bfebe853f78cc0fe408cbb9e6c516356a06d))

## 1.10.3 (2025-07-18)

Full Changelog: [v1.10.2...v1.10.3](https://github.com/coingecko/coingecko-typescript/compare/v1.10.2...v1.10.3)

### Bug Fixes

* **mcp:** include required section for top-level properties and support naming transformations ([426f523](https://github.com/coingecko/coingecko-typescript/commit/426f52391d919372a847a9f05b838cef090f0d9e))

## 1.10.2 (2025-07-17)

Full Changelog: [v1.10.1...v1.10.2](https://github.com/coingecko/coingecko-typescript/compare/v1.10.1...v1.10.2)

### Chores

* **mcp:** formatting ([2523d15](https://github.com/coingecko/coingecko-typescript/commit/2523d156e7d478a156164a331c53c85cb67c8ba1))
* **ts:** reorder package.json imports ([159fec5](https://github.com/coingecko/coingecko-typescript/commit/159fec5e348cb1d8e439683ec139977deaaaffa5))

## 1.10.1 (2025-07-16)

Full Changelog: [v1.10.0...v1.10.1](https://github.com/coingecko/coingecko-typescript/compare/v1.10.0...v1.10.1)

### Bug Fixes

* **mcp:** support jq filtering on cloudflare workers ([c282ffa](https://github.com/coingecko/coingecko-typescript/commit/c282ffa27f9346c4501b797f552b9e7b0298f5e3))


### Chores

* **mcp:** rework imports in tools ([fccae9a](https://github.com/coingecko/coingecko-typescript/commit/fccae9a57c148cac69751423f5596ae677785126))

## 1.10.0 (2025-07-11)

Full Changelog: [v1.9.0...v1.10.0](https://github.com/coingecko/coingecko-typescript/compare/v1.9.0...v1.10.0)

### Features

* **mcp:** support filtering tool results by a jq expression ([e0f7de2](https://github.com/coingecko/coingecko-typescript/commit/e0f7de28437a7884a796052c40e3c5ff74fa562f))


### Bug Fixes

* **mcp:** relax input type for asTextContextResult ([5b31a3a](https://github.com/coingecko/coingecko-typescript/commit/5b31a3ac91b7614f9700bc3c150831fd8d6b7bf0))


### Chores

* make some internal functions async ([97ae2fc](https://github.com/coingecko/coingecko-typescript/commit/97ae2fc3acf7b139198ec8592127f50f3218a3e9))

## 1.9.0 (2025-07-09)

Full Changelog: [v1.8.0...v1.9.0](https://github.com/coingecko/coingecko-typescript/compare/v1.8.0...v1.9.0)

### Features

* **api:** api update ([c7cf66d](https://github.com/coingecko/coingecko-typescript/commit/c7cf66dae206869a6f960b3966f603dbaa84a43a))

## 1.8.0 (2025-07-08)

Full Changelog: [v1.7.3...v1.8.0](https://github.com/coingecko/coingecko-typescript/compare/v1.7.3...v1.8.0)

### Features

* **api:** api update ([14c2d5e](https://github.com/coingecko/coingecko-typescript/commit/14c2d5e82761827875b66383bd0f9dea9c99dc44))

## 1.7.3 (2025-07-03)

Full Changelog: [v1.7.2...v1.7.3](https://github.com/coingecko/coingecko-typescript/compare/v1.7.2...v1.7.3)

### Chores

* add docs to RequestOptions type ([c2dfd02](https://github.com/coingecko/coingecko-typescript/commit/c2dfd0280c85a14d5d393f374181aa8468c57a3c))

## 1.7.2 (2025-07-01)

Full Changelog: [v1.7.1...v1.7.2](https://github.com/coingecko/coingecko-typescript/compare/v1.7.1...v1.7.2)

### Chores

* **client:** improve path param validation ([38e333d](https://github.com/coingecko/coingecko-typescript/commit/38e333da596f98482a640341cc8ac63ddcdb6942))

## 1.7.1 (2025-06-28)

Full Changelog: [v1.7.0...v1.7.1](https://github.com/coingecko/coingecko-typescript/compare/v1.7.0...v1.7.1)

### Bug Fixes

* **ci:** release-doctor — report correct token name ([75c2827](https://github.com/coingecko/coingecko-typescript/commit/75c282747c272c58024ee295063ce50b657873ce))
* **client:** get fetchOptions type more reliably ([bfcf183](https://github.com/coingecko/coingecko-typescript/commit/bfcf1832d40f7409749def9cb4c572772bdb6e27))


### Chores

* **ci:** only run for pushes and fork pull requests ([b54f71d](https://github.com/coingecko/coingecko-typescript/commit/b54f71d781f06769d4d531db290c140b42fabd98))
* **docs:** use simpler mcp tool name ([0f8f66d](https://github.com/coingecko/coingecko-typescript/commit/0f8f66d13e2a1da640d6e5cdb34e0039e337dac4))


### Refactors

* **types:** replace Record with mapped types ([cd28aac](https://github.com/coingecko/coingecko-typescript/commit/cd28aacf3d487a12382c3687272e356a2132fc06))

## 1.7.0 (2025-06-23)

Full Changelog: [v1.6.1...v1.7.0](https://github.com/coingecko/coingecko-typescript/compare/v1.6.1...v1.7.0)

### Features

* **api:** api update ([5885c61](https://github.com/coingecko/coingecko-typescript/commit/5885c61172222d9368cc3ca1b0c35d8f1e5b0f55))

## 1.6.1 (2025-06-21)

Full Changelog: [v1.6.0...v1.6.1](https://github.com/coingecko/coingecko-typescript/compare/v1.6.0...v1.6.1)

### Bug Fixes

* **client:** explicitly copy fetch in withOptions ([15d6359](https://github.com/coingecko/coingecko-typescript/commit/15d635933691519f19a77954cf8ed273c9f3c6d8))

## 1.6.0 (2025-06-19)

Full Changelog: [v1.5.0...v1.6.0](https://github.com/coingecko/coingecko-typescript/compare/v1.5.0...v1.6.0)

### Features

* **client:** add support for endpoint-specific base URLs ([b356451](https://github.com/coingecko/coingecko-typescript/commit/b356451ee15a78d85c75e584665d4506b4397a58))


### Chores

* **ci:** enable for pull requests ([e6578d3](https://github.com/coingecko/coingecko-typescript/commit/e6578d3eae4e30107b8ad2548d81a7fb88159268))
* **client:** refactor imports ([36f0acf](https://github.com/coingecko/coingecko-typescript/commit/36f0acf5a7d984e41f7b539414e020366fecb546))
* **readme:** update badges ([b6a481f](https://github.com/coingecko/coingecko-typescript/commit/b6a481f92e699fcf6a92a624c836b226199000a7))
* **readme:** use better example snippet for undocumented params ([a35d8e9](https://github.com/coingecko/coingecko-typescript/commit/a35d8e98e7093a38aaabaa3691e97b1e035d6a72))

## 1.5.0 (2025-06-14)

Full Changelog: [v1.4.0...v1.5.0](https://github.com/coingecko/coingecko-typescript/compare/v1.4.0...v1.5.0)

### Features

* **mcp:** set X-Stainless-MCP header ([317c1b4](https://github.com/coingecko/coingecko-typescript/commit/317c1b4eb9e044e66cfab7f0cf81c5d095619f99))


### Bug Fixes

* publish script — handle NPM errors correctly ([4e6a793](https://github.com/coingecko/coingecko-typescript/commit/4e6a793c2e986947a342908182403841c503273c))


### Chores

* **internal:** add pure annotations, make base APIResource abstract ([0a7e13d](https://github.com/coingecko/coingecko-typescript/commit/0a7e13d1777f3d8c0041a5b3a28d8956d614ac53))

## 1.4.0 (2025-06-13)

Full Changelog: [v1.3.0...v1.4.0](https://github.com/coingecko/coingecko-typescript/compare/v1.3.0...v1.4.0)

### Features

* **api:** manual updates ([e9c62ee](https://github.com/coingecko/coingecko-typescript/commit/e9c62ee20051912ed4a7c00e7ef0991fd44441c9))

## 1.3.0 (2025-06-13)

Full Changelog: [v1.2.1...v1.3.0](https://github.com/coingecko/coingecko-typescript/compare/v1.2.1...v1.3.0)

### Features

* **api:** Update example response ([d163a61](https://github.com/coingecko/coingecko-typescript/commit/d163a61aa6392059cd65eb496f6926405b00ec27))

## 1.2.1 (2025-06-10)

Full Changelog: [v1.2.0...v1.2.1](https://github.com/coingecko/coingecko-typescript/compare/v1.2.0...v1.2.1)

### Chores

* **mcp:** provides high-level initMcpServer function and exports known clients ([6a2476c](https://github.com/coingecko/coingecko-typescript/commit/6a2476c355f35f0cb12a70b753d3d63cd09c5f52))

## 1.2.0 (2025-06-07)

Full Changelog: [v1.1.0...v1.2.0](https://github.com/coingecko/coingecko-typescript/compare/v1.1.0...v1.2.0)

### Features

* **api:** api update ([f5e8c36](https://github.com/coingecko/coingecko-typescript/commit/f5e8c36ce49096e32b3f853d19d8f195c92dd770))
* **api:** New endpoints ([f5d13e0](https://github.com/coingecko/coingecko-typescript/commit/f5d13e06cfb547208f98755ffa00a4cad572889e))

## 1.1.0 (2025-06-07)

Full Changelog: [v1.0.1...v1.1.0](https://github.com/coingecko/coingecko-typescript/compare/v1.0.1...v1.1.0)

### Features

* **mcp:** implement support for binary responses ([c54fdcf](https://github.com/coingecko/coingecko-typescript/commit/c54fdcf36bceed7c0440de3bd4150a652826e3b3))


### Chores

* avoid type error in certain environments ([d1dbd0f](https://github.com/coingecko/coingecko-typescript/commit/d1dbd0fb5c7127c3564a0de0580f153b2b809eae))

## 1.0.1 (2025-06-04)

Full Changelog: [v1.0.0...v1.0.1](https://github.com/coingecko/coingecko-typescript/compare/v1.0.0...v1.0.1)

### Chores

* adjust eslint.config.mjs ignore pattern ([6be2176](https://github.com/coingecko/coingecko-typescript/commit/6be21766e0c2d90c716584e7fe3815f6a076434a))
* **docs:** use top-level-await in example snippets ([c76c8dc](https://github.com/coingecko/coingecko-typescript/commit/c76c8dc540828fe6241e06e8f5d7a7da55d7a8a3))
* **internal:** fix readablestream types in node 20 ([04a6948](https://github.com/coingecko/coingecko-typescript/commit/04a6948a2b9c1efe00001207035743175b190768))

## 1.0.0 (2025-06-02)

Full Changelog: [v0.1.0-alpha.10...v1.0.0](https://github.com/coingecko/coingecko-typescript/compare/v0.1.0-alpha.10...v1.0.0)

### Features

* **api:** update via SDK Studio ([bd28948](https://github.com/coingecko/coingecko-typescript/commit/bd289488b00237217f30e57cfc31b4b60d43e9df))


### Chores

* update SDK settings ([a5e9d4d](https://github.com/coingecko/coingecko-typescript/commit/a5e9d4dba52912eb1b31d63ebbe74d8e96bb32d8))

## 0.1.0-alpha.10 (2025-06-02)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha.10](https://github.com/coingecko/coingecko-typescript/compare/v0.1.0-alpha.9...v0.1.0-alpha.10)

### Features

* **api:** update via SDK Studio ([673c28b](https://github.com/coingecko/coingecko-typescript/commit/673c28b7c3d9e9240036d693c884aaed44204b92))

## 0.1.0-alpha.9 (2025-06-02)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/coingecko/coingecko-typescript/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Features

* **api:** update via SDK Studio ([550ee83](https://github.com/coingecko/coingecko-typescript/commit/550ee83f4cb1044d1a835cca92ed19d91188cfb1))
* **api:** update via SDK Studio ([0e837a1](https://github.com/coingecko/coingecko-typescript/commit/0e837a1f5115b13ff86816e17e179efb278a36db))

## 0.1.0-alpha.8 (2025-06-02)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/coingecko/coingecko-typescript/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Features

* **api:** update via SDK Studio ([7756f58](https://github.com/coingecko/coingecko-typescript/commit/7756f58a4baa2b3afa939ee90a45171bd13e3a09))

## 0.1.0-alpha.7 (2025-05-31)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/coingecko/coingecko-typescript/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Features

* **api:** update via SDK Studio ([4295f9a](https://github.com/coingecko/coingecko-typescript/commit/4295f9aa912f52a096b71215115b0779484e11a9))

## 0.1.0-alpha.6 (2025-05-30)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/coingecko/coingecko-typescript/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Chores

* **deps:** bump eslint-plugin-prettier ([8da9156](https://github.com/coingecko/coingecko-typescript/commit/8da9156f0c187b22c4982e0db9bdb3c8b6ec5e1b))
* **internal:** update jest config ([c651894](https://github.com/coingecko/coingecko-typescript/commit/c6518949563d7bb00672f515857c1ae00ec7e8c6))

## 0.1.0-alpha.5 (2025-05-30)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/coingecko/coingecko-typescript/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Bug Fixes

* compat with more runtimes ([e05e219](https://github.com/coingecko/coingecko-typescript/commit/e05e219ea671ac0030ad5544860b8ac9db1bb64a))

## 0.1.0-alpha.4 (2025-05-29)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/coingecko/coingecko-typescript/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **api:** update via SDK Studio ([9a97333](https://github.com/coingecko/coingecko-typescript/commit/9a973332c0f11a64543cd75a0b78bceb48a86602))

## 0.1.0-alpha.3 (2025-05-29)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/coingecko/coingecko-typescript/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* **mcp:** include http information in tools ([a074514](https://github.com/coingecko/coingecko-typescript/commit/a074514100b4a0b149bee168356d15c7079389fa))


### Chores

* **mcp:** remove duplicate assignment ([f8fbf38](https://github.com/coingecko/coingecko-typescript/commit/f8fbf382e4be449b4ca47d8fc1d677a47f468de0))

## 0.1.0-alpha.2 (2025-05-28)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/coingecko/coingecko-typescript/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Chores

* improve publish-npm script --latest tag logic ([64fc958](https://github.com/coingecko/coingecko-typescript/commit/64fc9588a23823efe4feeb625df0b50c69b455ac))

## 0.1.0-alpha.1 (2025-05-27)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/coingecko/coingecko-typescript/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** update via SDK Studio ([792c6c3](https://github.com/coingecko/coingecko-typescript/commit/792c6c37df118d54ee50d296e0f346057c394427))
* **api:** update via SDK Studio ([0b2c17a](https://github.com/coingecko/coingecko-typescript/commit/0b2c17a1dea5606a6392cb29c1cbeecc838319bf))
* **api:** update via SDK Studio ([0e9d6bb](https://github.com/coingecko/coingecko-typescript/commit/0e9d6bb82bbd92617987bbdcb57fdc459ec0b955))
* **api:** update via SDK Studio ([3dedbd7](https://github.com/coingecko/coingecko-typescript/commit/3dedbd77e2ce3e86454fd218ae1656b61ebf7971))
* **api:** update via SDK Studio ([31b898a](https://github.com/coingecko/coingecko-typescript/commit/31b898a05a479e934ed1bd52dee77928b916a097))
* **api:** update via SDK Studio ([24ae5ef](https://github.com/coingecko/coingecko-typescript/commit/24ae5ef68c2c7c39e5ef0b529e294d54c9bf93e8))


### Bug Fixes

* **mcp:** fix cursor schema transformation issue with recursive references ([de0bcd2](https://github.com/coingecko/coingecko-typescript/commit/de0bcd2d5d61e19aaf4040d4e16c1e5b08c192f0))
* **mcp:** include description in dynamic tool search ([a85ddf5](https://github.com/coingecko/coingecko-typescript/commit/a85ddf5be227bc83a3068530386827ee47ac82af))


### Chores

* configure new SDK language ([b27aa76](https://github.com/coingecko/coingecko-typescript/commit/b27aa762fc1eb33f23382a8399542141baefedba))
* update SDK settings ([acae969](https://github.com/coingecko/coingecko-typescript/commit/acae969916e24660ca9589902837d4e02b0bdad1))
