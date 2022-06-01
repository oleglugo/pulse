"use strict";

const {src, dest} = require("gulp");
const gulp = require("gulp");
const browserSync = require("browser-sync").create ();
const del = require("gulp-del");
const autoprefixer = require("gulp-autoprefixer");
const cleanCss = require("gulp-clean-css");
const cssnano = require("gulp-cssnano");
const plumber = require("gulp-plumber");
const rename = require ("gulp-rename");
const rigger = require("gulp-rigger");
const sass = require("gulp-sass")(require('sass'));
const stripSccComments = require("gulp-strip-css-comments");
const uglify = require("gulp-uglify");
const panini = require("panini");


var path = {
    build: {
        html: "dist/",
        js: "dist/assets/js",
        css: "dist/assets/css",
        images: "dist/assets/img"
    },
    scr: {
        html: "src/*.html",
        js: "src/assets/js/*.js",
        css: "src/assets/sass/style.scss",
        images: "src/assets/img/**/*.{jpg,png,svg,gif,ico}"
    },
    watch: {
        html: "src/**/*.html",
        js: "src/assets/js/**/*.js",
        css: "src/assets/sass/**/*.scss",
        images: "src/assets/img/**/*.{jpg,png,svg,gif,ico}"
    },
    clean: "./dist"
}