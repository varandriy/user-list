import { ReactEventHandler, ReactNode } from "react";
import { FormButton } from "./form-button/form-button";
import { FormInput } from "./form-input/form-input";

export interface Props {
    className?: string;
    children?: ReactNode;
    onSubmit?: ReactEventHandler;
    autoComplete?: string;
}

export const Form = ({
    className,
    onSubmit,
    children,
    autoComplete,
}: Props): JSX.Element => {
    const submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();

        onSubmit && onSubmit(event);
    };

    return (
        <form
            className={`form ${className}`}
            onSubmit={submitHandler}
            autoComplete={autoComplete}
        >
            {children}
        </form>
    );
};

Form.Button = FormButton;
Form.Input = FormInput;
