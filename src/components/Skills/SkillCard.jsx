function SkillsCard({icon, title, items}) {
    return (
    <article className="skillsCard">
        <div className="skillsCardIcon">{icon}</div>
        <h3 className="skillsCardTitle">{title}</h3>
        <div className="skillsChips">
            {items.map((item) => (
            <span key={item} className="skillsChip">
                {item}
            </span>
            ))}
        </div>
    </article>
    );
}


export default SkillsCard