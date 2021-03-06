function Tile (board, x, y, size, importData) {
    this.R = board.R;
    this.board = board;


    this.tile = this.R.rect(x, y, size, size);
    this.painted = false;
    this.diggable = false;

    // do some styling
    this.tile.attr('stroke', 'gray');
    this.tile.attr('stroke-width', '1');
    this.tile.attr('fill', this.board.brushColor);
    this.tile.attr('fill-opacity', '0');

    if (importData !== 'N') {
        this.tile.attr('fill-opacity', .6);
        this.painted = true;

        switch (importData) {

            case 'G':
                this.tile.attr('fill', 'green');
                break;
            case 'B':
                this.tile.attr('fill', 'brown');
                break;
            case 'R':
                this.tile.attr('fill', 'red');
                break;
            case 'S':
                this.tile.attr('fill', 'silver');
                break;
            default:
                this.tile.attr('fill-opacity', 0);
                this.painted = false;
                break;
        }

        this.tile.attr('stroke-opacity', .4);
        this.addEvents();
        this.diggable = true;


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
    console.log(e);
    if (e.buttons === 1 && this.board.brushColor !== 'white') {
        this.painted = true;
        this.tile.attr('fill', this.board.brushColor);
    } else if (e.buttons === 1 && this.board.brushColor === 'white') {
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
    var data = 'N';

    if (this.diggable) {
        data = 'Y';
    }

    if (this.painted) {
        data = this.tile.attr('fill').substr(0, 1).toUpperCase();
    }

    return data;
};