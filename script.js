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
            document.getElementById('center-part').innerHTML='<a>Период активности(мин):  </a>' +
                '<input type="text" class="inputField"><input type="submit" value="Назначить" class="buttonStyle"><input type="button" value="Добавить источник" class="buttonStyle" onclick="newSource()">';
            break;
        case 'ip':
            //text
            break;
        case 'parcer':
            //text
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
    document.getElementById('center-part').innerHTML = '<div style="display: flex"><a>Новый источник:</a><input type="button" class="buttonStyle" onclick="newCity()" value="Добавить город"><br></div>';
    newCity();
}
function newNameSource(el) {
    document.getElementById(el.parentElement.id).innerHTML += '<input type="text" class="inputField"><br>';
}
function newCity() {
    document.getElementById('center-part').innerHTML+='<br><div style="display: flex"><div style="line-height: 1.4em; margin-left: 20px"><a>Название:  </a><br><br>' +
        '<a>Город:  </a><br>' +
        '<a>site_url:  </a><br>' +
        '<a>host:  </a><br>' +
        '<a>page_count:  </a><br>' +
        '<a>pause:  </a><br>' +
        '<a>source_list:  </a><br></div>' +
        '<div id="inputFields'+i+'"><input type="text" class="inputField"><br><br><input type="text" class="inputField"><br><input type="text" class="inputField"><br><input type="text" class="inputField"><br><input type="text" class="inputField"><br><input type="text" class="inputField"><br><input type="text" class="inputField"><input type="button" value="'+i+'" class="roundButton" id="but'+i+'" onclick="newNameSource(this)"><br></div></div>';
        i++;
}