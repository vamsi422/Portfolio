interface Project {
  title: string;
  desc: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Restaurant Ordering System",
    desc: "MERN-based platform for restaurants to accept online orders.",
    link: "https://github.com/vamsi422/restaurant-ordering",
  },
  {
    title: "Flutter Expense Tracker",
    desc: "Mobile app to track daily expenses and budgets.",
    link: "https://github.com/vamsi422/flutter-expense-tracker",
  },
  {
    title: "Starknet Voting dApp",
    desc: "Blockchain voting app built with Cairo & React.",
    link: "https://github.com/vamsi422/starknet-voting",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <div key={i} className="bg-white shadow rounded-lg p-5">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
