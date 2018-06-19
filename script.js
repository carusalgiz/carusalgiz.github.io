function selected(el) {
    var items = document.getElementsByClassName("sets");
    for(var i = 0; i < items.length;i++){
        items.item(i).style.removeProperty('background-color');
        items.item(i).style.removeProperty('border-left');
    }
	el.style.setProperty('background-color', "#e6e7e8");
    el.style.setProperty('border-left', "6px #3e8ecf solid");

    switch(el.id){
        case 'sources':
            document.getElementById('center-top').innerHTML='<div class="activity" style="display: flex"><div><a>Период активности(мин):  </a>' +
                '<input type="text" class="inputField"></div><div><input type="submit" value="Назначить" class="buttonStyle"><input type="button" value="Добавить источник" class="buttonStyle" onclick="newSource()"></div></div>';
            document.getElementById('center-bottom').innerHTML='';
            break;
        case 'ip':
            document.getElementById('center-top').innerHTML='<table><tr><th>Список IP-адресов:</th></tr><tr><td>[адрес]</td></tr><tr><td>[адрес]</td></tr><tr><td>[адрес]</td></tr></table>';
            document.getElementById('center-bottom').innerHTML='';
            break;
        case 'parser':
            document.getElementById('center-top').innerHTML='<div style="display: flex"><div><a>Источник: </a><br><select class="select-style"><option>--Source--</option><option>avito</option><option>irr</option><option>farpost</option></select></div><div style="margin-left: 10px"><a>URL страницы: </a> <br><input type="text" class="inputField"><input type="button" value="Проверить" class="buttonStyle" style="margin-left: 30px"></div></div>' +
                '<table><tr><th colspan="2">Полученные данные: </th></tr><tr><td style="width: 120px">Источник: </td><td>[название]</td></tr><tr><td>Город: </td><td>[город]</td></tr><tr><td>Адрес: </td><td>[улица,дом, квартира]</td></tr><tr><td>Этаж: </td><td>[номер этажа]</td></tr><tr><td>Этажность: </td><td>[всего этажей]</td></tr></table>';
            document.getElementById('center-bottom').innerHTML='';
            break;
        case 'activeTasks':
            document.getElementById('center-top').innerHTML='<table><tr><th colspan="6">Текущие активные задачи в очереди:</th></tr><tr><td style="width: 120px">enqueue_task</td><td>avito</td><td>2018-04-19T10:40:25</td><td>2018-04-19T10:40:42</td><td style="width: 40px">0</td><td>[{"media": "avito", "category": "/komsomolsk-na-amure/zemelnye_uchastki/prodam", "location": "kms"}]</td></tr><tr><td>enqueue_task</td><td>avito</td><td>2018-04-19T10:40:25</td><td>2018-04-19T10:40:42</td><td>0</td><td>[{"media": "avito", "category": "/nahodka/kvartity/sdam”,“location”: ”nahodka”}]</td></tr><tr><td>enqueue_task</td><td>avito</td><td>2018-04-19T10:40:25</td><td>2018-04-19T10:40:42</td><td>0</td><td>[{"media": "avito", "category": "/nahodka/komnaty/sdam</td></tr></table>';
            document.getElementById('center-bottom').innerHTML='';
            break;
        case 'activeSources':
            document.getElementById('center-top').innerHTML='<table><tr><th>Активные источники:</th></tr><tr><td style="width: 140px">[название]</td><td>[перечень городов]</td></tr><tr><td>[название]</td><td>[перечень городов]</td></tr><tr><td>[название]</td><td>[перечень городов]</td></tr><tr><td>[название]</td><td>[перечень городов]</td></tr></table>';
            document.getElementById('center-bottom').innerHTML='';
            break;
        case 'loadOnNetwork':
            //text
            break;
        case 'stats':
            document.getElementById('center-top').innerHTML= '<div style="display: flex"><div style="flex: 0 0 80%"><select class="select-style"><option>--[ID/URL]--</option><option>ID</option><option>URL</option></select><input type="text" class="inputField"><input type="button" value="Показать" class="buttonStyle" style="margin-left: 30px"></div><div style="flex: 0 0 20%""><a>Всего объявлений: </a><a style="margin-right: 20px">9999</a><br><a>Успешно разобранных: </a><a style="margin-right: 20px">9999</a><br></div></div>' +
                '<div><a>От: </a><input type="date" placeholder="Дата" class="select-style"  style="margin-right: 20px"><a>До: </a><input type="date" placeholder="Дата" class="select-style"  style="margin-right: 20px"><select class="select-style"><option>--[Город]--</option><option>Хабаровск</option><option>Находка</option><option>Владивосток</option><option>Москва</option></select></div>' +
                '<table><tr><th>ID</th><th>Тип</th><th>Город</th><th>Улица</th><th>Кол-во комнат</th><th>Этаж</th><th>Этажность</th><th>Ссылка</th></tr>' +
                '<tr><td>1</td><td>Комната</td><td>Москва</td><td>[название улицы]</td><td>1</td><td>2</td><td>5</td><td>/moskva/komnaty/komn...........................</td></tr>' +
                '<tr><td>2</td><td>Комната</td><td>Москва</td><td>[название улицы]</td><td>3</td><td>13</td><td>16</td><td>/moskva/kvartiry/1-k_kvartira_40_m_35</td></tr>' +
                '<tr><td>3</td><td>Комната</td><td>Находка</td><td>[название улицы]</td><td>1</td><td>4</td><td>9</td><td>/nahodka/kvartiry/2-k_kvartira_50_m_40</td></tr></table>';
            break;
        case 'errors':
            document.getElementById('center-top').innerHTML = '<div style="display: flex"><div style="flex: 0 0 90%"><select class="select-style"><option>all</option><option>enqueue_task</option><option>load_item</option></select><select class="select-style"><option>all</option><option>avito</option><option>farpost</option><option>cian</option><option>irr</option><option>present_cite</option></select>' +
                '<select class="select-style"><option>all</option><option>vld</option><option>nahodka</option><option>msk</option><option>kja</option><option>khv</option><option>kms</option><option>spb</option></select></div><div style="flex: 0 0 10%"><a>Объявлений: </a><a>9999</a></div></div>' +
                '<div><table><tr><th colspan="6">Ошибки:</th></tr><tr><td>19.06.18 10:59</td><td style="width: 100px">enqueue_task</td><td style="width: 70px">avito</td><td style="width: 80px">nahodka</td><td>/nahodka/kommercheskaya_nedvizhimost/prodam</td><td>Can\'t call method "all_text" on an undefined value at /home/raven/production/rplus_import2/script/../lib/Rplus/Import/Queue/Avito.pm line 74.</td></tr><tr><td>19.06.18 10:59</td><td>enqueue_task</td><td>avito</td><td>nahodka</td><td>/nahodka/komnaty/prodam</td><td>Can\'t call method "all_text" on an undefined value at /home/raven/production/rplus_import2/script/../lib/Rplus/Import/Queue/Avito.pm line 74.</td></tr></table></div>'
            break;
    }
}

