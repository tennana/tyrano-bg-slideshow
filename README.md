# 背景画像スライドショープラグイン

## 機能説明
複数の背景画像を一定の秒数で背景レイヤーに切り替えるタグです。
全ての切り替えが終わるまで次のタグに進まないので、使いどころは限られると思います。
(作者は 豆ノ帖さんの[スタッフロールプラグイン](https://mamecho.com/archives/1611) との併用を想定)

bgタグをtime付きかつ連続で並べる方法でも実装できますが、ブラウザタブを切り替えている間は画像変更がストップしてしまうため、AnimationCSSに依存しないで切り替えを行う目的で作成されました。

## インストールの方法
bg_slideshowフォルダごとdata\others\pluginに配置してください。

## アンインストールの方法
pluginタグと配置したフォルダを削除して下さい。


## 使い方
使いたい場所で、imageにbgimageのファイル名を半角セミコロン区切りで記述してください。
storage、waitを除いた、bgタグの各属性が利用可能です。
[ティラノスクリプト公式-bgタグ解説](https://tyrano.jp/tag/#bg)

Example.
[plugin name="bg_slideshow" image="画像1;画像2;画像3" time="(ミリ秒)"  method="fadeIn"]

## License
=> [COPYING](COPYING)