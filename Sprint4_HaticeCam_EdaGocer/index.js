$(document).ready(function() {
    $.ajax({
        url: 'https://raw.githubusercontent.com/orhanemree/ataturk-sozleri-api/main/quotes.json',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            var keywords = ['birlik', 'beraberlik', 'topluluk', 'dayanışma', 'yardımlaşma', 'işbirliği','bütünlük','bütünlük','sosyal'];
            var filteredQuotes = data.filter(function(quote) {                
                return keywords.some(function(keyword) {
                    return quote.quote.includes(keyword);
                });
            });
            if (filteredQuotes.length > 0) {
                var randomIndex = Math.floor(Math.random() * filteredQuotes.length);
                var randomQuote = filteredQuotes[randomIndex];
                $('#quote-container').html('<p>' + randomQuote.quote + ' - Mustafa Kemal Atatürk</p>');
            } 
        }
    });
});
