import { ReactNode } from "react";

type Props = {
    condition: boolean;
    children: ReactNode;
}

export function IF({ condition, children }: Props): ReactNode | null {
    if (condition) {
        return children;
    }

    return null;
}
