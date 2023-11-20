import Link from "next/link";

import api from "@/api";

async function RestaurantPage({params: {id}}: {params: {id: string}}) {
  const restaurant = await api.fetch(id);

  const {id: restaurantId, name, image, description, address, ratings, score} = restaurant;

  return (
    <>
      <article key={restaurantId}>
        <img alt={name} className="m-auto mb-3 shadow-md shadow-slate-400/50" src={image} />
        <div className="mb-3 flex items-center gap-2">
          <h2 className="text-lg font-bold">{name}</h2>
          <span>⭐</span>
          <span>{score}</span>
          <span className="text-md opacity-90">{ratings}</span>
        </div>
        <span>{address}</span>
        <p>{description}</p>
      </article>
      <Link href="/">Volver</Link>
    </>
  );
}

export default RestaurantPage;
