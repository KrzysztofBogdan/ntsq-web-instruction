const fs = require('fs-extra');
const ejs = require('ejs');
const minify = require('html-minifier').minify;
const resourceDir = __dirname + "/src/main/resources";
const srcDir = __dirname + "/src/main/template";
const targetDir = __dirname + "/docs";
var marked = require('marked');


async function build() {

    fs.copy(resourceDir, targetDir + "/resources", function (err) {
        if (err) {
            return console.error(err);
        }
    });

    try {
        let [english, polish] = await Promise.all([markdown("english.md"), markdown("polish.md")]);
        let template = await fs.readFile(srcDir + '/index.html', 'utf-8');

        toHtml("/English.html", english, template, {"lang_code": "en"});
        toHtml("/Polski.html", polish, template, {"lang_code": "pl"});
    } catch (e) {
        console.log(e);
    }

}

async function markdown(filename) {
    let file = await fs.readFile(__dirname + "/src/main/markdown/" + filename, 'utf-8');
    return marked(file);
}

async function toHtml(outputName, markdown, htmlTemplate, props) {
    let result = ejs.render(htmlTemplate, Object.assign({markdown}, props));

    result = minify(result, {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeAttributeQuotes: true,
        removeOptionalTags: true,
        collapseBooleanAttributes: true
    });

    return await fs.outputFile(targetDir + outputName, result);
}

build();

const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

imagemin(['./src/main/images/*.{jpg,png}'], './target/website/images/', {
    plugins: [
        imageminJpegtran(),
        imageminPngquant({quality: '80-90'})
    ]
});