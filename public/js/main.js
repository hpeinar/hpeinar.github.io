$().ready(function () {
    window.board = new Board('editor', 1280, 1040);


    // handle few buttons
    $('#save').click(function () {

    });

    $('#reset').click(function () {
        if(window.confirm('Are you sure? You will lose all un-saved progress')) {
            delete board;
            board = new Board('editor', 1280, 1040);
        }
    });

    $('.brush-color').click(function () {
        board.brushColor = $(this).data('color');
    });
});