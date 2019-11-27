import React from 'react';
import Notification from 'rc-notification';
// import {Icon} from './../index';

// type NotificationPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

// type IconType = 'success' | 'info' | 'error' | 'warning';
//
// const notificationInstance: { [key: string]: any } = {};
//
// let defaultDuration = 4.5;
// let defaultTop = 24;
// let defaultBottom = 24;
// let defaultPlacement: NotificationPosition = 'topRight';
// let defaultGetContainer: () => HTMLElement;
//
// interface configProps {
//   top?: number;
//   bottom?: number;
//   duration?: number;
//   placement?: NotificationPosition;
//   getContainer?: () => HTMLElement;
// }

interface noticeProps {
  message?: React.ReactNode | string;
  description?: React.ReactNode | string;
}

const notice = (args: noticeProps) => {
  Notification.newInstance({}, (notification: any) => {
    notification.notice({
      content: <span>simple show</span>,
      duration: 100,
      closable: true
    });
    setTimeout(() => {
      notification.destroy()
    }, 10000)
  });
};

const api: any = {
  open: notice,
  close: (key: string) => {},
  destroy: () => {}
};

['success', 'info', 'error', 'warning'].forEach(type => {
  api[type] = (args: any) => {
    api.open({...args, type});
  };
});

api.warn = api.warning;

console.log(api);

export default api;
