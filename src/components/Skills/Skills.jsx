import { Code2 } from "lucide-react"

export default function Skills() {
    return (
    <section className="skillsSection">
            <SkillsCard
                title="Languages"
                icon={<Code2 size={26} />}
                items={["Go", "TypeScript", "SQL", "Haskell"]}
            />
    </section>
    )
}