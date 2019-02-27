'use strict';

const cliss = require('../../../');

const cliSpec = {
	name: 'destructuring-parameters-cli',
	action: ({param1 = 'defaultParam1', param2}) => `${param1}-${param2}`,
};

cliss(cliSpec, {
	help: {
		stripAnsi: true
	}
});