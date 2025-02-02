import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PsuBlock extends LitElement {
  static properties = {
    header: { type: String },
    boxtext1: { type: String },
    boxtext2: { type: String },
    linkurlimg: { type: String },
    linkurlstr: { type: String },

    stateone: { type: Boolean, reflect: true},
    statetwo: { type: Boolean, reflect: true},
    statethree: { type: Boolean, reflect: true},
    statefour: { type: Boolean, reflect: true},
    statefive: { type: Boolean, reflect: true},

    multifields:{ type: Boolean, reflect: true }, 

  }

  static get styles () {
    return css`

    :host {
      display: block;
      --beaverblue: #1e407c;
      --whiteout: #fff;
      --nittanynavy: #001e44;
      --darkgrey: #00032180;
      --blockwidth: 369.719px ;
      --blockheight: 315.750px;
      --fontsize32: 32px;
      --fontsize24: 24px;
      --fontweight: 700;
      --fontfam: "Roboto", sans-serif;
  
    }

    /** When you just want a background with text use stateone */
    :host([stateone]) .block {
      font-family: var(--fontfam);
      width: var(--blockwidth);
      height: var(--blockheight);
      background-color: var(--beaverblue);
      color: var(--whiteout);
      font-size: var(--fontsize32);
      font-weight: var(--fontweight);
      text-align: left;
    }

    :host([stateone]) .block .content{
      padding-top: 15%;
      padding-bottom: 15%;
      padding-left: 10%;
      padding-right: 10%;
    }


      /** When you want a block with a whiteout background and some text use statetwo*/
    :host([statetwo]) .block {
      font-family: var(--fontfam);
      width: var(--blockwidth);
      height: var(--blockheight);
      background-color: var(--whiteout);
      color: var(--nittanynavy);
      font-size: var(--fontsize32);
      text-align: left;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    :host([statetwo]) .block b {
      background-color: var(--beaverblue);
      height: 3px;
      font-weight: var(--fontweight);
      display: block;
    }
    
    :host([statetwo]) .block p{
      font-size: var(--fontsize24);
      font-weight: 400px;
    }

    :host([statetwo]) .block .content {
      padding-top: 1%;
      padding-bottom: 5%;
      padding-left: 10%;
      padding-right: 10%;
    } 


      /** State three for whiteout text and a gradient background */
    :host([statethree]) .block {
      font-family: var(--fontfam);
      width: var(--blockwidth);
      height: var(--blockheight);
      color: var(--whiteout);
      font-size: var(--fontsize32);
      font-weight: var(--fontweight);
      text-align: left;
      background: linear-gradient(180deg, var(--beaverblue) 0%, var(--nittanynavy) 65%, var(--nittanynavy) 100%);
      }

    :host([statethree]) .block .content {
      padding-top: 15%;
      padding-bottom: 15%;
      padding-left: 10%;
      padding-right: 10%;

    }


      /** Block Four with a picture and a link */
    :host([statefour]) .block {
      font-family: var(--fontfam);
      width: var(--blockwidth);
      height: var(--blockheight);
      color: var(--whiteout);
      font-size: var(--fontsize32);
      font-weight: var(--fontweight);
      text-align: left;
      background-size: cover;
      background-position: center;
      background-blend-mode: multiply;
      position: relative;
      background-color: var(--darkgrey);
    } 

    :host([statefour]) .block .content{
      padding-top: 10%;
      padding-bottom: 15%;
      padding-left: 10%;
      padding-right: 10%;
    } 

    :host([statefour]) .block .content .card-link {
      text-decoration-line: none;
      color: var(--whiteout);
    }

    :host([statefour]) .block .content svg{
      padding-top: 0;
      padding-bottom: 25px;
      padding-left: 295px;
      padding-right: 0;
     }


     :host([statefour]) svg:hover,
     :host([statefour]) svg:focus .block .content div a svg {
      width: 32px;
      height: 32px;
     }


    :host([statefive]) .block {
      font-family: var(--fontfam);
      width: var(--blockwidth);
      height: var(--blockheight);
      background-color: var(--nittanynavy);
      color: var(--whiteout);
      font-size: var(--fontsize32);
      font-weight: var(--fontweight);
      text-align: left;
    }

    :host([statefive]) .block .content {
      padding-top: 15%;
      padding-bottom: 15%;
      padding-left: 10%;
      padding-right: 10%;
      }

    `;

  } 

  constructor() {
    super();
    this.header = 'PSU Blocks';
    this.boxtext1 = this.boxtext1 || "default";
    this.boxtext2 = this.boxtext2 || "default";
    this.boxText3 = this.boxText3 || "default";

    this.linkurlimg = this.linkurlimg || "";
    this.linkurlstr = this.linkurlstr || "";
  }

  render() {
    return html`
    
    <!-- HTML goes here -->
    ${this.linkurlimg ? html`<div class="block" style='background-image: url("${this.linkurlimg}");'> 
      <div class="content">
        <a class="card-link" href=${this.linkurlstr} target="${this.linkurlstr}">
          <h3> ${this.boxtext1} </h3>
        </a>
        <p> ${this.multifields ? html`<b></b> <p> ${this.boxtext2} </p>` : html` `}</p>
        <div> ${this.linkurlstr ? html` 
          <a href=${this.linkurlstr} target="${this.linkurlstr}"> 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="linkicon"> 
              <mask id="mask0_173_1032" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"></rect>
              </mask>
              <g mask="url(#mask0_173_1032)">
                <path d="M4.22222 22C3.61111 22 3.08796 21.7824 2.65278 21.3472C2.21759 20.912 2 20.3889 2 19.7778V4.22222C2 
                  3.61111 2.21759 3.08796 2.65278 2.65278C3.08796 2.21759 3.61111 2 4.22222 2H10.8889C11.2037 2 11.4676 
                  2.10648 11.6806 2.31944C11.8935 2.53241 12 2.7963 12 3.11111C12 3.42593 11.8935 3.68981 11.6806 3.90278C11.4676 
                  4.11574 11.2037 4.22222 10.8889 4.22222H4.22222V19.7778H19.7778V13.1111C19.7778 12.7963 19.8843 12.5324 20.0972 
                  12.3194C20.3102 12.1065 20.5741 12 20.8889 12C21.2037 12 21.4676 12.1065 21.6806 12.3194C21.8935 
                  12.5324 22 12.7963 22 13.1111V19.7778C22 20.3889 21.7824 20.912 21.3472 21.3472C20.912 21.7824 20.3889 22 19.7778 
                  22H4.22222ZM8.66667 15.3333C8.46296 15.1296 8.36111 14.8704 8.36111 14.5556C8.36111 14.2407 8.46296 13.9815 8.66667 
                  13.7778L18.2222 4.22222H15.3333C15.0185 4.22222 14.7546 4.11574 14.5417 3.90278C14.3287 3.68981 14.2222 3.42593 
                  14.2222 3.11111C14.2222 2.7963 14.3287 2.53241 14.5417 2.31944C14.7546 2.10648 15.0185 2 15.3333 2H20.8889C21.2037 
                  2 21.4676 2.10648 21.6806 2.31944C21.8935 2.53241 22 2.7963 22 3.11111V8.66667C22 8.98148 21.8935 9.24537 21.6806
                  9.45833C21.4676 9.6713 21.2037 9.77778 20.8889 9.77778C20.5741 9.77778 20.3102 9.6713 20.0972 9.45833C19.8843 
                  9.24537 19.7778 8.98148 19.7778 8.66667V5.77778L10.1944 15.3611C9.99074 15.5648 9.74074 15.6667 9.44445 
                  15.6667C9.14815 15.6667 8.88889 15.5556 8.66667 15.3333Z" fill="#CCE9FF">
                </path>
              </g>
            </svg> 
          </a> 
          ` : html` `}
        </div>     
      </div>` : html`<div class="block"> 
      <div class="content">
        <h3> ${this.boxtext1} </h3>
        <p> ${this.multifields ? html`<b></b> <p> ${this.boxtext2} </p>` : html` `}</p>
      </div>  
    </div>`} 

    `;

  }
}

customElements.define('psu-block', PsuBlock);