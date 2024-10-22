import PropTypes from "prop-types";
export default function MemberCard({name, role, description, profileUrl="/images/team/jonathan-salazar.jpg"}) {
    return (
        <div className="w-full max-w-sm shadow shadow-black rounded flex flex-col items-center gap-4 high-contrast p-6">
            <div className="h-32 aspect-square w-auto rounded-full flex-center overflow-hidden">
                <img src={profileUrl} alt={name + "'s profile"} className="w-full h-full" />
            </div>
            <h2 className="text-xl font-semibold text-center">{name}</h2>
                <h3 className="text-voyage-500 text-center font-semibold">{role}</h3>
                <p className="text-center line-clamp-4">{description}</p>
        </div>
    );
}

MemberCard.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}