// app.ts
import express, {Application, Request, Response} from 'express'
import * as fs from 'fs'
import * as path from 'path'
import initSqlJs from 'sql.js'

// 数据库文件路径
const DB_PATH = path.join(__dirname, 'genshin.db')

// 初始化数据库
async function initDatabase() {
    const SQL = await initSqlJs()
    let db: any

    try {
        if (fs.existsSync(DB_PATH)) {
            const fileBuffer = fs.readFileSync(DB_PATH)
            db = new SQL.Database(fileBuffer)
        } else {
            db = new SQL.Database()
            // 初始化表结构
            db.run(`
                CREATE TABLE Genshin_Impact (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    zh_cn TEXT NOT NULL,
                    en_us TEXT NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
                
                INSERT INTO Genshin_Impact (zh_cn, en_us) VALUES 
                    ('原神', 'Genshin Impact'),
                    ('旅行者', 'Traveler');
            `)
            saveDatabase(db)
        }
        return db
    } catch (err) {
        console.error('数据库初始化失败:', err)
        throw err
    }
}

// 保存数据库到文件
function saveDatabase(db: any) {
    try {
        const data = db.export()
        fs.writeFileSync(DB_PATH, Buffer.from(data))
    } catch (err) {
        console.error('数据库保存失败:', err)
    }
}

// 创建Express应用
async function createApp(): Promise<Application> {
    const app = express()
    const db = await initDatabase()

    // 中间件
    app.use(express.json())

    // 获取所有数据
    app.get('/api/genshin', (req: Request, res: Response) => {
        try {
            const stmt = db.prepare('SELECT * FROM Genshin_Impact')
            const data = []
            while (stmt.step()) {
                data.push(stmt.getAsObject())
            }
            stmt.free()
            res.json(data)
        } catch (err) {
            console.error('查询失败:', err)
            res.status(500).json({error: '数据库查询失败'})
        }
    })

    // 添加数据
    app.post('/api/genshin', (req: Request, res: Response) => {
        try {
            const {zh_cn, en_us} = req.body
            if (!zh_cn || !en_us) {
                return res.status(400).json({error: '缺少必要字段'})
            }

            const stmt = db.prepare('INSERT INTO Genshin_Impact (zh_cn, en_us) VALUES (?, ?)')
            stmt.bind([zh_cn, en_us])
            stmt.step()
            stmt.free()

            saveDatabase(db) // 保存到文件
            res.status(201).json({message: '添加成功'})
        } catch (err) {
            console.error('添加失败:', err)
            res.status(500).json({error: '数据添加失败'})
        }
    })

    // 错误处理
    app.use((err: Error, req: Request, res: Response, next: Function) => {
        console.error('服务器错误:', err)
        res.status(500).json({error: '服务器内部错误'})
    })

    return app
}

export {createApp}
