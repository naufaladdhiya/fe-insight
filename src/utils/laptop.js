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
        gambar: 'https://example.com/gambar/asus_rog_strix_scar_iii.jpg',
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
        gambar: 'https://example.com/gambar/msi_gs65_stealth.jpg',
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
        gambar: 'https://example.com/gambar/razer_blade_15.jpg',
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
        gambar: 'https://example.com/gambar/acer_predator_helios_300.jpg',
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
        gambar: 'https://example.com/gambar/dell_g5_15_se.jpg',
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
        gambar: 'https://example.com/gambar/lenovo_legion_5i.jpg',
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
        gambar: 'https://example.com/gambar/hp_omen_15.jpg',
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
        gambar: 'https://example.com/gambar/alienware_m15_r4.jpg',
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
        gambar: 'https://example.com/gambar/gigabyte_aorus_15g.jpg',
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
        gambar: 'https://example.com/gambar/lenovo_legion_7i.jpg',
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
        gambar: 'https://example.com/gambar/apple_macbook_pro.jpg',
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
        gambar: 'https://example.com/gambar/dell_xps_15.jpg',
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
        harga: '$1,599',
        gambar: 'https://example.com/gambar/hp_spectre_x360.jpg',
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
        gambar: 'https://example.com/gambar/lenovo_thinkpad_x1_carbon.jpg',
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
        gambar: 'https://example.com/gambar/microsoft_surface_book_3.jpg',
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
        gambar: 'https://example.com/gambar/asus_zenbook_pro_duo.jpg',
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
        gambar: 'https://example.com/gambar/acer_conceptd_7.jpg',
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
        gambar: 'https://example.com/gambar/msi_creator_17.jpg',
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
        gambar: 'https://example.com/gambar/razer_blade_15_studio.jpg',
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
        gambar: 'https://example.com/gambar/gigabyte_aero_15_oled.jpg',
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
        gambar: 'https://example.com/gambar/apple_macbook_air.jpg',
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
        gambar: 'https://example.com/gambar/lenovo_thinkpad_x1_carbon.jpg',
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
        gambar: 'https://example.com/gambar/asus_vivobook_15.jpg',
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
        gambar: 'https://example.com/gambar/hp_pavilion_14.jpg',
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
        gambar: 'https://example.com/gambar/acer_swift_3.jpg',
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
        gambar: 'https://example.com/gambar/dell_inspiron_15.jpg',
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
        gambar: 'https://example.com/gambar/microsoft_surface_laptop_4.jpg',
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
        gambar: 'https://example.com/gambar/huawei_matebook_14.jpg',
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
        gambar: 'https://example.com/gambar/samsung_galaxy_book_flex_2.jpg',
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
        gambar: 'https://example.com/gambar/asus_chromebook_flip_c434.jpg',
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
