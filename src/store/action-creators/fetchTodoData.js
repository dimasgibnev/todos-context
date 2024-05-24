import { setTodoList, setIsLoading } from "../actions/setTodoList";

export const fetchTodoData = (dispatc) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
		return fetch('http://localhost:3005/todos')
			.then((response) => response.json())
			.then((loadedTodos) => dispatch(setTodoList(loadedTodos)))
			.catch((error) => dispatch({ type: 'ERROR_LOADING_TODO_DATA', error }))
			.finally(() => dispatch(setIsLoading(false)));
    }
}