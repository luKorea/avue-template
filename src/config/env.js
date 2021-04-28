// 配置编译环境和线上环境之间的切换

let baseUrl = '',
  uploadUrl = '',
  iconfontVersion = ['567566_pwc3oottzol', '1066523_6bvkeuqao36'],
  iconfontUrl = `//at.alicdn.com/t/font_$key.css`,
  codeUrl = `${baseUrl}/code`
const env = process.env;
if (env.NODE_ENV === 'development') {
  baseUrl = `http://172.16.90.231:8080`; // 开发环境地址
  uploadUrl = 'http://172.16.90.231:8080';
} else if (env.NODE_ENV === 'production') {
  baseUrl = ``; //生产环境地址
  uploadUrl = '';
} else if (env.NODE_ENV === 'test') {
  baseUrl = ``; //测试环境地址
  uploadUrl = '';
}
export {
  baseUrl,
  uploadUrl,
  iconfontUrl,
  iconfontVersion,
  codeUrl,
  env
}
