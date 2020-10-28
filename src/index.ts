import * as dotenv from 'dotenv';
import {test} from './api';
const p=__dirname+'/../.env';
dotenv.config({
    path: p
});
console.log(process.env.DATABASE_URL);
console.log(process.env.SERVER_PORT);
test();