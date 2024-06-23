/* eslint @typescript-eslint/no-explicit-any: 0 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import plugin from '../../../lib/plugins/plugin.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import MysInfo from '../../genshin/model/mys/mysInfo.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import puppeteer from '../../../lib/puppeteer/puppeteer.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import base from '../../genshin/model/base.js';

/**
 * 插件类
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
declare class plugin {
  constructor(options: {
    /**
     * 插件名称
     */
    name: string;
    /**
     * 插件描述
     */
    dsc: string;
    handler?: {
      key: string;
      // eslint-disable-next-line @typescript-eslint/ban-types
      fn: Function;
    };
    namespace?: string;
    event?: string;
    /**
     * 优先级
     */
    priority?: number;
    rule?: {
      reg: string;
      /**
       * 调用的方法
       */
      fnc: string;
      event?: string;
      log?: boolean;
      /**
       * 权限
       */
      permission?: 'master' | 'owner' | 'admin' | 'all';
    }[];
    task?: {
      name: string;
      cron: string;
      fnc: string;
      log?: boolean;
    };
  });

  e?: BotEvent;

  /**
   * 回复消息
   * @param msg 消息内容
   * @param quote 是否引用回复
   * @param data 不知道，需要看下框架实现
   */
  reply(msg: any, quote?: boolean, data?: any): any;
  conKey(isGroup?: boolean): string;

  /**
   * 设置上下文，用于记录消息
   * @param type
   * @param isGroup
   * @param time
   * @param timeout
   */
  setContext(
    type: string,
    isGroup?: boolean,
    time?: number,
    timeout?: string,
  ): any;
  finish(type: string, isGroup?: boolean): void;

  /**
   * 渲染图片
   * @param plugin
   * @param tpl 模版名称
   * @param data
   * @param cfg
   */
  renderImg(plugin: string, tpl: string, data: any, cfg: any): Promise<any>;
}

declare class base {
  constructor(e: BotEvent);
  e: BotEvent;
  userId: string;
  model: string;
  _path: string;
  prefix(): string;
  renderImg(tpl: string, data: any, cfg: any): Promise<any>;
  screenData: any;
}

declare class MysInfo {
  /**
   * 未绑定 Cookie 提示内容
   */
  static tips: string;
  constructor(e: any);
  static init(e: BotEvent, api: string): Promise<MysInfo | boolean>;
  static getUid(e: BotEvent, matchMsgUid?: boolean): Promise<string | boolean>;
  static getSelfUid(e: any): Promise<string | boolean>;
  static get(
    e: BotEvent,
    api: ApiEndpoint,
    /**
     * 请求参数
     * 某些接口需要传入额外的参数
     * 具体看 ApiEndpoint 的注释说明
     */
    data?: any,
    option?: {
      /**
       * 是否显示日志
       */
      log?: boolean;
    },
  ): Promise<any>;
  static initPubCk(): Promise<void>;
  static initUserCk(): Promise<void>;
  static initCache(force?: boolean, clearData?: boolean): Promise<boolean>;
  static getBingCkUid(): Promise<any>;
  static checkUidBing(uid: string, game?: string): Promise<any | boolean>;
  static delDisable(): Promise<any>;
  checkAuth(api: any): boolean;
  checkReply(): Promise<void>;
  getCookie(game?: string, onlySelfCk?: boolean): Promise<string>;
  checkCode(
    res: any,
    type: string,
    mysApi?: any,
    data?: any,
    isTask?: boolean,
  ): Promise<any>;
  delCk(): Promise<boolean>;
  disableToday(game?: string): Promise<void>;
  userId: string;
  uid: string;
  ckInfo: {
    ck: string;
    uid: string;
    qq: string;
    ltuid: string;
    type: string;
  };
  ckUser: any;
  auth: string[];
  gtest: boolean;
  mysButton: any;
}

/**
 * 用于截图生成图片
 */
declare class puppeteer {
  /**
   * 截图生成图片
   * @param name HTML 模版名称
   * @param data 数据
   */
  static screenshot(name: string, data: any): Promise<any>;

  /**
   * 分片截图生成图片
   * 没用过这个，不知道是什么效果
   * @param name HTML 模版名称
   * @param data 数据
   */
  static screenshots(name: string, data: any): Promise<any>;
}

enum MysRetCode {
  /**
   * 成功
   */
  OK = 0,
  /**
   * 需要验证码
   */
  RISK = 1034,
  /**
   * 需要验证码
   */
  RISK2 = 10035,
}

enum ApiEndpoint {
  /**
   * 七圣玩家基本信息
   * 不需要传入参数
   */
  GCG_BASIC_INFO = 'basicInfo',
  /**
   * 七圣玩家角色牌数据
   * 不需要传入参数
   */
  GCG_AVATAR_CARD_LIST = 'avatar_cardList',
  /**
   * 七圣玩家行动牌数据
   * 不需要传入参数
   */
  GCG_ACTION_CARD_LIST = 'action_cardList',
  /**
   * 七圣玩家卡组数据
   * 不需要传入参数
   */
  GCG_DECK_LIST = 'deckList',
}

export { plugin, base, MysInfo, MysRetCode, ApiEndpoint, puppeteer };
