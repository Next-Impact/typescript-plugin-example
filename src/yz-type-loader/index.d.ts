/* eslint @typescript-eslint/no-explicit-any: 0 */
/**
 * lib/common/common.js
 */
declare class CommonFunctions {
  /**
   * 发送私聊消息
   * @param user_id 账号
   * @param msg 消息
   * @param bot_id 机器人账号
   */
  relpyPrivate(user_id: string, msg: string, bot_id: string): any;

  /**
   * 休眠函数
   * @param ms 毫秒
   */
  sleep(ms: number): Promise<any>;

  /**
   * 下载保存文件
   * @param url 下载地址
   * @param file 保存路径
   * @param opts 下载参数
   */
  downFile(url: string, file: string, opts?: any): Promise<any>;

  /**
   * 创建目录
   * @param dirname 目录名
   */
  mkdirs(dirname: string): boolean;

  /**
   * 制作转发消息
   * @param e 消息事件
   * @param msg 消息数组
   * @param dec 转发描述
   */
  makeForwardMsg(e: any, msg?: string[], dec?: string): any;
}

/**
 * lib/plugins/loader.js
 */
declare class MessageSender {
  /**
   * 用户id
   */
  user_id: number | string;
  /**
   * 昵称
   */
  nickname: string;
  /**
   * 群昵称
   */
  card: string;
  /**
   * 群角色 例如 owner, admin, member
   */
  role?: 'owner' | 'admin' | 'member';
}

/**
 * 消息事件
 *
 * lib/plugins/loader.js
 */
declare class BotEvent {
  /**
   * 适配器id，例如 stdin, QQ
   */
  adapter_id: string;

  /**
   * 适配器名称，例如 标准输入, OneBotv11
   */
  adapter_name: string;

  /**
   * 群成员信息
   */
  member?: Member;

  /**
   * 群信息
   */
  group?: Group;

  /**
   * 机器人自身id
   */
  self_id?: number;

  /**
   * 用户id
   */
  user_id?: number;

  /**
   * 群id
   */
  group_id?: number;

  /**
   * Bot实例
   */
  bot: Bot;

  /**
   * 文本消息，多行会自动拼接
   */
  msg: string;

  /**
   * 图片消息数组
   */
  img?: string[];

  /**
   * 是否at机器人
   */
  atBot?: boolean;

  /**
   * 是否at，多个at 以最后的为准
   */
  at?: string;

  /**
   * 接受到的文件
   */
  file: any;

  /**
   * 是否私聊
   */
  isPrivate: boolean;

  /**
   * 是否群聊
   */
  isGroup?: boolean;

  /**
   * 是否机器人管理员
   */
  isMaster: boolean;

  /**
   * 日志用户字符串
   */
  logText: string;

  /**
   * 日志方法字符串
   */
  logFnc: string;

  /**
   * 消息发送者
   */
  sender: MessageSender;

  /**
   * 游戏类型
   */
  game?: 'sr' | 'gs';

  /**
   * @param msg 发送的消息
   * @param quote 是否引用回复
   * @param data
   * @param data.recallMsg 是否撤回消息，0-120秒，0不撤回
   * @param data.at 是否提及用户
   */
  reply(
    msg: any,
    quote?: boolean,
    data?: { recallMsg?: number; at?: any },
  ): any;

  runtime: BotRuntime;

  /**
   * 玩家 uid
   */
  uid: string;
  // user: NoteUser;
}

/**
 * lib/plugins/runtime.js
 */
declare class BotRuntime {
  e: BotEvent;
  _mysInfo: any;
  handler: any;

  /**
   * 返回用户当前绑定uid
   */
  uid(): any;

  /**
   * 是否绑定 Cookie
   */
  hasCk(): any;

  /**
   * 获取 NoteUser
   */
  // user(): NoteUser;

  /**
   * 获取配置信息
   *
   * lib/config/config.js
   */
  cfg(): any;

  /**
   * lib/common/common.js
   */
  // common(): CommonFunctions;

  /**
   * 好像用不到，先用 any 吧
   * lib/puppeteer/puppeteer.js
   */
  puppeteer(): any;

  MysInfo(): any;
  NoteUser(): any;
  MysUsers(): any;

  // init(e: MessageEvent): Promise<BotRunTime>;

