import express from "express";

const app = express();
// to make app understant json

app.use(express.json());
let movielist = [];

// routes
//app.get("/say-hello", (req, res) => {
// return res.status(200).send("Hello");
//});

//add movie
app.post("/movie/add", (req, res) => {
  const newMovie = req.body;
  movielist.push(newMovie);
  return res.status(200).send({ message: "movie is added succesfully" });
});

app.get("/movie/add", (req, res) => {
  return res.status(200).send({ message: "success", movie: movielist });
});

app.delete("/movie/delete",(res,req) => {
    const movienametobedeleted = req.body.name ;
    const requiredmovie=movie.find(item)=>{
        return item.name===movienametobedeleted;
    }

});




// network port and server
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
