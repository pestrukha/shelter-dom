import './style.css'; 
import { createComponent } from './slider';
import { petsJSON } from './pets';

const slider = createComponent(petsJSON); 
document.body.append(slider);