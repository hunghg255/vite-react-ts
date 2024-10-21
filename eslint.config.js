//@ts-ignore
import { basic, react } from '@hunghg255/eslint-config';

export default [
  ...basic(),
  ...react(),
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error', 'assert'] }],
    },
  },
];
