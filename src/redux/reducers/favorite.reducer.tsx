import {ListCharacters} from '../types/character';

interface CharactersFeed {
  feed: ListCharacters[];
}

const initalState: FeedState = {
  feed: [],
};

export function feedReducer(
  state: CharactersFeed = initialState,
  action: FeedActionTypes,
): FeedState {
  switch (action.type) {
    case LIKE_POST: {
      return {
        ...state,
        feed: action.payload,
      };
    }
    default:
      return state;
  }
}
