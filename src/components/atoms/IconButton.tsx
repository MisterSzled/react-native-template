import { PropsWithChildren } from "react";
import { Button, ButtonProps, Spinner } from "tamagui";

export type IconButtonProps = ButtonProps & {
        loading?: boolean,
        hideTextWhenLoading?: boolean;
}

const IconButton = ({ 
        loading = false, 
        hideTextWhenLoading = true, 
        children, 
        ...rest 
}: PropsWithChildren<IconButtonProps>) => {


        const render_loading_icon = () => {
                if (loading) return () => <Spinner />;
                return undefined;
        }

        return (
                <Button
                        {...rest}
                        icon={render_loading_icon()}
                        disabled={loading || rest.disabled}
                >
                        {loading && hideTextWhenLoading ? null : children}
                </Button>
        )
}

export default IconButton;