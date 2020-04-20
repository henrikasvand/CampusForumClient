import React, { Component } from 'react'
import { getOne, editPost } from '../services/restclient';

export default class ForumEdit extends Component {
    constructor(props) {
        super(props);
        const post_id = this.props.match.params["id"];
        this.state = { post_contents: { post_id: 0, post_nametag: '', post_content: '' }, post_id: post_id };
    }

      componentDidMount() {
        getOne(this.state.post_id).then(post_contents => {
            this.setState({ post_contents });
    })}

    nametagChange = (ev) => {
        let post_nametag = ev.target.value
        this.setState(prevState => {
            return { post_contents: { ...prevState.post_contents, post_nametag: post_nametag } }
        })
    }

    postcontentChange = (ev) => {
        let post_content = ev.target.value
        this.setState(prevState => {
            return { post_contents: { ...prevState.post_contents, post_content: post_content } }
        })
    }

    update = () => {
        editPost(this.state.post_id, this.state.post_contents).then(() => {
            this.props.history.push("/forumPage")
            // this.updateView();
        })
    }

    render() {
        return (
            <div className="forumBox">
                <h3>Edit post</h3>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="pNameTag">Your nametag: </label></td>
                            <td><input name="pNameTag" value={this.state.post_contents.post_nametag} onChange={this.nametagChange}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="pPostContent">Edit your post here: </label></td>
                            <td><textarea cols="30" placeholder="What's on your mind?" rows="5" name="pPostContent" value={this.state.post_contents.post_content} onChange={this.postcontentChange}/></td>
                        </tr>
                        <br></br>
                        <td><input type="button" value="Submit changes" onClick={this.update} /></td>
                    </tbody>
                </table>
            </div>
        )
    }
}