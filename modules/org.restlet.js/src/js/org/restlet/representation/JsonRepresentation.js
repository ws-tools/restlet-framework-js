var JsonRepresentation = new Class(Representation, { 
	initialize: function(content) {
		if (typeof this.text == "undefined") {
			this.text = null;
		}
		this.obj = null;
		this.representation = null;
		if (typeof content == "string") {
			this.text = content;
		} else if (content instanceof Representation) {
			this.representation = content;
		} else if (typeof content == "object") {
			this.obj = content;
		}
		this.setMediaType(MediaType.APPLICATION_JSON);
	},
	getText: function() {
		if (this.obj!=null) {
	        // [ifndef nodejs]
			return window.JSON.stringify(this.obj);
			// [enddef]
			// [ifdef nodejs] uncomment
			//return JSON.stringify(this.obj);
			// [enddef]
		} else {
			return "";
		}
	},
	getObject: function() {
		if (this.text!=null) {
	        // [ifndef nodejs]
			return window.jsonParse(this.text);
			// [enddef]
			// [ifdef nodejs] uncomment
			//return JSON.parse(this.text);
			// [enddef]
		} else if (this.representation!=null) {
	        // [ifndef nodejs]
			return window.jsonParse(this.representation.getText());
			// [enddef]
			// [ifdef nodejs] uncomment
			//return JSON.parse(this.representation.getText());
			// [enddef]
		} else {
			return null;
		}
	}
});
