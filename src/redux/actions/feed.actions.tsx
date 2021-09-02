import {ListCharacters} from '../types/character';
import {ActionCreator} from 'redux';
import {feedService} from '../../services';
import {request, failure} from './common.actions';

const likePostSuccess: ActionCreator<FeedActionTypes> = (
  feed: ListCharacters[],
) => {
  return {type: LIKE_POST, payload: feed};
};

export function likePost({characterId}: {characterId: String}) {
  return dispatch => {
    dispatch(request());
    return feedService.likePost({postId, userId}).then(
      response => {
        dispatch(likePostSuccess(response));
      },
      error => {
        dispatch(failure('Server error.'));
      },
    );
  };
}
