const fs = require('fs')
const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');


let prismScripts = [
  'prismjs/components/prism-core',
  'prismjs/components/prism-markup',
  'prismjs/components/prism-clike',
  'prismjs/components/prism-c',
  'prismjs/components/prism-javascript',
  'prismjs/components/prism-typescript',
  'prismjs/components/prism-css',
  'prismjs/components/prism-ruby',
  'prismjs/components/prism-cpp',
  'prismjs/components/prism-javadoclike',
  'prismjs/components/prism-sql',
  'prismjs/components/prism-scheme',
  'prismjs/components/prism-turtle',
  'prismjs/components/prism-t4-templating',
  'prismjs/components/prism-markup-templating'
].map(require.resolve);

prismScripts.push(
  path.join(path.dirname(require.resolve('prismjs/components/prism-core')), 'prism-!(*.min).js')
)

const tmpFile = path.join(__dirname, 'tmpfile')
fs.writeFileSync(tmpFile, "export default Prism", {
  encoding: 'utf-8'
})

prismScripts.push(tmpFile)

gulp.task('build-prism', () => gulp.src(prismScripts)
    .pipe(concat('prism.js'))
    .pipe(gulp.dest(path.join(path.dirname(require.resolve('prismjs')))))
)