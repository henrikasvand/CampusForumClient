import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Like from './Like'
import { IoIosTrash } from "react-icons/io";


export default class ForumContent extends Component {
    link = "";
    constructor(props) {
        super(props);
        this.link = "/forumEdit/" + this.props.post.post_id;
        this.state = {
        }
    }

    removePost = () => {
        this.props.removePost(this.props.post.post_id);
    }

    render() {
        return (
            <Fragment>
                
                <tr className="forumBox">
                    <td><i>{this.props.post.post_nametag}</i></td>
                    <td>{this.props.post.post_content}</td>
                    <td><Link  to={this.link}>📝</Link></td>
                    <td><span onClick={this.removePost} ><IoIosTrash/></span></td>
                    <td><Like/></td>
                </tr>
            </Fragment>

        )
    }
}
