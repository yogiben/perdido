/* @flow */
import {flexContainerType} from './types';

/**
 * Perdido.flexContainer: Creates a Flexbox container.
 *
 * @param {string} [row|column] - The flex-direction the container should
 *   create. This is typically opposite to the element you're creating so a
 *   row would need `Perdido.flexContainer('column')`.
 * @return {object} an object containing the valid JSS rules and values to
 *                  create a flexbox container.
 */
export default function flexContainer(direction: string): flexContainerType {
  let style: flexContainerType = {
    display: 'flex',
    flexFlow: '',
  };

  if (direction === 'column') {
    style.flexFlow = 'column nowrap';
  } else {
    style.flexFlow = 'row wrap';
  }

  return style;
}
