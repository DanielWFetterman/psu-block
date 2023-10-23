import { html } from 'lit';
import '../src/psu-block.js';

export default {
  title: 'PsuBlock',
  component: 'psu-block',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <psu-block
      style="--psu-block-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </psu-block>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