var i = 0;
function newSource() {
    document.getElementById('center-top').innerHTML = '<div><p style="text-align: center">Новый источник:</p><br></div>';
    newCity();
    document.getElementById('center-bottom').innerHTML = '<input type="button" class="buttonStyle" value="Сохранить" style="float: right"><input type="button" class="buttonStyle" onclick="newCity()" value="Добавить город" style="float: right">';
}
function newNameSource(el) {
    document.getElementById(el.parentElement.id).innerHTML += '<input type="text" class="inputField"><br>';
}
function newCity() {
    document.getElementById('center-top').innerHTML+='<div style="display: flex"><div style="line-height: 1.7em; margin-left: 20px"><a>Название:  </a><br><br>' +
        '<a>Город:  </a><br>' +
        '<a>site_url:  </a><br>' +
        '<a>host:  </a><br>' +
        '<a>page_count:  </a><br>' +
        '<a>pause:  </a><br>' +
        '<a>source_list:  </a><br></div>' +
        '<div id="inputFields'+i+'"><input type="text" class="inputField"><br><br><input type="text" class="inputField"><br><input type="text" class="inputField"><br><input type="text" class="inputField"><br><input type="text" class="inputField"><br><input type="text" class="inputField"><br><input type="text" class="inputField"><input type="button" value="+" class="roundButton" id="but'+i+'" onclick="newNameSource(this)"><br></div></div>';
        i++;
}
function menuButtonClick() {
    if (document.getElementById('menu').className == "settings"){
        document.getElementById('menu').className = "settings open";
    } else {
        document.getElementById('menu').className = "settings";
    }
}