import React, { useState } from "react";
import list from "../data";
import Cards from "./card";
import "../styles/amazon.css";
import list_Pide from "../list_Daten/Pide-data";
import list_Teigwaren from '../list_Daten/list-teigwaren'
import list_Pizza from "../list_Daten/Pizza-list";
import Pasta_list from '../list_Daten/Pasta'; 
import list_verschiedenes from "../list_Daten/Verschiedenes-list";
import list_Burger from "../list_Daten/Burger-list";
import list_Salate from "../list_Daten/Salate";
import list_vergelarisches from "../list_Daten/vergelarisches";
import list_Getränke from "../list_Daten/Getränke";

const Amazon = ({ handleClick }) => {
  return (
    <>

      <div >
        <h1 style={{ marginTop: '100px', textAlign: 'center', color: 'red' }}>Uni-Sezialitäten </h1>
        {list.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />

        ))}
        <h1 style={{ marginTop: '100px', textAlign: 'center', color: 'red' }}>Teigwaren</h1>
        {list_Teigwaren.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />

        ))}
        <h1 style={{ marginTop: '100px', textAlign: 'center', color: 'red' }}>Pide</h1>
        {list_Pide.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />

        ))}
        <h1 style={{ marginTop: '100px', textAlign: 'center', color: 'red' }}>Pizza</h1>
        {list_Pizza.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />

        ))}
        <h1 style={{ marginTop: '100px', textAlign: 'center', color: 'red' }}>Pasta al forno </h1>
        {Pasta_list.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />

        ))}
        <h1 style={{ marginTop: '100px', textAlign: 'center', color: 'red' }}>Verschiedenes </h1>
        {list_verschiedenes.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />

        ))}
        <h1 style={{ marginTop: '100px', textAlign: 'center', color: 'red' }}>Burger & Nuggets </h1>
        {list_Burger.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />

        ))}
        <h1 style={{ marginTop: '100px', textAlign: 'center', color: 'red' }}>Salate </h1>
        {list_Salate.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />

        ))}
        <h1 style={{ marginTop: '100px', textAlign: 'center', color: 'red' }}>Vegetarisches </h1>
        {list_vergelarisches.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />

        ))}
        <h1 style={{ marginTop: '100px', textAlign: 'center', color: 'red' }}>Getränke </h1>
        {list_Getränke.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />

        ))}


      </div>


    </>
  );
};

export default Amazon;