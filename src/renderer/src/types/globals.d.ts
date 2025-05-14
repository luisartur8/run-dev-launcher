import type { itemsList } from './types/itemList';

export interface IElectronAPI {
  getDados: () => Promise<itemsList[]>,
  saveDados: (newData: itemsList[]) => Promise<void>
}

declare global {
  interface Window {
    electron: unknown;
    bridge: IElectronAPI;
    api: unknown;
  }
}

export { };
