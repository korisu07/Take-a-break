'use strict';
///////////////////////////////
      /** JSを読み込み */
///////////////////////////////

// JSファイルを動的に読み込む処理
function loadJSfile( filepath ){
  document.write(`<script src=\"${filepath}\"></script>`);
}

function loadModulefile( filepath ){
  document.write(`<script type="module" src=\"${filepath}\"></script>`);
}

/** 
 * 配列の中に読み込みたいJSファイルを追加してください。
 * 指定するパスは、ルートを基準とした絶対パスか、
 * index.ejsを基準とした相対パスであれば読み込みが可能です。
 */

const JS_files = [
  // index.htmlを基準とした相対パスで指定
  // 例 :'inc/js/viewer/example.js'
  'inc/js/action/move.js'
];

const JS_module = [
  // index.htmlを基準とした相対パスで指定
  // viewer
  // 例 :'inc/js/module/example.js'
];

JS_module.filter((moduleFile) =>{
  loadModulefile( moduleFile );
});

JS_files.filter((file) => {
  loadJSfile( file );
});