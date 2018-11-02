import React, { Component } from 'react';
import faunadb, { query as q } from "faunadb";


var client = {};


class ShowPosts extends React.Component {
    constructor(props) {
        super(props);
        this.insertOnePost = this.insertOnePost.bind(this);
        this.insertManyPosts = this.insertManyPosts.bind(this);
        this.showPostByRef = this.showPostByRef.bind(this);
        this.showPostByTitle = this.showPostByTitle.bind(this);
        this.showAllPosts = this.showAllPosts.bind(this);
        this.deleteAllPosts = this.deleteAllPosts.bind(this);
        this.deleteOnePost = this.deleteOnePost.bind(this);

    }
    


    componentDidMount() {
        
    }


    insertOnePost(e) {
        client = new faunadb.Client({ secret: "fnAC-mwOfqACCObc9S07Vm_dIMslXCgmJ03xhYhp" });
        e.preventDefault();
        console.log('submit new post func');
        let number = Math.floor(Math.random() * 1000);
        client.query(
            q.Create(
                q.Class("testclass"),
                { data: { title: `instance number ${number}  random` } }))
            .then((ret) => console.log(ret))
    }

    insertManyPosts(e) {
        client = new faunadb.Client({ secret: "fnAC-mwOfqACCObc9S07Vm_dIMslXCgmJ03xhYhp" });
        e.preventDefault();
        console.log('submit many posts func');
        let number = Math.floor(Math.random() * 1000);
        client.query(
            q.Map(
                [`instance number ${number}  random-from multiple`,
                `instance number ${number}  random-from multiple`,
                `instance number ${number}  random-from multiple`],
                q.Lambda("post_title", q.Create(
                    q.Class("testclass"), { data: { title: q.Var("post_title") } }))))
            .then((ret) => console.log(ret))
    }

    showPostByRef(e) {
        client = new faunadb.Client({ secret: "fnAC-mwOfqACCObc9S07Vm_dIMslXCgmJ03xhYhp" });
        e.preventDefault();
        let idRef="214844684606899717";
        console.log("show post by ref func");
        client.query(q.Get(q.Ref(q.Class("testclass"), idRef))).then((ret) => document.getElementById("showByRef").innerHTML = ret.data.title);

    }

    showPostByTitle(e) {
        //client = new faunadb.Client({ secret: "fnAC-mwOfqACCObc9S07Vm_dIMslXCgmJ03xhYhp" });
        e.preventDefault();
        console.log("show post by title func");
        client.query(
            q.Get(
                q.Match(q.Indexes("testclass"), "first post through site")))
            .then((ret) => console.log("resolve in showPosts by title",ret));
        /* client.query(
            q.Get(
                q.Match(q.Index("all_testclass"), "first post through site")))
            .then((ret) => document.getElementById("showByTitle").innerHTML = ret.data); */
    }

    showAllPosts(e) {
        client = new faunadb.Client({ secret: "fnAC-mwOfqACCObc9S07Vm_dIMslXCgmJ03xhYhp" });
        e.preventDefault();
        console.log("show all posts func");
        client.query(
            q.Paginate(q.Match(q.Index("all_testclass"))))
            .then((ret) => ret.data.forEach(function (index) {
                var p = document.createElement("p");
                p.innerText = JSON.stringify(index.value);
                document.getElementById("showAllPosts").appendChild(p);
            }));
    }

    

    deleteAllPosts(e) {
        client = new faunadb.Client({ secret: "fnAC-mwOfqACCObc9S07Vm_dIMslXCgmJ03xhYhp" });
        e.preventDefault();
        console.log("delete all posts func");
        let all = client.query(q.Paginate(q.Match(q.Index("all_posts_in_second_app"))));
        let c=[];
        let deletePost = function (id){
            client = new faunadb.Client({ secret: "fnAC-mwOfqACCObc9S07Vm_dIMslXCgmJ03xhYhp" });
            client.query(q.Delete(q.Ref(q.Class("posts_in_second_app"), id)));
        };
        all.then((ret)=> c=ret.data.forEach(function(index){
            c.push(index.value.id);
           
        }) ).then(c.map((index)=>{deletePost(index)}));
        
        console.log(all);
    }
    //Paginate(Match(Index("customer_id_filter"))).size(Value(pageSize));
    //q.Paginate(q.Match(q.Index("all_posts_in_second_app")),size=8)


    deleteOnePost(e) {
        client = new faunadb.Client({ secret: "fnAC-mwOfqACCObc9S07Vm_dIMslXCgmJ03xhYhp" });
        e.preventDefault();
        console.log("delete one posts func by");
        client.query(q.Delete(q.Ref(q.Class("posts_in_second_app"), "214605133261046280"))).then((ret) => console.log(ret))
            .catch((ret) => console.log(ret))
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
            <p id="showByTitle"></p>,
            <br />,
            <button onClick={this.deleteAllPosts}>Delete all posts</button>,
            <p id="deleteAllPosts"></p>,
            <br />,
            <button onClick={this.deleteOnePost}>Delete one post by title</button>,
            <p id="deleteOnePost"></p>,
            <br />,
            <button onClick={this.showAllPosts}>Show all posts in console </button>,
            <div id="showAllPosts"></div>

        ];
    }
}

export default ShowPosts;