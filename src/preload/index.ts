import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { itemsList } from 'renderer/src/types/itemList'

// Custom APIs for renderer
const bridge = {
  getDados: () => ipcRenderer.invoke('get-dados'),
  saveDados: (novosDados: itemsList[]) => ipcRenderer.invoke('save-dados', novosDados),
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('bridge', bridge);
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
  // @ts-ignore (define em dts)
  window.bridge = bridge
}
