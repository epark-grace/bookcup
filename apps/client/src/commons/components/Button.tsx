import tw from 'tailwind-styled-components';
import { TailwindComponent } from 'tailwind-styled-components/dist/tailwind';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    icon?: React.ComponentType<any>,
    $wide?: boolean | undefined
}

const BaseButton = tw.button`
    flex
    justify-start
    items-center
    h-10
    my-2
    rounded-md
    hover:shadow-none
`;

export const TransparentButton = (props: ButtonProps): JSX.Element => {
    const ColorButton = tw(BaseButton)<ButtonProps>`
        bg-transparent
        ${p => p.$wide ? 'w-full' : 'w-32'}
        ${p => p.disabled ? 'cursor-not-allowed' : null}
    `;

    return withButtonContent(ColorButton, props);
};

export const WhiteButton = (props: ButtonProps): JSX.Element => {
    const ColorButton = tw(BaseButton)<ButtonProps>`
        bg-white
        ${p => p.$wide ? 'w-full' : 'w-32'}
        ${p => p.disabled ? 'bg-opacity-30 cursor-not-allowed' : 'active:bg-gray-300 shadow-md'}
    `;

    return withButtonContent(ColorButton, props);
};

export const GrayButton = (props: ButtonProps): JSX.Element => {
    const ColorButton = tw(BaseButton)<ButtonProps>`
        bg-gray-300
        ${p => p.$wide ? 'w-full' : 'w-32'}
        ${p => p.disabled ? 'bg-opacity-30 cursor-not-allowed' : 'active:bg-gray-700 shadow-md'}
    `;

    return withButtonContent(ColorButton, props);
};

export const DarkButton = (props: ButtonProps): JSX.Element => {
    const ColorButton = tw(BaseButton)<ButtonProps>`
        bg-gray-700
        text-white
        ${p => p.$wide ? 'w-full' : 'w-32'}
        ${p => p.disabled ? 'bg-opacity-30 cursor-not-allowed' : 'active:bg-gray-900 shadow-md'}
    `;

    return withButtonContent(ColorButton, props);
};

const withButtonContent = (ColorButton: TailwindComponent<'button', ButtonProps>, {
    icon,
    children,
    ...rest
}: ButtonProps): JSX.Element => {

    const StyledIcon = icon ? tw(icon)`
        w-4
        h-4
        ml-4
    ` : tw.i``;

    const TextWrapper = tw.span<ButtonProps>`
        w-full
        pr-8
        ${p => p.icon ? 'mr-10' : null}
    `;

    return (
        <ColorButton {...rest}>
            <StyledIcon/>
            <TextWrapper>{children}</TextWrapper>
        </ColorButton>
    );

};
