function Tile (board, x, y, size, importData) {
    this.R = board.R;
    this.board = board;


    this.tile = this.R.rect(x, y, size, size);
    this.painted = false;
    this.diggable = false;

    // do some styling
    this.tile.attr('stroke', 'grey');
    this.tile.attr('fill', this.board.brushColor);
    this.tile.attr('fill-opacity', '0');

    if (importData !== 'N') {
        this.tile.attr('stroke-opacity', .4);
        this.addEvents();
    } else {
        this.tile.attr('stroke-opacity', 0)
    }

    return this;
}


Tile.prototype.addEvents = function addEvents() {
    this.tile.hover(this.mouseover, this.mouseout, this, this);
    this.tile.click(this.paint.bind(this));
    this.tile.mousedown(this.paint.bind(this));
};

Tile.prototype.mouseover = function mouseover(e) {
    if (e.which === 1 && this.board.brushColor !== 'white') {
        this.painted = true;
        this.tile.attr('fill', this.board.brushColor);
    } else if (e.which === 1 && this.board.brushColor === 'white') {
        this.painted = false;
    }

    this.tile.attr('fill-opacity', .6);
};

Tile.prototype.mouseout = function mouseout(e) {
    if (!this.painted) {
        this.tile.attr('fill-opacity', '0');
    } else {
        this.tile.attr('fill-opacity', this.board.brushOpacity);
    }
};

Tile.prototype.paint = function paint(e) {
    if (this.board.brushColor !== 'white') {
        this.tile.attr('fill', this.board.brushColor);
        this.tile.attr('fill-opacity', this.board.brushOpacity);
        this.painted = true;
    } else {
        this.tile.attr('fill', this.board.brushColor);
        this.painted = false    ;
    }
};

Tile.prototype.convertToData = function convertToData() {
    return 'Y';
};