import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PsuBlock extends LitElement {
  static properties = {
    header: { type: String },
    boxText1: { type: String },
    boxText2: { type: String },

    stateOne: { type: Boolean, reflect: true},
    stateTwo: { type: Boolean, reflect: true},
    stateThree: { type: Boolean, reflect: true},
    stateFour: { type: Boolean, reflect: true},
    stateFive: { type: Boolean, reflect: true},

    multiFields:{type: Boolean, reflect: true }, 



  }

  static get styles () {
    return css`

    :host {
      display: block;
  
      }

    /** When you just want a background with text use stateOne */
    :host([stateOne]) .block {
      width: 369.719px ;
      height: 315.750px;
      background-color: #1e407c;
      color: #fff;
      font-size: 32px;
      font-weight: 700;
      text-align: left;
    }

     :host([stateOne]) .block .content{
      padding-top: 25%;
      padding-bottom: 25%;
      padding-left: 10%;
      padding-right: 10%;
    }


    /** When you want a block with a white background and some text use StateTwo*/
    :host([stateTwo]) .block {
      width: 369.719px ;
      height: 315.750px;
      background-color: #fff;
      color: #000;
      font-size: 32px;
      text-align: center;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    :host([stateTwo]) .block b {
      background-color: #1e407c;
      height: 3px;
      font-weight: 700;
      display: block;
    }

    :host([stateTwo]) .block .content {
      padding-top: 1%;
      padding-bottom: 5%;
      padding-left: 10%;
      padding-right: 10%;
    } 


    /** State three for white text and a gradient background */
    :host([stateThree]) .block {
      width: 369.719px ;
      height: 315.750px;
      color: #fff;
      font-size: 32px;
      font-weight: 700;
      text-align: left;
      background-color: rgb(30,64,124); 
      background: -moz-linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%); 
      background: -webkit-linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%); 
      background: linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%); 
      
    }

    :host([stateThree]) .block .content {
      padding-top: 15%;
      padding-bottom: 15%;
      padding-left: 10%;
      padding-right: 10%;

    }


    /** Block Four with a picture and a link */
    :host([stateFour]) .block {
      width: 369.719px ;
      height: 315.750px;
      color: #fff;
      font-size: 32px;
      font-weight: 700;
      text-align: left;
      background-image: url(https://www.psu.edu/psu-edu-assets/images/power-facts/penn-state-tuition.jpg);
      background-size: cover;
      background-position: center;
      background-blend-mode: multiply;
      position: relative;
      background-color: rgba(0, 3, 33, 0.5);
    } 

    :host([stateFour]) .block .content{
      padding-top: 15%;
      padding-bottom: 15%;
      padding-left: 10%;
      padding-right: 10%;

    }


    :host([stateFive]) .block {
      width: 369.719px ;
      height: 315.750px;
      background-color: #001e44;
      color: #fff;
      font-size: 32px;
      font-weight: 700;
      text-align: left;
    }

     :host([stateFive]) .block .content{
      padding-top: 25%;
      padding-bottom: 25%;
      padding-left: 10%;
      padding-right: 10%;
    }


    `;

  } 

  constructor() {
    super();
    this.header = 'My app';
    this.boxText1 = this.boxText1 || "default";
    this.boxText2 = this.boxText2 || "default";
    this.boxText3 = this.boxText3 || "default";
    this.boxText4 = this.boxText4 || "default";
    this.boxText5 = this.boxText5 || "default";
  }

  render() {
    return html`
    <!-- HTML goes here -->

    <div class="block">
      <div class="content">
      <h3> ${this.boxText1} </h3>
        <p> ${this.multiFields ? html`<b></b> <p> ${this.boxText2} </p>` : html` `}</p>
      </div>
    </div>


    `;

  }
}

customElements.define('psu-block', PsuBlock);