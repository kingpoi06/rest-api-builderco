const pool = require("../database/database")
const tukangController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from tukang")
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("select * from tukang where id = ?", [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    create: async (req, res) => {
        try {
            const { title, content } = req.body
            const sql = "insert into tukang (title, content) values (?, ?)"
            const [rows, fields] = await pool.query(sql, [title, content])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    update: async (req, res) => {
        try {
            const { title, content } = req.body
            const { id } = req.params
            const sql = "update tukang set title = ?, content = ? where id = ?"
            const [rows, fields] = await pool.query(sql, [title, content, id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }, 
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("delete from tukang where id = ?", [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }

}

module.exports = tukangController