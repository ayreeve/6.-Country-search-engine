// jslint devel: true

var url = 'https://restcountries.eu/rest/v1/name/',
    countriesList = $('#countries');

function searchCountries() {
    var countryName = $('#country-name').val();

    if (!countryName.length) {
        countryName = 'Poland';
    }

    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function (item) {
        $('<li>').text(item.name + " (" + item.nativeName + ")" + " - capital city: " + item.capital).appendTo(countriesList);
    });
}

$('#search').click(searchCountries);
