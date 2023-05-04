document.getElementById("start-link").addEventListener("click", function(event) {
	event.preventDefault(); // відмінити стандартну поведінку браузера при кліку на посилання

	var rosePetal = document.querySelector(".rose-petal");
	if (rosePetal) {
		rosePetal.style.transition = "opacity 3s"; // зробити елемент плавно зникаючим протягом 3 секунд
		rosePetal.style.opacity = "0"; // змінити прозорість елемента на 0
	}

	setTimeout(function() {
		window.location.href = "./index_2.html"; // перенаправити на нову сторінку
	}, 3500); // 4000 мілісекунд = 4 секунди
});
  