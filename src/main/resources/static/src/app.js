
import { render } from '../node_modules/lit-html/lit-html.js';
import { profilePage } from './views/profile.js';
import { libraryPage } from './views/library.js';
import { playlistPage } from './views/playlist.js';
import { likedPlaylistPage } from './views/liked.js';

import page from "//unpkg.com/page/page.mjs";


const main = document.querySelector('#page-container');

page('/user/:id', decorateContext, profilePage);
// page('/search', decorateContext, playlistPage);
page('/', decorateContext, libraryPage);
page('/playlist/:id', decorateContext, playlistPage);
page('/collection', decorateContext, likedPlaylistPage);



// Start application
page.start();
console.log("page started");

function decorateContext(ctx, next) {
    ctx.render = (content, loc=main) => render(content, loc);
    next();
}