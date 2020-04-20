import React, { Component } from 'react'
import ForumContent from './ForumContent'

export default class ForumList extends Component {

    render() {
        var allposts = this.props.post_contents.map((p, ind) => {
            return (<ForumContent post_id={p.post_id} key={p.post_id} post={p} removePost={this.props.removePost} />)
        })
        return (
            <table className="list">
                <thead>
                    <tr>
                        <th>Nametag</th><th>Post</th><th>Edit</th><th>Delete</th><th></th>
                    </tr>
                </thead>
                <tbody>
                    {allposts}
                </tbody>
            </table>
        );
    }
}