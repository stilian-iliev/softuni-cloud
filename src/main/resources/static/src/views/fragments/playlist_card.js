import { html } from '../../../node_modules/lit-html/lit-html.js';

export const playlistCardTemplate = (playlists) => html`
<div class="card" style="max-width: 15rem;">

    <!-- Card image -->
    <div class="view overlay">
        <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.webp" alt="Card image cap">
    </div>
    <!-- Card content -->
    <div class="card-body elegant-color white-text rounded-bottom">

        <!-- Title -->
        <h4 class="card-title">Card title</h4>

    </div>

</div>
`;