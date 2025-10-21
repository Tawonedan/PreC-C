const productsData = [
    {
        id: 1,
        name: "PrecisionFlow Gel Pen Set",
        price: 42.99,
        image: "https://images.unsplash.com/photo-1510936994138-07e06c7c5add?w=400&h=300&fit=crop",
        category: "office",
        description: "Set pena gel tulis halus yang didesain untuk para profesional yang menuntut presisi. Set ini mencakup berbagai macam warna yang tidak mudah luntur dan menghasilkan garis yang tajam dan konsisten untuk pekerjaan kantor sehari-hari atau membuat catatan.",
        rating: 4.7,
        key_features: ["Tinta cepat kering", "Handle ergonomis", "Dapat diisi ulang", "Berbagai macam warna", "Pena 0.5mm tip"]
    },
    {
        id: 2,
        name: "NotePro Spiral Notebook A5",
        price: 36.49,
        image: "https://images.unsplash.com/photo-1581431886211-6b932f8367f2?w=400&h=300&fit=crop",
        category: "office",
        description: "Buku catatan spiral A5 yang ringkas dan berkualitas tinggi, dengan kertas yang tebal dan tahan luntur, ideal untuk rapat, sesi studi, dan perencanaan kreatif. Fitur spiral yang kuat dan desain minimalis memberikan tampilan profesional.",
        rating: 4.5,
        key_features: ["Kertas 80 GSM premium", "Lubang perforasi", "Lilitan spiral", "Bahan yang dapat didaur ulang", "Pembatas lapisan mati"]
    },
    {
        id: 3,
        name: "QuickStick Sticky Notes Cube",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1580934174026-8142803ebb5b?w=400&h=300&fit=crop",
        category: "office",
        description: "Catatan berseliweran yang menempel kuat namun mudah dilepas, cocok untuk pengingat, brainstorming, atau mengatur tugas di ruang kerja Anda. Hadir dalam berbagai warna pastel yang cantik.",
        rating: 4.6,
        key_features: ["Adhesi kuat", "Pembersihan bebas residu", "Palette warna pastel", "500 lembar per kubus", "Kertas ramah lingkungan"]
    },
    {
        id: 4,
        name: "OfficeMate Stapler Pro 120",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1603234408844-15d80c40d580?w=400&h=300&fit=crop",
        category: "office",
        description: "Stapler berdaya tahan yang didesain untuk performa konsisten di kantor yang sibuk. Handle ergonomis dan badan baja yang tahan lama memberikan keandalan jangka panjang untuk laporan dan pengikatan dokumen.",
        rating: 4.8,
        key_features: ["Bingkai baja yang tahan lama", "Handle ergonomis", "Staples hingga 25 lembar", "Mekanisme resisten terhadap waktu", "Jendela pengisian ulang"]
    },
    {
        id: 5,
        name: "ClearFile Document Folder Set",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1633520833019-e34afd4b8fad?w=400&h=300&fit=crop",
        category: "office",
        description: "Set folder transparan yang dirancang untuk menjaga dokumen rapi dan mudah diakses. Cocok untuk mengatur laporan, sertifikat, dan presentasi di lingkungan sekolah dan kantor.",
        rating: 4.4,
        key_features: ["Ukuran A4 cocok", "Bahan plastik yang tahan lama", "Tahan air", "Tab warna", "Paket 10 folder"]
    },
    
    {
        id: 6,
        name: "NeatSpace Desk Organizer Tray",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1702599860848-6e34f849b649?w=400&h=300&fit=crop",
        category: "desk",
        description: "Tempat kerja minimalis yang menjaga ruang kerja Anda bebas dari kontrakan. Dirancang dengan beberapa ruang untuk pena, klip, dan perangkat, tempat ini meningkatkan estetika meja Anda.",
        rating: 4.7,
        key_features: ["Base tidak slip", "Frame plastik ABS", "Beberapa ruang", "Desain modern", "Mudah dibersihkan"]
    },
    {
        id: 7,
        name: "CableMate Organizer Box",
        price: 10.49,
        image: "https://images.unsplash.com/photo-1703953679995-645a375feb8b?w=400&h=300&fit=crop",
        category: "desk",
        description: "Jaga kabel daya dan kabel bengkok tersembunyi di dalam kotak ini. Cocok untuk menjaga pengaturan ruang kerja rapi sambil melindungi kabel Anda dari debu dan kerusakan.",
        rating: 4.5,
        key_features: ["Plastik tahan api", "Desain ventilasi", "Cocok untuk strip daya 6-port", "Bukaan kabel di kedua sisi", "Pembatas lapisan mati"]
    },
    {
        id: 8,
        name: "SmartStand Monitor Riser",
        price: 27.99,
        image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=400&h=300&fit=crop",
        category: "desk",
        description: "Riser monitor ergonomis yang membantu mengurangi beban otot leher dan meningkatkan postur. Ini termasuk tempat penyimpanan dan port USB untuk fungsi ruang kerja maksimal.",
        rating: 4.8,
        key_features: ["Tinggi yang dapat diatur", "Hub USB terintegrasi", "Gudang tersembunyi", "Mendukung hingga 15kg", "Kaki anti slip"]
    },
    {
        id: 9,
        name: "MinimalDesk Pen Holder",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1639916991657-e74ba7546b28?w=400&h=300&fit=crop",
        category: "desk",
        description: "Pemegang pena yang elegan dengan finishing aluminium berbusa. Cocok untuk desainer dan profesional yang menghargai pengaturan meja minimalis yang mencerminkan fokus dan urutan.",
        rating: 4.6,
        key_features: ["Aluminium yang tahan lama", "Base berbobot", "Tahan gores", "Aestetika modern", "Lantai yang padat"]
    },
    {
        id: 10,
        name: "FlexStack Drawer Unit",
        price: 22.49,
        image: "https://images.unsplash.com/photo-1595428774991-829cfeea6267?w=400&h=300&fit=crop",
        category: "desk",
        description: "Sistem gudang modular untuk mengatur dokumen, peralatan kantor, dan peralatan digital. Setiap gudang dapat ditumpuk dan diberi label untuk manajemen kantor yang efisien.",
        rating: 4.4,
        key_features: ["Desain tumpukan", "Gudang geser yang mulus", "Bahan ABS yang tahan lama", "Label pengisian", "Ukuran yang padat"]
    },
    
    {
        id: 11,
        name: "ClarityPro USB Microphone",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1580493783887-8c874c534e93?w=400&h=300&fit=crop",
        category: "creator",
        description: "Mikrofon studio berkualitas tinggi yang ideal untuk podcaster, streamer, dan pembuat konten yang mencari kualitas audio yang tajam dan seimbang. Desain plug-and-play memastikan pengaturan tanpa masalah dengan komputer apa pun.",
        rating: 4.8,
        key_features: ["Polar pattern pickup Cardioid", "Konektivitas USB-C", "Filter pop terintegrasi", "Kontrol gain knob", "Mount shock termasuk"]
    },
    {
        id: 12,
        name: "LumaRing LED Light 12-inch",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1673196649671-eb09066ad6c1?w=400&h=300&fit=crop",
        category: "creator",
        description: "Pencahayaan LED ring yang berkilau dan dapat diatur warna untuk pembuat konten. Memberikan pencahayaan lembut dan merata untuk sesi video, streaming, atau fotografi dengan berbagai suhu warna.",
        rating: 4.7,
        key_features: ["Kecerahan yang dapat diatur", "Rentang warna 3200K–5600K", "Kontrol jarak jauh", "Mount tripod", "Dijalankan oleh USB"]
    },
    {
        id: 13,
        name: "ProMount Tripod Stand",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1579971120372-4f8a5d0671e3?w=400&h=300&fit=crop",
        category: "creator",
        description: "Riser tripod ringan namun kokoh yang dirancang untuk fleksibilitas dalam pengaturan sudut dan portabilitas untuk vlogging atau konten perjalanan.",
        rating: 4.6,
        key_features: ["Head rotasi 360°", "Kaki yang dapat diperpanjang", "Build aluminium ringan", "Plat lepas cepat", "Saku pengangkut termasuk"]
    },
    {
        id: 14,
        name: "CamLink Capture Card",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1626581807509-9fed47936ec3?w=400&h=300&fit=crop",
        category: "creator",
        description: "Stream atau rekam dalam 1080p HD menggunakan DSLR atau kamera aksi sebagai webcam. Cocok untuk streaming langsung berkualitas profesional dan presentasi virtual.",
        rating: 4.5,
        key_features: ["1080p60 capture", "Plug-and-play via USB", "HDMI input", "Latency rendah", "Desain yang padat"]
    },
    {
        id: 15,
        name: "StreamDeck Mini Controller",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1643236986356-b0f191c0b333?w=400&h=300&fit=crop",
        category: "creator",
        description: "Panel kontrol kecil dengan tombol yang dapat diubah untuk mengotomatisasi alur kerja streaming Anda. Aktifkan skena, efek suara, atau pintasan dengan satu tap.",
        rating: 4.9,
        key_features: ["6 tombol yang dapat diatur", "Ikon kustom", "Dukungan multi-aksi", "Koneksi USB", "Form factor yang padat"]
    },
    
    {
        id: 16,
        name: "SketchFlow Artist Notebook",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?w=400&h=300&fit=crop",
        category: "art",
        description: "Buku gambar premium dengan kertas 120 GSM yang halus, dirancang untuk kedua media basah dan kering. Cocok untuk seniman, ilustrator, dan pembuat konten yang merencanakan storyboard.",
        rating: 4.7,
        key_features: ["Cover keras", "Kertas bebas asam", "Desain lay-flat", "50 lembar", "Pengikat elastis"]
    },
    {
        id: 17,
        name: "ColorBlend Marker Set (24 pcs)",
        price: 32.49,
        image: "https://images.unsplash.com/photo-1631206630000-2885ed0b00f0?w=400&h=300&fit=crop",
        category: "art",
        description: "Set marker alkohol dual tip yang menghasilkan warna konsisten dan berani. Ideal untuk pembuat konten digital, ilustrator, atau yang membuat konten visual untuk media sosial.",
        rating: 4.8,
        key_features: ["Desain dual tip", "Tinta resisten fade", "Blending-friendly", "Handle ergonomis", "Kotak yang dapat didaur ulang"]
    },
    {
        id: 18,
        name: "CraftMat Cutting Board A3",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1675716472446-bebee69a8888?w=400&h=300&fit=crop",
        category: "art",
        description: "Papan potong berkualitas tinggi A3 untuk seni, desain, dan pekerjaan kerajinan. Permukaan self-healing memastikan pengalaman yang mulus dan memperpanjang umur pisau.",
        rating: 4.6,
        key_features: ["Permukaan self-healing", "Grid dua sisi", "Base tidak slip", "Penggaris metrik dan inci", "Bahan PVC ramah lingkungan"]
    },
    {
        id: 19,
        name: "StylusPro Drawing Pen",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1745302281184-dfdad65fe6cc?w=400&h=300&fit=crop",
        category: "art",
        description: "Stylus digital yang dirancang untuk tablet dan layar sentuh. Memberikan pengalaman menggambar alami dengan sensitivitas tekanan yang cocok untuk seni digital dan desain grafis.",
        rating: 4.7,
        key_features: ["4096 level tekanan", "Pengenalan kemiringan", "Baterai yang dapat diisi ulang", "Penolakan jempol", "Desain ringan"]
    },
    {
        id: 20,
        name: "ArtEase Ruler Set",
        price: 9.49,
        image: "https://images.unsplash.com/photo-1526597796581-efa2fc6087ea?w=400&h=300&fit=crop",
        category: "art",
        description: "Set penggaris profesional untuk seniman dan insinyur. Termasuk penggaris lurus, protractor, dan penggaris segitiga dengan etching laser presisi.",
        rating: 4.4,
        key_features: ["Set 3-pcs", "Bahan acrylic jernih", "Marking laser-etched", "Tepi anti slip", "Kotak pelindung"]
    },
    
    {
        id: 21,
        name: "TypeLite Mechanical Keyboard",
        price: 79.49,
        image: "https://images.unsplash.com/photo-1602025882379-e01cf08baa51?w=400&h=300&fit=crop",
        category: "computer",
        description: "Keyboard mekanik kecil 75% dengan pencahayaan latar belakang yang dapat diubah, dirancang untuk programmer, penulis, dan pembuat konten yang menuntut umpan balik yang tepat dan nyaman.",
        rating: 4.8,
        key_features: ["Switch yang dapat diganti", "Latar belakang RGB", "Koneksi USB-C", "Frame aluminium", "Kabel yang dapat dilepas"]
    },
    {
        id: 22,
        name: "SwiftGlide Wireless Mouse",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?w=400&h=300&fit=crop",
        category: "computer",
        description: "Mouse nirkabel ergonomis yang dirancang untuk bekerja selama waktu yang lama. Pelacakan optik yang mulus dan klik yang tenang membuatnya ideal untuk produktivitas dan pekerjaan kreatif.",
        rating: 4.6,
        key_features: ["Koneksi nirkabel 2.4GHz", "Baterai yang dapat diisi ulang", "Klik yang tenang", "DPI yang dapat diatur", "Handle ergonomis"]
    },
    {
        id: 23,
        name: "DataVault External SSD 1TB",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?w=400&h=300&fit=crop",
        category: "computer",
        description: "SSD portabel dengan kecepatan baca/tulis yang sangat cepat untuk pembuat konten yang menangani file video besar. Kotak aluminium yang ringan tetap tahan lama.",
        rating: 4.9,
        key_features: ["Kapasitas 1TB", "USB 3.2 Gen2", "Kecepatan baca hingga 1000MB/s", "Tahan benturan", "Desain yang ramping"]
    },
    {
        id: 24,
        name: "ProDock USB Hub 7-in-1",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1760376789478-c1023d2dc007?w=400&h=300&fit=crop",
        category: "computer",
        description: "Ekspansi konektivitas laptop Anda dengan hub USB-C 7-port. Ideal untuk pembuat konten digital yang menghubungkan beberapa perangkat seperti drive, kartu SD, dan display.",
        rating: 4.7,
        key_features: ["HDMI 4K support", "Dual USB 3.0 ports", "SD/TF card reader", "Port pengisian PD", "Plug-and-play"]
    },
    {
        id: 25,
        name: "ErgoLift Laptop Stand",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1623251606108-512c7c4a3507?w=400&h=300&fit=crop",
        category: "computer",
        description: "Riser aluminium yang dapat dilipat untuk laptop hingga 16 inci. Meningkatkan aliran udara dan postur, cocok untuk pengaturan meja kerja di kantor dan rumah.",
        rating: 4.5,
        key_features: ["Tinggi yang dapat diatur", "Pads anti slip", "Desain yang dapat dilipat", "Lubang ventilasi", "Aluminium ringan"]
    }
];

