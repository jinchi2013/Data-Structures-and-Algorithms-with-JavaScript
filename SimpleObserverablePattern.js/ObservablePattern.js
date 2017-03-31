function ObservablePattern() {
	this.value = null;
	this.observables = [];
}

ObservablePattern.prototype.subscribe = function subscribe (fn) {
	this.observables.push({fn_name: fn.name, fn: fn});
}

ObservablePattern.prototype.unsubscribe = function unsubscribe(fn_name) {
	this.observabls = this.observables.filter(function(obj) {
		if(obj.fn_name !== fn_name) {
			return obj;
		}
	})
}

ObservablePattern.prototype.fire = function fire(value) {

	if(this.null !== value) {
		this.observables.forEach(function eachObservableFn(obj){
			obj.fn(value);
		});

		this.value = value;
	}
}

