// console.log(global.setTimeout.toString();
// console.log(global) 

// сделать переменную глобальной
// global.x = 10


// ********process
// console.log("HELLO " + process.argv[2])




// var counter = 0;

// setInterval(function () {
// 	console.log('counter value_' + counter++ )
// }, 1000);

// *****************************FILESYSTEM

// require("fs");
var fs = require('fs');
var path = require('path');

// // console.log(fs);
// fs.writeFile('node/newhello.js', 'dwdw some content', function(err){
// 	if (err) { throw err;}
// });
// перезаписать

// fs.writeFile('node/newhello.js', 'content', function(err){
// 	if (err) { throw err;}
// });

// // дописать


// fs.appendFile('node/newhello.js', '\nyo idiot', function(err){
// 	if (err) { throw err;}
// });

// console.log(fs.readFileSync("node/newhello.js"));
// console.log(""+fs.readFileSync("node/newhello.js"));
// console.log(fs.readFileSync("node/newhello.js",{encoding:"utf-8"}))
// 
// создание папки
// fs.mkdirSync('node/myfolder');
// fs.mkdir('node/lder');
// fs.renameSync("node/newhello.js", "new.css");//переименовать
// fs.renameSync("new.css", "node/new.css");//переместить
// 
// fs.writeFile('node/myfolder/myfile', 'dwdw some content');

// console.log(process.cwd());

	
// просмотр масива файлов

// fs.readdir("node/myfolder/", function(err, files){
// 	console.log(files);
// 	return files
// 	});






var folder = "node/myfolder/";

fs.readdir(folder, function(err, files){
	// console.log(files)
			// process.chdir(file);

	files.forEach(function(file){
	var ext = path.extname(file);
		
		   fs.renameSync(folder + file, folder + path.basename(file,ext)+'rrr'+ext);
		// fs.renameSync(folder + file, folder + path.basename(file,ext)+'rrr'+ext);
	});
});

