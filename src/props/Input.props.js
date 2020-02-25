const props = {
	label: {
		type: String,
		default: ''
	},
	type: {},
	value: {},
	editable: {
		type: Boolean,
		default: true
	}
}

const container = {
	...props,
	required: {
		default: false,
		type: Boolean
	},
	disabled: {
		default: false,
		type: Boolean
	}
}

const renderable = {
	...props,
	editable: {}
}

export default {
	
}
