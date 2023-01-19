import 'reflect-metadata'
import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
    type: "",
    url: "",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    synchronize: true,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
    port: 27017
})
