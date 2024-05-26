/**
 * 由于整了半天也没解决动态引入 JS 文件的问题，所以只能通过这种方式引入了
 *
 * 如果对应的 ts 文件有修改，这里也要做对应的修改。
 * 然后编译完之后需要手动将编译后的文件拷贝到对应目录下替换（自动化会尽快安排）
 */
import plugin from '../../../lib/plugins/plugin.js';

const logger = global.logger;
const redis = global.redis;

export { plugin, logger, redis };
