function Theme (name) {
	this.name = name
	this.appearances = {}
}

Theme.prototype.install = function (container) {
	container.registerTheme(this.name)
	Object.keys(this.appearances).forEach((componentKey) => {
		Object.keys(this.appearances[componentKey]).forEach((appearanceKey) => {
			container.registerAppearance(this.appearances[componentKey][appearanceKey])
		})
	})
}

Theme.prototype.registerAppearance = function (component, appearanceName, isDefault = false) {
	if (!this.appearances[component]) {
		this.appearances[component] = {}
	}

	if (isDefault) {
		Object.keys(this.appearances[component]).forEach((appearanceKey) => {
			this.appearances[component][appearanceKey].default = false
		})
	}

	this.appearances[component][appearanceName] = {
		default: true
	}
}
Theme.prototype.registerTemplate = function (component, appearanceName, template) {
	if (!this.appearances[component] || !this.appearances[component][appearanceName]) {
		throw new Error('Appearance does not exist!')
	}
	this.appearances[component][appearanceName].template = template
}
Theme.prototype.registerStyle = function (component, appearanceName, style) {
	if (!this.appearances[component] || !this.appearances[component][appearanceName]) {
		throw new Error('Appearance does not exist!')
	}
	this.appearances[component][appearanceName].style = style
}
Theme.prototype.registerHook = function (component, appearanceName, hook) {
	if (!this.appearances[component] || !this.appearances[component][appearanceName]) {
		throw new Error('Appearance does not exist!')
	}
}

module.exports = Theme
