$(document).ready(function () {
    $("#nav_list a").click(function (e) {
        e.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

        let title = $(this).attr("title"); // a tag'inin title attribute'unu al
        let filename = "json_files/" + title + ".json"; // dosya adını oluştur (ör: chua.json)

        // JSON dosyasını Ajax ile al
        $.getJSON(filename, function (data) {
            let speaker = data.speakers[0]; // JSON dosyası içinde speakers dizisinden ilk öğe alınır

            // HTML içeriği oluştur
            let html = `
                <h1>${speaker.title}</h1>
                <img src="${speaker.image}" alt="${speaker.speaker}">
                <h2>${speaker.month}<br>${speaker.speaker}</h2>
                <p>${speaker.text}</p>
            `;

            $("main").empty(); // main içeriğini temizle
            $("main").html(html); // yeni içerikle doldur
        });
    });
});