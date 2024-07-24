// 基于  vue-router 生成配置

import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import ToolList from '../business';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home,
    }
];

ToolList.forEach((item) => {
    routes.push({
        name: item.key,
        meta: {
            title: item.title,
            description: item.description,
        },
        path: item.path,
        component: item.component,
    });
});

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
export const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory('/'),
    routes, // `routes: routes` 的缩写
});
