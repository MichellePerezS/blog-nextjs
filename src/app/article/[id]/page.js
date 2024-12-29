import Link from "next/link";
const articles = {
    article1: {
      title: "Startups Innovadoras que Deberías conocer en 2024",
      content: "Conoce las startups más innovadoras que están cambiando el mundo.",
      image: "/images/startup.jpg",
    },
    article2: {
      title: "Los Mejores Gadgets que no sabías que necesitabas",
      content: "Descubre los gadgets más innovadores que te harán la vida más fácil.",
      image: "/images/gadgets.jpg",
    },
    article3: {
      title: "Proteger tus Datos: Consejos para Mantener tu Información Segura",
      content: "Aprende a proteger tus datos personales y evitar ser víctima de ciberataques.",
      image: "/images/data.jpg",
    },
  };
  
  export default function Article({ params }) {
    const { id } = params;
    const article = articles[id];
  
    if (!article) {
      return <p>Artículo no encontrado</p>;
    }
  
    return (
      <main>
        <h1>{article.title}</h1>
        <img src={article.image} alt={article.title} width="600" />
        <p>{article.content}</p>
        <Link href="/">
        <button style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#0c3660",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}>
          Volver al Inicio
        </button>
      </Link>

      </main>
    );
  }