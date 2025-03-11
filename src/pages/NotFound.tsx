
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { AnimatedText } from "../components/AnimatedText";

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
      <section className="py-32 min-h-[80vh] flex items-center">
        <div className="container-tight text-center">
          <AnimatedText>
            <h1 className="text-8xl font-bold mb-4">404</h1>
          </AnimatedText>
          
          <AnimatedText delay={0.2}>
            <h2 className="text-2xl mb-6">Page Not Found</h2>
          </AnimatedText>
          
          <AnimatedText delay={0.4} className="mb-8 max-w-lg mx-auto">
            <p className="text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
          </AnimatedText>
          
          <AnimatedText delay={0.6}>
            <Link to="/" className="btn-primary inline-flex items-center">
              <Home className="mr-2 h-5 w-5" />
              Return to Home
            </Link>
          </AnimatedText>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
