/*-----------------------------------------------------------------------------------------------------
    Vertical collapsible sidebar
------------------------------------------------------------------------------------------------------*/
$('.btn-expand-collapse').click(function(e) {
    $('.navbar-primary').toggleClass('collapsed');
});

/*-----------------------------------------------------------------------------------------------------
    Username
------------------------------------------------------------------------------------------------------*/
var username = "Sofía Lópex";

window.onload = function(){
    document.getElementById('output').innerHTML = username;
};

/*-----------------------------------------------------------------------------------------------------
    Previous trips table
------------------------------------------------------------------------------------------------------*/
var $table = $('#table');
var tripsData = [
            {"date": "23/12/2018", "start": "Madrid-Chamartín", "end": "Salamanca", "price": "23,00€"},
            {"date": "28/12/2018", "start": "Salamanca", "end": "Madrid-Chamartín", "price": "23,00€"},
            {"date": "14/08/2018", "start": "L'Illa", "end": "Maremagnum", "price": "12,00€"},
            {"date": "09/03/2019", "start": "Plaça Espanya", "end": "Porto Pi", "price": "9,00€"},
            {"date": "16/04/2019", "start": "L'Olivar", "end": "Cala Ratjada", "price": "18,00€"},
            {"date": "12/09/2018", "start": "Hospitalet del Llobregat", "end": "Vall d'Hebron", "price": "25,00€"},
]

$(function () {
    $('#table').bootstrapTable({
        data: tripsData
    });
});