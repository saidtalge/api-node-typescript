// import { pgp } from 'pg-promise';


export default interface DatabaseConnectionInterface {
    disconnect: () => Promise<void>,
    query: () => Promise<any>
}

export class PgDatabase implements DatabaseConnectionInterface {
    conn: any;

    constructor() {
        // this.conn = new pgp()
    }

    async query(): Promise<any> {
        await this.conn.connect();
    }

    async disconnect(): Promise<void> {
        await this.conn.end();
    }

}