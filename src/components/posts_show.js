import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts, deletePost } from "../actions/index";
import { Link } from "react-router";

class PostsShow extends Component {

    componentDidMount() {
        this.props.fetchPosts(this.props.params.id);
    }

    onDeleteClick = (id) => {
        this.props.deletePost(this.props.params.id)
            .then(() => {
                location.assign("/");
            });
    }

    render() {

        const { post } = this.props;

        if (!post) {
            return <div>Loading....</div>;
        }

        return (
            <div>
                <Link to="/" className="btn btn-primary pull-xs-right">Back to index</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick}>
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPosts, deletePost })(PostsShow);
