$(document).ready(function() {
    var amenityIds = {};
    $('input[type="checkbox"]').on('change', function() {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        if ($(this).is(":checked")) {
            amenityIds[amenityId] = amenityName;
        } else {
            delete amenityIds[amenityId];
        }

        var amenityList = Object.values(amenityIds).join(', ');
        var longueurMax = 35;
        if (amenityList.length > longueurMax) {
            amenityList = amenityList.substring(0, longueurMax) + '...';
        }
        $('.amenities > h4').text(amenityList);
    });
});
