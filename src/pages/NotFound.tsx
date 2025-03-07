
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center glass-panel p-12 max-w-lg animate-fade-in">
          <h1 className="text-6xl font-bold text-gradient mb-6">404</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Oops! Página não encontrada
          </p>
          <p className="mb-8 text-muted-foreground">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Link 
            to="/" 
            className="button-primary inline-flex items-center"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
