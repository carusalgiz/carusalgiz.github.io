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
            document.getElementById('center-top').innerHTML='<table><tr><th>Список IP-адресов:</th></tr><tr style="border-top: #d1d3d4 1px solid"><td>[адрес]</td></tr><tr style="border-top: #d1d3d4 1px solid"><td>[адрес]</td></tr><tr style="border-top: #d1d3d4 1px solid"><td>[адрес]</td></tr></table>';
            document.getElementById('center-bottom').innerHTML='';
            break;
        case 'parcer':
            document.getElementById('center-top').innerHTML='<div style="display: flex"><div><a>Источник: </a><br><select class="select-style"><option>--Source--</option><option>avito</option><option>irr</option><option>farpost</option></select></div><div style="margin-left: 10px"><a>URL страницы: </a> <br><input type="text" class="inputField"><input type="button" value="Проверить" class="buttonStyle" style="margin-left: 30px"></div></div>' +
                '<table><tr><th colspan="2">Полученные данные: </th></tr><tr><td style="width: 120px">Источник: </td><td>[название]</td></tr><tr><td>Город: </td><td>[город]</td></tr><tr><td>Адрес: </td><td>[улица,дом, квартира]</td></tr><tr><td>Этаж: </td><td>[номер этажа]</td></tr><tr><td>Этажность: </td><td>[всего этажей]</td></tr></table>';
            document.getElementById('center-bottom').innerHTML='';
            break;
        case 'activeTasks':
            //text
            break;
        case 'loadOnNetwork':
            //text
            break;
        case 'stats':
            //text
            break;
        case 'errors':
            //text
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