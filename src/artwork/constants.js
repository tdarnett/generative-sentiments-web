import anger from './anger.js';
import sadness from './sadness.js';
import fear from './fear.js';
import love from './love.js';
import surprise from './surprise.js';
import joy from './joy.js';

export const LABEL_ARTWORK_WRITER_MAP = {
  anger: {
    object: anger,
    background: {
      r: 227,
      g: 49,
      b: 85,
    },
  },
  sadness: {
    object: sadness,
    background: {
      r: 31,
      g: 108,
      b: 173,
    },
  },
  fear: {
    object: fear,
    background: {
      r: 0,
      g: 0,
      b: 0,
    },
  },
  love: {
    object: love,
    background: {
      r: 236,
      g: 104,
      b: 215,
    },
  },
  surprise: {
    object: surprise,
    background: {
      r: 63,
      g: 165,
      b: 192,
    },
  },
  joy: {
    object: joy,
    background: {
      r: 250,
      g: 219,
      b: 77,
    },
  },
};
