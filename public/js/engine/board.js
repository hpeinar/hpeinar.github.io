function Board (containerId, width, height) {
    this.R = Raphael(containerId, width, height);

    this.tiles = [];
    this.background = this.R.image('./public/img/background.jpg', 0, 0, width, height);
    this.brushColor = 'white';
    this.brushOpacity = .4;
    this.generateTiles(width, height, 16);
    return this;
}

/**
 * Generates tiles with width: size, height: size, from 0,0 to width,height
 * @param width
 * @param height
 * @param size
 */
Board.prototype.generateTiles = function generateTiles(width, height, size) {

    for (var x = 0;x < width / size;x++) {
        this.tiles[x] = [];
        for (var y = 0;y < height / size;y++) {
            var tile = new Tile(this, x*size, y*size, size);
            this.tiles[x][y] = tile;
        }
    }
};

Board.prototype.exportData = function exportData() {
    this.tiles.forEach(function (yTiles) {
        console.log(yTiles.map(Tile.prototype.convertToData).join(), '\n');
    });
};

