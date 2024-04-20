import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({ dir: './' }); // Provide path to your Next.js app to load next.config


const config: Config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@/pages/(.*)$': '<rootDir>/pages/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    collectCoverage: true,
    collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/pages/api/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/pages/_app.tsx',
    '!<rootDir>/src/pages/_document.tsx',
  ],
   
};


export default createJestConfig(config);
