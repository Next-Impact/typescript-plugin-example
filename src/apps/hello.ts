import { logger, plugin } from '../lib/yunzai-js-bridge.js';

export class Hello extends plugin {
  constructor() {
    super({
      name: '你好插件',
      dsc: '你好呀',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'message',
      priority: 1,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^#hello$',
          /** 执行方法 */
          fnc: 'sayHello',
        },
      ],
    });
  }

  /** 复读 */
  async sayHello() {
    logger.info('这是调用全局日志方法记录的日志');
    logger.debug('这是调用全局日志方法记录的日志');
    logger.warn('这是调用全局日志方法记录的日志');
    logger.mark('这是调用全局日志方法记录的日志');
    this.reply('吃了吗', true);
  }
}
