import emitter from './emitter';

export default function (res, title = '更新') {
  if (res.data.success) {
    emitter.emit('push-messages', {
      style: 'success',
      title: `${title}成功`,
    });
  } else {
    const message = typeof res.data.message === 'string'
      ? [res.data.message] : res.data.message;
    emitter.emit('push-messages', {
      style: 'danger',
      title: `${title}失敗`,
      content: message.join('、'),
    });
  }
}
