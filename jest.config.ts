/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";
import { TextEncoder, TextDecoder } from "util";

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./", // jest가 동작되는 기본 경로 설정
});

const config: Config = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/app/$1",
    "^jose": "jose",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  clearMocks: true,
  collectCoverage: true,
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  coverageDirectory: "coverage",
};

module.exports = createJestConfig(config);
