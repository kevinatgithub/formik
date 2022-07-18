export interface IWorldState{
    food: number,
    units: IWorker[],
    setFocus: (entity: any) => void
    focused: any
}
export interface IWorker{
    entity: 'WORKER',
    id: string,
    state: 'IDLE'|'BUSY',
    action: null | 'build' | 'assign',
    target: null | 'field'
}
export interface IField{
    entity: 'FIELD',
    id: string,
    state: 'IDLE'|'BUSY'
}

export const useRandomId = () => {
    return makeid(10)
}

export function makeid(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}