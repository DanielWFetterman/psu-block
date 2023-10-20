import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PsuBlock extends LitElement {
  static properties = {
    header: { type: String },
    boxText1: { type: String },
    boxText2: { type: String },
    boxText3: { type: String },
    stateOne: { type: Boolean, reflect: true},
    stateTwo: { type: Boolean, reflect: true},


  }

  static get styles () {
    return css`
    
    :host {
      display: inline-block;
      

    }

    :host([stateOne]) .blockOne {
      padding: 8px;
      width: 403.531px ;
      height: 342.250px; 
      background-color: #1e407c;
      color: #fff;
      font-size: 32px;
      text-align: center;
    }
    
    :host([stateTwo]) .blockTwo {
      padding: 8px;
      width: 403.531px ;
      height: 342.250px; 
      background-color: #fff;
      color: #000;
      font-size: 32px;
    }

    `;

  } 

  constructor() {
    super();
    this.header = 'My app';
    this.boxText1 = this.boxText1 || "default";
    this.boxText2 = this.boxText2 || "default";
    this.boxText3 = this.boxText3 || "default";
  }

  render() {
    return html`

    <div class="blockOne" >
      <h3> ${this.boxText1} </h3>
    </div> 

    <div class="blockTwo" >
      <h3> ${this.boxText2} </h3>
      <b></b>
      <p> ${this.boxText3} </p>
    </div>
      
    `;
  }
}

customElements.define('psu-block', PsuBlock);