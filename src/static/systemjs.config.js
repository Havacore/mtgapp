System.config({
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true},
    'map' : {
        'rxjs': '/node_modules/rxjs',
        '@angular' : '/node_modules/@angular',
        '@angular2-material': 'node_modules/@angular2-material',
    },
    'packages' : {
        'app': {main: 'main', dafaultExtension: 'js' },
        'rxjs': {main: 'index.js'},
        '@angular2-material/core': { format: 'cjs', defaultExtension: 'js', main: 'core.js' },
        '@angular2-material/sidenav': { format: 'cjs', defaultExtension: 'js', main: 'sidenav.js' },
        '@angular/core': {main: 'index.js'},
        '@angular/common': {main: 'index.js'},
        '@angular/compiler': {main: 'index.js'},
        '@angular/platform-browser': {main: 'index.js'},
        '@angular/platform-browser-dynamic': {main: 'index.js'}
    }
});