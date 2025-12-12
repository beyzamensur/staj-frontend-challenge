import './style/main.scss';
import { createButton } from './components/Button/button';
import { createInput } from './components/Input/input';
import { createCard } from './components/Card/card';
import { createAccordion } from './components/Accordion/accordion';
import { createModal } from './components/Modal/modal';


const initializeTheme = () => {
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'light'; 

  document.documentElement.setAttribute('data-theme', savedTheme);
  if (themeToggle) {
    
    themeToggle.innerHTML = savedTheme === 'dark' ? '🌙' : '☀️';
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        themeToggle.innerHTML = newTheme === 'dark' ? '🌙' : '☀️'; 
    });
}
};


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header style="padding: 16px; text-align: right;">
    <button id="theme-toggle" aria-label="Temayı Değiştir" style="
      margin-right: 1rem; 
      border: none; 
      background: none; 
      cursor: pointer; 
      font-size: 1rem; 
      color: inherit; 
      text-decoration: underline;
    ">
      Tema Değiştir
    </button>
  </header>
  <main id="landing-page-content" style="padding: 24px;">
    <h1 style="text-align: center;">EcoSense Hub: Akıllı Evinizde Enerji Tasarrufu</h1>
    <p style="text-align: center; margin-bottom: 40px; font-size: 1.2rem; color: var(--color-text-secondary);">Elektrik faturalarınızı %30'a kadar azaltın. Yapay zeka destekli termostat optimizasyonu ve cihaz takibi ile çevrenizi koruyun.
        </p> 

    <section id="features-section" style="margin-top: 40px;"></section>
    <section id="pricing-section" style="margin-top: 60px;"></section>
    <section id="faq-section" style="margin-top: 60px;"></section>
    <section id="contact-section" style="margin-top: 60px;"></section>
  </main>
`;


const featuresSectionContainer = document.querySelector('#features-section');
if (featuresSectionContainer) {
    featuresSectionContainer.insertAdjacentHTML('beforebegin', '<h2>❓ Sistem Hakkında Bilgi</h2>');
    
    const faqData = [
        { question: 'Kurulum ve aktivasyon ne kadar sürer?', answer: 'Kurulum süreci çok basittir, evinizdeki ana panel bağlantısı dahil 15 dakikayı geçmez.' },
        { question: 'Hangi cihazlarla entegrasyon sağlıyor?', answer: 'Başta akıllı termostatlar ve sayaçlar olmak üzere, tüm Wi-Fi özellikli büyük ev aletleriyle (beyaz eşya) uyumludur.' },
    ];
    
    const accordion = createAccordion(faqData);
    featuresSectionContainer.insertAdjacentElement('beforebegin', accordion);
}

if (featuresSectionContainer) {
    featuresSectionContainer.innerHTML = '<h2>🌿Tasarruf Odaklı Özellikler</h2>';

    const featuresGrid = document.createElement('div');
    featuresGrid.style.display = 'grid';
    featuresGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    featuresGrid.style.gap = '24px';
    featuresGrid.style.marginTop = '24px';
    
    const card1 = createCard({ title: 'Gerçek Zamanlı Tüketim', content: 'Hangi cihazın ne kadar enerji harcadığını anlık olarak izleyin ve bilinçli kararlar verin.' });
    const card2 = createCard({ title: 'AI Optimizasyonu', content: 'Yapay zeka, hava durumu ve fiyat tarifelerine göre ısıtma/soğutma ayarlarınızı otomatik optimize eder.' });
    const card3 = createCard({ title: 'Tarihsel Raporlama', content: 'Aylık ve yıllık raporlar alarak tasarruf potansiyelinizi ve gelişim grafiğinizi takip edin.' });

    featuresGrid.append(card1, card2, card3);
    featuresSectionContainer.appendChild(featuresGrid);
}


const pricingSectionContainer = document.querySelector('#pricing-section');
if (pricingSectionContainer) {
    pricingSectionContainer.innerHTML = '<h2>💰 Fiyatlandırma Planları</h2>';

    const pricingGrid = document.createElement('div');
    pricingGrid.style.display = 'grid';
    pricingGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    pricingGrid.style.gap = '24px';
    pricingGrid.style.marginTop = '24px';

    const pricingCard1 = createCard({ title: 'Temel Ev', content: 'Aylık $14.99 - Gerçek zamanlı izleme ve aylık raporlar.' });
    pricingCard1.querySelector('.Card-content')!.appendChild(
        createButton({ text: 'Temeli Seç', type: 'primary', onClick: () => alert('Temel Paket Seçildi !') })
    );

    const pricingCard2 = createCard({ title: 'Premium AI', content: 'Aylık $39.99 - AI Optimizasyonu, Otomatik Tarife Değişikliği ve Sınırsız Cihaz.' });
    pricingCard2.querySelector('.Card-content')!.appendChild(
        createButton({ text: 'Hemen Satın Al', type: 'secondary', onClick: () => alert('Premium AI Paket Seçildi!') })
    );

    pricingGrid.append(pricingCard1, pricingCard2);
    pricingSectionContainer.appendChild(pricingGrid);
}


const formSectionContainer = document.querySelector('#contact-section');
if (formSectionContainer) {
    formSectionContainer.innerHTML = '<h2>✉️ Bugün Başla, Hemen Tasarruf Et!</h2><form id="contact-form"></form>';

    const contactForm = document.getElementById('contact-form') as HTMLFormElement;
    
    const nameInput = createInput({ 
        id: 'contact-name', 
        label: 'Adınız ve Soyadınız (Sistem Kurulumu için)', 
        type: 'text', 
        placeholder: 'Adınızı girin', 
        required: true, 
    });
    
    const emailInput = createInput({ 
        id: 'contact-email', 
        label: 'Kullanılacak E-posta Adresi (Giriş İçin)', 
        type: 'email', 
        placeholder: 'example@firma.com', 
        required: true, 
    });

    const submitBtn = createButton({ 
        text: 'Sistemi Hemen Aktifleştir', 
        type: 'primary', 
        isSubmit: true, 
        onClick: () => {} 
    });

    contactForm.append(nameInput, emailInput, submitBtn);

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const successDiv = document.createElement('div');
        successDiv.textContent = `Aktivasyon talebiniz alındı. Giriş bilgileriniz e-posta adresinize gönderilecektir.`;
        
        const modal = createModal({ 
            title: 'Aktivasyon Başarılı!', 
            children: [successDiv], 
            onClose: () => {
                contactForm.reset();
            } 
        });
        document.body.appendChild(modal.modal);
    });
    
    const modalTestBtn = createButton({
        text: 'Tasarruf İpucu Gör',
        type: 'secondary',
        onClick: () => {
             
             const testDiv = document.createElement('div');
             testDiv.textContent = 'Işıkları kapatmak, cihazları kapatmaktan 3 kat daha az enerji tasarrufu sağlar. Cihazları fişten çekin!';

             const testModal = createModal({ 
                title: '⚡ Haftalık Tasarruf İpucu', 
                children: [testDiv], 
                onClose: () => console.log('Modal kapandı.') 
            });
            document.body.appendChild(testModal.modal);
        }
    });
    contactForm.insertAdjacentElement('afterend', modalTestBtn); 
}



document.addEventListener('DOMContentLoaded', initializeTheme);