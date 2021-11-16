
//=======================================================				МАССИВЫ			=================================================================================================


// var randomBodyParts = ["глаз", "нос", "череп"];
// var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
// var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomWords.length)];
// var randomAdjective = randomAdjectives[Math.floor(Math.random() *  randomWords.length)];
// var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
// var randomInsult = ["У тебя", randomBodyPart, "словно", randomAdjective, randomWord + "!!!"].join(' ');
// randomInsult;
// var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// let array = ['блуда,','сребролюбия,', 'пьнства,'];
// let array2 = ['смерти,','вечности,', 'часе возмездия,'];
// let array3 = ['добрых дел,','хороших поступков,', 'милостыни,'];
// let array4 = ['Аминь', 'c нами Бог', 'Верь','Слава Богу']

// let arrayword = array [Math.floor(Math.random() * array.length )]
// let arrayword2 = array2 [Math.floor(Math.random() * array2.length )]
// let arrayword3 = array3 [Math.floor(Math.random() * array3.length )]
// let arrayword4 = array4 [Math.floor(Math.random() * array4.length )]

// let arrayResult = [ 'Не забывай страсть', arrayword, 'помни о', arrayword2, 'совершай больше', arrayword3, arrayword4 + '!!!' ].join(' ')
// let arrayResult = 'Не забывай страсть' + ' ' + arrayword + ' ' +  'помни о'+ ' ' +  arrayword2 + ' ' +  'совершай больше' + ' ' +  arrayword3 + ' ' +  arrayword4 + '!!!'; 

// console.log(arrayResult);

//let array = [3, 2, 1].join('>');







//=====================================================					Обьекты	 			===================================================================================================







// var cat = { legs: 3, name: "Гармония", color: "Черепаховый" };


// var dog = { name: "Оладушек", age: 6, color: "белый", bark: "Гав тяф тяф!" };
// var cat = { name: "Гармония", age: 8, color: "черепаховый" };
// Object.keys(dog);

// var cat = {};
// cat["legs"] = 3;
// cat["name"] = "Гармония";
// cat["color"] = "Черепаховый";
// cat;

// var dog = {
// 	name: "Оладушек",
// 	legs: 4,
// 	isAwesome: true
//   };
  
//   var dinosaurs = [
// 	{ name: "Тираннозавр рекс", period: "Верхнемеловой" },
// 	{ name: "Стегозавр", period: "Верхнеюрский" },
// 	{ name: "Платеозавр", period: "Триасовый" }
//   ];
//  //console.log(dinosaurs[1].period);

//  let anna ={ name: 'Анна', age: 11, luckyNumbers: [2,4,8,16]};
//  var dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
//  var kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

//  var friends = [anna, dave, kate];

//  var owedMoney = {};
//  owedMoney["Джимми"] = 5;
//  owedMoney["Анна"] = 7;
//  owedMoney["Джимми"];
//  owedMoney["Элис"];

//  owedMoney["Джимми"] += 3;

//  var movies = {
// 	"В поисках Немо": {
// 	releaseDate: 2003,
// 	duration: 100,
// 	actors: ["Альберт Брукс", "Эллен Дедженерес", 
// 	"Александр Гоулд"],
// 	format: "DVD"
// 	},
// 	"Звездные войны: Эпизод VI — Возвращение джедая": {
// 	releaseDate: 1983,
// 	duration: 134,
// 	actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
// 	format: "DVD"
// 	},
// 	"Гарри Поттер и Кубок огня": {
// 	releaseDate: 2005,
// 	duration: 157,
// 	actors: ["Дэниел Рэдклифф", "Эмма Уотсон", "Руперт Гринт"],
// 	format: "Blu-ray"
// 	}
//   };
//   var findingNemo = movies["В поисках Немо"];
//   findingNemo.duration;

//   var cars = {
// 	releaseDate: 2006,
// 	duration: 117,
// 	actors: ["Оуэн Уилсон", "Бонни Хант", "Пол Ньюман"],
// 	format: "Blu-ray"
//   };

//   movies["Тачки"] = cars;

//   console.log( Object.keys(movies));

// let scores = {
// 	Шам: 0,
// 	Кабан: 0,
// 	Тон: 0,
// }

// scores.Шам +=3

// var myCrazyObject = {
// 	"name": "Нелепый объект",
// 	"some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
// 	"random animal": "Банановая акула"
// 	};

// 	myCrazyObject["some array"][2][number]

	



//==============			Условия и Цыклы			==========================================================================================================================================





// let имя = "Дмитрий";
// console.log("Привет, " + имя);
// if (имя.length < 6) {
// 	console.log("Ну и длиннющее же у вас имя!");
// }  else {
// 	console.log("Имя у вас не из длинных.");
//   }

// var lemonChicken = false;
// var beefWithBlackBean = false;
// var sweetAndSourPork = false;

