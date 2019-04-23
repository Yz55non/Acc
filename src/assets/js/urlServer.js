/**
 * [urlServer description] url 集合
 * @type {Object}
 * */

let protocol = window.location.protocol; // 获取http请求头
const baseIp = protocol + '//127.0.0.1';
const urlServer = {
  baseIp: `${baseIp}:9000/`,
  overServer: `${baseIp}:6868/`,
};
export default urlServer;
