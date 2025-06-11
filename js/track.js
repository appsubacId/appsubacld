$(function() {
    previewpdf = function (url) {
        if (!url) return;
        $('#modal-pdf').modal('show');
        $(".modal-doc").hide();
        var ext = url.slice(-5);

        $('#pdf_view').show();
        $('#pdf_view').attr("src", url).show();
    };
})