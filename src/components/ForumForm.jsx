import React, { Component } from 'react'

export default class ForumForm extends Component {
    state = {
        post_nametag: '',
        post_content: '',
        post_id: 0,
    }

    nametagChange = (ev) => {
        this.setState({ post_nametag: ev.target.value });
    }

    postcontentChange = (ev) => {
        this.setState({ post_content: ev.target.value });
    }

    createPost = (ev) => {
        ev.preventDefault();
        this.props.newPost(this.state);
        this.setState({ post_nametag: '', post_content: '' });
    }

    render() {
        return (
            <div>
                <h3>Create new Post</h3>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="pNameTag">Your nametag: </label></td>
                            <td><input placeholder="" name="pNameTag" value={this.state.post_nametag} onChange={this.nametagChange} /></td>
                        </tr>
                        <tr>
                        <td><label htmlFor="pPostContent">Write your post here: </label></td>
                        <td><textarea cols="30" placeholder="What's on your mind?" rows="5" name="pPostContent" value={this.state.post_content} onChange={this.postcontentChange} /></td>
                        </tr>
                        <br></br>
                        <td><input type="button" value="Submit" onClick={this.createPost} /></td>
                    </tbody>
                </table>
            </div>
        )
    }
}