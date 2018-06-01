var currentQwestion = -1;
var jsonDefaultQwestions = '[{"q":"Вас попросили разработать калькулятор. Какой из предложенных вариантов вы выберете?","a1":"Разработать веб приложение чтобы иметь доступ к калькулятору с любого устройства","t1":"ВР","a2":"Разработать мобильную версию приложения для использования калькулятора оффлайн","t2":"ПИ","a3":"Разработать консольное приложение с повышенной отказоустойчивостью","t3":"ИБ","a4":"Разработать алгоритм для максимально точного калькулятора","t4":"ПМиИ"},{"q":"Ваш знакомый увлекся бизнесом и просит вас посоветовать crm систему для него. Ваши действия?","a1":"Посоветовать вести учет в excel пока он не поймет какие именно возможности ему нужны","t1":"ВР","a2":"Посоветовать использовать готовые облачные решения","t2":"КС","a3":"Предложите написать crm специально под его задачи","t3":"ПИ","a4":"Посоветуете популярные настольные решения и свой сервер","t4":"ИБ"},{"q":"Ваша бабушка постоянно теряет свой смартфон и вы хотите ей помочь. Ваши действия?","a1":"Покажите ей сайт для отслеживания телефона","t1":"ВР","a2":"Установите софт для отслеживания устройства через Telegram","t2":"ИБ","a3":"Установите приложение издающее звуковой сигнал при определенных условиях","t3":"ПИ","a4":"Спроектируете кнопку которая отправляет сигнал на телефон по определенному протоколу","t4":"САПР"},{"q":"У вас скоро экзамен вам необходимо подготовить подсказки. Ваши действия?","a1":"Найти сайт со шпаргалками","t1":"ВР","a2":"Найти приложение со шпаргалками","t2":"ПИ","a3":"Попытаться распознать текст из записей в тетради","t3":"КС","a4":"Записать шпаргалки на листе используя методики шифрования","t4":"ИБ"},{"q":"Вы работаете в компании и вас попросили разработать систему оповещения сотрудников. Ваши действия?","a1":"Разработать устройства для передачи сообщений","t1":"САПР","a2":"Найти людей которые уже делали подобные системы и договориться о реализации у вас в фирме","t2":"ИТМ","a3":"Объединить компьютеры в одну сеть и написать программу для оповещения","t3":"ПИ","a4":"Доработать известные решения убрав все лишнее","t4":"ИБ"},{"q":"Вы отправляетесь в путешествие. Вам нужно найти авиабилеты. Чем вы воспользуетесь?","a1":"Сайтом надежной авиакомпании","t1":"ИБ","a2":"Сайтом агрегатором билетов","t2":"КС","a3":"Мобильным приложением","t3":"ПИ","a4":"Спрошу у друзей как они искали билеты","t4":"ИТМ"},{"q":"Ваши дела плохи. Вы на грани отчисления. Ваши родители ждут списков на отчисление. Ваши действия?","a1":"Удалить свою фамилию из списка в html странице и отправить ссылку родителям","t1":"ВР","a2":"Попытаться взломать систему института","t2":"ИБ","a3":"Узнать у людей в институте какие есть выходы из ситуации","t3":"ИТМ","a4":"Сформировать свой документ мигрировав данные из официального","t4":"КС"},{"q":"Ваш руководитель требует от вас проект на свободную тему. Ваши действия?","a1":"Найти готовый проект в интернете и доработать его","t1":"ВР","a2":"Написать программу упрощающую ваши основные обязанности","t2":"ПИ","a3":"Попробовать себя в сфере с нейросетями","t3":"КС","a4":"Спроектировать материальный предмет чтобы распечатать его на 3D принтере","t4":"САПР"},{"q":"Вы заканчиваете институт и вас приглашают работать в малоизвестную компанию. Что вы сделает для начала?","a1":"Посмотреть официальный сайт и оценить потенциал компании","t1":"ВР","a2":"Посмотреть официальную статистику и предположите примерное развитие компании","t2":"КС","a3":"Просмотрите все документы компании и их структуру взаимодействия","t3":"ПИ","a4":"Встретитесь с человеком уже работающим в этой компании и узнаете обо всем изнутри","t4":"ИТМ"},{"q":"Вы заведуете большим отделом компании. начальник просит от вас ответ по эффективности сотрудников. Ваши действия?","a1":"Сформировать отчет с помощью запроса к базе данных","t1":"КС","a2":"Узнать у неэффективных сотрудников причины и сформировать отчет основываясь на личном восприятии","t2":"ИТМ","a3":"Сформировать математическую модель учитывающую эффективность сотрудников по определенной формуле","t3":"ПМиИ","a4":"Попытаться составить отчет на основании документов оформленных в crm системе","t4":"ПИ"}]';
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
	if(currentQwestion == qwestions.length-1)
		generateResult();	
	
	$('#container'+currentQwestion).fadeOut(500);
	$('.carousel').carousel('next');
	currentQwestion++;
	$('#container'+currentQwestion).fadeIn(500);
	$('.carousel').carousel('pause');
	checkDeviceWidth();
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
    s+="                      <label class=\"btn btn-choice "+q.t1+"\">	";
    s+="                        <input type=\"radio\" autocomplete=\"off\"> "+q.a1;
    s+="                      </label>	";
    s+="                      <label class=\"btn btn-choice "+q.t2+"\">	";
    s+="                        <input type=\"radio\" autocomplete=\"off\"> "+q.a2;
    s+="                      </label>	";
    s+="                      <label class=\"btn btn-choice "+q.t3+"\">	";
    s+="                        <input type=\"radio\" autocomplete=\"off\"> "+q.a3;
    s+="                      </label>	";
    s+="                      <label class=\"btn btn-choice "+q.t4+"\">	";
    s+="                        <input type=\"radio\" autocomplete=\"off\"> "+q.a4;
    s+="                      </label>	";
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
    s+="                  <a href=\""+results[0].link+"\"> <li>"+results[0].sp+" - "+results[0].per.toFixed()+"%</li></a>";
    s+="                  <a href=\""+results[1].link+"\"> <li>"+results[1].sp+" - "+results[1].per.toFixed()+"%</li></a>";
    s+="                  <a href=\""+results[2].link+"\"> <li>"+results[2].sp+" - "+results[2].per.toFixed()+"%</li></a>";
    s+="                <br>";
    s+="				<h5>Поделись своим результатом</h5>"
    s+="                <button type=\"button\" class=\"btn btn-share\" onclick=\"share('vk')\"><i class=\"fa fa-vk\"></i></button>";
	s+="				<button type=\"button\" class=\"btn btn-share\" onclick=\"share('fb')\"><i class=\"fa fa-facebook\"></i> </button>";
	s+="				<button type=\"button\" class=\"btn btn-share\" onclick=\"share('tw')\"><i class=\"fa fa-twitter\"></i> </button>";
	s+="				<button type=\"button\" class=\"btn btn-share\" onclick=\"share('gp')\"><i class=\"fa fa-google-plus\"></i> </button>";
    s+="            </div>";
    s+="            <div id=\"bottom"+qwestions.length+"\" class=\"carousel-caption-bottom\">";
    s+="				<br><br>";
	s+="                <button onclick=\"restarQwestion()\" class=\"btn btn-lg btn-answer\">Ещё раз</button>";
    s+="            </div>";
    s+="          </div>";
    s+="        </div>";
    s+="      </div>";

    return s;
}
function generateResult(){

	$('.btn-choice').each(function (i, e) {
		for(var i = 0; i < results.length; i++){
	    	if($(e).hasClass("active") && $(e).hasClass(results[i].tag))
	    		results[i].count++;
		}        
    });
 
    for(var i = 0; i < qwestions.length; i++){
        for(var j = 1; j <= 4; j++){
            for (var k = 0; k < results.length; k++) {
                 results[k].total += (results[k].tag == qwestions[i]["t"+j] ? 1 : 0);
             } 
        }
    }

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
    var title_share = "Ищу себя в поликеке";
    var description_share = "Мне подходят";
    description_share += results[0].sp+" - "+results[0].per.toFixed();
    description_share += results[1].sp+" - "+results[1].per.toFixed();
    description_share +=  "Я уже знаю куда идти, а ты? #mospolytech #fitmospolytech #career";
    var image_share = "https://sun1-7.userapi.com/c834301/v834301347/b7ea3/wLvLZfO6QaE.jpg";
    var url_soc = false;
    switch (social) {
        case "vk":
            url_soc  = 'https://vk.com/share.php?';
			url_soc += 'url='          + encodeURIComponent(url_share);
			url_soc += '&title='       + encodeURIComponent(title_share);
			url_soc += '&description=' + encodeURIComponent(description_share);
			url_soc += '&image='       + encodeURIComponent(image_share);
			url_soc += '&noparse=true';
            break;
        case "fb":            
            url_soc  = 'http://www.facebook.com/sharer.php?s=100';
			url_soc += '&p[title]='     + encodeURIComponent(title_share);
			url_soc += '&p[summary]='   + encodeURIComponent(description_share);
			url_soc += '&p[url]='       + encodeURIComponent(url_share);
			url_soc += '&p[images][0]=' + encodeURIComponent(image_share);
            break;
        case "tw":            
            url_soc  = 'http://twitter.com/share?';
			url_soc += 'text='      + encodeURIComponent(title_share);
			url_soc += '&url='      + encodeURIComponent(url_share);
			url_soc += '&counturl=' + encodeURIComponent(url_share);
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
        social_window = window.open(url_soc, "share_window", "toolbar=0,status=0,height=" + height + ",width=" + width + ",top=" + top + ",left=" + left);
        // устанавливаем на окно фокус
        social_window.focus();
    }
}