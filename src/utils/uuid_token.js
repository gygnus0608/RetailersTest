import { v4 as uuidv4 } from 'uuid';
// 要生成一个随机字符串，且每次执行不能发生变化，要持久存储（本地存储）
export const getUUID = ()=>{
    // 从本地获取uuid
    let uuid_token = localStorage.getItem('UUIDTOKEN');
    // 如果没有则生成
    if(!uuid_token){
        // 生成临时游客身份
        uuid_token = uuidv4();
        // 存储到本地存储中
        localStorage.setItem('UUIDTOKEN',uuid_token)
    }
    // 切记要有返回值，没有返回值显示undefined
    return uuid_token;
}