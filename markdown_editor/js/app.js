import { Pumpkin } from './pumpkin.js';
import { Editor } from './editor.js';
import { PreviewField } from './form.js';

var pumpkie = new Pumpkin();

var author = new PreviewField('author', 'authorOutput');
var publishedDate = new PreviewField('publishedDate', 'publishedDateOutput');
var editor = new Editor('markdownInput', 'markdownOutput');


