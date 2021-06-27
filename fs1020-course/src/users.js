
import { v4 as uuidv4 } from "uuid";
import {hash} from 'bcrypt';
import router from "./entries";

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post("/users", (req,res) => {

    let newUsers = {

        "id":uuidv4(),
        "name": req.body.name,
        "password": req.body.password
    }

    bcrypt.hash(newUsers.password, saltRounds, `${process.env.saltRounds}`.then(function (err, hash) {
    
        newUserPassword = hash

        users.push(newUsers)

        return res.status(201).send(usersJson)

    })
    )
})

export default router