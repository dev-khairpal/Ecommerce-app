import bcrypt from 'bcryptjs';

const users = [
    {
        name:'Admin',
        email:'admin@admin.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'john',
        email:'john@example.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'Dev',
        email:'dev@example.com',
        password:bcrypt.hashSync('123456',10),
    },
]


export default users;