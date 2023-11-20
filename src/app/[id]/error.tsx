"use client";

function ErrorPageRestaurant({error}: {error: Error}) {
  return <h2>{error.message}</h2>;
}

export default ErrorPageRestaurant;
