const teamMembers = [
    { name: "Mervyn Clyne" },
    { name: "Vanessa Clyne" },
];

const Team = () => {
    return (
        <section className="py-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Our Team</h2>
            <div className="flex justify-center gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="text-center">
                        <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
                        <h3 className="mt-4">{member.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
