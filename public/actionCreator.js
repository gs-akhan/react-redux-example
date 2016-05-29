export function addLike(index) {
    return {
        type : "ADD_LIKES",
        index
    }
}

export function addComment(postId, author, comment) {
    return  {
        type : "ADD_COMMENT",
        author,
        comment
    }
}

export function removeComment(postId, commentId) {
    return {
        type : "REMOVE_COMMENT",
        postId,
        commentId
    }
}
