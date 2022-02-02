import { useApiContext } from "@app/core/api/ApiContext";
import React, { useEffect, useState } from "react";

export const MainLobby = () => {
  const api = useApiContext();
  const [gameName, setGameName] = useState("");

  useEffect(() => {
    async function fetchGameName() {
      if (api) {
        const response = await api.apiRequest("getDailyGameName");
        setGameName(response?.data.gameName);
      }
    }

    fetchGameName();
  });

  return (
    <div>
      <h1>Welcome to the HelloFresh Game Lobby!</h1>
      <h2>Todays game is {gameName}</h2>
    </div>
  );
};