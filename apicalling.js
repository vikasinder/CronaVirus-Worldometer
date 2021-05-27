

var selectedCountry
// SLECTED VALUE FROM DROPDOWN LIST IS PASSES AS AN ARGUMENT
function selectedCountry(selectObject) {

    var value = selectObject.value;
    var xhr = new XMLHttpRequest()
    let url = 'https://corona.lmao.ninja/v3/covid-19/countries/' + value;
    xhr.open('GET', url);

    xhr.onreadystatechange = function () {
        // if (this.readyState == 4 && this.status == 200) can also be used
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Takes a JSON string and transforms it into a JavaScript object
            setData(JSON.parse(xhr.responseText));
            //document.write(xhr.responseText);
            // is used to check what values to reveal on browser window
        }
        else if (xhr.readyState == 4 && xhr.status == 404) {
            // alert("country not there")
            document.getElementById("flag").innerHTML = "<img src=" + "" + ">";
            document.getElementById("country_name").innerHTML = "<h1>" + "No Data Is Available For Selected Country " + "</h1>";
            document.getElementById("active").innerText = "No record";
            document.getElementById("todaycases").innerText = "No record";
            document.getElementById("death").innerText = "No record ";
            document.getElementById("cases").innerText = " No record";
            document.getElementById("recovered").innerText = "No record";
            document.getElementById("tests").innerText = "No record";

        }
    }
    xhr.send();
}
// function setData is declared here , and json as an object is passed on to it
function setData(Data) {
    document.getElementById("flag").innerHTML = "<img src=" + Data.countryInfo.flag + " ,width='100' height='100'" + ">";
    document.getElementById("country_name").innerHTML = "<h1>" + "COVID -19 CASES IN " + Data.country + "</h1>";
    document.getElementById("active").innerText = Data.active;
    document.getElementById("todaycases").innerText = Data.todayCases;
    document.getElementById("death").innerText = Data.deaths;
    document.getElementById("cases").innerText = Data.cases;
    document.getElementById("recovered").innerText = Data.recovered;
    document.getElementById("tests").innerText = Data.tests;


};
//
