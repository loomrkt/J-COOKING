fetch("ListRecettes.json")
  .then((response) => response.json())
  .then((data) => {
    const listRecettes = document.getElementById("listRecettes");
    console.log(data);
    data.forEach((plat) => {
      const cardEl = document.createElement("div");
      cardEl.classList.add(
        "card",
        "bg-transparent",
        "border-0",
        "col-6",
        "col-lg-2"
      );
      cardEl.style.width = "18rem";
      cardEl.style.zIndex = "-1";

      const cardImg = document.createElement("img");
      cardImg.classList.add("card-img-top");
      cardImg.src = `${plat.img} `;
      cardImg.alt = `${plat.alt} `;

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const cardTitre = document.createElement("h5");
      cardTitre.classList.add("card-title");
      cardTitre.textContent = `${plat.titre}`;

      const cardDesc = document.createElement("p");
      cardDesc.classList.add("card-text");
      cardDesc.textContent = `${plat.description}`;

      cardBody.appendChild(cardTitre);
      cardBody.appendChild(cardDesc);
      cardEl.appendChild(cardImg);
      cardEl.appendChild(cardBody);
      listRecettes.appendChild(cardEl);
    });
  })
  .catch((error) => console.error(error));
