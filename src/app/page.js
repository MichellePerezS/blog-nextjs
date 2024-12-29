import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const articles = [
    {
      id: "article1",
      title: "Startups Innovadoras que Deberías conocer en 2024",
      image: "/images/startup.jpg",
      description: "Conoce las startups más innovadoras que están cambiando el mundo.",
    },
    {
      id: "article2",
      title: "Los Mejores Gadgets que no sabías que necesitabas",
      image: "/images/gadgets.jpg",
      description: "Descubre los gadgets más innovadores que te harán la vida más fácil.",
    },
    {
      id: "article3",
      title: "Proteger tus Datos: Consejos para Mantener tu Información Segura",
      image: "/images/data.jpg",
      description: "Aprende a proteger tus datos personales y evitar ser víctima de ciberataques.",
    },
  ];

  return (
    <main>
      <div className="grid-container">
        {articles.map((article) => (
          <article key={article.id}>
            <Image
              src={article.image}
              alt={article.title}
              width={300}
              height={200}
            />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <Link href={`/article/${article.id}`}>Leer más</Link>
          </article>
        ))}
      </div>
    </main>
  );
}