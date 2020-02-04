// import { memberDataEntity, teamChainDataEntity } from '@typings/client';

// /**
//  * @param {T} datas
//  * @description
//  * 物件 deep copy 不會跟原本的物件 reference
//  */
// export function deepCopy<T>(datas: T): T {
//     return JSON.parse(JSON.stringify(datas));
// }

// /**
//  * @param {any[]} data
//  * @description
//  * Array 洗牌
//  */
// export function shuffle<T>(datas: T[]): T[] {
//     const result: T[] = deepCopy<T[]>(datas);
//     for (let i = 0; i < result.length; i += 1) {
//         const j: number = Math.floor(Math.random() * i);
//         [result[i], result[j]] = [result[j], result[i]];
//     }
//     return result;
// }

// /**
//  * @param {memberDataEntity} datas
//  * @description
//  *  分組fucntion
//  * @note 名單裡有 A、B、C、D 4人
//  * @note A --> B, B --> D, D --> C, C --> A
//  */
// export function teamChainEngine(datas: memberDataEntity[]): teamChainDataEntity<memberDataEntity>[] {
//     if (!datas || datas.length < 2) {
//         return [];
//     }

//     return [];
// }
