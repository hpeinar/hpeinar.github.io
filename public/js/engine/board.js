function Board (containerId, width, height) {
    this.R = Raphael(containerId, width, height);

    this.tiles = [];
    this.background = this.R.image('./public/img/background.jpg', 0, 0, width, height);
    this.brushColor = 'white';
    this.brushOpacity = .4;

    this.import = [];

    this.importData(defaultImportData);
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

    for (var y = 0;y < height / size;y++) {
        this.tiles[y] = [];
        for (var x = 0;x < width / size;x++) {
            var tile = new Tile(this, x*size, y*size, size, (this.import[y] && this.import[y][x] || null));

            this.tiles[y][x] = tile;
        }
    }
};

Board.prototype.exportData = function exportData() {
    this.tiles.forEach(function (yTiles) {
        console.log(yTiles.map(Tile.prototype.convertToData).join(), '\n');
    });
};

Board.prototype.importData = function importData(data) {
    var b = this;
    data.forEach(function (d, y) {
        b.import[y] = d.split('');
    });
};

