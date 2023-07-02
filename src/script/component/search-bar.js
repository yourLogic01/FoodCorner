class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
      this.render();
    }
    
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
     
    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
            <style>
            .search-container {
                max-width: 800px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 16px;
                border-radius: 10px;
                display: flex;
                position: sticky;
                top: 20px;
                background-color: white;
              }
              
              .search-container > input {
                width: 75%;
                padding: 8px;
                border: 0;
                border-bottom: 1px solid #212529;
                font-weight: bold;
              }
              
              .search-container > input:focus {
                outline: 0;
                border-bottom: 2px solid #212529;
              }
              
              .search-container > input:focus::placeholder {
                font-weight: bold;
              }
              
              .search-container > input::placeholder {
                color: #212529;
                font-weight: normal;
              }
              
              .search-container > button {
                width: 23%;
                background-color:#2a8dae;
                border-radius:5px;
                cursor: pointer;
                margin-left: auto;
                padding: 5px;
                border: 0;
                color: white;
              }
              .search-container > button:active {
                background-color: #185f77;
                transition: 0.5s;
              }
              
              @media screen and (max-width: 550px) {
                .search-container {
                  flex-direction: column;
                  position: static;
                }
              
                .search-container > input {
                  width: 100%;
                  margin-bottom: 12px;
                }
              
                .search-container > button {
                  width: 100%;
                }
              }
            </style>
            
            <div id="search-container" class="search-container">
              <input placeholder="Tuliskan nama makanan" id="searchElement" type="search">
              <button id="searchButtonElement" type="submit" class="button"><i class="bi bi-search"></i></button>
            </div>
        `;

        this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar); 