const { MongoClient } = require("mongodb");

const connectionUri = "mongodb://127.0.0.1:27017";
const databaseName = "Exercise-Blog-Posts";

const someID = 1;

MongoClient.connect(
  connectionUri,
  { useUnifiedTopology: true },
  async (error, client) => {
    if (error) return console.log("error connecting");
    console.log("connected correctly");

    const db = client.db("blog");
    //Users collection===>
    try {
      db.collection("users").createIndex({ email: 1 }, { unique: true });
      await db.collection("users").insertMany([
        { name: "Shmuel Gabai", email: "shmuel@gmail.com" },
        { name: "Efrat Gabai", email: "efrat@gmail.com" },
      ]);

      //Create Post
      const post = {
        title: "My first post",
        text: "I'm so excited to post here",
        tags: ["first", "excited"],
      };
      const userPosted = await db
        .collection("users")
        .findOne({ email: "efrat@gmail.com" });

      //Posts collection===>
      await db.collection("posts").insertOne({
        myId: someID,
        title: post.title,
        text: post.text,
        tags: post.tags,
        comments: [],
        owner: userPosted._id,
      });

      //Create Comment
      const comment = { text: "Fantastic post!" };
      const userCommented = await db
        .collection("users")
        .findOne({ email: "efrat@gmail.com" });

      await db.collection("posts").updateOne(
        { myId: someID },
        {
          $push: { comments: { text: comment.text, owner: userCommented._id } },
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
);
