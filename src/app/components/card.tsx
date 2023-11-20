import type {Restaurant} from "@/api";

import Link from "next/link";

interface CardProps {
  restaurant: Restaurant;
}

export function Card({restaurant}: CardProps): React.JSX.Element {
  const {id, name, description, image, ratings, score} = restaurant;

  return (
    <article key={id} className="">
      <img alt={`${name}`} className="mb-3 h-[300px] w-full rounded-md object-cover" src={image} />
      <span className="flex items-end gap-1">
        <Link href={`/${id}`}>
          <h3>
            <strong>{name}</strong>
          </h3>
        </Link>
        <span>⭐</span>
        <small>{score}</small>
        <small className="text-gray-400">({ratings})</small>
      </span>
      <p className="opacity-80">{description}</p>
    </article>
  );
}

export default Card;
