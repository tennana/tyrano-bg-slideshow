(function ($, TYRANO, mp) {
    //初期化
    mp.storage = mp.image.split(";");

    mp.method = mp.method || "crossfade";
    mp.time = mp.time || 3E3;
    mp.cross = mp.cross || "true";

    var currentImg = mp.storage[0];
    // 最初の画像を読み込み
    TYRANO.kag.tag.bg.start.call(TYRANO, $.extend(true, {}, mp, {storage: currentImg}));
    if (mp.storage.length <= 1) {
        return;
    }
    // 残りの画像を先読み
    TYRANO.kag.preloadAll($.map(mp.storage.slice(1), function (path) {
        return "./data/bgimage/" + path;
    }), $.noop);

    TYRANO.kag.stat.is_strong_stop = true;
    var startTime = Date.now();
    var timer = setTimeout(function timeout() {
        var diffTime = Date.now() - startTime;
        var nextImgNumber = Math.floor(diffTime / mp.time);
        if (!mp.storage[nextImgNumber]) {
            // 時間オーバー
            // タグ内でnextTagも呼ばれる
            TYRANO.kag.stat.is_strong_stop = false;
            TYRANO.kag.tag.freeimage.start.call(TYRANO, {layer: "base", page: "fore"});
            return;
        }
        var nextImage = mp.storage[nextImgNumber];
        if (nextImage === currentImg) {
            timer = setTimeout(timeout, 100)
            return;
        }
        TYRANO.kag.tag.bg.start.call(TYRANO, $.extend(true, {}, mp, {storage: nextImage}));
        timer = setTimeout(timeout, mp.time)
    }, mp.time)

}(window.jQuery, window.TYRANO, window.TYRANO.kag.stat.mp));