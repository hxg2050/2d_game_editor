import { contextBridge } from 'electron';
import { BrowserWindow } from '@electron/remote';
import WinStatusType from './WinStatusTpye';

contextBridge.exposeInMainWorld('eapi', {
  minimize() {
    BrowserWindow.getFocusedWindow().minimize();
    return WinStatusType.MIN;
  },

  toggleMaximize() {
    const win = BrowserWindow.getFocusedWindow()!;

    if (win.isMaximized()) {
      win.unmaximize();
      return WinStatusType.UN_MAX;
    } else {
      win.maximize();
      return WinStatusType.MAX;
    }
  },

  close() {
    BrowserWindow.getFocusedWindow().close();
  }
});
