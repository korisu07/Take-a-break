// gulpプラグインを読み込み
const { src, dest, watch } = require("gulp");

// Sassをコンパイルするプラグインを読み込み
const sass = require("gulp-sass");

// ★Sassをコンパイルします

const compileSass = function () {
  //.scssファイルを取得
  return (
    src("**/scss/*.scss")
      // .cssファイルに圧縮済みの設定でコンパイル
      .pipe(
        sass({ outputStyle: "compressed" })
          .on("error", sass.logError)
      )
      // cssファイルに保存
      .pipe(dest("./"))
  )
}

const watchSassFiles = function () {
  watch("**/scss/*.scss", compileSass)
}

// npx gulpコマンドを実行した時、ファイルが監視されるようにします
exports.default = watchSassFiles;
