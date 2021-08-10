import Server from './server';
import db from '../models';

const api = new Server('dev');

db.sequelize.sync().then((req) => {
    api.app.listen(3000, async () => {
        console.log(`listening on port ${3000}`);
    })
}).catch((err) => {
    console.log(err);
})