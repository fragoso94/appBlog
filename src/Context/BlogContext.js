import createDataContext from "./createDataContext";
import jsonserve from "../api/jsonserve";

const blogReducer = (state, action)=> {
    switch (action.type) {
        case 'get_blogpost':
            return action.payload;
        case 'add_blogpost':
            //let idramdom = Math.floor(Math.random()*99999);
            return [...state,
                {
                    id: Math.floor(Math.random()*99999),
                    title: action.payload.title,
                    content: action.payload.content
                    //title: `Blog post #${state.length + 1}`
                }];
        case 'delete_blogpost':
            return state.filter(
                (blogPost) => blogPost.id !== action.payload
            );
        case 'edit_blogpost':
            return state.map( (blogPost)=>{
                return (blogPost.id === action.payload.id) ? action.payload : blogPost;
            });
        default:
            return state;
    }
};

const getBlogPost = dispatch => {
    return async () => {
        try{
            const response = await jsonserve.get('/blogPosts');
            console.log(response);
            dispatch({type: 'get_blogpost', payload: response.data });
        }
        catch (error) {
            //console.log(error)
        }

    }
}

const addBlogPost = (dispatch)=>{
    return async (title, content, callback) => {
        await jsonserve.post('/blogPosts', {title, content});
        if(callback){
            callback(); //se ejecuta la función navigate
        }

    };
    // return (title, content, callback) => {
    //     dispatch({type: 'add_blogpost', payload: {title, content}});
    //     if(callback){
    //         callback(); //se ejecuta la función navigate
    //     }
    // }
};

const deleteBlogPost = dispatch =>{
    return async (id) => {
        try{
            await jsonserve.delete(`/blogPosts/${id}`);
            dispatch({ type: 'delete_blogpost', payload: id})
        }catch (e) {

        }
    };
    // return (id) => {
    //     dispatch({type: 'delete_blogpost', payload: id});
    // }
};

const editBlogPost = dispatch =>{
    return async (id, title, content, callback) => {
        await jsonserve.put(`/blogPosts/${id}`, {title, content});
        dispatch({type: 'edit_blogpost', payload: {id, title, content} });
        if(callback){
            callback(); //se ejecuta la función navigate
        }
    }
    // return(id, title, content, callback) => {
    //     dispatch({type: 'edit_blogpost', payload: {id, title, content} });
    //     if(callback){
    //         callback(); //se ejecuta la función navigate
    //     }
    // }
};

export const { Context, Provider } = createDataContext(
    blogReducer, {addBlogPost, deleteBlogPost, editBlogPost, getBlogPost}, []
    //[{ title: 'Test post', content: 'Test content', id: 1}]
);