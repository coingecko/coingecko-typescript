# Changelog

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
