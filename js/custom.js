var currentQwestion = -1;
var jsonDefaultQwestions = '[{"q":"Вас попросили разработать калькулятор. Какой из предложенных вариантов вы выберете?","as":[  {"a":"Разработать веб приложение чтобы иметь доступ к калькулятору с любого устройства","t":"ВР"},  {"a":"Разработать мобильную версию приложения для использования калькулятора оффлайн","t":"ПИ"},    {"a":"Разработать консольное приложение с повышенной отказоустойчивостью","t":"ИБ"},    {"a":"Разработать алгоритм для максимально точного калькулятора","t":"ПМиИ"}]},{"q":"Ваш знакомый увлекся бизнесом и просит вас посоветовать crm систему для него. Ваши действия?","as":[   {"a":"Посоветовать вести учет в excel пока он не поймет какие именно возможности ему нужны","t":"ВР"},  {"a":"Посоветовать использовать готовые облачные решения","t":"КС"},    {"a":"Предложите написать crm специально под его задачи","t":"ПИ"}, {"a":"Посоветуете популярные настольные решения и свой сервер","t":"ИБ"}]},{"q":"Ваша бабушка постоянно теряет свой смартфон и вы хотите ей помочь. Ваши действия?","as":[  {"a":"Покажите ей сайт для отслеживания телефона","t":"ВР"},    {"a":"Установите софт для отслеживания устройства через Telegram","t":"ИБ"},    {"a":"Установите приложение издающее звуковой сигнал при определенных условиях","t":"ПИ"},  {"a":"Спроектируете кнопку которая отправляет сигнал на телефон по определенному протоколу","t":"САПР"}]},{"q":"У вас скоро экзамен вам необходимо подготовить подсказки. Ваши действия?","as":[    {"a":"Найти сайт со шпаргалками","t":"ВР"}, {"a":"Найти приложение со шпаргалками","t":"ПИ"},   {"a":"Попытаться распознать текст из записей в тетради","t":"КС"},  {"a":"Записать шпаргалки на листе используя методики шифрования","t":"ИБ"}]},{"q":"Вы работаете в компании и вас попросили разработать систему оповещения сотрудников. Ваши действия?","as":[   {"a":"Разработать устройства для передачи сообщений","t":"САПР"},   {"a":"Найти людей которые уже делали подобные системы и договориться о реализации у вас в фирме","t":"ИТМ"},    {"a":"Объединить компьютеры в одну сеть и написать программу для оповещения","t":"ПИ"}, {"a":"Доработать известные решения убрав все лишнее","t":"ИБ"}]},{"q":"Вы отправляетесь в путешествие. Вам нужно найти авиабилеты. Чем вы воспользуетесь?","as":[   {"a":"Сайтом надежной авиакомпании","t":"ИБ"},  {"a":"Сайтом агрегатором билетов","t":"КС"},    {"a":"Мобильным приложением","t":"ПИ"}, {"a":"Спрошу у друзей как они искали билеты","t":"ИТМ"}]},{"q":"Ваши дела плохи. Вы на грани отчисления. Ваши родители ждут списков на отчисление. Ваши действия?","as":[   {"a":"Удалить свою фамилию из списка в html странице и отправить ссылку родителям","t":"ВР"},   {"a":"Попытаться взломать систему института","t":"ИБ"}, {"a":"Узнать у людей в институте какие есть выходы из ситуации","t":"ИТМ"}, {"a":"Сформировать свой документ мигрировав данные из официального","t":"КС"}]},{"q":"Ваш руководитель требует от вас проект на свободную тему. Ваши действия?","as":[  {"a":"Найти готовый проект в интернете и доработать его","t":"ВР"}, {"a":"Написать программу упрощающую ваши основные обязанности","t":"ПИ"},   {"a":"Попробовать себя в сфере с нейросетями","t":"КС"},    {"a":"Спроектировать материальный предмет чтобы распечатать его на 3D принтере","t":"САПР"}]},{"q":"Вы заканчиваете институт и вас приглашают работать в малоизвестную компанию. Что вы сделает для начала?","as":[ {"a":"Посмотреть официальный сайт и оценить потенциал компании","t":"ВР"},  {"a":"Посмотреть официальную статистику и предположите примерное развитие компании","t":"КС"},  {"a":"Просмотрите все документы компании и их структуру взаимодействия","t":"ПИ"},  {"a":"Встретитесь с человеком уже работающим в этой компании и узнаете обо всем изнутри","t":"ИТМ"}]},{"q":"Вы заведуете большим отделом компании. начальник просит от вас ответ по эффективности сотрудников. Ваши действия?","as":[   {"a":"Сформировать отчет с помощью запроса к базе данных","t":"КС"},    {"a":"Узнать у неэффективных сотрудников причины и сформировать отчет основываясь на личном восприятии","t":"ИТМ"}, {"a":"Сформировать математическую модель учитывающую эффективность сотрудников по определенной формуле","t":"ПМиИ"},    {"a":"Попытаться составить отчет на основании документов оформленных в crm системе","t":"ПИ"}]}]';
var qwestions;
var jsonDefaultResults = '[{"tag":"ВР", "sp":"Веб-технологии", "link":"http://mospolytech.ru/index.php?id=5315", "per":0, "count":0, "total":0},{"tag":"САПР", "sp":"Интеграция и программирование САПР", "link":"http://mospolytech.ru/index.php?id=5314", "per":0, "count":0, "total":0},{"tag":"ИБ", "sp":"Кибербезопасность новой информационной среды", "link":"http://mospolytech.ru/index.php?id=5313", "per":0, "count":0, "total":0},{"tag":"КС", "sp":"Киберфизические системы", "link":"http://mospolytech.ru/index.php?id=5318", "per":0, "count":0, "total":0},{"tag":"ПИ", "sp":"Корпоративные информационные системы", "link":"http://mospolytech.ru/index.php?id=5316", "per":0, "count":0, "total":0},{"tag":"ИТМ", "sp":"ИТ-менеджмент", "link":"http://mospolytech.ru/index.php?id=5319", "per":0, "count":0, "total":0},{"tag":"ПМиИ", "sp":"Большие и открытые данные", "link":"http://mospolytech.ru/index.php?id=5317", "per":0, "count":0, "total":0}]';
var results;

