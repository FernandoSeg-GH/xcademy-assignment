import type { Config } from "@jest/types";
export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: "ts-jest",

    globals: {
      "ts-jest": {
        tsconfig: "tsconfig.test.json",
      },
    },

    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

    moduleNameMapper: {
      "test/(.*)": "<rootDir>/test/$1",
      "pages/(.*)": "<rootDir>/pages/$1",
      "components/(.*)": "<rootDir>/components/$1",
      "slices/(.*)": "<rootDir>/slices/$1",
    },
  };
};
