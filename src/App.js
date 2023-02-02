const App = () => {
  const categories = [
    {
      id: 1,
      title: "Kaşar Peynirleri",
    },
    {
      id: 2,
      title: "Beyaz Peynirleri",
    },
    {
      id: 3,
      title: "Tulum Peynirleri",
    },
    {
      id: 4,
      title: "Yağlar",
    },
    {
      id: 5,
      title: "Ballar",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <div className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Şimdi Satın Al</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
