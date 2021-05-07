import Vue from 'vue';
import {Message} from 'element-ui';
import store from './store'

/**
 *
 * @param err
 * @param vm
 * @param info
 */
Vue.config.errorHandler = function (err, vm, info) {

  Vue.nextTick(() => {
    store.commit('ADD_LOGS', {
      type: 'error',
      message: err.message,
      stack: err.stack,
      info
    })
    if (process.env.NODE_ENV === 'development') {
      console.group('>>>>>> 错误信息 >>>>>>')
      console.log(info)
      Message.error(info)
      console.groupEnd();
      console.group('>>>>>> Vue 实例 >>>>>>')
      console.log(vm)
      console.groupEnd();
      console.group('>>>>>> Error >>>>>>')
      console.log(err)
      Message.error(info)
      console.groupEnd();
    }
  })
}
