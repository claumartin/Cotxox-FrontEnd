/*-----------------------------------------------------------------------------------------------------
    Vertical collapsible sidebar
------------------------------------------------------------------------------------------------------*/
$('.btn-expand-collapse').click(function(e) {
    $('.navbar-primary').toggleClass('collapsed');
});

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

/*-----------------------------------------------------------------------------------------------------
    Settings form
------------------------------------------------------------------------------------------------------*/
var userData = {"Name": "Sofía Lópex", "Phone nuber": "857-333-1875", "Zip code": "02210", 
                "Email": "wctf2ez5ri@claimab.com", 
                "Address": "2892  Hummingbird Way", "City": "Boston",
                "Gender": "Female", "Alerts": [true, false, true]};

var genderOptions = ["Female", "Male", "Undefined", "Other"];

var cityOptions = ["New York", "Boston", "Texas", "Springfield"];

var alertOptions = ["Send me alert messages using my mobile phone number",
                    "Send me alert messages using my email address",
                    "Alert me by the app notifications"]

window.onload = function() {

    var username = "Sofía Lópex";
    document.getElementById('output').innerHTML = username;

    var externalDiv = document.createElement("div");
    externalDiv.className = "row";

    var form = document.getElementById("form");

    if (form) {

        for (pair in userData) {

            if (pair == "Gender") {

                var div = document.createElement("div");
                div.className = "col-md-4 inputs";

                var span = document.createElement("span");
                span.innerHTML = pair;
                span.className = "text-bold";
                div.appendChild(span)

                for (gender in genderOptions) {

                    var divRadio = document.createElement("div");
                    divRadio.className = "radio";
                    
                    var label = document.createElement("label");

                    var radio = document.createElement("input");
                    radio.name = "gender";
                    radio.type = "radio";

                    label.appendChild(radio);    
                    label.appendChild(document.createTextNode(genderOptions[gender]));
                    
                    divRadio.appendChild(label);

                    div.appendChild(divRadio);

                    if (genderOptions[gender] == userData[pair]) {
                        radio.defaultChecked = true;
                    }
                }

                externalDiv.appendChild(div);
            }

            else if ( pair == "Alerts") {

                var div = document.createElement("div");
                div.className = "col-md-4 inputs";

                var span = document.createElement("span");
                span.innerHTML = pair;
                span.className = "text-bold";
                div.appendChild(span)

                for (alert in alertOptions) {

                    var divCheckbox = document.createElement("div");
                    divCheckbox.className = "checkbox";
                    
                    var label = document.createElement("label");

                    var checkbox = document.createElement("input");
                    checkbox.type = "checkbox";

                    label.appendChild(checkbox);    
                    label.appendChild(document.createTextNode(alertOptions[alert]));
                    
                    divCheckbox.appendChild(label);

                    div.appendChild(divCheckbox);

                    if (userData["Alerts"][alert]) {
                        checkbox.defaultChecked = true;
                    }
                }

                externalDiv.appendChild(div);
            }

            else if (pair == "City") {

                var div = document.createElement("div");
                div.className = "col-md-4 inputs";

                var span = document.createElement("span");
                span.className = "text-bold";
                span.innerHTML = pair;

                div.appendChild(span);

                var select = document.createElement("select");
                select.className = "form-control";

                for (city in cityOptions) {

                    var option = document.createElement("option");
                    option.appendChild(document.createTextNode(cityOptions[city]));

                    select.appendChild(option);

                    if (cityOptions[city] == userData[pair]) {
                        select.selectedIndex = city;
                    }
                }

                div.appendChild(select);

                externalDiv.appendChild(div);
            }
            else {

                var div = document.createElement("div");
                div.className = "col-md-4 inputs";

                var span = document.createElement("span");
                span.innerHTML = pair;
                span.className = "text-bold";
                div.appendChild(span)

                var br = document.createElement("br");
                div.appendChild(br);

                var input = document.createElement("input");
                input.value = userData[pair];
                div.appendChild(input);

                externalDiv.appendChild(div);
            }
        }
        form.insertBefore(externalDiv, form.firstChild);
    }
}



