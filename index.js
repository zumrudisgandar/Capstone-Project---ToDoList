import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Store tasks in an array for demonstration purposes
let tasks = [];
let workTasks = [];

app.post("/submit", (req, res) => {
    const newTask = req.body.newTask;
    const section = req.body.section;
    if (section === "today") {
        tasks.push(newTask);
        res.redirect("/"); // Redirect to the "today" section after adding the task
    } else if (section === "work") {
        workTasks.push(newTask);
        res.redirect("/work"); // Redirect to the "work" section after adding the task
    }
});

// Route for the "today" section
app.get("/", (req, res) => {
    res.render("index.ejs", { tasks: tasks });
});

// Route for the "work" section
app.get("/work", (req, res) => {
    res.render("work.ejs", { workTasks: workTasks });
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});