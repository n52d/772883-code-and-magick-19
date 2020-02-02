'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var BAR_WIDTH = 40;
var barHeight = 150;
var TOP_SPACER = 35;
var NAME_SPACER = BAR_WIDTH + 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, TOP_SPACER);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, TOP_SPACER + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random() + 0.1).toFixed(1) + ')';
    }
    ctx.fillRect(CLOUD_X + TOP_SPACER + NAME_SPACER * i, TOP_SPACER * 2.5 + (barHeight - (barHeight * times[i]) / maxTime), BAR_WIDTH, (barHeight * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + TOP_SPACER + NAME_SPACER * i, CLOUD_HEIGHT - FONT_GAP);
    ctx.fillText(times[i].toFixed(0), CLOUD_X + TOP_SPACER + NAME_SPACER * i, TOP_SPACER * 2.5 + (barHeight - (barHeight * times[i]) / maxTime) - GAP);
  }

};