  initUser(): any;

  /**
   * 获取MysInfo实例
   *
   * @param targetType all: 所有用户均可， cookie：查询用户必须具备Cookie
   * @returns {Promise<boolean|MysInfo>}
   */
  // getMysInfo(targetType: 'all' | 'cookie'): Promise<boolean|MysInfo>;

  /**
   * 获取MysApi实例
   *
   * @param targetType all: 所有用户均可， cookie：查询用户必须具备Cookie
   * @param option MysApi option
   * @param isSr 是否为星穹铁道
   * @returns {Promise<boolean|MysApi>}
   */
  // getMysApi(targetType: 'all' | 'cookie', option: any, isSr: boolean): Promise<boolean|MysApi>;

  /**
   * 生成MysApi实例
   * @param uid
   * @param ck
   * @param option
   * @param isSr 是否为星穹铁道
   * @returns {Promise<MysApi>}
   */
  // createMysApi(uid: any, ck: any, option: any, isSr: boolean): Promise<MysApi>;

  /**
   *
   * @param plugin plugin key
   * @param path html文件路径，相对于plugin resources目录
   * @param data 渲染数据
   * @param cfg 渲染配置
   * @param cfg.retType 返回值类型
   * * default/空：自动发送图片，返回true
   * * msgId：自动发送图片，返回msg id
   * * base64: 不自动发送图像，返回图像base64数据
   * cfg.beforeRender({data}) 可改写渲染的data数据
   * @returns {Promise<boolean>}
   */
  render(plugin: string, path: string, data: any, cfg: any): Promise<boolean>;
}

/**
 * plugins/adapter
 */
declare class BotStat {
  /**
   * 机器人开始运行时间戳，单位秒
   */
  start_time: number;
  /**
   * 一些统计数据，如丢包等
   * 但好像没啥用，一直是空的？
   */
  stat: any;
}

/**
 * plugins/adapter
 */
declare class Adapter {
  /**
   * 适配器id
   */
  id: string;
  /**
   * 适配器名称
   */
  name: string;
  /**
   * 适配器路径
   */
  path: string;
}

/**
 * 群员
 *
 * plugins/adapter
 */
declare class Member {
  /**
   * 发送消息
   * @param msg
   */
  sendMsg(msg: any): any;

  /**
   * 获取消息
   * @param messageId
   */
  getMsg(messageId: any): any;

  /**
   * 撤回消息
   * @param messageId
   */
  recallMsg(messageId: any): any;

  /**
   * 获取转发消息
   * @param messageId
   */
  getForwardMsg(messageId: any): any;

  /**
   * 发送转发消息
   * @param msg
   */
  sendForwardMsg(msg: any): any;

  /**
   * 发送文件
   * @param file
   * @param name
   */
  sendFile(file: any, name: string): any;

  /**
   * 获取用户信息
   */
  getInfo(): any;

  /**
   * 获取头像
   */
  getAvatarUrl(): any;

  /**
   * 点赞
   */
  thumbUp(): any;

  /**
   * 戳一戳
   */
  poke(): any;

  /**
   * 群禁言
   * @param duration 禁言时长，单位秒
   */
  mute(duration: number): any;

  /**
   * 群踢人
   * @param rejectAddRequest 是否拒绝再次加群
   */
  kick(rejectAddRequest: boolean): any;

  /**
   * 是否好友
   */
  is_friend(): boolean;

  /**
   * 是否群主
   */
  is_owner(): boolean;

  /**
   * 是否管理员
   */
  is_admin(): boolean;
}

/**
 * 群
 *
 * plugins/adapter
 */
declare class Group {
  guild_id: any;
  channel_id: any;
  /**
   * 发送消息
   * @param msg
   */
  sendMsg(msg: any): any;

  /**
   * 获取消息
   * @param messageId
   */
  getMsg(messageId: any): any;

  /**
   * 撤回消息
   * @param messageId
   */
  recallMsg(messageId: any): any;

  /**
   * 获取转发消息
   * @param messageId
   */
  getForwardMsg(messageId: any): any;

  /**
   * 获取群信息
   */
  getInfo(): any;

  /**
   * 获取频道 Array
   */
  getChannelArray(): any;

