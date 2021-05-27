// Anonyoms ( self invoked )function fill up value in dropdown list
$(function () {
	var countryOptions;

	countryOptions += "<option value='Please select'>Please Select Country Option</option>";
	//Data is read from country.json file 
	$.getJSON('countries.json', function (result) {
		//for each used is used to iterate exclusively, over a json object
		$.each(result, function (i, country) {
			// Given value as country name because the api request is fetched according to country name
			countryOptions += "<option value='" + country.name + "'>" + country.name + "</option>";
		});
		// Bind to Drop Down Id value = country
		$('#country').html(countryOptions);
	});
});
