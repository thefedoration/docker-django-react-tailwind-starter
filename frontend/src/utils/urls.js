const toQueryString = (params) => {
	return '?' + Object.keys(params).map(function(key) {
	    return key + '=' + params[key]
	}).join('&');
}

const getParamsFromUrl = (location) => {
	// returns object of params from current url
	var search = location.search.substring(1);

	if (search === ""){
		return {};
	}

	return JSON.parse('{"' + decodeURI(search)
		.replace(/"/g, '\\"')
		.replace(/&/g, '","')
		.replace(/=/g,'":"') + '"}')
}

export {
    toQueryString,
    getParamsFromUrl,
}

