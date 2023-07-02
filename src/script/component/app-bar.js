class AppBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
        this.innerHTML =`
        <div class="navbar navbar-dark bg-dark shadow-sm py-3 ">
        <div class="container">
        <a href="#top" class="navbar-logo d-flex align-items-center">
              <img src="https://www.pikpng.com/pngl/b/69-694050_dinner-plate-png.png" width="20" height="20"></img>
              <h2>Food Corner</h2>
        </a>
        `;
    }
}

customElements.define('app-bar', AppBar);