  /**
   * 获取频道 List
   */
  getChannelList(): any;

  /**
   * 获取频道 Map
   */
  getChannelMap(): any;

  /**
   * 获取群员 Array
   */
  getMemberArray(): any;

  /**
   * 获取群员 List
   */
  getMemberList(): any;

  /**
   * 获取群员 Map
   */
  getMemberMap(): any;

  /**
   * 获取群成员信息
   * @param userId 用户id
   */
  pickMember(userId: any): any;
}

declare class Bot {
  /**
   * 适配器信息
   */
  adapter: Adapter;
  /**
   * WebSocket 实例
   */
  ws: any;

  /**
   * 通过 ws API 发送消息
   * 正常情况大概不会手动调用这个方法
   * @param ws
   * @param action
   * @param params
   */
  sendApi(ws: any, action: any, params: any): any;

  /**
   * 机器人状态
   */
  stat: BotStat;

  setProfile(data: any): any;

  setNickname: any;
  setAvatar: any;

  /**
   * 好友列表
   */
  fl: Map<number, any>;

  /**
   * 群列表
   */
  gl: Map<number, any>;

  /**
   * 群-群成员列表
   */
  gml: Map<number, any>;

  /**
   * 获取群成员信息
   * @param userId 用户id
   */
  pickMember(userId: any): any;

  /**
   * 获取群信息
   * @param groupId 群id
   */
  pickGroup(groupId: any): any;

  /**
   * 获取群 Array
   */
  getGroupArray(): any;

  /**
   * 获取群 List
   */
  getGroupList(): any;

  /**
   * 获取群 Map
   */
  getGroupMap(): any;

  /**
   * 获取群成员 Map
   */
  getGroupMemberMap(): any;
}

/**
 * plugins/genshin/model/mys/BaseModel.js
 */
declare class NoteUser {
  _uuid: string;
  qq: number;
  db: UserDB;
  mysUsers: any;
  _games: any;
}

/**
 * plugins/genshin/model/db/UserDB.js
 */
declare class UserDB {
  static find(id: any, type: string): Promise<any>;
  static saveDB(user: any): Promise<any>;
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

declare class MysApi {
  /**
   * 用户uid
   */
  uid: string;

  /**
   * 米游社cookie
   */
  cookie: string;

  /**
   * 是否星铁
   */
  isSr: boolean;

  /**
   * 服务器名称
   */
  server: string;

  /**
   * api工具
   */
  apiTool: any; //TODO

  /**
   * 缓存时间
   */
  cacheCd: number;

  /**
   * 设备device_id
   */
  _device: string;

  /**
   * 其他参数
   */
  option: {
    log: boolean;
  };

  /**
   * @param uid 游戏uid
   * @param cookie 米游社cookie
   * @param option 其他参数
   * @param option.log 是否显示日志
   * @param isSr 是否星铁
   * @param device 设备device_id
   */
  constructor(
    uid: any,
    cookie: any,
    option?: { log?: boolean },
    isSr?: boolean,
    device?: string,
  );

  /**
   * 获取设备device_id
   */
  get device(): string;

  /**
   * 获取请求地址
   * @param type API 类型
   * @param data 请求参数
   */
  getUrl(
    type: string,
    data?: any,
  ): { url: string; headers: any; body: any } | false;

  /**
   * 根据用户uid获取服务器名称
   */
  getServer(): string;

  /**
   * 获取米游社 API 数据
   * @param type API 类型
   * @param data 请求参数
   * @param cached 是否使用缓存
   */
  getData(type: string, data?: any, cached?: boolean): Promise<any>;

  /**
   * 获取请求头
   * @param query 查询参数
   * @param body 请求体
   */
  getHeaders(query?: string, body?: string): any;

  /**
   * 获取米游社请求头所需的加密 DS 参数
   * @param query 查询参数
   * @param body 请求体
   */
  getDs(query?: string, body?: any): string;

  /**
   * 生成 GUID
   */
  getGuid(): string;

  /**
   * 生成 Redis 缓存 key
   * @param type 缓存类型
   * @param data 缓存数据
   */
  cacheKey(type: string, data: any): string;

  /**
   * 将获取到的米游社 API 数据缓存到 Redis
   * @param res API 返回数据
   * @param cacheKey 缓存 key
   */
  cache(res: any, cacheKey: string): Promise<void>;

