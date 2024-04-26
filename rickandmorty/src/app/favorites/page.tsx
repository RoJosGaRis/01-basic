"use client";
import Image from "next/image";
import CharacterCard from "../components/CharacterCard";
import { useEffect, useState } from "react";
import { Character } from "../components/CharacterCard";

export default function Home() {
  // useEffect()=>{
  //   fetch("https://rickandmortyapi.com/api/character")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  // }

  const [characters, setCharacters] = useState<Character[]>([]);
  const [favorites, setFavorites] = useState<number[]>(
    typeof window === undefined
      ? localStorage.getItem("favorites")
        ? JSON.parse(localStorage.getItem("favorites") as string)
        : []
      : []
  );

  useEffect(() => {
    let favorites = localStorage.getItem("favorites");
    setFavorites(favorites ? JSON.parse(favorites) : []);
    if (favorites?.length != 0) {
      fetch(
        `https://rickandmortyapi.com/api/character/${favorites?.toString()}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCharacters(data);
        });
    }
  }, []);

  const addFavorite = (id: number) => {
    let newFavorites = favorites;
    if (newFavorites.includes(id)) {
      newFavorites = newFavorites.filter((fav) => fav !== id);
    } else {
      newFavorites.push(id);
    }
    // console.log(favorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  return (
    <main className="flex min-h-screen flex-col bg-slate-500 items-center p-12">
      {/* <header>Personajes de Rick And Morty</header> */}
      <div className="flex flex-wrap basis-3/12">
        {characters.length > 0
          ? characters.map((character: Character) => (
              <CharacterCard
                key={character.id}
                character={character}
                addFavoriteFunc={addFavorite}
                isFavorite={favorites.includes(character.id) ? true : false}
              ></CharacterCard>
            ))
          : "NO FAVORITES"}
        {/* <CharacterCard></CharacterCard>
        <CharacterCard></CharacterCard>
        <CharacterCard></CharacterCard> */}
      </div>
    </main>
  );
}
