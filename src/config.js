const config = {
    dev: {
        API_BASE: import.meta.env.VITE_API_BASE || 'https://api-runtime.q-bot.cn/api', // 默认开发环境
        ADMIN_URL: import.meta.env.VITE_ADMIN_URL || 'https://api-runtime.q-bot.cn/',
        SITE_TITLE: import.meta.env.VITE_SITE_TITLE || 'StarNol RunTime Tracker'
    },
    prod: {
        API_BASE: import.meta.env.VITE_API_BASE || 'https://api-runtime.q-bot.cn/api', // 默认生产环境
        ADMIN_URL: import.meta.env.VITE_ADMIN_URL || 'https://api-runtime.q-bot.cn/',
        SITE_TITLE: import.meta.env.VITE_SITE_TITLE || 'StarNol RunTime Tracker'
    }
};

export default process.env.NODE_ENV === 'production' ? config.prod : config.dev;
