import _extends from 'babel-runtime/helpers/extends';
import cx from 'classnames';
import React, { PropTypes } from 'react';

import { customPropTypes, getElementType, getUnhandledProps, META } from '../../lib';

function DropdownDivider(props) {
  var className = props.className;

  var classes = cx('divider', className);
  var rest = getUnhandledProps(DropdownDivider, props);
  var ElementType = getElementType(DropdownDivider, props);

  return React.createElement(ElementType, _extends({}, rest, { className: classes }));
}

DropdownDivider.handledProps = ['as', 'className'];
DropdownDivider._meta = {
  name: 'DropdownDivider',
  parent: 'Dropdown',
  type: META.TYPES.MODULE
};

process.env.NODE_ENV !== "production" ? DropdownDivider.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Additional classes. */
  className: PropTypes.string
} : void 0;

export default DropdownDivider;