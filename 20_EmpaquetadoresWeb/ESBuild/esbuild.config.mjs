import esbuildServe from 'esbuild-serve'

esbuildServe({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: 'dist/bundle.js',
  define: {
    'processs.env.NODE_ENV': '"development"',
    'proccess.env.DEBUG' : 'false'
  }
}, 
{
  port: 3005,
  root: '.'
})