  /**
   * 获取网络代理
   */
  getAgent(): Promise<any>;

  /**
   * 生成设备指纹所需的随机种子
   * @param length 随机种子长度
   */
  generateSeed(length?: number): string;
}

declare class MysApiRsp {
  retcode: number;
  message: string;
  data: any;
}

// === START API 七圣-玩家基本信息 ===

/**
 * 七圣-玩家基本信息
 * gcg/basicInfo
 */
interface GcgBasicInfoRsp {
  /**
   * 牌手等级
   */
  level: number;
  /**
   * 玩家昵称
   */
  nickname: string;
  /**
   * 已获得的角色牌数量
   */
  avatar_card_num_gained: number;
  /**
   * 七圣总角色牌数量
   */
  avatar_card_num_total: number;
  /**
   * 已获得的行动牌数量
   */
  action_card_num_gained: number;
  /**
   * 七圣总行动牌数量
   */
  action_card_num_total: number;
  /**
   * 米游社显示在个人主页上的卡牌信息
   */
  covers?: GcgPlayerCover[];
  /**
   * 最近2场对局数据
   */
  replays: GcgReplay[];
  /**
   * 胜冠角色？
   */
  hornor_character?: any;
  /**
   * 胜冠挑战信息？
   */
  challenge_basic?: GcgReplayChallengeBasic;
  /**
   * 是否隐藏首页展示的卡牌
   */
  is_hide_covers: boolean;
  /**
   * 是否隐藏对局
   */
  is_hide_replays: boolean;
}

interface GcgPlayerCover {
  /**
   * 卡牌id
   */
  id: number;
  /**
   * 卡牌图片URL
   */
  image: string;
  /**
   * 卡牌类型
   * 目前有角色牌和行动牌两种
   */
  category: 'GCGCardCategoryAvatarCard' | 'GCGCardCategoryActionCard';
  /**
   * 行动牌消耗
   */
  action_cost: any;
  /**
   * 暂时不知道干什么用的
   */
  has_data: boolean;
  /**
   * 卡牌图片URL
   * 看起来和image一样
   */
  image_v2: string;
}

interface GcgReplay {
  /**
   * 七圣游戏id
   * 根据观察，猜测不同的 NPC 对局有不同的 game_id
   * 不同游戏模式也有不同的 game_id （如热斗的 id 是 24)
   */
  game_id: number;
  /**
   * 己方玩家信息
   */
  self: GcgReplayPlayerInfo;
  /**
   * 对方玩家信息
   */
  opposite: GcgReplayPlayerInfo;
  /**
   * 对局类型
   * 如热斗模式、冒险挑战等
   */
  match_type: string;
  /**
   * 对局时间
   */
  match_time: GcgTime;
  /**
   * 是否胜利
   */
  is_win: boolean;
}

interface GcgReplayPlayerInfo {
  /**
   * 进行对局时使用的昵称
   */
  name: string;
  /**
   * 出战角色牌信息
   * 一般是 3 个角色
   * 数组中的元素是角色牌图片的 URL
   * URL 会变，会变，会变，不要单靠 URL 本身判断角色牌
   */
  linups: string[];
  /**
   * 是否超出回合数上限
   * 目前是 15 回合
   */
  is_overflow: boolean;
}

interface GcgReplayChallengeBasic {
  /**
   * 是否有数据
   * （是否参赛？
   */
  has_data: boolean;
  /**
   * 本次挑战获得的奖牌 URL
   * 例如 前面省略.../challenge_medal_0.png
   */
  medal: string;
  /**
   * 挑战开始结束时间
   */
  schedule: GcgReplayChallengeSchedule;
  /**
   * 玩家昵称
   */
  nickname: string;
  /**
   * 玩家 uid
   */
  uid: string;
  /**
   * 挑战胜利次数
   */
  win_cnt: number;
}

interface GcgReplayChallengeSchedule {
  /**
   * 挑战id
   */
  id: number;
  /**
   * 挑战名称
   * 如 24年6月下
   */
  name: string;
  /**
   * 挑战开始时间
   */
  begin: GcgTime;
  /**
   * 挑战结束时间
   */
  end: GcgTime;
}

interface GcgTime {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

// === END API 七圣-玩家基本信息 ===

// === START API 七圣-玩家卡牌信息 ===
interface GcgCardListRsp {
  /**
   * 卡牌列表
   */
  card_list: GcgCard[];
  /**
   * 是否是最后一页
   */
  is_last: boolean;
  /**
   * 下一页的偏移量
   */
  next_offset: number;
  stats: {
    /**
     * 牌手等级
     */
    level: number;
    /**
     * 玩家昵称
     */
    nickname: string;
    /**
     * 已获得的角色牌数量
     */
    avatar_card_num_gained: number;
    /**
     * 七圣总角色牌数量
     */
    avatar_card_num_total: number;
    /**
     * 已获得的行动牌数量
     */
    action_card_num_gained: number;
    /**
     * 七圣总行动牌数量
     */
    action_card_num_total: number;
  };
}

interface GcgCard {
  /**
   * 卡牌ID
   */
  id: number;
  /**
   * 卡牌名称
   */
  name: string;
  /**
   * 卡牌图片URL
   */
  image: string;
  /**
   * 卡牌描述
   * 角色卡这个字段目前是空的
   * 行动卡这个字段是卡牌描述
   */
  desc: string;
  /**
   * 卡牌类型
   *
   * 角色牌：CardTypeCharacter
   * 事件牌：CardTypeEvent
   * 支援牌：CardTypeAssist
   * 装备牌：CardTypeModify
   *
   * 角色天赋卡算作 CardTypeModify
   * 所以“装备牌”这个名字可能不太准确
   */
  card_type:
    | 'CardTypeCharacter'
    | 'CardTypeEvent'
    | 'CardTypeAssist'
    | 'CardTypeModify';
  /**
   * 当前持有数量
   */
  num: number;
  /**
   * 卡牌标签 图片 URL
   * 例如 武器类型和元素类型
   */
  tags: string[];
  /**
   * 卡牌熟练度
   */
  proficiency: number;
  /**
   * 卡牌使用次数
   */
  use_count: number;
  /**
   * 卡牌生命值
   */
  hp: number;
  /**
   * 卡牌技能
   * 仅角色牌有
   */
  card_skills: GcgAvatarCardSkill[];
  /**
   * 卡牌消耗
   * 仅行动牌有
   */
  action_cost: GcgCardActionCost[];
  /**
   * 卡牌来源
   *
   * 如：卡牌商店购买获得
   */
  card_sources: string[];
  /**
   * 排序id?
   */
  rank_id: number;
  /**
   * 推荐卡组URL
   */
  deck_recommend: string;
  /**
   * 米游社卡牌百科 URL
   */
  card_wiki: string;
  /**
   * 暂时为空
   */
  icon: string;
  /**
   * 暂时为空
   */
  large_icon: string;
  /**
   * 卡牌类别
   */
  category: 'GCGCardCategoryAvatarCard' | 'GCGCardCategoryActionCard';
}

interface GcgAvatarCardSkill {
  /**
   * 技能id
   */
  id: number;
  /**
   * 技能名称
   */
  name: string;
  /**
   * 技能描述
   */
  desc: string;
  /**
   * 技能类型
   */
  tag: '普通攻击' | '元素战技' | '元素爆发' | '被动技能';
}

interface GcgCardActionCost {
  /**
   * 消耗类型
   * CostTypeVoid: 杂色骰
   * CostTypeArcane: 秘传
   * CostTypeSame: 相同元素骰
   * CostTypeEnergy: 充能
   * CostTypeAnemo: 风
   * CostTypeGeo: 岩
   * CostTypeElectro: 雷
   * CostTypeDendro: 草
   * CostTypeHydro: 水
   * CostTypePyro: 火
   * CostTypeCryo: 冰
   */
  cost_type:
    | 'CostTypeVoid'
    | 'CostTypeArcane'
    | 'CostTypeSame'
    | 'CostTypeEnergy'
    | 'CostTypeAnemo'
    | 'CostTypeGeo'
    | 'CostTypeElectro'
    | 'CostTypeDendro'
    | 'CostTypeHydro'
    | 'CostTypePyro'
    | 'CostTypeCryo';
  cost_value: number;
}
// === END API 七圣-玩家角色牌信息 ===
