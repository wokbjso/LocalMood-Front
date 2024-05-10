/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./", // jest가 동작되는 기본 경로 설정
});

const config: Config = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/app/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  clearMocks: true,
  collectCoverage: true,
  coverageProvider: "v8",
  testEnvironment: "jsdom",

  coverageDirectory: "coverage",
};

export default createJestConfig(config);
