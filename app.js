// Hizmet Verileri
const services = {
  temizlik: [
    { id: 1, name: 'Profesyonel Ev Temizliği', provider: 'Ayşe Temizlik', rating: 4.9, reviews: 342, price: '₺250', image: 'https://images.unsplash.com/photo-1581578731548-c64695c952952?w=400&h=300&fit=crop', desc: 'Profesyonel ev temizliği' },
    { id: 2, name: 'Dış Cephe Temizliği', provider: 'İstanbul Temiz', rating: 4.8, reviews: 215, price: '₺500', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop', desc: 'Bina ve pencere temizliği' },
    { id: 3, name: 'Halı Temizliği', provider: 'Halı Pro', rating: 4.7, reviews: 180, price: '₺300', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop', desc: 'Moquette ve halı temizliği' },
    { id: 4, name: 'Basınçlı Yıkama', provider: 'Yıkama Pro', rating: 4.9, reviews: 298, price: '₺400', image: 'https://images.unsplash.com/photo-1581092918484-8987c1d64718?w=400&h=300&fit=crop', desc: 'Profesyonel basınçlı yıkama' }
  ],
  tadilat: [
    { id: 5, name: 'Boya Badana', provider: 'Mehmet Usta', rating: 4.9, reviews: 421, price: '₺3500', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop', desc: 'İç ve dış boya badana' },
    { id: 6, name: 'Kapı Pencere', provider: 'Kapı Ustası', rating: 4.8, reviews: 156, price: '₺8000', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', desc: 'Kapı pencere tasarımı' },
    { id: 7, name: 'Duvar Kağıdı', provider: 'Duvar Tasarım', rating: 4.7, reviews: 203, price: '₺2500', image: 'https://images.unsplash.com/photo-1589939705066-5470d592d48b?w=400&h=300&fit=crop', desc: 'Duvar kağıdı yapıştırma' },
    { id: 8, name: 'Fayans Döşeme', provider: 'Fayans Ahmet', rating: 4.9, reviews: 289, price: '₺5000', image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop', desc: 'Seramik fayans işçiliği' }
  ],
  nakliyat: [
    { id: 9, name: 'Evden Eve Nakliyat', provider: 'Metro Nakliye', rating: 4.9, reviews: 512, price: '₺2000', image: 'https://images.unsplash.com/photo-1578774219295-41e0a8fe5a91?w=400&h=300&fit=crop', desc: 'Güvenli ev taşıması' },
    { id: 10, name: 'Ofis Taşıma', provider: 'Kurumsal Taşıma', rating: 4.8, reviews: 187, price: '₺5000', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop', desc: 'Profesyonel ofis taşıması' },
    { id: 11, name: 'Eşya Depolama', provider: 'Depo Yönetimi', rating: 4.7, reviews: 145, price: '₺500/ay', image: 'https://images.unsplash.com/photo-1586880244406-556ebe169603?w=400&h=300&fit=crop', desc: 'Güvenli depo hizmeti' },
    { id: 12, name: 'Beyaz Eşya Kurulumu', provider: 'Beyaz Eşya Pro', rating: 4.9, reviews: 276, price: '₺800', image: 'https://images.unsplash.com/photo-1584622275492-5714a3fb3752?w=400&h=300&fit=crop', desc: 'Eşya kurulum ve taşıma' }
  ],
  tamir: [
    { id: 13, name: 'Kombi Servisi', provider: 'Kombi Uzmanı', rating: 4.9, reviews: 634, price: '₺500', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop', desc: '24/7 kombi servisi' },
    { id: 14, name: 'Buzdolabı Tamir', provider: 'Beyaz Eşya Tamir', rating: 4.8, reviews: 298, price: '₺400', image: 'https://images.unsplash.com/photo-1584879694636-cff13d4baf0e?w=400&h=300&fit=crop', desc: 'Tüm marka tamir' },
    { id: 15, name: 'Klima Tamir', provider: 'KlimaPro', rating: 4.9, reviews: 445, price: '₺600', image: 'https://images.unsplash.com/photo-1545259741-2ea3ebfed5e9?w=400&h=300&fit=crop', desc: 'Klima temizlik ve tamir' },
    { id: 16, name: 'Elektrik Tamir', provider: 'Elektrik Mühendisi', rating: 4.8, reviews: 203, price: '₺350', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop', desc: 'Elektrik arıza tamiri' }
  ],
  ders: [
    { id: 17, name: 'Matematik Dersleri', provider: 'Prof. Cemil', rating: 4.9, reviews: 523, price: '₺250/saat', image: 'https://images.unsplash.com/photo-1635350736475-c8cef4b21906?w=400&h=300&fit=crop', desc: 'Lise matematik dersi' },
    { id: 18, name: 'İngilizce Konuşma', provider: 'Native Speaker John', rating: 4.8, reviews: 387, price: '₺300/saat', image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=300&fit=crop', desc: 'Native speaker dersi' },
    { id: 19, name: 'Yazılım Kursu', provider: 'Code Master Ali', rating: 4.7, reviews: 245, price: '₺400/saat', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop', desc: 'Python ve JavaScript' },
    { id: 20, name: 'Gitar Dersleri', provider: 'Gitar Öğretmeni', rating: 4.6, reviews: 178, price: '₺200/saat', image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop', desc: 'Gitar kursu' }
  ],
  org: [
    { id: 21, name: 'Düğün Organizasyonu', provider: 'Dream Wedding', rating: 4.9, reviews: 412, price: '₺15000', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop', desc: 'Profesyonel düğün' },
    { id: 22, name: 'Doğum Günü Partisi', provider: 'Party Time', rating: 4.7, reviews: 234, price: '₺2000', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop', desc: 'Parti organizasyonu' },
    { id: 23, name: 'Korporatif Etkinlik', provider: 'Corp Events Pro', rating: 4.8, reviews: 189, price: '₺8000', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop', desc: 'Şirket etkinliği' },
    { id: 24, name: 'Söz & Kına', provider: 'Gelintaç', rating: 4.6, reviews: 267, price: '₺5000', image: 'https://images.unsplash.com/photo-1492602898657-f85bf4d1d3cb?w=400&h=300&fit=crop', desc: 'Gelişme etkinlikleri' }
  ]
};

function createCard(service) {
  return `
    <div class="bg-white rounded-xl overflow-hidden shadow-md card-hover border border-gray-200 cursor-pointer">
      <div class="relative h-48 overflow-hidden bg-gray-300">
        <img src="${service.image}" alt="${service.name}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/400x300?text=${encodeURIComponent(service.name)}'">
        <div class="absolute top-2 right-2 bg-emerald-600 text-white px-3 py-1 rounded-lg text-xs font-bold">${service.price}</div>
      </div>
      <div class="p-4">
        <h3 class="font-bold text-gray-900 mb-1">${service.name}</h3>
        <p class="text-sm text-gray-600 mb-3">${service.provider}</p>
        <div class="flex items-center mb-4">
          <span class="text-yellow-400 text-lg">★★★★★</span>
          <span class="ml-2 text-sm font-bold text-gray-900">${service.rating}</span>
          <span class="text-xs text-gray-500 ml-1">(${service.reviews})</span>
        </div>
        <button class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg transition text-sm">
          Detay Gör
        </button>
      </div>
    </div>
  `;
}

function renderServices() {
  // Popüler hizmetler
  const grid = document.getElementById('services-grid');
  const allServices = Object.values(services).flat().slice(0, 8);
  grid.innerHTML = allServices.map(s => createCard(s)).join('');

  // Kategoriye göre hizmetleri doldur
  Object.keys(services).forEach(category => {
    const container = document.getElementById(`${category}-services`);
    if (container) {
      container.innerHTML = services[category].map(s => createCard(s)).join('');
    }
  });
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function searchServices() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  if (searchTerm) {
    // Kategoriyi bul
    for (const category of Object.keys(services)) {
      if (category.includes(searchTerm)) {
        scrollToSection(category);
        return;
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', renderServices);