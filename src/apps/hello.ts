import { plugin, puppeteer } from '../yz-type-loader/yz-type-loader.js';
import Gcg from '../model/gcg.js';

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
        {
          /** 命令正则匹配 */
          reg: '^#七圣测试命令$',
          /** 执行方法 */
          fnc: 'test',
        },
      ],
    });
  }

  /** 发送命令触发问候 */
  async sayHello(e: BotEvent) {
    logger.info('这是调用全局日志方法记录的日志');
    logger.info(`收到消息：${e.msg}`);

    this.reply('你好', true);
  }

  async test(e: BotEvent): Promise<boolean> {
    const data = await Gcg.getGcgBasicInfo(e);

    // 手动声明返回数据的类型，这里请求的是 GCG_BASIC_INFO，所以类型是 GcgBasicInfoRsp
    const result: GcgBasicInfoRsp = data.data;

    // 随便展示一些数据
    this.reply(`已获得行动牌：${result.action_card_num_gained} 张`);

    // 生成图片发送
    const img = await puppeteer.screenshot('gcg-test', data);
    if (img) {
      await this.reply(img, true);
    }

    // 返回 true 表示执行成功，机器人不会再继续匹配执行后续插件
    return true;
  }
}
