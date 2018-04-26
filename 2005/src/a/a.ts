import { createConnection, Db } from "typeorm";
import { User } from "../entities/User";
import { Another } from "../entities/Another";

async function test() {
    const conn = await createConnection();

    const a = new User();
    a.activated = true;
    a.activationToken = "test";

    await conn.manager.getRepository(User).save(a);
    console.log(a.activated)
    console.log(a.activationToken);

    await conn.close();
}

test();