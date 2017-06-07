// jslint devel: true

var url = 'https://restcountries.eu/rest/v1/name/',
    countriesList = $('#countries');

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function (item) {
        $('<li>').text(item.name + " (" + item.nativeName + ")" + " - capital city: " + item.capital).appendTo(countriesList);
    });
}

function incorrectCountry(resp) {
    countriesList.empty();
    $('<p>').text("There is no such country on Earth (or you don't use english country name)").appendTo(countriesList).css("text-align", "center");
}

function searchCountries() {
    var countryName = $('#country-name').val();

    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList,
        error: function errorActions() {
            if (countryName === "") {
                countriesList.empty();
                $('<p>').text("Type the name of the country in the filed above").appendTo(countriesList).css("text-align", "center");
            } else {
                incorrectCountry();
            }
        }
    });
}

$('#search').click(searchCountries);
$('#country-name').on('keypress', function (e) {
    if (e.which === 13) {
        searchCountries();
    }
});
