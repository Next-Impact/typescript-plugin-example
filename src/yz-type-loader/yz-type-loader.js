import plugin from '../../../lib/plugins/plugin.js';
import base from '../../genshin/model/base.js';
import MysInfo from '../../genshin/model/mys/mysInfo.js';
import puppeteer from '../../../lib/puppeteer/puppeteer.js';

var MysRetCode;
(function (MysRetCode) {
  MysRetCode[MysRetCode["OK"] = 0] = "OK";
  MysRetCode[MysRetCode["RISK"] = 1034] = "RISK";
  MysRetCode[MysRetCode["RISK2"] = 10035] = "RISK2";
})(MysRetCode || (MysRetCode = {}));
var ApiEndpoint;
(function (ApiEndpoint) {
  ApiEndpoint["GCG_BASIC_INFO"] = "basicInfo";
  ApiEndpoint["GCG_AVATAR_CARD_LIST"] = "avatar_cardList";
  ApiEndpoint["GCG_ACTION_CARD_LIST"] = "action_cardList";
  ApiEndpoint["GCG_DECK_LIST"] = "deckList";
})(ApiEndpoint || (ApiEndpoint = {}));
export { plugin, base, MysInfo, MysRetCode, ApiEndpoint, puppeteer};
