'use strict';

const foregroundColor = '#eff0eb';
const backgroundColor = '#292824';
const black = backgroundColor;
const slate = '#7e7966';
const lightSlate = '#afa067';
const mutedYellow = '#e7d596';
const orange = '#df7c32';
const lightOrange = '#ffb37b';
const gray = '#c59a7c';
const brightBlack = '#c59a7c';
const brightWhite = foregroundColor;

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#222430',
		cursorColor: '#df7c32',
		colors: [
			black,
			slate,
      lightSlate,
      mutedYellow,
			orange,
			lightOrange,
			gray,

			// bright
			brightBlack,
			slate,
      lightSlate,
      mutedYellow,
			orange,
			lightOrange,
			brightWhite
		],
		css: `
			${config.css || ''}
			.tab_active:before {
				border-color: rgba(223, 124, 50, 0.25);
			}
		`
	});
};
