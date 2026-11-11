// @ts-nocheck
import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }

  changeDetail = () => {
    this.setState({
      color: "blue",
      brand: "Tesla",
      model: "Model S",
      year: 2023,
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
    // runs after first render => RETRIEVE DATA FROM BACKEND SERVER
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    // runs before component unmount
  }

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          Color: {this.state.color} - Model: {this.state.model} from{" "}
          {this.state.year}.
        </p>
        <button type="button" onClick={this.changeDetail}>
          Change Detail
        </button>
      </div>
    );
  }
}

export default Test;

/**
 * TypeScript => in development
 * JavaScript => in deploy & production
 * Design Pattern & Architexture pattern
 *
 * MVC => Model, View , Controller
 * Data flow => yagona oqimga ega emas
 * No concept of Store
 * Business logic => Controller
 * backend and frontend usable
 *
 *Redux — bu JavaScript ilovalarida state management (holatlarni boshqarish) uchun ishlatiladigan kutubxona.

Oddiy qilib aytganda, Redux ilovadagi ma'lumotlarni bitta markaziy joyda saqlash va ularni turli componentlar orasida boshqarish imkonini beradi.
1. Redux nima uchun kerak?
Misol biz e-commerce loyiha qilyapmiz

Bizda quyidagi conponentlar bor
- Navbar — savatchadagi mahsulotlar sonini ko'rsatadi.
- ProductList — mahsulotlarni ko'rsatadi.
- ProductDetails — mahsulot haqida ma'lumot beradi.
- Cart — savatchadagi mahsulotlarni ko'rsatadi.
Foydalanuvchi ProductList dan mahsulotni savatchaga qo'shdi.

Endi Navbar ham savatchadagi mahsulotlar sonini yangilashi kerak.

Redux bo'lmasa, ma'lumotlarni componentlar orasida uzatish murakkablashishi mumkin. Redux esa umumiy ma'lumotlarni markaziy store'da saqlaydi.
 
* Redux => 4 qismdan iborat React bilan kop ishlatiladi
 * Data flow => yagona oqimga ega  control over data flow
 * Single Storage based => easy to get data from any conponents
 * Business logic => Reducers action
 * only frontend usable client based
 *
 *
 * REDUX TOOLKIT
 * DISPATCH - Slice backend dan kelgan malumotlarni store ga yozadi
 * SUBSCRIBE - Selector Store dagi malumotni View ga yetkazadi.
 * 
 * Redux Toolkit — bu Redux jamoasining o’zi tomonidan yaratilgan va Redux bilan ishlashning rasmiy tavsiya etilgan usuli. U oddiy Redux’ning eng katta kamchiliklarini bartaraf etadi: ortiqcha kod (boilerplate), murakkab sozlash va ko’p qo’lda yoziladigan narsalar.

Oddiy Redux’ning muammolari
Action type’lar, action creator’lar va reducer’larni alohida-alohida yozish kerak edi
State’ni o’zgartirmaslik uchun ...spread bilan qo’lda nusxa olish kerak edi
Store’ni sozlash uzun va murakkab edi
Asinxron ishlar (API) uchun qo’shimcha kutubxona kerak edi

1. configureStore — oson store yaratish
Store’ni sozlashni bir qatorga keltiradi va DevTools hamda kerakli middleware’larni avtomatik ulaydi.
 *
 *
 * 1 - View
 * 2 - Action
 * 3 - Reducers
 * 4 - Store
 *
 * Dispatch
 */
