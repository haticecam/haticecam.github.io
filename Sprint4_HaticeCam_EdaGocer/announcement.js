let displayedCount = 0;
const batchSize = 3;

function fetchAnnouncements() {
    $.getJSON('announcements.json', function(data) {
        window.announcements = data;
                loadMoreAnnouncements();
    });
}

function loadMoreAnnouncements() {
    let nextBatch = announcements.slice(displayedCount, displayedCount + batchSize);

    nextBatch.forEach(function (announcement) {
        var newAnnouncement = `
            <div class="announcement">
                <h3><a>${announcement.title}</a></h3>
                <p>${announcement.body}</p>
            </div>`;
        $('#announcement-list').append(newAnnouncement);
    });

    displayedCount += batchSize;

    if (displayedCount >= announcements.length) {
        $('#load-more').prop('disabled', true).text('Daha fazla duyuru yok.');
    }
}

$(document).ready(function () {
    fetchAnnouncements();
    $('#load-more').click(function () {
        loadMoreAnnouncements();
    });
});
