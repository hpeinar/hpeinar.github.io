function Board (containerId, width, height) {
    this.R = Raphael(containerId, width, height);

    this.tiles = [];
    this.background = this.R.image('./public/img/full_background.jpg', 0, 0, width, height);
    this.brushColor = 'white';
    this.brushOpacity = .6;

    this.import = [];

    this.importData(Board.epicDecompression(Board.getParams().import || "") || defaultImportData);
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
    var e = '';
    this.tiles.forEach(function (yTiles) {
        e += yTiles.map(Function.prototype.call, Tile.prototype.convertToData).join('');
    });

    return e;
};

Board.prototype.importData = function importData(data) {
    var b = this;

    if (!Array.isArray(data)) {
        data = data.match(/.{1,80}/g)
    }

    data.forEach(function (d, y) {
        b.import[y] = d.split('');
    });
};

/**
 * Extracts query params
 *
 **/
Board.getParams = function getParams() {
    var query = location.search.substr(1);
    var result = {};
    query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
};


Board.epicCompression = function epicCompression(data) {
    var groups = data.match(/(.)\1*/g);
    var out = '';
    groups.forEach(function (g) {
        out += g.length +''+ g[0];
    });

    return out;
};

Board.epicDecompression = function epicDecompression(data) {
    if (!data) {
        return data;
    }

    var groups = data.match(/([0-9]+)([a-z])/gi);
    var out = '';

    groups.forEach(function (g) {
        var char = g.substr(-1, 1);
        out += (new Array(+g.substr(0, +g.length-1) + 1)).join(char);
    });

    return out;
};
