const props = {
	value: {},
	type: {
		type: String,
		default: 'date'
	}
}

const container = {
	...props,
	modal: {
		type: Boolean,
		default: false
	},
	returnDate: {
		type: Boolean,
		default: false
	},
	defaultDate: {
		default: () => new Date()
	},
	format: {
		type: String
	}
}

const renderable = {
	...props
}

export default {
	container,
	renderable
}
