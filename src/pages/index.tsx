import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

const Index = () => {
  return (
  
      <main className="bg-gray-100">
        
        {/* Render Banner only if session exists */}
        <Banner />
        {/* Render ProductFeed only if session exists */}
        <ProductFeed />
      </main>
  
  );
};

export default Index;