$.getJSON( "json/qwestions.json")
.done(function(data){
	console.log( "success load json from qwestions file");
	qwestions = data;	
})
.fail(function() {
    console.log( "failed load json from qwestions file");
    qwestions = JSON.parse(jsonDefaultQwestions);
})
.always(function() {
	generateQwestions();
	checkDeviceWidth();
});

$.getJSON( "json/results.json")
.done(function(data){
	console.log( "success load json from results file");
	results = data;	
})
.fail(function() {
    console.log( "failed load json from results file");
    results = JSON.parse(jsonDefaultResults);
});

$(window).resize(function () {
    $('body').height($('html').height());    
    $('#bg').height($(window).height()+60);
    checkDeviceWidth();
});

function startQwestion(){
	nextQwestion();
}

function nextQwestion(){
	try{
		if(currentQwestion == qwestions.length-1)
			generateResult();	
		
		$('#container'+currentQwestion).fadeOut(500);
		$('.carousel').carousel('next');
		currentQwestion++;
		$('#container'+currentQwestion).fadeIn(500);
		$('.carousel').carousel('pause');
		checkDeviceWidth();
	}
	catch(error){
		alert("Пожалуйста, нет так быстро! (╯°□°）╯");
		setTimeout(function(){ nextQwestion();}, 500); 
	}
}

function restarQwestion(){
    location.reload();
}


function showNextButton() {
	//$('.carousel-control-next').prop('hidden', !(currentPage > 0 && currentPage < lastPage));
}
function showPrevButton() {
	//$('.carousel-control-prev').prop('hidden', !(currentPage > 0 && currentPage < lastPage));
}
function checkDeviceWidth() {
	var topHeight = $('#top'+currentQwestion).height();
	var topPosition = $('#top'+currentQwestion).offset().top;
	var bottomHeight = $('#bottom'+currentQwestion).height();
	var bottomPosition = $('#bottom'+currentQwestion).offset().top;

	var bodyChange = $('body').height() + (topPosition + topHeight + 10 - bottomPosition);

	$('body').animate({height: bodyChange}, 500);
}

function getQwestion(i, q) {
	var s = "";          
	s+="<div class=\"carousel-item\">	";
    s+="        <div id=\"container"+i+"\" class=\"container\">	";
    s+="          <div class=\"carousel-caption\">	";
    s+="            <div id=\"top"+i+"\" class=\"carousel-caption-top\">	";
    s+="                <h3>Вопрос "+i+".</h3>	";
    s+="                <p id=\"qwestion"+i+"\">"+q.q+"</p>	";
    s+="                    <div id=\"answers"+i+"\" class=\"btn-group-toggle\" data-toggle=\"buttons\" >	";

    for (var j = 0; j < q.as.length; j++) {
        s+="                      <label class=\"btn btn-choice\" data-tag=\""+q.as[j].t+"\"> ";
        s+="                        <input type=\"radio\" autocomplete=\"off\"> "+q.as[j].a;
        s+="                      </label>  ";
    }

    s+="                    </div><br>";
    s+="                <button onclick=\"nextQwestion()\" class=\"btn btn-lg btn-answer\">Ответить</button>    ";
    s+="            </div>	";
    s+="            <div id=\"bottom"+i+"\" class=\"carousel-caption-bottom\">	";
    s+="            </div>	";
    s+="          </div>	";
    s+="        </div>	";
    s+="      </div>	";

    return s;
}
function generateQwestions() {
	for (var i = 0; i < qwestions.length; i++) {
	   $(".carousel-inner").html($(".carousel-inner").html()+getQwestion(i, qwestions[i]));
	   $(".carousel-indicators").html($(".carousel-indicators").html()+"<li data-target=\"#carousel\" data-slide-to=\""+(i+1)+"\"></li>");
    }
    $(".carousel-indicators").html($(".carousel-indicators").html()+"<li data-target=\"#carousel\" data-slide-to=\""+(qwestions.length+1)+"\"></li>");
}

