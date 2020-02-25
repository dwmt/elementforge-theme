const props = {
	value: {},
	options: {
		type: Array,
		default: () => []
	},
	required: {
		default: false
	},
	label: {},
	disabled: {
		default: false,
		type: Boolean
	}
}

const container = {
	localisation: {
		type: Boolean,
		default: false
	},
	...props
}

const renderable = {
	...props
}

export default {
	container,
	renderable
}
