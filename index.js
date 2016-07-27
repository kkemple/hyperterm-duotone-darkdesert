'use strict'

const foregroundColor = '#eff0eb'
const backgroundColor = '#292824'
const black = backgroundColor
const slate = '#7e7966'
const lightSlate = '#afa067'
const mutedYellow = '#e7d596'
const orange = '#df7c32'
const lightOrange = '#ffb37b'
const gray = '#c59a7c'
const brightBlack = '#c59a7c'
const brightWhite = foregroundColor

const colors = {
	black: black,
	red: slate,
	green: slate,
	pink: lightSlate,
	yellow: mutedYellow,
	blue: orange,
	magenta: lightOrange,
	cyan: gray,
	white: foregroundColor,
	lightBlack: brightBlack,
	lightRed: lightSlate,
	lightGreen: lightSlate,
	lightPink: lightOrange,
	lightYellow: mutedYellow,
	lightBlue: orange,
	lightMagenta: lightOrange,
	lightCyan: gray,
	lightWhite: foregroundColor
}

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#222430',
		cursorColor: '#df7c32',
		colors: colors,
		css: `
			${config.css || ''}
			.tab_active:before {
				border-color: rgba(223, 124, 50, 0.25)
			}
		`
	})
}

exports.middleware = () => (next) => (action) => {
	switch (action.type) {
		case 'CONFIG_LOAD':
		case 'CONFIG_RELOAD':
		action.config.foregroundColor = foregroundColor
		action.config.backgroundColor = backgroundColor
		action.config.cursorColor = orange
		action.config.colors = colors
	}
	next(action)
}
