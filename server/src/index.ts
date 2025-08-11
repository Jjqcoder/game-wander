// index.ts
import * as path from 'path'
import {createApp} from './app'

createApp()
    .then(app => {
        const port = process.env.PORT || 3000
        app.listen(port, () => {
            console.log(`服务器已启动: http://localhost:${port}`)
            console.log('数据库文件:', path.join(__dirname, 'genshin.db'))
            console.log('接口列表:')
            console.log(`- GET  /api/genshin - 获取所有数据`)
            console.log(`- POST /api/genshin - 添加新数据 (Body: { zh_cn: string, en_us: string })`)
        })
    })
    .catch(err => {
        console.error('服务器启动失败:', err)
        process.exit(1)
    })
