import anger from './anger.js';
import sadness from './sadness.js';
import fear from './fear.js';
import love from './love.js';
import surprise from './surprise.js';
import joy from './joy.js';

export const LABEL_ARTWORK_WRITER_MAP = {
  anger: {
    object: anger,
    background: "rgb(227,49,85)"
  },
  sadness: {
    object: sadness,
    background: "rgb(31,108,173)"
  },
  fear: {
    object: fear,
    background: "rgb(0,0,0)"
  },
  love: {
    object: love,
    background: "rgb(236,104,215)"
  },
  surprise: {
    object: surprise,
    background: "rgb(63,165,192)"
  },
  joy: {
    object: joy,
    background: "rgb(250,219,77)"
  },
};
