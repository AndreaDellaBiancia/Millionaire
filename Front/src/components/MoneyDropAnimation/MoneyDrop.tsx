import { useEffect } from "react";
import coinImg from "../../assets/images/gold-coin.svg";
import "./style.css"
function MoneyDrop() {

  // On genere l'animation des pieces dorées qui tombent à la question de 1000000 d'euros
  useEffect(() => {
    const container = document.getElementById('coin-container');
    
    const numCoins = 70;

    for (let i = 0; i < numCoins; i++) {
      const coin = document.createElement('img');
      coin.src = coinImg;
      coin.className = 'animate__animated animate__fadeOutDownBig';
      coin.style.position = 'absolute';
      coin.style.width = '100px';
      coin.style.top = `${-Math.random() * 1500}px`;

      if (container) {

      coin.style.left = `${Math.random() * (container.clientWidth - 120 )}px`;
      container.appendChild(coin);
      }
     
    }
  }, []);

  return (
    <div id="coin-container" style={{ position: 'absolute', width: '100%', height: '100vh' }}>
      
    </div>
  );
};
  
export default MoneyDrop;