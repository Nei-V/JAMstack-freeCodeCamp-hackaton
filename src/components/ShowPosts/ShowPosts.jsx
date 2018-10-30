/* import React, { Component } from 'react';
import faunadb, { query as q } from "faunadb";

var client = new faunadb.Client({ secret: "fnAC-mwOfqACCObc9S07Vm_dIMslXCgmJ03xhYhp" });
client.query(q.CreateDatabase({ name: "my_second_app" })).then((ret) => console.log(ret));
client.query(q.CreateKey({ database: q.Database("my_second_app"), role: "server" })).then((ret) => console.log(ret));
client.query(q.CreateClass({ name: "posts_in_second_app" })).then((ret) => console.log(ret));

client.query(
    q.CreateIndex(
        {
            name: "posts_by_title",
            source: q.Class("posts_in_second_app"),
            terms: [{ field: ["data", "title"] }]
        }))
    .then((ret) => console.log(ret));

client.query(
    q.CreateIndex(
        {
            name: "posts_by_tags_with_title",
            source: q.Class("posts_in_second_app"),
            terms: [{ field: ["data", "tags"] }],
            values: [{ field: ["data", "title"] }]
        }))
    .then((ret) => console.log(ret))

console.log("client", client);



class ShowPosts extends React.Component {
    constructor(props) {
        super(props);
        this.insertOnePost = this.insertOnePost.bind(this);
        this.insertManyPosts = this.insertManyPosts.bind(this);
        this.showPostByRef = this.showPostByRef.bind(this);
        this.showPostByTitle = this.showPostByTitle.bind(this);

    }


    insertOnePost(e) {
        e.preventDefault();
        console.log('submit new post func');
        client.query(
            q.Create(
                q.Class("posts_in_second_app"),
                { data: { title: "What I had for breakfast .." } }))
            .then((ret) => console.log(ret))
    }

    insertManyPosts(e) {
        e.preventDefault();
        console.log('submit many posts func');
        client.query(
            q.Map(
                ["My cat and other marvels",
                    "Pondering during a commute",
                    "Deep meanings in a latte"],
                q.Lambda("post_title", q.Create(
                    q.Class("posts_in_second_app"), { data: { title: q.Var("post_title") } }))))
            .then((ret) => console.log(ret))
    }

    showPostByRef(e) {
        e.preventDefault();
        console.log("show post by ref func");
        client.query(q.Get(q.Ref(q.Class("posts_in_second_app"), "214608349797286405"))).then((ret) => document.getElementById("showByRef").innerHTML = ret.data.title);
      
    }

    showPostByTitle(e) {
        e.preventDefault();
        console.log("show post by title func");
        client.query(
            q.Get(
                q.Match(q.Index("posts_by_title"), "My cat and other marvels")))
            .then((ret) => document.getElementById("showByTitle").innerHTML = ret.data.title);
    }



    render() {
        return [
            <h1>Working with fauna database</h1>,
            <br />,
            <button onClick={this.insertOnePost}>create one post</button>,
            <br />,
            <button onClick={this.insertManyPosts}>create many posts</button>,
            <br />,
            <h1>show posts</h1>,
            <button onClick={this.showPostByRef}>Show post by ref</button>,
            <p id="showByRef"></p>,
            <button onClick={this.showPostByTitle}>Show post by title</button>,
            <p id="showByTitle"></p>
        ];
    }
}

export default ShowPosts; */