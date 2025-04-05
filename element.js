customElements.define('gh-corner', class extends HTMLElement {
    connectedCallback() {
        let component = location.hostname.split(".")[0];
        let repo = `https://github.com/${component}/${component}.github.io`
        let href = this.getAttribute('href') || repo;
        this.attachShadow({ mode: 'open' }).innerHTML =
            `<style>` +
            `:host{position:absolute;top:0;right:0;width:var(--size,70px)}` +
            `#arm{animation:w 1s ease-in-out}` +
            `:host(:hover) {--size:80px}` +
            `a:hover #arm{animation:w 1s ease-in-out}` +
            // wave animation
            `@keyframes w{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}` +
            `</style>` +
            `<a href="${href}" aria-label="View source on GitHub">` +
            `<svg part="svg" viewBox="0 0 250 250">` +
            // black triangle
            `<path d="M0,0h250v250z"/>` +
            `<g fill="currentColor">` +
            // body
            `<path d="M115 115s4 2 5 0l14-13c3-3 6-4 8-3-8-11-14-25 2-41 5-5 10-7 16-7 0-2 3-7 11-11 0 0 5 3 8 16 4 3 8 6 12 9 4 4 7 8 9 13 14 2 16 7 16 7-3 8-9 11-11 12 0 5-2 11-7 16-16 16-30 10-40 1 0 3-1 7-5 11l-12 12c-1 1 1 5 1 5z"/>` +
            // arm (animated)
            `<path id="arm" style="transform-origin:130px 106px" d="M134 103c-3-1-11-5-8-16 0 0 1-6-3-11 0 0-4-4-2 3 0 0 1 4-2 11 0 0-5 10 9 19"/>` +
            `</g></svg></a>`;
    }
});
setTimeout(() => {
    // Inject <gh-corner> into document.body
    document.body.append(document.createElement('gh-corner'));
}, 100);
