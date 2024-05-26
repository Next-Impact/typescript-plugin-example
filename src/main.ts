import { logger } from './lib/yunzai-js-bridge.js';

//打印点炫彩的登场台词
logger.mark(
  `欢迎使用${logger.red('娜维娅')}授权的${logger.cyan('你好系统')}！`,
);

export * from './apps/index.js';
