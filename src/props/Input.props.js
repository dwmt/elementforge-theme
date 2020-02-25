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
	},
	required: {
		default: false,
		type: Boolean
	},
	disabled: {
		default: false,
		type: Boolean
	}
}

const container = {
	...props
}

const renderable = {
	...props,
	editable: {}
}

export default {
	container,
	renderable
}
