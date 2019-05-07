export default function messageReducer(state, action){
	switch (action.type) {
		case 'mix':
			state = { ...state }
			state.mixMessage.push(action.message)
			localStorage.setItem('message', JSON.stringify({ ...state }))
			return state
		case 'en':
			state = { ...state }
			state.enMessage.push(action.message)
			localStorage.setItem('message', JSON.stringify({ ...state }))
			return state
		case 'cn':
			state = { ...state }
			state.cnMessage.push(action.message)
			localStorage.setItem('message', JSON.stringify({ ...state }))
			return state
		case 'stof':
			state = { ...state }
			state.stMessage.push(action.message)
			localStorage.setItem('message', JSON.stringify({ ...state }))
			return state
		case 'init':
			return (state = { mixMessage: [], enMessage: [], cnMessage: [], stMessage: [] })
		default:
			return state
	}
}
