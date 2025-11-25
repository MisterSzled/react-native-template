import { styled, View } from "tamagui";

const XButton = styled(View, {
        name: 'XButton',

        alignItems: 'center',
        flexDirection: 'row',

        background: '$background',
        hoverStyle: {
                backgroundColor: '$backgroundHover',
        },
        pressStyle: {
                backgroundColor: '$backgroundPress',
        },

        height: '$md',

        borderRadius: '$md',

        paddingHorizontal: '$sm',

})

export default XButton;