let filteredProducts = [...productsData];
let currentCategory = 'all';
let currentPriceRange = 'all';
let currentSort = 'name';

document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    initializeSorting();
    renderProducts();
});

function initializeFilters() {
    const categorySelect = document.getElementById('category-select');
    const priceSelect = document.getElementById('price-select');
    
    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            currentCategory = this.value;
            applyFilters();
        });
    }
    
    if (priceSelect) {
        priceSelect.addEventListener('change', function() {
            currentPriceRange = this.value;
            applyFilters();
        });
    }
}

function initializeSorting() {
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            applySorting();
        });
    }
}

function applyFilters() {
    showLoading();
    
    setTimeout(() => {
        filteredProducts = productsData.filter(product => {
            const categoryMatch = currentCategory === 'all' || product.category === currentCategory;
            
            let priceMatch = true;
            if (currentPriceRange !== 'all') {
                const price = product.price;
                switch (currentPriceRange) {
                    case '0-100':
                        priceMatch = price >= 0 && price <= 100;
                        break;
                    case '100-500':
                        priceMatch = price > 100 && price <= 500;
                        break;
                    case '500+':
                        priceMatch = price > 500;
                        break;
                }
            }
            
            return categoryMatch && priceMatch;
        });
        
        applySorting();
        hideLoading();
    }, 500);
}

