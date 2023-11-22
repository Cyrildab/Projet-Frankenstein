function Filter() {
  const Foodlist = [
    { id: 1, name: "Mafé", complexity: 3, taste: 6 },
    { id: 2, name: "Axoa", complexity: 2, taste: 7 },
    { id: 3, name: "PadThaï", complexity: 6, taste: 8 },
    { id: 4, name: "Ramen", complexity: 8, taste: 6 },
  ];

  const MyTaste = Foodlist.filter((e) => e.taste > 7);

  return (
    <>
      <main>
        <h1>Voici une liste de plat :</h1>
        {Foodlist.map((e) => (
          <p className="dish" key={e.id}>
            {e.name}
          </p>
        ))}
      </main>
      <h2>Et mon plat préféré dans cette liste est : </h2>
      {MyTaste.map((dish) => (
        <p key={dish.id}>{dish.name}</p>
      ))}
    </>
  );
}

export default Filter;
