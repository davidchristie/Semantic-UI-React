import _extends from 'babel-runtime/helpers/extends';
import cx from 'classnames';
import React, { PropTypes } from 'react';

import { customPropTypes, getElementType, getUnhandledProps, META, useKeyOnly } from '../../lib';

function CommentGroup(props) {
  var className = props.className,
      children = props.children,
      collapsed = props.collapsed,
      minimal = props.minimal,
      threaded = props.threaded;


  var classes = cx('ui', useKeyOnly(collapsed, 'collapsed'), useKeyOnly(minimal, 'minimal'), useKeyOnly(threaded, 'threaded'), 'comments', className);
  var rest = getUnhandledProps(CommentGroup, props);
  var ElementType = getElementType(CommentGroup, props);

  return React.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

CommentGroup.handledProps = ['as', 'children', 'className', 'collapsed', 'minimal', 'threaded'];
CommentGroup._meta = {
  name: 'CommentGroup',
  parent: 'Comment',
  type: META.TYPES.VIEW
};

process.env.NODE_ENV !== "production" ? CommentGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Comments can be collapsed, or hidden from view. */
  collapsed: PropTypes.bool,

  /** Comments can hide extra information unless a user shows intent to interact with a comment */
  minimal: PropTypes.bool,

  /** A comment list can be threaded to showing the relationship between conversations */
  threaded: PropTypes.bool
} : void 0;

export default CommentGroup;