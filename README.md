# Vue Library Monorepo with Vite

This is a monorepo template for creating a Vue 3 library with TypeScript and Vite, including a playground for testing.

## Project Structure

```
├── packages/
│   ├── lib/                    # Library package
│   │   ├── src/
│   │   │   ├── components/     # Vue components
│   │   │   │   └── HelloWorld.vue
│   │   │   └── index.ts       # Library entry point & exports
│   │   ├── package.json       # Library package config
│   │   ├── tsconfig.json      # TypeScript config for lib
│   │   ├── tsconfig.node.json # TypeScript config for Vite
│   │   └── vite.config.ts     # Vite config (library mode)
│   │
│   └── playground/            # Testing application
│       ├── src/
│       │   ├── App.vue        # Main playground app
│       │   └── main.ts        # Playground entry point
│       ├── index.html         # HTML template
│       ├── package.json       # Playground package config
│       ├── tsconfig.json      # TypeScript config
│       ├── tsconfig.node.json # TypeScript config for Vite
│       └── vite.config.ts     # Vite config (port: 5003)
│
├── .eslintrc.json            # ESLint configuration
├── .gitignore               # Git ignore patterns
├── .prettierrc               # Prettier configuration
├── package.json              # Root package config & scripts
├── pnpm-workspace.yaml       # PNPM workspace config
└── README.md                 # Documentation

Key Files:
- packages/lib/src/index.ts              # Main library exports
- packages/lib/src/components/*.vue      # Library components
- packages/lib/vite.config.ts            # Library build config
- packages/playground/src/App.vue        # Playground testing app
- packages/playground/vite.config.ts     # Dev server config (port 5003)
- pnpm-workspace.yaml                    # Defines workspace packages
- package.json                           # Root scripts (pnpm start)
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [PNPM](https://pnpm.io/) (v7 or higher)

## Setup

1. Install PNPM if you haven't already:
   ```bash
   npm install -g pnpm
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

## Development

### Quick Start
The easiest way to start development is using the root `start` command:
```bash
pnpm start
```

This single command will:
1. Start the library in watch mode (auto-rebuilding on changes)
2. Start the playground development server on `http://localhost:5003`
3. Show the output from both packages in a single terminal with clear labeling

### Manual Start (Alternative)
If you need to run the packages separately:

1. Start the library in watch mode:
   ```bash
   # In packages/lib directory
   pnpm dev
   ```

2. In a separate terminal, start the playground:
   ```bash
   # In packages/playground directory
   pnpm dev
   ```

### Port Configuration
- Playground: Runs on port 5003 (configurable in `packages/playground/vite.config.ts`)
- Library: No server port needed as it runs in watch mode for building

### Working on Components

1. Create or modify components in `packages/lib/src/components/`
2. Export them in `packages/lib/src/index.ts`
3. Use them in the playground app (`packages/playground/src/`)
4. Changes in the library will automatically trigger a rebuild
5. The playground will hot-reload to reflect the changes

### Building for Production

```bash
# Build everything from root
pnpm build

# Or build specific packages
cd packages/lib && pnpm build
cd packages/playground && pnpm build
```

### Development Tips
- The library uses Vite's library mode for optimal build performance
- Hot Module Replacement (HMR) is enabled in the playground for rapid development
- TypeScript type checking is enforced across both packages
- ESLint and Prettier ensure consistent code style
- Use `pnpm start` for the most convenient development experience

## Project Configuration

### PNPM Workspace
The project uses PNPM workspaces as defined in `pnpm-workspace.yaml`. This allows us to manage multiple packages in a single repository.

### ESLint
ESLint is configured with:
- TypeScript support
- Vue 3 recommended rules
- Prettier integration

### Prettier
Prettier is configured with:
- No semicolons
- Single quotes
- 2 space indentation
- 100 character line width
- No trailing commas

## Adding New Components

1. Create your component in `packages/lib/src/components`
2. Export it in `packages/lib/src/index.ts`
3. Import and use it in the playground application to test

## Publishing

To publish the library:

1. Update the version in `packages/lib/package.json`
2. Run `pnpm build`
3. Navigate to the lib directory: `cd packages/lib`
4. Run `pnpm publish`

## License

MIT
