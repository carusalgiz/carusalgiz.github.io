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
                '<input type="text"><input type="submit" value="Назначить" class="buttonStyle"><input type="button" value="Добавить источник" class="buttonStyle" onclick="newSource()">';
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

function newSource() {
    document.getElementById('center-part').innerHTML = '<div style="display: flex"><a>Новый источник:</a><input type="button" class="buttonStyle" onclick="newCity()" value="Добавить город"><br></div>';
    newCity();
}
function newNameSource() {
    document.getElementById('inputFields').innerHTML+='<input type="text" style="margin-left: 95px"><br>';
}
function newCity() {
    document.getElementById('center-part').innerHTML+='<br><div style="display: flex"><div style="line-height: 1.4em; margin-left: 20px"><a>Название:  </a><br><br>' +
        '<a>Город:  </a><br>' +
        '<a>site_url:  </a><br>' +
        '<a>host:  </a><br>' +
        '<a>page_count:  </a><br>' +
        '<a>pause:  </a><br>' +
        '<a>source_list:  </a><br></div>' +
        '<div id="inputFields"><input type="text"><br><br><input type="text"><br><input type="text"><br><input type="text"><br><input type="text"><br><input type="text"><br><input type="text"><input type="button" value="+" class="roundButton" onclick="newNameSource()"><br></div></div>';
}