"use client";

import { Avatar, Button, Card } from '@chakra-ui/react';

import { Flex } from "@chakra-ui/react";
import { getData } from '@/service/api';
import styles from "./page.module.css";
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const data = await getData();
      setData(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  type Biography = {
    born: number;
    bornLocation: string;
    died: number;
    diedLocation: string;
  }

  type Character = {
    profileInfos: {
      id: number;
      name: string;
      height: number;
      mass: number;
      gender: string;
      homeworld: string;
      wiki: string;
      image: string;
    };
    biography: Biography;
    hairColor: string;
    eyeColor: string;
    skinColor: string;
    cybernetics: string;
    affiliations: string[];
    masters: string[];
    apprentices: string[];
    formerAffiliations: string[];
  }

  const [loading, setLoading] = useState(false);
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", textAlign: "center" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
          alt="Star Wars Logo" />
        <Button
          onClick={async () => {
            setLoading(true);
            await fetchData();
            setLoading(false);
            document.getElementById("data-section")?.scrollIntoView({ behavior: "smooth" });
          }}
          mt="4"
          loading={loading}
        >
          Fetch Data
        </Button>
      </div>
      <Flex id="data-section" wrap="wrap" gap="4" justify="space-between" padding={"4"}>
        {data.map((character: Character) => (
          <Card.Root key={character.profileInfos.id} width="320px" flex="0 0 calc(33.333% - 16px)" padding={"4"} backgroundColor="#1a1a1a" borderRadius="8px" boxShadow="lg" marginBottom="16px">
            <Card.Body gap="2" padding={"4"}>
              <Avatar.Root size="2xl" shape="rounded" style={{ margin: "0 auto" }}>
                <Avatar.Image src={character.profileInfos.image} alt={character.profileInfos.name} />
                <Avatar.Fallback name={character.profileInfos.name} />
              </Avatar.Root>
              <Card.Title mt="2">{character.profileInfos.name}</Card.Title>
              <Card.Description>
                <p><strong>Height:</strong> {character.profileInfos.height}cm</p>
                <p><strong>Mass:</strong> {character.profileInfos.mass}kg</p>
                <p><strong>Gender:</strong> {character.profileInfos.gender}</p>
                <p><strong>Homeworld:</strong> {character.profileInfos.homeworld}</p>
                <p><strong>Physical Traits:</strong></p>
                <ul>
                  <li>Hair: {character.hairColor}</li>
                  <li>Eyes: {character.eyeColor}</li>
                  <li>Skin: {character.skinColor}</li>
                </ul>
                {character.affiliations.length > 0 && (
                  <p><strong>Affiliations:</strong> {character.affiliations.join(', ')}</p>
                )}
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="outline" as="a" href={character.profileInfos.wiki} target="_blank">
                Wiki
              </Button>
              <Button>Details</Button>
            </Card.Footer>
          </Card.Root>
        ))}
      </Flex><div className={styles.footer}>
      </div>
    </div>

  );
}
