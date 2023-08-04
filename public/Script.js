function loadDishes() {
  return new Promise((resolve, reject) => {
    fetch("https://api-dishes.vercel.app/")
      .then((resp) => resp.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
}

