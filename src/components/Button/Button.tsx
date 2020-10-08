import React, { FC, PropsWithChildren, ReactNode } from 'react';

export interface IButtonProps {
    children?: ReactNode;
    onClick?: (e: any) => void;
    styles?: {};
    disabled?: true | false;
}

const styles = {
    backgroundColor: '#FFFFFF',
    border: '1px solid #eee',
    borderRadius: 3,
    cursor: 'pointer',
    fontSize: 15,
    margin: 10,
    padding: '3px 10px',
};

const Button: FC<IButtonProps> = (props: PropsWithChildren<IButtonProps>) => (
    <button onClick={props.onClick} style={props.styles} disabled={props.disabled} type="button">
        {props.children}
    </button>
);

Button.defaultProps = {
    children: null,
    onClick: () => {},
    styles,
    disabled: false,
};

export default Button;
