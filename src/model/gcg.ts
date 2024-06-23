import {
  ApiEndpoint,
  MysInfo,
  MysRetCode,
} from '../yz-type-loader/yz-type-loader.js';

export default class Gcg {
  /**
   * 获取七圣玩家基础数据
   */
  static async getGcgBasicInfo(e: BotEvent): Promise<any> {
    // 通过 MysInfo.get 方法获取米游社游戏数据
    const res = await MysInfo.get(e, ApiEndpoint.GCG_BASIC_INFO);
    // 如果请求失败，返回 false
    if (res?.retcode !== MysRetCode.OK) return false;

    return {
      quality: 80,
      game: 'gs',
      /** 模板文件路径 */
      tplFile: `./plugins/typescript-plugin-example/resources/html/gcg/gcg-some-fancy-name.html`,
      uid: e.uid,
      saveId: e.uid,
      data: res.data,
    };
  }
}