// if (lemonChicken) {
// 	console.log("Отлично! Я буду курицу с лимоном!");
//   } else if (beefWithBlackBean) {
// 	console.log("Заказываю говядину.");
//   } else if (sweetAndSourPork) {
// 	console.log("Ладно, закажу свинину.");
//   } else {
// 	console.log("Что ж, остается рис с яйцом.");
//   }

// let name = 'Папа'

//   if (name === 'Дима') {
// 	  console.log('Привет мне'); 
//   } else if (name ==='Папа'){
// 	console.log('Привет Пап');
//   }  else if (name ==='Мама'){
// 	console.log('Привет Мам');
//   } else {
// 	console.log('Привет незнакомец');
//   }






//===========			ЦЫКЛЫ			=============================================================================================================================================



// var sheepCounted = 0;
// while (sheepCounted < 10) {
// 	console.log("Посчитано овец: " + sheepCounted + "!");	
// 	sheepCounted++;
// }
// console.log("Хрррррррррр-псссс");



// var timesToSayHello = 3;
// for (var i = 0; i < timesToSayHello; i++) {
//  console.log("Привет!");
// }


// var animals = ["лев", "фламинго", "белый медведь", "удав"];
// for (var i = 0; i < animals.length; i++) {
//  console.log("В этом зоопарке есть " + animals[i] + ".");
// }

// var variable = "Ник";
// for (var i = 0; i < variable.length; i++) {
//  console.log("В моем имени есть буква " + variable[i] + ".");
// }
// console.log(variable[0]);

// for ( let x = 3; x < 10000; x = x*3 ) {
// 	console.log(x);
// }

// let x = 3;

// while ( x < 10000  ) {
// 	x = x * 3
// 	console.log(x);
// }



// var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
// for ( i = 0; i < animals.length; i++ ) {
// 	animals[i] = animals[i] + ' - прекрасное животное';
// }


//  var randomString = ""

//  while (randomString.length <= 5 ) {
// 	var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// 	let i =Math.floor(Math.random() * alphabet.length)
// 	randomString += alphabet[i]
// 	}
//  console.log(randomString);

// var input = "javascript is awesome";
// var output = "";
// for (let i = 0; i < input.length; i++) {
// 	if (input[i] === 'a') {
// 		output = output += '4'
// 	} else if (input[i] === 'e'){
// 	 output += 3
// 	}
// 	else if (input[i] === 'i'){
// 	 output += 1
// 	}
// 	else if (input[i] === 'o'){
// 		output += 0
// 	  }
// 	else {
// 	 output += input[i]
// 	}
	
// }

// console.log(output);

//============================			Висилица			============================================================================================================================


// var n = prompt("Как вас зовут?");
// console.log("Привет, " + n);


// var likesCats = confirm("Тебе нравятся кошки?");
// if (likesCats) {
//  console.log("Ты классная кошка!");
// } else {
//  console.log("Что ж, не проблема. Все равно ты молодец!");
// }

// alert("JavaScript это здорово!");


//========================================================================================================================================================

 //Создаем массив со словами
 var words = [
	 'дмитрий',
	 'дом',
	"программа",
	"макака",
	"прекрасный",
	"оладушек"
	];
	// Выбираем случайное слово
	var word = words[Math.floor(Math.random() * words.length)];
	// Создаем итоговый массив
	var answerArray = [];
	for (var i = 0; i < word.length; i++) {
	answerArray[i] = "_";
	}
	var remainingLetters = word.length;
	let attempts = 0;
	let check ;
	// Игровой цикл
	while (remainingLetters > 0 && attempts < 5) {
		
	// Показываем состояние игры
	alert(answerArray.join(" "));

// Запрашиваем вариант ответа
	guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
	

   if (guess === null) {
 // Выходим из игрового цикла
 break;
 } 
  else if (guess.length !== 1) {
 alert("Пожалуйста, введите одиночную букву.");
 }

  else  {
 // Обновляем состояние игры
 check = false;
 for (var j = 0; j < word.length; j++) {
 if (word[j] === guess) {
 answerArray[j] = guess;
 remainingLetters--;
 check = true;
}
}
 if (check === false){
 	attempts++;
 }
}


console.log(check);
console.log(attempts);





	
}
//  // Конец игрового цикла
 
//  // Отображаем ответ и поздравляем игрока
 alert(answerArray.join(" "));
  alert("Отлично! Было загадано слово " + word);

// var guess = prompt()

//  if(guess !== guess.toLowerCase()) {
// 	guess = guess.toLowerCase()
//  }
// word = 'дмитрий'

// guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");

// for (var j = 0; j < word.length; j++) {
// 	if (word[j] === guess) {
// 		r = guess
// 		check = true;
// 		if (r === 'д'){
// 			console.log('100');
// 		}
// 	}
//   }
  
//   console.log(check);
//   console.log(r);