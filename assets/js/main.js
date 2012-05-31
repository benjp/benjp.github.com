function sample1() {
	var person = {
		firstName: "Christophe",
		lastName: "Coenraets",
		blogURL: "http://coenraets.org"
	};
	var template = "<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}";
	var html = Mustache.to_html(template, person);
	$('#sampleArea').html(html);
}

function sample2() {
	$.getJSON('json/data.json', function(data) {
		var template = "<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}";
		var html = Mustache.to_html(template, data);
		$('#sampleArea').html(html);
	});
}

function sample3() {
	$.getJSON('json/data2.json', function(data) {
		var template = $('#personTpl').html();
		var html = Mustache.to_html(template, data);
		$('#sampleArea').html(html);
	});
}

function sample4() {
	var data = {name: "John Smith", skills: ['JavaScript', 'PHP', 'Java']};
	var tpl = "{{name}} skills:<ul>{{#skills}}<li>{{.}}</li>{{/skills}}</ul>";
	var html = Mustache.to_html(tpl, data);
	$('#sampleArea').html(html);
}

function sample5() {
	var data = {
		employees: [
		{	firstName: "Christophe",
			lastName: "Coenraets"},
		{	firstName: "John",
			lastName: "Smith"}
		]};
	var template = "Employees:<ul>{{#employees}}<li>{{firstName}} {{lastName}}</li>{{/employees}}</ul>";
	var html = Mustache.to_html(template, data);
	$('#sampleArea').html(html);
}

function sample6() {
	var person = {
		firstName: "Christophe",
		lastName: "Coenraets",
		blogURL: "http://coenraets.org",
		manager : {
			firstName: "John",
			lastName: "Smith"
		}
	};
	var template = "<h1>{{firstName}} {{lastName}}</h1><p>{{blogURL}}</p>Manager: {{manager.firstName}} {{manager.lastName}}";
	var html = Mustache.to_html(template, person);
	$('#sampleArea').html(html);
}

function sample7() {
	var person = {
		firstName: "John",
		lastName: "Smith",
		blogURL: "http://johnsmith.com",
		manager : {
			firstName: "Lisa",
			lastName: "Jones"
		}
	};
	var tpl = "<h1>{{firstName}} {{lastName}}</h1><p>{{blogURL}}</p>{{#manager}}Manager: {{firstName}} {{lastName}}{{/manager}}";
	var html = Mustache.to_html(tpl, person);
	$('#sampleArea').html(html);
}

function sample8() {
	var product = {
		name: "FooBar",
		price: 100,
		salesTax: 0.05,
		totalPrice: function() {
			return this.price + this.price * this.salesTax;
		}
	};
	var template = "<p>Product Name: {{name}}</p>Price: {{totalPrice}}";
	var html = Mustache.to_html(template, product);
	$('#sampleArea').html(html);
}

function sample9() {
	var data = {
		employees: [
		{	firstName: "Christophe",
			lastName: "Coenraets",
			fullTime: true,
			phone: "617-123-4567"
		},
		{	firstName: "John",
			lastName: "Smith",
			fullTime: false,
			phone: "617-987-6543"
		},
		{	firstName: "Lisa",
			lastName: "Jones",
			fullTime: true,
			phone: "617-111-2323"
		},
		]};
	var tpl = "Employees:<ul>{{#employees}}<li>{{firstName}} {{lastName}}{{#fullTime}} {{phone}}{{/fullTime}}</li>{{/employees}}</ul>";
	var html = Mustache.to_html(tpl, data);
	$('#sampleArea').html(html);
}

function sample10() {
	var data = {
		firstName: "Christophe",
		lastName: "Coenraets",
		address: "1 Main street",
		city: "Boston",
		state: "MA",
		zip: "02106"
	};

	var template = "<h1>{{firstName}} {{lastName}}</h1>{{>address}}";
	var partials = {address: "<p>{{address}}</p>{{city}}, {{state}} {{zip}}"};
	var html = Mustache.to_html(template, data, partials);
	$('#sampleArea').html(html);
}

function sample11() {
	var data = { depts: [
		{	name: "Engineering",
			employees: [
				{firstName: "Christophe", lastName: "Coenraets"},
				{firstName: "John", lastName: "Smith"}]
		},
		{	name: "Sales",
			employees: [
				{firstName: "Paula", lastName: "Taylor"},
				{firstName: "Lisa", lastName: "Jones"}]
		}]
	};

	var tpl = "{{#depts}}<h1>{{name}}</h1><ul>{{#employees}}{{>employee}}{{/employees}}</ul>{{/depts}}";
	var partials = {employee: "<li>{{firstName}} {{lastName}}</li>"};
	var html = Mustache.to_html(tpl, data, partials);
	$('#sampleArea').html(html);
}
