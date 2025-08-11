import express, {Application, Request, Response} from 'express'

const createApp = (): Application => {
    const app = express()

    app.get('/', (req: Request, res: Response) => {
        res.send('Hello from Express with TypeScript!')
    })

    return app
}

export {createApp}
