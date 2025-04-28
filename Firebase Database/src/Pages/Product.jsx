import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Service/firebase";
import { useAuth } from "../Context/AuthContext";


const Product = () => {
  const [productData, setProductData] = useState([]);

  const getDataFromFb = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "product")); // Use correct collection name
      const newArray = [];
      querySnapshot.forEach((doc) => {
        newArray.push({ ...doc.data(), id: doc.id });
      });
      setProductData(newArray); // Set state after collecting all data
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDataFromFb();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        textAlign: "center",
        width: "90%",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      {productData.map((el) => (
        <div
          key={el.id}
          style={{
            border: "1px solid black",
            padding: "30px 20px",
            borderRadius: "20px",
          }}
        >
          <h3>{el.title}</h3>
          <img
            src={el.image}
            alt={el.title}
            style={{ height: "200px", width: "200px" }}
          />
          <h5>{el.description}</h5>
          <h3>{el.category}</h3>
          <h3>${el.price}</h3>
          <div>
            <button style={{ padding: "5px 13px" }}>Delete</button>
            <button style={{ marginLeft: "20px", padding: "5px 20px" }}>
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
