$('#submit-button').on('click', function(event){
    event.preventDefault();

    var apiKey = 'gWypjgkTA1H4AETrgCTC29Ma8ObClmWG';
    var term = $('#search-term').val().trim();
    // var numResults = $('#num-results').val().trim();
    var startYear = '';
    if ($('#start-year').val().trim() !== '') {
        startYear = $('#start-year').val().trim() + '0101';
    }
    var endYear = '';
    if($('#end-year').val().trim() !== '') {
        endYear = $('#end-year').val().trim() + "1231";
    }


    var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + term + '&api-key=' + apiKey;

    if (startYear !== '') {
        queryURL += '&begin_date=' + startYear;
    }
    if (endYear !== '') {
        queryURL += '&end_date=' + endYear;
    }

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {


    });
});

$('#clear-button').on('click', function(event) {
    event.preventDefault();

    $('#something').empty();
});