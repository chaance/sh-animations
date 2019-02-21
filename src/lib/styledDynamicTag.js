import { createElement } from 'react';
import styled from 'styled-components';

// this function just lets us pass a prop `element`
// to use any component dynamically in styled-components
export default Component => {
  const bucket = Object.create(null);
  const DynamicTag = props => {
    const { element } = props;

    if (typeof element !== 'string' || !styled.hasOwnProperty(element))
      return createElement(Component, props);

    if (bucket[element] === undefined)
      bucket[element] = Component.withComponent(element);

    return createElement(bucket[element], props);
  };

  const name = Component.displayName || Component.constructor.name;
  if (name) DynamicTag.displayName = `DynamicTag(${name})`;

  return DynamicTag;
};
