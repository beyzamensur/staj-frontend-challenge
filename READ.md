EcoSense Hub: Akıllı Ev Enerji Yönetimi Landing Page

Bu proje, bir staj görevi kapsamında, Vanilla TypeScript (TS) ve SCSS kullanılarak geliştirilmiş, tüm zorunlu bileşenleri (Card, Modal, Accordion, Form) içeren ve Responsive  kurallarına uyan tek sayfalık bir ürün tanıtım uygulamasıdır. Proje, teslimat kriterlerindeki kod kalitesi, erişilebilirlik ve performans hedeflerine uygun olarak tasarlanmıştır.


Kurulum ve Çalıştırma Kılavuzu :

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları sırasıyla takip edin.

1. Dosyaları Hazırlama

Terminalde projenin ana klasörüne (`staj-frontend-challenge/`) geçin:

```bash
cd staj-frontend-challenge

Projeyi çalıştırmak için gerekli tüm paketleri (Vite, TypeScript vb.) kurun:

npm install

npm run dev (Hızlı geliştirme ve hot-reload için kullanılır)

Üretim Ortamında Çalıştırma (Final Teslimat İçin)
```bash
npm run build
npm install -g serve # (Eğer yüklü değilse)
serve -s dist


Proje Mimarisi ve Bileşenler :

1. Bileşenler (src/components/)

Her bileşen kendi klasöründe (TS dosyası) yer alır ve dışarıdan parametreler (props/interface) alarak çalışır:

Button --> Ana ve ikincil eylem butonları. --> text, type (primary/secondary), onClick

Input --> Form alanları (isim, e-posta) --> id, label, type, required

Card --> Özellikler ve Fiyatlandırma Kartları --> title, content

Accordion --> Sıkça Sorulan Sorular (SSS) bölümü --> data (Soru/Cevap dizisi)

Modal --> Form gönderim bildirimi ve test pop-up'ı --> title, children (İçerik), onClose


2. Stil Yönetimi ve Tema

SCSS Yapısı: Stiller BEM metodolojisine uygun olarak SCSS ile yazılmıştır.

Tema Yönetimi: Tüm renkler ve yüzeyler, src/style/_variables.scss dosyasında tanımlanan CSS Değişkenleri (--color-primary vb.) aracılığıyla yönetilir.

Light/Dark Toggle: Temayı değiştiren düğme, document.documentElement.setAttribute('data-theme', 'dark/light') komutuyla global değişkenleri anında değiştirir.


3. Responsive Tasarım

Proje, mobil öncelikli yaklaşımla geliştirilmiştir ve 3 ana breakpoint için düzeni dinamik olarak ayarlar:

Mobil -->    ≤ 640px  --> Tüm Card'lar tek sütun.

Tablet -->   641px – 1024px  --> Card'lar ve bölümler 2 veya 3 sütunlu esnek düzende.

Masaüstü -->    ≥ 1025px  --> Tam genişlikte (varsayılan) 3 sütunlu düzen.


Kalite ve Teslimat Standartları:

1. Kod Standartları

TypeScript: Statik tip kontrolü ile hata yakalama.

Form Doğrulama: Yalın JS kullanarak zorunlu alan (required) ve e-posta formatı kontrolü (@) sağlanır.

Erişilebilirlik (A11y): Temel semantik HTML, label-for kullanımı ve klavye ile gezinme (Accordion ve Modal bileşenlerinde aria-* attributeleri) sağlanmıştır.

2. Teslimat Durumu
Canlı Demo: (Yayınlandığında buraya eklenecektir)

Lighthouse: Görsel optimizasyon ve lazy-load hedefleriyle minimum 90/100 hedeflenmiştir.

Canlı Demo Linki : https://staj-frontend-challenge-7m37s4529-beyzas-projects-a8ab5005.vercel.app
