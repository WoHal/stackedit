const fs = require('fs')
const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');


let prismScripts = [
  'prismjs/prism',
  'prismjs/components/prism-core',
  'prismjs/components/prism-markup',
  'prismjs/components/prism-clike',
  'prismjs/components/prism-c',
  'prismjs/components/prism-javascript',
  'prismjs/components/prism-css',
  'prismjs/components/prism-ruby',
  'prismjs/components/prism-cpp',
  'prismjs/components/prism-typescript',
  'prismjs/components/prism-dart',
  'prismjs/components/prism-json5',
  'prismjs/components/prism-json',
  'prismjs/components/prism-go',
  'prismjs/components/prism-python',
  'prismjs/components/prism-objectivec',
  'prismjs/components/prism-java',
  'prismjs/components/prism-lua',
  'prismjs/components/prism-makefile',
  'prismjs/components/prism-django',
  'prismjs/components/prism-kotlin',
  'prismjs/components/prism-swift',
].map(require.resolve);

const tmpFile = path.join(__dirname, 'tmpfile')
fs.writeFileSync(tmpFile, "export default Prism", {
  encoding: 'utf-8'
})

prismScripts.push(tmpFile)

// prismScripts.push(
//   path.join(
//     path.dirname(require.resolve('prismjs/components/prism-core')),
//     'prism-!(*.min).js'
//   )
// );
// gulp.task('build-prism', () => gulp.src(prismScripts)
//   .pipe(concat('prism.js'))
//   .pipe(gulp.dest(path.dirname(require.resolve('prismjs')))));

const destDir = path.join(__dirname, 'src/libs')

gulp.task('build', () => gulp.src(prismScripts)
    .pipe(concat('prismjs.js'))
    .pipe(gulp.dest(destDir))
)

gulp.task('build-prism2', gulp.series('build'));


