import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('myAPI', {
  mimecheck: async (filepath: string): Promise<boolean> =>
    ipcRenderer.invoke('mime-check', filepath),

  history: (filepath: string) => ipcRenderer.send('file-history', filepath),

  contextMenu: () => ipcRenderer.send('show-context-menu'),

  dirname: async (filepath: string): Promise<string> =>
    ipcRenderer.invoke('dirname', filepath),

  readdir: async (dirpath: string): Promise<void | string[]> =>
    ipcRenderer.invoke('readdir', dirpath),

  moveToTrash: async (filepath: string): Promise<boolean> =>
    ipcRenderer.invoke('move-to-trash', filepath),

  openDialog: async (): Promise<string | void | undefined> =>
    ipcRenderer.invoke('open-dialog'),

  updateTitle: async (filepath: string): Promise<void> =>
    ipcRenderer.invoke('update-title', filepath),

  menuNext: (listener: () => Promise<void>) =>
    ipcRenderer.on('menu-next', listener),
  removeMenuNext: () => ipcRenderer.removeAllListeners('menu-next'),

  menuPrev: (listener: () => Promise<void>) =>
    ipcRenderer.on('menu-prev', listener),
  removeMenuPrev: () => ipcRenderer.removeAllListeners('menu-prev'),

  menuRemove: (listener: () => Promise<void>) =>
    ipcRenderer.on('menu-remove', listener),
  removeMenuRemove: () => ipcRenderer.removeAllListeners('menu-remove'),

  menuOpen: (listener: (_e: Event, filepath: string) => Promise<void>) =>
    ipcRenderer.on('menu-open', listener),
  removeMenuOpen: () => ipcRenderer.removeAllListeners('menu-open'),

  windowClose: async () => ipcRenderer.invoke('window-close'),
  windowMinimize: async () => ipcRenderer.invoke('window-minimize'),
  windowMaximize: async () => ipcRenderer.invoke('window-maximize'),
  windowRestore: async () => ipcRenderer.invoke('window-restore'),

  resized: (listener: () => Promise<void>) =>
    ipcRenderer.on('resized', listener),
  removeResized: () => ipcRenderer.removeAllListeners('resized'),

  maximized: (listener: () => Promise<void>) =>
    ipcRenderer.on('maximized', listener),
  removeMaximized: () => ipcRenderer.removeAllListeners('maximized'),

  unMaximized: (listener: () => Promise<void>) =>
    ipcRenderer.on('unMaximized', listener),
  removeUnMaximized: () => ipcRenderer.removeAllListeners('unMaximized'),

  getFocus: (listener: () => Promise<void>) =>
    ipcRenderer.on('get-focus', listener),
  removeGetFocus: () => ipcRenderer.removeAllListeners('get-focus'),

  getBlur: (listener: () => Promise<void>) =>
    ipcRenderer.on('get-blur', listener),
  removeGetBlur: () => ipcRenderer.removeAllListeners('get-blur'),
});
