// components/PortfolioSidebar.tsx
import Link from "next/link";

const characters = [
  { name: "Weight Bearer", slug: "weight-bearer" },
  { name: "Momentum Sculptor", slug: "momentum-sculptor" },
];

export default function PortfolioSidebar() {
  return (
    <div className="w-48 flex flex-col gap-4 border-r pr-4">
      {characters.map((char) => (
        <Link key={char.slug} href={`/portfolio/${char.slug}`}>
          <span className="cursor-pointer hover:text-gray-900 text-gray-600">
            {char.name}
          </span>
        </Link>
      ))}
    </div>
  );
}