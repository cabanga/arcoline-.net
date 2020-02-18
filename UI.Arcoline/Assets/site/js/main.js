var inputNextPage = document.getElementById('IdSpeciality');
var idSelected;



function change(id) {
    let items = document.querySelectorAll('.right_' + id + ' .left_dados div > h6');
    let aux = items[0].innerText;
    for (let i = 1; i < items.length; i++) {
        items[i - 1].innerText = items[i].innerText;
        items[1].classList.add('active-element')
    }
    items[items.length - 1].innerText = aux;


    //========== items ID ============
    let itemsId = document.querySelectorAll('.right_' + id + ' .left_dados div > h6');
    let auxId = itemsId[0].id;
    for (let i = 1; i < itemsId.length; i++) {
        itemsId[i - 1].id = items[i].id;
        idSelected = itemsId[1].id;
    }
    inputNextPage.value = idSelected;
    itemsId[itemsId.length - 1].id = auxId;
} 

function getIdSpeciaty(code) {

    let itemsId = document.querySelectorAll('.right_' + code + ' .left_dados div > h6');

    inputNextPage.value = itemsId[1].id;
}
 
function nextpag(id) {
    let items = document.querySelectorAll('.right_' + id + ' .left_dados div > h6');
    selectArea = items[1].innerText;
} 


 