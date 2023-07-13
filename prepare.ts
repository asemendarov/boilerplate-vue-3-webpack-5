import husky from 'husky';

const isDocker = !!process.env.IS_DOCKER;
const isCi = !!process.env.CI;
const isHuskyNotFound = !husky;

if (!isDocker && !isCi && !isHuskyNotFound) {
  husky.install();
}
