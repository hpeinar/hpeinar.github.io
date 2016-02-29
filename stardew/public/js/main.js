$().ready(function () {
    var board = new Board('editor', 1280, 1040);


    // handle few buttons
    $('#save').click(function () {
        window.location.replace('?import='+ Board.epicCompression(board.exportData()))
    });

    $('#reset').click(function () {
        if(window.confirm('Are you sure? You will lose all un-saved progress')) {
            window.location.href = './';
        }
    });

    $('.brush-color').click(function () {
        board.brushColor = $(this).data('color');
    });
});
