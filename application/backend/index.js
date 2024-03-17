import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mediadb",
})

app.get("/", (req, res) => {
    res.json("This is the backend.");
});

app.get("/shows", (req, res) => {
    const q = "SELECT * FROM shows";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});

app.post("/shows", (req, res) => {
    const q = "INSERT INTO shows(`title`, `description`, `cover`, `seasons`) VALUES (?, ?, ?, ?)";
    console.log('POST shows: ', req.body.title)
    console.log('POST shows: ', req.body.description)
    console.log('POST shows: ', req.body.cover)
    console.log('POST shows: ', req.body.seasons)
    const values = [
        req.body.title,
        req.body.description,
        req.body.cover,
        req.body.seasons
    ];

    db.query(q, [...values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.delete("/shows/:id", (req, res) => {
    const showId = req.params.id;
    const q = " DELETE FROM shows WHERE id = ? ";

    db.query(q, [showId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.put("/shows/:id", (req, res) => {
    const showId = req.params.id;
    const q = "UPDATE shows SET `title`= ?, `description`= ?, `cover`= ?, `seasons`= ? WHERE id = ?";

    const values = [
        req.body.title,
        req.body.description,
        req.body.cover,
        req.body.seasons
    ];

    db.query(q, [...values, showId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.listen(8800, () => {
    console.log("Connected to backend, head to localhost:8800/");
});