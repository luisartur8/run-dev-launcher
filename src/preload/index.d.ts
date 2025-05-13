import { ElectronAPI } from '@electron-toolkit/preload'
import { itemsList } from '@renderer/types/itemList';

export interface IElectronAPI {
  getDados: () => Promise<itemsList[]>,
  saveDados: (newData: itemsList[]) => Promise<void>
}

declare global {
  interface Window {
    electron: ElectronAPI
    electronAPI: IElectronAPI
    api: unknown
  }
}

export {}