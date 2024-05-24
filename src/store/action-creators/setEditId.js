import {actions} from '../actions/actions'

export const setEditId = (editId) => {
	return {
		type: actions.SET_EDIT_ID,
		payload: editId
	}
}