import React from "react";
import Person from "./Person";

function NameList() {
  //   const names = ["Sai", "Sreekar", "Sai Sreekar"];
  //   const nameList = names.map((name) => <h2>{name}</h2>);
  //   return <div>{nameList}</div>;

    // const names = ["Sai", "Sreekar", "Sai Sreekar"];
    // const nameList = names.map((name,index) => <h2 key={index}>{index}{name}</h2>);
    // return <div>{nameList}</div>;
  const Persons = [
    {
      id: 1,
      name: "Sai",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Sreekar",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Sai Sreekar",
      age: 28,
      skill: "Vue",
    },
  ];

  const personList = Persons.map((person) => (
    <Person key={person.id} person={person}></Person>
  ));
  return <div>{personList} </div>;
}

export default NameList;
