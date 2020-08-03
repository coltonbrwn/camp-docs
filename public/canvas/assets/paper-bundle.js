var voronoi =  new Voronoi();
var sites = generateBeeHivePoints(view.size / 200, true);
var bbox, diagram;
var oldSize = view.size;
var mousePos = view.center;
var selected = false;
var selectedVoroni;
var audioData = [];
var voronoiStates = {};

var raster = new Raster('/background.jpg');
raster.visible = false;

onResize();


$.get('/data.json', function(data) {
	audioData = data.map( function(item) {
		return {
			from: item.from,
			audio: new Audio(item.file)
		}
	})
})

function onMouseDown(event) {
		var point = event.point;
	var closestPointDistance = 100000000;
	var closestPointId = null;
	sites.forEach(function(site) {
		var dist = point.getDistance(new Point(site.x, site.y));
		if (dist < closestPointDistance) {
			closestPointDistance = dist;
			closestPointId = site.voronoiId;
		}
	})
	selectedVoroni = closestPointId;

	if (!voronoiStates[selectedVoroni]) {
		voronoiStates[selectedVoroni] = true;
		renderDiagram();
		var randIndex = Math.floor(Math.random() * audioData.length);
		var randItems = audioData.splice(randIndex, 1);
		var audio = randItems[0].audio.play()
	}
}

function renderDiagram() {
	project.activeLayer.children = [];
	diagram = voronoi.compute(sites, bbox);
	if (diagram) {
		for (var i = 0, l = sites.length; i < l; i++) {
			var cell = diagram.cells[sites[i].voronoiId];
			if (cell) {
				var halfedges = cell.halfedges,
					length = halfedges.length;
				if (length > 2) {
					var points = [];
					for (var j = 0; j < length; j++) {
						v = halfedges[j].getEndpoint();
						points.push(new Point(v));
					}
					var color = voronoiStates[sites[i].voronoiId]
						? new Color('yellow') - (Math.random() / 5)
						: new Color('green') + (Math.random() / 5)
					createPath(points, sites[i], color);
				}
			}
		}
	}
}

function removeSmallBits(path) {
	var averageLength = path.length / path.segments.length;
	var min = path.length / 50;
	for(var i = path.segments.length - 1; i >= 0; i--) {
		var segment = path.segments[i];
		var cur = segment.point;
		var nextSegment = segment.next;
		var next = nextSegment.point + nextSegment.handleIn;
		if (cur.getDistance(next) < min) {
			segment.remove();
		}
	}
}

function generateBeeHivePoints(size, loose) {
	var points = [];
	var col = view.size / size;
	for(var i = -1; i < size.width + 1; i++) {
		for(var j = -1; j < size.height + 1; j++) {
			var point = new Point(i, j) / new Point(size) * view.size + col / 2;
			if(j % 2)
				point += new Point(col.width / 2, 0);
			if(loose)
				point += (col / 4) * Point.random() - col / 4;
			points.push(point);
		}
	}
	return points;
}
function createPath(points, center, color) {
	var path = new Path();
	if (!selected) {
		path.fillColor = color;
	} else {
		path.fullySelected = selected;
	}
	path.closed = true;

	for (var i = 0, l = points.length; i < l; i++) {
		var point = points[i];
		var next = points[(i + 1) == points.length ? 0 : i + 1];
		var vector = (next - point) / 2;
		path.add({
			point: point + vector,
			handleIn: -vector,
			handleOut: vector
		});
	}
	path.scale(0.95);
	removeSmallBits(path);
	return path;
}

function onResize() {
	var margin = 20;
	bbox = {
		xl: margin,
		xr: view.bounds.width - margin,
		yt: margin,
		yb: view.bounds.height - margin
	};
	for (var i = 0, l = sites.length; i < l; i++) {
		sites[i] = sites[i] * view.size / oldSize;
	}
	oldSize = view.size;
	renderDiagram();
}

function onKeyDown(event) {
	if (event.key == 'space') {
		selected = !selected;
		renderDiagram();
	}
}
