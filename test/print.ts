import * as fs from 'fs';


console.log('From relative path');
console.log(fs.readFileSync('./external/psimd_test/README.md', 'utf8'))


console.log('From runfiles.resolve');
const runfiles = require(process.env.BAZEL_NODE_RUNFILES_HELPER!) as { resolve: (path: string) => string };

const readmePath = runfiles.resolve('psimd_test/README.md');
console.log(fs.readFileSync(readmePath, 'utf8'));


// Use this if you also need to distribute the file in the npm bundle.
// https://bazelbuild.github.io/rules_nodejs/Built-ins.html#copy_to_bin
// This link also has some details on runfiles.resolve.
console.log('From copy_to_dist');
console.log(fs.readFileSync('./test/readme_copied.txt', 'utf8'));
