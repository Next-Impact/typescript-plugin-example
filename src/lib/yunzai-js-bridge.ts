/* eslint @typescript-eslint/no-explicit-any: 0 */
/**
 * 这文件存在的唯一意义就是获取类型提示
 * 因为像桥梁一样沟通 js 和 ts，所以叫做 js-bridge（
 * 如果要用到机器人框架中的其他方法，可以在这里引入，然后加上类型声明
 *
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import plugin from '../../lib/plugins/plugin.js';

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

/**
 * 全局日志
 */
declare const logger: {
  trace: (...args: any[]) => void;
  debug: (...args: any[]) => void;
  info: (...args: any[]) => void;
  warn: (...args: any[]) => void;
  error: (...args: any[]) => void;
  fatal: (...args: any[]) => void;
  /**
   *
   * @param args
   */
  mark: (...args: any[]) => void;
  chalk: any;
  /**
   * 红色
   */
  red: any;
  /**
   * 绿色
   */
  green: any;
  /**
   * 黄色
   */
  yellow: any;
  /**
   * 蓝色
   */
  blue: any;
  /**
   * 紫色
   */
  magenta: any;
  /**
   * 青色
   */
  cyan: any;
};

/**
 * 全局 Redis 客户端
 * 看着 Yunzai 的代码写的，可能有漏的
 */
declare const redis: {
  get: (key: string) => Promise<any>;
  set: (key: string, value: any, config: any) => Promise<any>;
  del: (key: string) => Promise<any>;
  keys: (key: string) => Promise<any[]>;
  incr: (key: string) => Promise<any>;
  setEx: (key: string, seconds: number, value: any) => Promise<any>;
  exists: (key: string) => Promise<any>;
  expire: (key: string, seconds: number) => Promise<any>;
};

export { plugin, logger, redis };
