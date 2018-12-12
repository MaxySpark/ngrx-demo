import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.action';

const initialState: Tutorial =  {
    name : 'Inital Tutorial',
    url  : 'https://google.com'
};

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Action): Tutorial[] {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}
