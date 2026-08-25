import React, { useState } from 'react';

const productsData = [
  { id: 1, name: "Dolo 650mg", category: "Tablets", price: 35.00, image: "https://www.apollopharmacy.in/catalog/product/d/o/dol0026_1-.jpg" },
  { id: 2, name: "Benadryl Cough Syrup", category: "Syrup", price: 65.70, image: "https://d1s24u4ln0wd0i.cloudfront.net/med/1339/BENADRYL%20COUGH%20SYRUP%2050%20ML_1.webp" },
  { id: 3, name: "Dolokind Injection", category: "Injection", price: 45.69, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzNPVSCD4a1UFSnmTPDp7eezRzsk2FB6WjYMZNif6CQ&s=10" },
  { id: 4, name: "Antiseptic Ointment", category: "Ointment", price: 105.00, image: "https://5.imimg.com/data5/LM/AH/DH/GLADMIN-64704630/ointment-large-500x500.jpg" },
  { id: 5, name: "Paracetamol", category: "Tablets", price: 109.00, image: "https://tse3.mm.bing.net/th/id/OIP.0-yGbnDeULDTvg38GyBh5QHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 6, name: "Carisoprodol", category: "Tablets", price: 300.00, image: "https://tiimg.tistatic.com/fp/1/008/578/pain-killer-tablets-500-mg-599.jpg" },
  { id: 7, name: "Taro Antibiotic Ointment", category: "Ointment", price: 420.00, image: "https://i5.walmartimages.com/seo/Taro-Triple-Antibiotic-Topical-Ointment-1-Oz_f5271922-625b-4fa6-8001-813741a95018.599625e8d685323c074179c3c475daca.jpeg" },
  { id: 8, name: "Omavdex Syrup", category: "Syrup", price: 220.00, image: "https://tse3.mm.bing.net/th/id/OIP.9zIHMSXISIh25EEAZ8URPQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" }
];

const categories = ["All", "Tablets", "Injection", "Syrup", "Ointment"];

export default function MedicalShop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts = selectedCategory === "All"
    ? productsData
    : productsData.filter(product => product.category === selectedCategory);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const handleBuyNow = (productName) => {
    alert(`Proceeding to checkout for ${productName}`);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to GS Medical Shop</h1>
        <div style={styles.cartBadge}>Cart: {cartCount} items</div>
      </header>

      <div style={styles.marquee}>
        All your prescriptions in one friendly place with great discounts — hurry up!
      </div>

      <nav style={styles.nav}>
        {categories.map(cat => (
          <button
            key={cat}
            style={{
              ...styles.navButton,
              backgroundColor: selectedCategory === cat ? '#38bdf8' : '#ffffff',
              color: selectedCategory === cat ? '#ffffff' : '#0f172a'
            }}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>

      <main style={styles.main}>
        <div style={styles.gallery}>
          {filteredProducts.map(product => (
            <div key={product.id} style={styles.card}>
              <img src={product.image} alt={product.name} style={styles.image} />
              <p style={styles.productInfo}>{product.name} — ₹{product.price.toFixed(2)}</p>
              <div style={styles.buttonGroup}>
                <button 
                  style={{ ...styles.btn, ...styles.btnBuy }} 
                  onClick={() => handleBuyNow(product.name)}
                >
                  Buy
                </button>
                <button 
                  style={{ ...styles.btn, ...styles.btnCart }} 
                  onClick={handleAddToCart}
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2026 GS Medical Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f7cce3',
    color: '#0c0a0a',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    padding: '15px 20px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box'
  },
  title: {
    margin: 0,
    color: '#cc7614',
    fontSize: '24px'
  },
  cartBadge: {
    backgroundColor: '#7e6fbf',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    fontWeight: 'bold'
  },
  marquee: {
    backgroundColor: '#3f5077',
    color: '#7ebfdb',
    padding: '12px',
    fontWeight: '600',
    textAlign: 'center'
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    padding: '15px'
  },
  navButton: {
    border: 'none',
    padding: '10px 20px',
    borderRadius: '25px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'all 0.2s ease'
  },
  main: {
    flex: 1,
    padding: '20px'
  },
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '10px',
    width: '220px',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'contain',
    borderRadius: '8px'
  },
  productInfo: {
    margin: '15px 0',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonGroup: {
    display: 'flex',
    gap: '8px',
    width: '100%'
  },
  btn: {
    flex: 1,
    padding: '8px 12px',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    cursor: 'pointer'
  },
  btnBuy: {
    backgroundColor: '#22c55e',
    color: 'white'
  },
  btnCart: {
    backgroundColor: '#eab308',
    color: 'white'
  },
  footer: {
    backgroundColor: '#7e6fbf',
    color: 'white',
    padding: '15px 0',
    textAlign: 'center',
    marginTop: 'auto'
  }
};