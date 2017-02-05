import * as React from 'react';

interface ConfirmProps {
  /** The cancel button text. */
  cancelButton?: string;

  /** The OK button text. */
  confirmButton?: string;

  /** The ModalContent text. */
  content?: any;

  /** The ModalHeader text. */
  header?: any;

  /**
   * Called when the Cancel button is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onCancel?: (event: React.MouseEvent<HTMLAnchorElement>, data: ConfirmProps) => void;

  /**
   * Called when the OK button is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onConfirm?: (event: React.MouseEvent<HTMLAnchorElement>, data: ConfirmProps) => void;

  /** Whether or not the modal is visible. */
  open?: boolean;
}

export const Confirm: React.ComponentClass<ConfirmProps>;
