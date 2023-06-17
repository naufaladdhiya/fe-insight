let categories = [
  {
    id: 1,
    name: 'Gaming',
    description: 'click here to find your laptop !',
    laptops: [
      {
        nama: 'ASUS ROG Strix Scar III',
        spesifikasi: {
          processor: 'Intel Core i7-9750H',
          ram: '16GB DDR4',
          storage: '512GB SSD + 1TB HDD',
          grafis: 'NVIDIA GeForce RTX 2070',
          layar: '15.6 inci Full HD 144Hz',
          harga: 'Rp. 29.800.000',
        },
        gambar: '../../public/assets/images/gaming.png',
      },
      {
        nama: 'MSI GS65 Stealth',
        spesifikasi: {
          processor: 'Intel Core i7-10750H',
          ram: '32GB DDR4',
          storage: '1TB NVMe SSD',
          grafis: 'NVIDIA GeForce RTX 3060',
          layar: '15.6 inci Full HD 240Hz',
          harga: 'Rp. 26.785.000',
        },
        gambar: '../../public/assets/images/2G.png',
      },
      {
        id: 3,
        nama: 'Razer Blade 15',
        spesifikasi: {
          processor: 'Intel Core i7-10875H',
          ram: '16GB DDR4',
          storage: '1TB NVMe SSD',
          grafis: 'NVIDIA GeForce RTX 2080 Super',
          layar: '15.6 inci 4K OLED Touch',
          harga: 'Rp. 43.200.000',
        },
        gambar: '../../public/assets/images/3G.png',
      },
      {
        nama: 'Acer Predator Helios 300',
        spesifikasi: {
          processor: 'Intel Core i7-10750H',
          ram: '16GB DDR4',
          storage: '512GB NVMe SSD',
          grafis: 'NVIDIA GeForce RTX 3060',
          layar: '15.6 inci Full HD 144Hz',
          harga: 'Rp. 22.300.000',
        },
        gambar: '../../public/assets/images/4G.png',
      },
      {
        nama: 'Dell G5 15 SE',
        spesifikasi: {
          processor: 'AMD Ryzen 7 4800H',
          ram: '16GB DDR4',
          storage: '512GB NVMe SSD',
          grafis: 'AMD Radeon RX 5600M',
          layar: '15.6 inci Full HD 144Hz',
          harga: 'Rp. 17.800.000',
        },
        gambar: '../../public/assets/images/5G.png',
      },
      {
        nama: 'Lenovo Legion 5i',
        spesifikasi: {
          processor: 'Intel Core i7-11800H',
          ram: '16GB DDR4',
          storage: '1TB NVMe SSD',
          grafis: 'NVIDIA GeForce RTX 3070',
          layar: '15.6 inci Full HD 165Hz',
          harga: 'Rp. 28.300.000',
        },
        gambar: '../../public/assets/images/6G.png',
      },
      {
        nama: 'HP Omen 15',
        spesifikasi: {
          processor: 'AMD Ryzen 9 5900HX',
          ram: '32GB DDR4',
          storage: '1TB NVMe SSD',
          grafis: 'NVIDIA GeForce RTX 3080',
          layar: '15.6 inci 4K OLED',
          harga: 'Rp. 44.600.000',
        },
        gambar: '../../public/assets/images/7G.png',
      },
      {
        nama: 'Alienware m15 R4',
        spesifikasi: {
          processor: 'Intel Core i9-10980HK',
          ram: '32GB DDR4',
          storage: '1TB NVMe SSD',
          grafis: 'NVIDIA GeForce RTX 3080',
          layar: '15.6 inci Full HD 300Hz',
          harga: 'Rp. 49.100.000',
        },
        gambar: '../../public/assets/images/8G.png',
      },
      {
        nama: 'Gigabyte Aorus 15G',
        spesifikasi: {
          processor: 'Intel Core i7-10870H',
          ram: '16GB DDR4',
          storage: '1TB NVMe SSD',
          grafis: 'NVIDIA GeForce RTX 3070',
          layar: '15.6 inci Full HD 240Hz',
          harga: 'Rp. 32.800.000',
        },
        gambar: '../../public/assets/images/9G.png',
      },
      {
        nama: 'Lenovo Legion 7i',
        spesifikasi: {
          processor: 'Intel Core i9-11980HK',
          ram: '32GB DDR4',
          storage: '1TB NVMe SSD',
          grafis: 'NVIDIA GeForce RTX 3080',
          layar: '15.6 inci 4K IPS',
          harga: 'Rp. 52.096.436',
        },
        gambar: '../../public/assets/images/10G.png',
      },
      {
        nama: 'Lenovo IdeaPad L340 Gaming',
        spesifikasi: {
          processor: 'Intel Core i5-9300H',
          ram: '8GB',
          grafis: 'NVIDIA GeForce GTX 1050',
          storage: '1TB HDD',
          layar: '15.6 inci FHD 60Hz',
          harga: 'Rp. 10.000.000',
        },
        gambar: '../../public/assets/images/11G.png',
      },
      {
        nama: 'HP Pavilion Gaming',
        spesifikasi: {
          processor: 'Intel Core i5-10300H',
          ram: '8GB',
          grafis: 'NVIDIA GeForce GTX 1650',
          storage: '256GB SSD',
          layar: '15.6 inci FHD 60Hz',
          harga: 'Rp. 11.000.000',
        },
        gambar: '../../public/assets/images/12G.png',
      },
      {
        nama: 'ASUS TUF Gaming FX505',
        spesifikasi: {
          processor: 'AMD Ryzen 5 3550H',
          ram: '8GB',
          grafis: 'NVIDIA GeForce GTX 1650',
          storage: '512GB SSD',
          layar: '15.6 inci FHD 120Hz',
          harga: 'Rp.11.500.000',
        },
        gambar: '../../public/assets/images/13G.png',
      },
      {
        nama: 'Acer Predator Helios 300',
        spesifikasi: {
          processor: 'Intel Core i5-9300H',
          ram: '8GB',
          grafis: 'NVIDIA GeForce GTX 1660 Ti',
          storage: '256GB SSD',
          layar: '15.6 inci FHD 144Hz',
          harga: 'Rp.14.000.000',
        },
        gambar: '../../public/assets/images/14G.png',
      },
      {
        nama: 'MSI GF63 Thin',
        spesifikasi: {
          processor: 'Intel Core i5-9300H',
          ram: '8GB',
          grafis: 'NVIDIA GeForce GTX 1650',
          storage: '512GB SSD',
          layar: '15.6 inci FHD 60Hz',
          harga: 'Rp.12.500.000',
        },
        gambar: '../../public/assets/images/15G.png',
      },
    ],
  },
  {
    id: 2,
    name: 'Desain',
    description: 'click here to find your laptop !',
    laptops: [
      {
        nama: 'Apple MacBook Pro',
        spesifikasi: {
          processor: 'Apple M1',
          ram: '16GB Unified Memory',
          storage: '512GB SSD',
          grafis: 'Apple M1 8-core GPU',
          layar: '13.3 inci Retina Display',
          harga: 'Rp. 19.500.000',
        },
        gambar: '../../public/assets/images/1D.png',
      },
      {
        nama: 'Dell XPS 15',
        spesifikasi: {
          processor: 'Intel Core i7-11800H',
          ram: '16GB DDR4',
          storage: '1TB NVMe SSD',
          grafis: 'NVIDIA GeForce RTX 3050 Ti',
          layar: '15.6 inci 4K OLED Touch',
          harga: 'Rp. 29.800.000',
        },
        gambar: '../../public/assets/images/2D.png',
      },
      {
        nama: 'HP Spectre x360',
        spesifikasi: {
          processor: 'Intel Core i7-1165G7',
          ram: '16GB DDR4',
          storage: '512GB NVMe SSD',
          grafis: 'Intel Iris Xe Graphics',
          layar: '13.3 inci 4K OLED Touch',
          harga: 'Rp. 23.800.000',
        },
        gambar: '../../public/assets/images/3D.png',
      },
      {
        nama: 'Lenovo ThinkPad X1 Carbon',
        spesifikasi: {
          processor: 'Intel Core i7-1165G7',
          ram: '16GB DDR4',
          storage: '1TB NVMe SSD',
          grafis: 'Intel Iris Xe Graphics',
          layar: '14 inci 4K HDR',
          harga: 'Rp. 28.200.000',
        },
        gambar: '../../public/assets/images/4D.png',
      },
      {
        nama: 'Microsoft Surface Book 3',
        spesifikasi: {
          processor: 'Intel Core i7-1065G7',
          ram: '32GB LPDDR4x',
          storage: '1TB NVMe SSD',
          grafis: 'NVIDIA GeForce GTX 1660 Ti',
          layar: '15 inci PixelSense Display',
          harga: 'Rp. 37.200.000',
        },
        gambar: '../../public/assets/images/5D.png',
      },
      {
        nama: 'ASUS ZenBook Pro Duo',
        spesifikasi: {
          processor: 'Intel Core i9-10980HK',
          ram: '32GB DDR4',
          storage: '1TB NVMe SSD',
          grafis: 'NVIDIA GeForce RTX 3070',
          layar: '15.6 inci 4K OLED Touch',
          harga: 'Rp. 44.000.000',
        },
        gambar: '../../public/assets/images/6D.png',
      },
      {
        nama: 'Acer ConceptD 7',
        spesifikasi: {
          processor: 'Intel Core i7-10875H',
          ram: '32GB DDR4',
          storage: '1TB NVMe SSD',
          grafis: 'NVIDIA GeForce RTX 2080 Super',
          layar: '15.6 inci 4K IPS',
          harga: 'Rp. 40.100.000',
        },
        gambar: '../../public/assets/images/7D.png',
      },
      {
        nama: 'MSI Creator 17',
        spesifikasi: {
          processor: 'Intel Core i7-11800H',
          ram: '32GB DDR4',
          storage: '1TB NVMe SSD',
          grafis: 'NVIDIA GeForce RTX 3080',
          layar: '17.3 inci 4K Mini LED',
          harga: 'Rp. 47.600.000',
        },
        gambar: '../../public/assets/images/8D.png',
      },
      {
        nama: 'Razer Blade 15 Studio Edition',
        spesifikasi: {
          processor: 'Intel Core i7-10875H',
          ram: '32GB DDR4',
          storage: '1TB NVMe SSD',
          grafis: 'NVIDIA Quadro RTX 5000',
          layar: '15.6 inci 4K OLED Touch',
          harga: 'Rp. 56.500.000',
        },
        gambar: '../../public/assets/images/9D.png',
      },
      {
        nama: 'Gigabyte Aero 15 OLED',
        spesifikasi: {
          processor: 'Intel Core i9-11980HK',
          ram: '32GB DDR4',
          storage: '1TB NVMe SSD',
          grafis: 'NVIDIA GeForce RTX 3080',
          layar: '15.6 inci 4K OLED',
          harga: 'Rp. 52.000.000',
        },
        gambar: '../../public/assets/images/10D.png',
      },
    ],
  },
  {
    id: 3,
    name: 'Education',
    description: 'click here to find your laptop !',
    laptops: [
      {
        nama: 'Apple MacBook Air',
        spesifikasi: {
          processor: 'Apple M1',
          ram: '8GB Unified Memory',
          storage: '256GB SSD',
          grafis: 'Apple M1 7-core GPU',
          layar: '13.3 inci Retina Display',
          harga: 'Rp. 14.800.000',
        },
        gambar: '../../public/assets/images/1P.png',
      },
      {
        nama: 'Lenovo ThinkPad X1 Carbon',
        spesifikasi: {
          processor: 'Intel Core i5-1135G7',
          ram: '16GB DDR4',
          storage: '512GB NVMe SSD',
          grafis: 'Intel Iris Xe Graphics',
          layar: '14 inci Full HD',
          harga: 'Rp. 19.300.000',
        },
        gambar: '../../public/assets/images/2P.png',
      },
      {
        nama: 'ASUS VivoBook 15',
        spesifikasi: {
          processor: 'AMD Ryzen 5 5500U',
          ram: '8GB DDR4',
          storage: '512GB NVMe SSD',
          grafis: 'AMD Radeon Graphics',
          layar: '15.6 inci Full HD',
          harga: 'Rp. 10.400.000',
        },
        gambar: '../../public/assets/images/3P.png',
      },
      {
        nama: 'HP Pavilion 14',
        spesifikasi: {
          processor: 'Intel Core i3-1115G4',
          ram: '8GB DDR4',
          storage: '256GB NVMe SSD',
          grafis: 'Intel UHD Graphics',
          layar: '14 inci Full HD',
          harga: 'Rp. 7.400.000',
        },
        gambar: '../../public/assets/images/4P.png',
      },
      {
        nama: 'Acer Swift 3',
        spesifikasi: {
          processor: 'AMD Ryzen 7 4700U',
          ram: '8GB DDR4',
          storage: '512GB NVMe SSD',
          grafis: 'AMD Radeon Graphics',
          layar: '14 inci Full HD',
          harga: 'Rp. 11.900.000',
        },
        gambar: '../../public/assets/images/5P.png',
      },
      {
        nama: 'Dell Inspiron 15',
        spesifikasi: {
          processor: 'Intel Core i5-11300H',
          ram: '8GB DDR4',
          storage: '256GB NVMe SSD',
          grafis: 'Intel Iris Xe Graphics',
          layar: '15.6 inci Full HD',
          harga: 'Rp. 13.300.000',
        },
        gambar: '../../public/assets/images/6P.png',
      },
      {
        nama: 'Microsoft Surface Laptop 4',
        spesifikasi: {
          processor: 'AMD Ryzen 7 4980U',
          ram: '16GB LPDDR4x',
          storage: '512GB NVMe SSD',
          grafis: 'AMD Radeon Graphics',
          layar: '13.5 inci PixelSense Display',
          harga: 'Rp. 22.300.000',
        },
        gambar: '../../public/assets/images/7P.png',
      },
      {
        nama: 'Huawei MateBook 14',
        spesifikasi: {
          processor: 'AMD Ryzen 5 4600H',
          ram: '8GB DDR4',
          storage: '512GB NVMe SSD',
          grafis: 'AMD Radeon Graphics',
          layar: '14 inci 2K',
          harga: 'Rp. 13.400.000',
        },
        gambar: '../../public/assets/images/8P.png',
      },
      {
        nama: 'Samsung Galaxy Book Flex 2',
        spesifikasi: {
          processor: 'Intel Core i5-1135G7',
          ram: '8GB DDR4',
          storage: '256GB NVMe SSD',
          grafis: 'Intel Iris Xe Graphics',
          layar: '13.3 inci QLED Touch',
          harga: 'Rp. 16.300.000',
        },
        gambar: '../../public/assets/images/9P.png',
      },
      {
        nama: 'ASUS Chromebook Flip C434',
        spesifikasi: {
          processor: 'Intel Core m3-8100Y',
          ram: '4GB LPDDR3',
          storage: '64GB eMMC',
          grafis: 'Intel UHD Graphics 615',
          layar: '14 inci Full HD Touch',
          harga: 'Rp. 7.400.000',
        },
        gambar: '../../public/assets/images/10P.png',
      },
    ],
  },
];

function getAllLaptop() {
  return categories;
}

function getLaptop(id) {
  const foundedNote = categories.find((category) => category.id === id);
  return foundedNote;
}

function getCategoryLaptops(id) {
  const foundCategory = categories.find((category) => category.id === id);
  return foundCategory ? foundCategory.laptops : [];
}

function searchLaptop(categories, keyword) {
  return categories.filter((category) =>
    category.nama.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
  );
}

export { getAllLaptop, searchLaptop, getLaptop, getCategoryLaptops };
