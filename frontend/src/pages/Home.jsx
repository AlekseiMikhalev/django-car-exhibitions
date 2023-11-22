import Exhibitions from "../components/Exhibitions";
import { ExhibitionsProvider } from "../contexts/ExhibitionsContext";

const Home = () => {
  return (
    <ExhibitionsProvider>
      <div className="container mx-auto">
        <Exhibitions />
      </div>
    </ExhibitionsProvider>
  );
};

export default Home;
