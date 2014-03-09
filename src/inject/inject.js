$(function() {

	var info = {
		name: 'Sam Sheffer',
		email: 'sampsheffer@gmail.com',
		phone: '7328958604',
		add1: '312 East 9th Street Apartment 3',
		add2: null,
		zip: '10003',
		city: 'New York',
		state: 'NY',
		country: 'USA',
		cctype: 'visa', // visa, american_express, master
		ccnum: '11111111111111',
		expm: '12',
		expy: '2016',
		cvc2: '2490'
	}

	var sweat = function() {

		console.log('super hype enabled');

		var parts = window.location.pathname.split('/');

		if(parts[1] == "checkout") {

			if(!$('.errors').length) {

				$('#order_billing_name').val(info.name);
				$('#order_email').val(info.email);
				$('#order_tel').val(info.phone);
				$('#order_billing_address').val(info.add1);
				$('#order_billing_address_2').val(info.add2);
				$('#order_billing_zip').val(info.zip);
				$('#order_billing_city').val(info.city);
				$('#order_billing_state').val(info.state);
				$('#order_billing_country').val(info.country);

				$('#credit_card_type').val(info.cctype);
				$('#credit_card_number').val(info.ccnum);
				$('#credit_card_number').val(info.ccnum);
				$('#credit_card_month').val(info.expm);
				$('#credit_card_year').val(info.expy);
				$('#credit_card_verification_value').val(info.cvc2);

				$("#order_terms").prop('checked', true);

				$('.new_order').submit();

			}

		} else {

			$('body').on('click', '#add-remove-buttons .button[value="add to cart"]', function(){

				setTimeout(function(){

					console.log('redirect')
					window.location = "http://bit.ly/1h2tq77";

				}, 200);

			});

		}

	}

 	var oldLocation = location.href;
 	setInterval(function() {

    if(location.href != oldLocation) {

      oldLocation = location.href

      sweat();

    }

  }, 1000); // check every second

 	sweat();

});
