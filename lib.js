(function () {

	window.startGame = function () {

		function getRandomNumber() {
			return Math.floor(Math.random() * 1000);
		};
		
		function getCount() {
			var tryCounter = 0;
			return function() {
				return ++tryCounter;
			}
		};

		do {

			var number = (getRandomNumber());
			var counter = getCount();
			var reverseCounter = 10;
			var oneMoreGame;
			var userNumber = prompt('Я загадал число от 1 до 1000. Отгадай, какое? У тебя есть 10 попыток');

			while (+number !== +userNumber && counter() < 10) {

				reverseCounter = --reverseCounter;

				if (!userNumber && userNumber !== '') break;

				if (isNaN(userNumber) || !parseInt(userNumber)) {
					userNumber = prompt('Это не число! Попробуй ещё раз. Осталось ' + reverseCounter + ' попыток.');
					continue;
				};

				if (+number > +userNumber) {
					userNumber = prompt('Моё число больше твоего! Попробуй ещё раз. Осталось ' + reverseCounter + ' попыток.');
					continue;
				};

				if (+number < +userNumber) {
					userNumber = prompt('Моё число меньше твоего! Попробуй ещё раз. Осталось ' + reverseCounter + ' попыток.');
					continue;
				};

			};
			
			if (counter() >= 10) {
				oneMoreGame = confirm('Попытки закончились. Сыграм ещё раз?')
			} else if (!userNumber) {
				oneMoreGame = false;
				alert('Жаль, что не играешь со мной. До встречи в другой раз)');
			} else {
				oneMoreGame = confirm('Угадал! Я загадал ' + number + '. Сыграем еще раз?');
			};

		} while (oneMoreGame);	
	}
}());