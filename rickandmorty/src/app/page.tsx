"use client";
import Image from "next/image";
import CharacterCard from "./components/CharacterCard";
import { useEffect, useState } from "react";
import { Character } from "./components/CharacterCard";

export default function Home() {
  // useEffect()=>{
  //   fetch("https://rickandmortyapi.com/api/character")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  // }
  const [maxPage, setMaxPage] = useState<boolean>(false);
  const [currPage, setCurrPage] = useState(1);
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
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);

  const loadPage = (page: number) => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        if (data.info.next == null) setMaxPage(true);
        console.log(data.info.next);
        console.log(data.info.next == null);
      });
  };

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
      <header>Personajes de Rick And Morty</header>
      <div className="flex flex-wrap basis-3/12">
        {characters.map((character: Character) => (
          <CharacterCard
            key={character.id}
            character={character}
            addFavoriteFunc={addFavorite}
            isFavorite={favorites.includes(character.id) ? true : false}
          ></CharacterCard>
        ))}
        {/* <CharacterCard></CharacterCard>
        <CharacterCard></CharacterCard>
        <CharacterCard></CharacterCard> */}
      </div>
      <footer className="w-[100vw] h-[100px] bg-slate-400 flex items-center justify-center gap-20">
        <button
          onClick={
            currPage != 1
              ? () => {
                  loadPage(currPage - 1);
                  setCurrPage(currPage - 1);
                }
              : () => {}
          }
          className="rounded-lg bg-green-300 px-5 py-3 hover:bg-green-400 transition duration-200"
        >
          Prev
        </button>
        <div className="rounded-full py-4 px-6 bg-green-300">{currPage}</div>
        <button
          onClick={
            maxPage
              ? () => {}
              : () => {
                  loadPage(currPage + 1);
                  setCurrPage(currPage + 1);
                }
          }
          className="rounded-lg bg-green-300 px-5 py-3 hover:bg-green-400 transition duration-200"
        >
          Next
        </button>
      </footer>
    </main>
  );
}
