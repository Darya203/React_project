import { switchCase } from "@babel/types";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    posts: [
        { id: 1, message: 'Hello how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 2 },
        { id: 3, message: 'Very good acount. Like', likesCount: 3 }
    ],
    newPostText: ''

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST:
            return {
                ...state,
                newPostText: action.newText
            };

        default:
            return state;

    }
}

export default profileReducer;

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (textPost) =>
    ({
        type: UPDATE_NEW_POST,
        newText: textPost
    })
