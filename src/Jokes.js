import React from "react";

export const Jokes = () => {
  const listJokes = [
    'Moi l\'alcool CHARETTE',
    'Demain charette 1',
    'Demain charette 2']
  const sentence = listJokes[Math.floor(Math.random() * listJokes.length)]
  return (
    <p>
      { sentence + " ici" }
    </p>
  )
}