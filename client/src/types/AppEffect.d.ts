
/**
 * 解析するメッセージのidと、そのidがついたメッセージの解析を行う関数のセット。
 * @typedef {Object} AppEffect
 * @property {number} id 解析するメッセージのid。
 * @property {(ws:WebSocket, data:any)=>void } applyEffect websocketからのメッセージの解析を行う関数。
 */ 
export type AppEffect={
    id: number,
    applyEffect: (ws:WebSocket, data:any)=>void 
}