import { jsWithTs as tsjPreset } from 'ts-jest/presets';
module.exports = {
  transform: {
    ...tsjPreset.transform,
  },
  preset: 'ts-jest/presets/js-with-ts',
};
