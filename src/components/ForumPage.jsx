import React, { Component } from 'react'
// import './App.css';
import ForumForm from './ForumForm';
import ForumList from './ForumList';
import { getAll, addNew, deletePost } from '../services/restclient';
// import Like from '../components/Like';
import logo from '../cup.png';

export default class ForumPage extends Component {
    state = {
        post_id: 0,
        post_nametag: '',
        post_content: '',
        post_count: 0,
        post_contents: []
    };

    componentDidMount = () => {
        this.updateView();
    }

    updateView() {
        getAll().then(post_contents => {
            this.setState({ post_contents });
        }).catch(err => {
            console.error("Virhe kiinni", err);
            this.setState({ error: err.message })
        });
    }

    newPost = (p) => {
        addNew(p)
            .then((res) => {
            this.updateView();
        });
    }

    removePost = (del_id) => {
        deletePost(del_id)
            .then((response) => {
                this.updateView();
            });
    }

    render() {
        return (
            <div>
                <div className="cuppycup">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                < ForumForm newPost={this.newPost} />
                <br /><br />
                < ForumList post_contents={this.state.post_contents} removePost={this.removePost} />
            </div>
        )
    }
}