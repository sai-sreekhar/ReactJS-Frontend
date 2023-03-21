import React from "react";
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const params = useParams();
  const userId = params.userId;
  return (
    <div>
      <h2>Details about User {userId}</h2>
    </div>
  );
}
