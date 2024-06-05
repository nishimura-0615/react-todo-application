import {
  MouseEvent,
  ChangeEvent,
  KeyboardEvent,
  FocusEvent,
  FormEvent,
} from 'react';

export interface EventType {
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTextArea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClick: (event: MouseEvent<HTMLInputElement>) => void;
  onClickDiv: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onFocus: (event: FocusEvent<HTMLInputElement>) => void;
  onkeypress: (event: KeyboardEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
