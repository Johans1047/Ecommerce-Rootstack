import PropTypes from "prop-types";

export default function FloatingAnchor({href, bi, title}) {
    return (
        <div className="fixed z-10 bottom-4 right-4">
            <a href={href} title={title} className="aspect-square h-auto rounded-full flex-center overflow-hidden btn-primary">
                <i className={"bi " + bi + " text-4xl flex-center p-2"}></i>
            </a>
        </div>
    );
}

FloatingAnchor.propTypes = {
    href: PropTypes.string.isRequired,
    bi: PropTypes.string.isRequired,
    title: PropTypes.string
};