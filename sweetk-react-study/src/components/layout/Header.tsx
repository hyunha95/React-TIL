type Props = {
    title?: string;
    description: string;
    company: string;
};

/**
 * @description 헤더 컴포넌트
 * @see [https://jsdoc.app/]
 */
function Header({ title, description, company }: Props) {
    return (
        <>
            <h1>{title}</h1>
            <h1>{description}</h1>
            <h1>{company}</h1>
        </>
    );
}

export default Header;
