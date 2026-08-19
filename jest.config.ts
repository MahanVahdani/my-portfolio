import type { Config } from "jest";

/**
 * Jest configuration for the portfolio template.
 *
 * Uses ts-jest to transpile TypeScript/TSX files and jsdom to simulate a
 * browser environment for component tests. Path aliases mirror tsconfig.json
 * so imports like `@/lib/utils` work without modification inside tests.
 */
const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  // Registers jest-dom matchers (toBeInTheDocument, toHaveClass, etc.)
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    // Resolve TypeScript path aliases
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@ui/(.*)$": "<rootDir>/src/components/ui/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@lib/(.*)$": "<rootDir>/src/lib/$1",
    // Static asset imports (images, CSS) are no-ops in the test environment
    "\\.(css|scss|svg|png|jpg|jpeg|gif|webp)$": "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: { jsx: "react-jsx" } }],
  },
  testMatch: ["<rootDir>/src/__tests__/**/*.test.{ts,tsx}"],
};

export default config;