function getResult(){
	var s = "";
	s+="      <div class=\"carousel-item\">";
    s+="        <div id=\"container"+qwestions.length+"\" class=\"container\">";
    s+="          <div class=\"carousel-caption\">";
    s+="            <div id=\"top"+qwestions.length+"\" class=\"carousel-caption-top\">";
    s+="                <h3>Ты похож на политеховца ))</h3>";
    //s+="                <img src=\"img/men2.png\" onload=\"checkDeviceWidth()\">";
    s+="                <p style=\"font-size: 1.2rem;\">Тебе подойдут направления:</p>";

    if(results[0].per.toFixed() == 0){
        s+="                  <a href=\"https://vk.com/mpu_overhear\"> Никакие! Ахахахах 🤣</a>";          
    }
    else
    {
        var i = 0;
        do {
            s+="                  <a href=\""+results[i].link+"\"> <li>"+results[i].sp+" - "+results[i].per.toFixed()+"%</li></a>";
            i++;

        } while(results[i].per.toFixed() >= 30)
    }

    s+="                <br>";
    s+="				<h5> Поделись этим тестом </h5>";
    s+="                <button type=\"button\" class=\"btn btn-share\" onclick=\"share('vk')\"><i class=\"fa fa-vk\"></i></button>";
	s+="				<button type=\"button\" class=\"btn btn-share\" onclick=\"share('fb')\"><i class=\"fa fa-facebook\"></i> </button>";
	s+="				<button type=\"button\" class=\"btn btn-share\" onclick=\"share('tw')\"><i class=\"fa fa-twitter\"></i> </button>";
	//s+="				<button type=\"button\" class=\"btn btn-share\" onclick=\"share('gp')\"><i class=\"fa fa-google-plus\"></i> </button>";

    s+="            </div>";
    s+="            <div id=\"bottom"+qwestions.length+"\" class=\"carousel-caption-bottom\">";

    s+="                <br><button onclick=\"restarQwestion()\" class=\"btn btn-lg btn-answer\">Ещё раз</button>";

    s+="            </div>";
    s+="          </div>";
    s+="        </div>";
    s+="      </div>";

    return s;
}
function generateResult(){

	$('.btn-choice').each(function (i, e) {
		for(var i = 0; i < results.length; i++){
	    	if($(e).data("tag") == results[i].tag){
                results[i].total++;
                if($(e).hasClass("active"))
	    		    results[i].count++;
            }
		}        
    });
 
    for(var i = 0; i < results.length; i++){
        results[i].per = (results[i].count / results[i].total)*100;
    }     

    results.sort(function(a,b){
   	if(a.per < b.per){ return 1}
    	if(a.per > b.per){ return -1}
      		return 0;
	});

    $(".carousel-inner").html($(".carousel-inner").html() + getResult());
}

function share(social){
    var url_share = location.href;
    var url_soc = false;
    switch (social) {
        case "vk":
            url_soc = "https://vk.com/share.php?url="+url_share;
            break;
        case "fb":
            url_soc = "https://www.facebook.com/sharer/sharer.php?u="+url_share;
            break;
        case "ok":
            url_soc = "https://connect.ok.ru/offer?url="+url_share;
            break;
        case "tw":
            url_soc = "https://twitter.com/intent/tweet?url="+url_share;
            break;
        case "gp":
            url_soc = "https://plus.google.com/share?url="+url_share;
            break;
    }
     
    // открытие нового окна для шаринга
    if(url_soc){
        // размеры окна
        var width = 800, height = 500;
        // центруем окно
        var left = (window.screen.width - width) / 2;
        var top = (window.screen.height - height) / 2;
        // открываем окно
        social_window = window.open(url_soc, "share_window", "height=" + height + ",width=" + width + ",top=" + top + ",left=" + left);
        // устанавливаем на окно фокус
        social_window.focus();
    }
}