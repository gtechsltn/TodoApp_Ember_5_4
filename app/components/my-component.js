import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MyComponentComponent extends Component {
  @action
  download() {
    alert('Download');
  }
}
