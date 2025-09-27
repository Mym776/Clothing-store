const { Pool } = require('pg')
const ex = require('express')
const bcrypt = require('bcryptjs')
const port = 3000

const app = ex()
app.use(ex.json())

const conn = new Pool({
    user: ,
    host: ,
    databse:  ,
    password:  ,
    port: 5432
})
//app.post('/api/users', async(req, res) =>
conn.connect().then(console.log('connected to database successfully'))

function SignUp(req, res){
    try {
        const { first_name, last_name, email, password_hash, phone_number } = req.body

        if (!first_name || !last_name || !email || !password_hash || !phone_number) {
            return res.status(400).json({
                success: false,
                message: 'All fields must be filled'
            })
        }

        password_hash = bcrypt.hashSync(password_hash, 10);

        const q = 'insert into Customers (first_name, last_name, email, password_hash, phone_number) values ($1, $2, $3, $4, $5, $6, $7)'
        const values = [first_name, last_name, email, password_hash, phone_number]
        const result = await conn.query(q, values)

        res.json({
            success: true,
            data: result.rows[0]
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to insert the data'
        })
    }
}

function login(req, res){
    try {
        const { email, password } = req.body;
        const q = 'select password_hash from Customers where email = $1'
        const result = await conn.query(q, [email]);

        if (result.rows.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'user not found'
            })
        }

        const hashed = result.rows[0].password_hash
        let isPassword = await bcrypt.compare(password, hashed)

        return {
            success: isPassword,
            message: isPassword ? 'Login Successfully' : 'wrong password'
        }
        
    } catch (error) {
        throw error
    }
}



app.listen(port, () => {
    console.log(`app is running on http://localhost:${port}`)
})