import api from "@/api";

import Card from "./components/card";

export default async function HomePage() {
  const restaurantes = await api.listGoogleSheets();

  return (
    <section>
      <ul className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {restaurantes.map((restaurant) => {
          return <Card key={restaurant.id} restaurant={restaurant} />;
        })}
      </ul>
    </section>
  );
}