function applySorting() {
    switch (currentSort) {
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
    }
    
    renderProducts();
}

function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    const productCount = document.getElementById('product-count');
    const noResults = document.getElementById('no-results');
    
    if (!productsGrid) return;
    
    if (productCount) {
        productCount.textContent = `Showing ${filteredProducts.length} products`;
    }
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '';
        if (noResults) {
            noResults.classList.remove('hidden');
        }
        return;
    }
    
    if (noResults) {
        noResults.classList.add('hidden');
    }
    
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div class="relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                <div style="visibility: hidden;" class="absolute top-2 right-2 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">${getCategoryName(product.category)}</div>
            </div>
            <div class="p-4 flex flex-col flex-grow">
                <h3 class="text-lg font-semibold text-gray-800 mb-2">${product.name}</h3>
                <p class="text-gray-600 text-sm mb-3 flex-grow">${product.description}</p>
                <div class="flex items-center justify-between mt-auto">
                    <div class="flex items-center space-x-2">
                        <span class="text-2xl font-bold text-blue-600">Rp.${product.price.toFixed(3)}</span>
                    </div>
                    <div class="flex space-x-2">
                        <button class="product-detail bg-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300 transition-colors" onclick="window.location.href='product.html'">
                            <i data-lucide="search" class="w-4 h-4"></i>
                        </button>
                        <button class="add-to-cart bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors" 
                                data-product-id="${product.id}" 
                                data-product-name="${product.name}" 
                                data-product-price="${product.price}" 
                                data-product-image="${product.image}">
                            <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function getCategoryName(category) {
    const categoryNames = {
        'office': 'Kebutuhan Kantor',
        'desk': 'Alat Meja',
        'creator': 'Peralatan Konten',
        'art': 'Seni & Desain',
        'computer': 'Aksesori Komputer'
    };
    return categoryNames[category] || category;
}

function showLoading() {
    const loading = document.getElementById('loading');
    const productsGrid = document.getElementById('products-grid');
    
    if (loading) loading.classList.remove('hidden');
    if (productsGrid) productsGrid.classList.add('opacity-50');
}

function hideLoading() {
    const loading = document.getElementById('loading');
    const productsGrid = document.getElementById('products-grid');
    
    if (loading) loading.classList.add('hidden');
    if (productsGrid) productsGrid.classList.remove('opacity-50');
}

window.productsData = productsData;
