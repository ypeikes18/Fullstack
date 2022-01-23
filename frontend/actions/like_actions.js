import * as LikeApiUtil from '../util/like_api_util';
import { fetchPost } from './post_actions';
import { fetchComment } from './comment_actions';

export const createLike = like => dispatch => {
    return LikeApiUtil.createLike(like)
        .then(like => {
            const { likable_id, likable_type } = like.extract;
            switch(likable_type) {
                case 'Comment':
                    dispatch(fetchComment(likable_id));
                case 'Post':
                    dispatch(fetchPost(likable_id));
            }
        })
}

export const deleteLike = likeId => dispatch => {
    return LikeApiUtil.deleteLike(likeId)
        .then(like => {
            const { likable_id, likable_type } = like.extract;
            switch(likable_type) {
                case 'Comment':
                    dispatch(fetchComment(likable_id));
                case 'Post':
                    dispatch(fetchPost(likable_id));
            }
        })
}