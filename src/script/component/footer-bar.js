class FooterBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render() {
        this.innerHTML =`
        <div class="container-fluid bg-dark">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-0 my-0 border-top" id="footer">
                <div class="col-md-4 d-flex align-items-center">
                    <span>&copy; 2022 Asyifa Maulana</span>
                </div>
    
                 <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a class="btn btn-light" href="https://www.instagram.com/asyfmaulana/" target="_blank"><i class="bi bi-instagram "></i></a></li>
                    <li class="ms-3"><a class="btn btn-light" href="https://www.youtube.com/channel/UC-okis9SseW8WoU67knqPDg" target="_blank"><i class="bi bi-youtube"></i></a></li>
                    <li class="ms-3"><a class="btn btn-light" href="https://www.facebook.com/muhammad.asyifamaulana/" target="_blank"><i class="bi bi-facebook"></i></a></li>
                 </ul>
            </footer>
        </div>
        `;
    }
}
customElements.define('footer-bar', FooterBar);