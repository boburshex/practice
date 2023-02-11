import React, { useEffect } from "react"
import { useState } from "react"
import n1 from '../img/n1.png'
import n2 from '../img/n2.png'
import n3 from '../img/n3.png'
import s1 from '../img/2.png'
import s2 from '../img/3.png'
import s3 from '../img/4.png'
import s4 from '../img/5.png'
import r1 from '../img/8.png'
import r2 from '../img/9.png'
import r3 from '../img/10.png'
import r4 from '../img/11.png'
import k2 from '../img/12.png'
import k3 from '../img/13.png'
import k4 from '../img/14.png'
import k5 from '../img/15.png'
import k6 from '../img/16.png'
import k7 from '../img/17.png'
import k8 from '../img/18.png'
import k9 from '../img/19.png'
import k10 from '../img/20.png'
import k11 from '../img/21.png'
import k12 from '../img/22.png'
import k13 from '../img/23.png'
import k14 from '../img/24.png'
import k15 from '../img/25.png'
import k16 from '../img/26.png'
import x1 from '../img/k1.png'
import x2 from '../img/k2.png'
import x3 from '../img/k3.png'
import x4 from '../img/k4.png'
import x5 from '../img/k5.png'
import x6 from '../img/k6.png'
import x7 from '../img/k7.png'
import x8 from '../img/k8.png'
import x9 from '../img/k9.png'
import d1 from '../img/c1.png'
import d2 from '../img/c2.png'
import d3 from '../img/c3.png'
import d4 from '../img/c4.png'
import d5 from '../img/c5.png'
import Swal from "sweetalert2"
import sh1 from '../img/sh1.png'
import sh2 from '../img/sh2.png'
import sh3 from '../img/sh3.png'
import sh4 from '../img/sh4.png'
import { useParams } from "react-router-dom"
export const DataContext = React.createContext()
export const DataContextProvider = ({ children }) => {
  const [s, setS] = useState(false)
  const open1 = () => {
    setS(!s)
  }
  const [card1, setCard1] = useState([
    {
      img: n1,
      name: 'Product Support',
      tex: 'Up to 3 years on-site warranty available for your peace of mind.'
    },
    {
      img: n2,
      name: 'Personal Account',
      tex: 'With big discounts, free delivery and a dedicated support specialist.'
    },
    {
      img: n3,
      name: 'Amazing Savings',
      tex: 'Up to 70% off new Products, you can be sure of the best price.'
    },

  ])
  const [modal, setModal] = useState(false)
  const modalOpen = () => {
    setModal(!modal)
  }
  const [data, setData] = useState([
    {
      id: 0,
      count: 1,
      like: false,
      add: 'in stock',
      img: s1,
      chegrma: "400.00",
      narhi: 399.99,
    },
    {
      id: 1,
      count: 1,
      like: false,
      add: 'check availability',
      narhi: 399.99,
      img: s2,
      chegrma: "400.00"
    },
    {
      id: 2,
      count: 1,
      like: false,
      add: 'in stock',
      narhi: 399.99,
      chegrma: "400.00",
      img: s3,
    },
    {
      id: 3,
      count: 1,
      like: false,
      add: 'in stock',
      narhi: 399.99,
      chegrma: "400.00",
      img: s4,
    },
    {
      id: 4,
      count: 1,
      like: false,
      add: 'in stock',
      narhi: 399.99,
      chegrma: "400.00",
      img: s3,
    },
    {
      id: 5,
      count: 1,
      like: false,
      add: 'in stock',
      narhi: 399.99,
      chegrma: "400.00",
      img: s3,
    },
    {
      id: 6,
      count: 1,
      like: false,
      add: 'in stock',
      narhi: 399.99,
      chegrma: "400.00",
      img: s1,
    },
    {
      id: 7,
      count: 1,
      like: false,
      add: 'check availability',
      narhi: 399.99,
      chegrma: "400.00",
      img: s2,
    },
    {
      id: 8,
      count: 1,
      like: false,
      add: 'in stock',
      chegrma: "400.00",
      narhi: 399.99,
      img: s3,
    },
    {
      id: 9,
      count: 1,
      like: false,
      narhi: 399.99,
      add: 'in stock',
      chegrma: "400.00",
      img: s4,
    },
    {
      id: 10,
      like: false,
      narhi: 399.99,
      add: 'in stock',
      img: s3,
      chegrma: "400.00",
      count: 1,
    },
    {
      id: 11,
      like: false,
      count: 1,
      narhi: 399.99,
      add: 'in stock',
      chegrma: "400.00",
      img: s3,
    },
    {
      id: 12,
      like: false,
      narhi: 399.99,
      count: 1,
      add: 'in stock',
      chegrma: "400.00",
      img: s1,
    },
    {
      narhi: 399.99,
      id: 13,
      like: false,
      count: 1,
      add: 'check availability',
      chegrma: "400.00",
      img: s2,
    },
    {
      id: 14,
      narhi: 399.99,
      count: 1,
      like: false,
      add: 'in stock',
      chegrma: "400.00",
      img: s3,
    },
    {
      id: 15,
      count: 1,
      like: false,
      add: 'in stock',
      img: s4,
      chegrma: "400.00",
      narhi: 399.99,


    },
    {
      id: 16,
      count: 1,
      like: false,
      add: 'in stock',
      img: s3,
      chegrma: "400.00",
      narhi: 399.99,


    },
    {
      id: 17,
      like: false,
      add: 'in stock',
      img: s3,
      chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
  ])
  const [data1, setData1] = useState([
    {
      id: 18,
      like: false,
      add: 'in stock',
      img: k2,
      chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
    {
      id: 19,
      like: false,
      add: 'check availability',
      img: k3, chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
    {
      id: 20,
      like: false,
      add: 'in stock',
      img: k4, chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
    {
      id: 21,
      like: false,
      add: 'in stock',
      img: k5, chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
    {
      id: 22,
      like: false,
      add: 'in stock',
      img: k6, chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
    {
      id: 23,
      like: false,
      add: 'in stock',
      img: k11, chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
    {
      id: 24,
      like: false,
      add: 'in stock',
      img: k7, chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
    {
      id: 25,
      like: false,
      add: 'check availability',
      img: k8, chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
    {
      id: 26,
      like: false,
      add: 'in stock',
      img: k9, chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
    {
      id: 27,
      like: false,
      add: 'in stock',
      img: k10, chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
    {
      id: 28,
      like: false,
      add: 'in stock',
      img: k11, chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
    {
      id: 29,
      like: false,
      add: 'in stock',
      img: k12, chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
    {
      id: 30,
      like: false,
      add: 'in stock',
      img: k13,
      chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
    {
      id: 31,
      like: false,
      add: 'check availability',
      img: k14, chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
    {
      id: 32,
      like: false,
      add: 'in stock',
      img: k15, chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
    {
      id: 33,
      like: false,
      add: 'in stock',
      img: k16, chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
    {
      id: 34,
      like: false,
      add: 'in stock',
      img: k12, chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
    {
      id: 35,
      like: false,
      add: 'in stock',
      img: k9, chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
    {
      id: 36,
      like: false,
      add: 'in stock',
      img: k12,
      chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
    {
      id: 37,
      like: false,
      add: 'in stock',
      img: k9,
      chegrma: "400.00",
      narhi: 399.99,
      count: 1
    },
  ])
  const [data2, setData2] = useState([
    {
      id: 38,
      count: 1,
      like: false,
      add: 'in stock',
      img: d1,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'Lenovo'
    },
    {
      id: 39,
      count: 1,
      like: false,
      add: 'check availability',
      img: d2,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'Lenovo'
    },
    {
      id: 40,
      count: 1,
      like: false,
      add: 'in stock',
      img: d3,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'Lenovo'
    },
    {
      id: 41,
      count: 1,
      like: false,
      add: 'in stock',
      img: d4,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'Lenovo'
    },
    {
      id: 42,
      like: false,
      count: 1,
      add: 'in stock',
      img: d5,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'Lenovo'
    },
    {
      id: 43,
      like: false,
      count: 1,
      add: 'in stock',
      img: k11,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'HP'
    },
    {
      id: 44,
      count: 1,
      like: false,
      add: 'in stock',
      img: k7,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'HP'
    },
    {
      id: 45,
      count: 1,
      like: false,
      add: 'check availability',
      img: k8,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'HP'
    },
    {
      id: 46,
      count: 1,
      like: false,
      add: 'in stock',
      img: k9,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'HP'
    },
    {
      id: 47,
      count: 1,
      add: 'in stock',
      img: k10,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'HP'

    },
    {
      id: 48,
      count: 1,
      like: false,
      add: 'in stock',
      img: k11,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'Samsung'
    },
    {
      id: 49,
      count: 1,
      like: false,
      add: 'in stock',
      img: k12,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'Samsung'
    },
    {
      id: 50,
      count: 1,
      like: false,
      add: 'in stock',
      img: k13,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'Samsung'
    },
    {
      id: 51,
      count: 1,
      like: false,
      add: 'check availability',
      img: k14,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'Samsung'
    },
    {
      id: 52,
      count: 1,
      like: false,
      add: 'in stock',
      img: k15,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'Samsung'
    },
    {
      id: 53,
      count: 1,
      like: false,
      add: 'in stock',
      img: k16,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'Asus'
    },
    {
      id: 54,
      count: 1,
      like: false,
      add: 'in stock',
      img: k12,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'Asus'
    },
    {
      id: 55,
      like: false,
      count: 1,
      add: 'in stock',
      img: k9,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'Asus'
    },
    {
      id: 56,
      like: false,
      add: 'in stock',
      count: 1,
      img: k12,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'Asus'
    },
    {
      id: 57,
      like: false,
      count: 1,
      add: 'in stock',
      img: k9,
      chegrma: "400.00",
      narhi: 399.99,
      full_name: 'Macbook'
    },
  ])
  const [bascket, setBascket] = useState(
    JSON?.parse(localStorage?.getItem('bascket')) || []
  )
  const savat = (item) => {
    if (bascket.filter(bas => bas.id === item.id).length === 0) {
      localStorage.setItem('bascket', JSON.stringify([...bascket, item]))
      // setBascket([...bascket, item])
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Savatga Qoshildi',
        showConfirmButton: false,
        timer: 400
      })
    }
    else {
      setBascket(bascket => bascket.map(bascket => bascket.id === item.id ? item : bascket))
    }
    setBascket(JSON.parse(localStorage.getItem('bascket')) || [])
    console.log(JSON.parse(localStorage.getItem('bascket')));
  }
  const basketPlas = (id) => {
    if (bascket.filter((item) => item.id === id).length > 0) {
      setBascket(bascket => bascket.map(bascket => bascket.id === id ? { ...bascket, count: bascket.count + 1 } : bascket))
    }
  }
  const [otaData, setOtaDat] = useState([...data, ...data1, ...data2])
  const [sevimli, setSevimli] = useState([])
  const like = (item) => {
    localStorage.setItem('like2', JSON.stringify([...data2, item]))
    setData2(
      data2.map((val) => (
        item.id === val.id ? { ...val, like: !val.like } : val
      ))
    )
  }
  const like1 = (item) => {
    localStorage.setItem('like', JSON.stringify([...data, item]))
    setData(
      data.map((val) => (
        item.id === val.id ? { ...val, like: !val.like } : val
      ))
    )
  }
  const like2 = (item) => {
    localStorage.setItem('like1', JSON.stringify([...data1, item.id]))
    setData1(
      data1.map((val) => (
        item.id === val.id ? { ...val, like: !val.like } : val
      ))
    )
  }
  const [msi, setMsi] = useState([
    {
      id: 0,
      img: r1,
      name: 'Custome Builds',
      title: 'See All Products'
    },
    {
      id: 1,
      img: r2,
      name: 'MSI Laptops',
      title: 'See All Products'
    },
    {
      id: 2,
      img: r3,
      name: 'Desktops',
      title: 'See All Products'
    },
    {
      id: 3,
      img: r4,
      name: 'Gaming Monitors',
      title: 'See All Products'
    },

  ])
  const [xona, setXona] = useState([
    {
      id: 0,
      img: x1,
      name: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
      data: '01.09.2020'
    },
    {
      id: 1,
      img: x2,
      name: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
      data: '01.09.2020'
    },
    {
      id: 2,
      img: x3,
      name: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
      data: '01.09.2020'
    },
    {
      id: 3,
      img: x4,
      name: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
      data: '01.09.2020'
    },
    {
      id: 4,
      img: x5,
      name: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
      data: '01.09.2020'
    },
    {
      id: 5,
      img: x6,
      name: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
      data: '01.09.2020'
    },
    {
      id: 6,
      img: x7,
      name: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
      data: '01.09.2020'
    },
    {
      id: 7,
      img: x8,
      name: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
      data: '01.09.2020'
    },
    {
      id: 8,
      img: x9,
      name: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
      data: '01.09.2020'
    },

  ])
  const [colom, setColom] = useState(false)
  const colOp = () => {
    setColom(!colom)
  }
  const [mene, setMene] = useState(false)
  const meneOp = () => {
    setMene(!mene)
  }
  const [showdata, setShowdata] = useState([
    { id: 0, img: sh1, title: 'Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.' },
    { id: 1, img: sh2, title: 'The new GeForce® RTX SUPER™ Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs.' },
    { id: 2, img: sh3, title: 'Unleash the full potential with the latest SSD technology, the NVM Express. 6 times faster than traditional SATA SSD.' },
    { id: 3, img: sh4, title: 'Featuring the latest 10th Gen Intel® Core™ processors, memory can support up to DDR4 2933MHz to delivers an unprecedented gaming experience.' },
  ])
  const [count, setCount] = useState(0)
  const plus = (id) => {
    setBascket(data => data.map(item => item.id === id ? { ...item, count: item.count + 1 } : item));
    localStorage.setItem('bascket', JSON.stringify(bascket))

    // setBascket(
    //   { ...bascket, count: bascket.count + 1 }
    //)
  }
  const minus = (id) => {
    setBascket(data => data.map(item => item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item))
    localStorage.setItem('bascket', JSON.stringify(bascket))
    // if(bascket.count > 1) {
    //   setBascket(
    //     { ...bascket, count: bascket.count - 1 }
    //   )
    // }
  }
  const savat_dele = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Savatdan ochirilsinmi',
      text: "Buni qaytara olmaysiz!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ha , o`chirilsin!',
      cancelButtonText: 'Bekor qilish!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        setBascket(bascket.filter((bas) => bas.id !== id));
        localStorage.setItem('bascket', JSON.stringify(bascket.filter((bas) => bas.id !== id)))
        swalWithBootstrapButtons.fire(
          'Savatdan Ochirildi!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  };
  const like_delete = (id) => {
    setData2(
      data2.map((val) => (
        id === val.id ? { ...val, like: false } : val
      ))
    )
  }
  const like_delete1 = (id) => {
    setData(
      data.map((val) => (
        id === val.id ? { ...val, like: false } : val
      ))
    )
  }
  const like_delete2 = (id) => {
    setData1(
      data1.map((val) => (
        id === val.id ? { ...val, like: false } : val
      ))
    )
  }
  const [search, setSearch] = useState("")
  return (
    <DataContext.Provider value={{
      s, open1, card1, modal, modalOpen, data, like, savat, bascket, msi, data1, xona,
      colom, colOp, data2, sevimli, mene, meneOp, showdata, count, plus, minus, savat_dele, like_delete, search, setSearch,
      like1, like2, otaData, setOtaDat, like_delete1, like_delete2, basketPlas
    }}>
      {children}
    </DataContext.Provider>
  )
}