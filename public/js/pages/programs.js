import Page from '../page.js';

export default class Programs extends Page{
    constructor(){
        super();
        this.html = `
            <article class="faculty">
                <p>Faculty of Media and Creative Arts</p>
                <article class="program graphic">
                <h1 class="program-graphic"><a href="/programs/graphicDesign">graphic design for print and web</a></h1>
                <img src="/img/graphic_design.png" width="100%" height="auto" alt="Graphic Design">
                </article>
                <article class="program 3d">
                <h1 class="program-3d"><a href="/programs/modelling3D">3d modelling and Visual effects</a></h1>
                <img src="/img/3d_modelling.png" alt="">
                </article>
                <article class="program web">
                <h1 class="program-web"><a href="/programs/webDesignAndDevelopment">web design and development</a></h1>
                <img src="/img/web_design.png" alt="">
                </article>
            </article>
        `
    }
}