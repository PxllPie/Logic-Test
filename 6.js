function shippingCost(distance) {

	let price = 0;

	if (distance > 1.5) {
		
		price = 5000

		let a = distance - 1.5

		for (let i = 1; i <= Math.ceil(a); i++) {
			price += 3000
		}


	} else {

		price = 5000
	}

	return price
}


function countTax(price, tax) {
	let totalTax = 0

	if (tax == true) {

		totalTax = (5/100) * price

	} else {

		totalTax = 0
	}

	return totalTax
}


function arkaFood(price, voucher, distance, tax) {

	shippingCost = shippingCost(distance)

	tax = countTax(price, tax)

	totalPrice = 0

	if (voucher == false) {

		afterDiscount = price

	} else if (voucher.toUpperCase() == 'ARKAFOOD5') {

		if (price >= 50000) {
			
			let discount = (50 / 100) * price

			if (discount <= 50000) {

				afterDiscount = price - discount

			} else {
				discount = 50000
				
				afterDiscount = price - discount
			}

		} else {

			afterDiscount = price

		}
	} else if (voucher.toUpperCase() == 'DITRAKTIRDEMY') {

		if (price >= 25000) {

			let discount = (60 / 100) * price

			if (discount <= 30000) {

				afterDiscount = price - discount

			} else {
				discount = 30000
				
				afterDiscount = price - discount
			}


		} else {

			afterDiscount = price
		}

	} else {

		afterDiscount = price
	}


	totalPrice = afterDiscount + shippingCost + tax

	console.log(totalPrice)
}

arkaFood(75000, 'ARKAFOOD5', 5, false)