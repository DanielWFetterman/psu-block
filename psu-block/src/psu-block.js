import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PsuBlock extends LitElement {
  static properties = {
    header: { type: String },
    boxText: {type: String },

  }

  static get styles () {
    return css`
    
    :host {
      display: inline-block;
      

    }

    .block {
      padding: 8px;
      border: 2px solid #444;
      width: 403.531px ;
      height: 342.250px; 
      background-color: #1e407c;
      color: white;
      font-size: 32px;
    }

    `;

  } 

  constructor() {
    super();
    this.header = 'My app';
    this.boxText = this.boxText || "default";
  }

  render() {
    return html`

    <div class="block" >
      <h3> ${this.boxText} </h3>
    </div> 
      
    `;
  }
}

customElements.define('psu-block', PsuBlock);