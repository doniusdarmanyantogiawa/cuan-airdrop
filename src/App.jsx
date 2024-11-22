import React, { useState } from 'react';
import gambar1 from './assets/Gambar/gambar1.jpg';
import gambar2 from './assets/Gambar/gambar2.jpg';
import gambar3 from './assets/Gambar/gambar3.jpg';
import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  // MENU NAVBAR
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // SLIDE BERADNDA
  const slides = [
    {id: 1,image: gambar1},
    {id: 2, image: gambar2},
    {id: 3, image: gambar3},
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  // NODE FARMING
  const node = [
    {
      id: 1,
      title: 'GRASS',
      link: 'https://app.getgrass.io/register/?referralCode=Mwq8V86q7LSP0gY',
      airdrop: 'Airdrop',
      referal: '',
      deskripsi: 'Airdrop Grass distribusi token GRASS gratis untuk pengguna terlibat',
      image: 'https://news.tokocrypto.com/wp-content/uploads/2024/10/grassureJPG-515238.webp'
    },
    {
      id: 1,
      title: 'DAWN',
      link: 'chrome-extension://fpdkjdnhkakefebpekbdhillbhonfjjp/referfriend.html',
      airdrop: 'Airdrop',
      referal: '3ibol4qd',
      deskripsi: 'Airdrop DAWN distribusi token DAWN untuk pengguna yang berpartisipasi dalam misi',
      image: 'https://pbs.twimg.com/media/GUsUFZ6XYAAS5Z1.jpg'
    },
    {
      id: 1,
      title: 'NODEPAY',
      link: 'https://app.nodepay.ai/register?ref=wuGxxaGmmMkUSn3',
      airdrop: 'Airdrop',
      referal: '',
      deskripsi: 'Airdrop NodePay memberikan Poin Nodepay gratis kepada pengguna yang mendaftar dan menjelajah web',
      image: 'https://www.airdropsmob.com/wp-content/uploads/2024/06/Nodepay-airdrop-f.jpg'
    },
    {
      id: 1,
      title: 'GRADIENT NETWORK',
      link: 'https://app.gradient.network/dashboard/referral',
      airdrop: 'Airdrop',
      referal: 'PKSPWK',
      deskripsi: 'Airdrop Gradient Network memberikan kesempatan kepada pengguna untuk mendapatkan token GDT secara gratis',
      image: 'https://pbs.twimg.com/media/Ga2_EjIbQAAjSxm.jpg:large'
    },
  ];

  // TELGERAM FARMING
  const telegram = [
    {
      id: 1,
      title: 'BUMS',
      link: 'https://t.me/bums/app?startapp=ref_um7stOhh',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop BUMS adalah distribusi token BUMS gratis kepada pengguna yang mendaftar dan berpartisipasi dalam proyek',
      image: 'https://storage.top100token.com/images/21f8aa26-0cca-4635-b4f7-9f59b1a27390.webp'
    },
    {
      id: 2,
      title: 'HAMSTER KOMBAT',
      link: 'https://t.me/hamster_kombat_Bot/start?startapp=kentId900939286',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGfU_3leKDvCcBFbqxmiYp-AO4KdNKCjIPQ&s'
    },
    {
      id: 3,
      title: 'GRAND COMBAT',
      link: 'https://t.me/grandcombat_bot/start?startapp=1rdJ_E8_iY',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTteKvqhabXVeyZJUvT_uHLo7N1w0QXVqAB-g&s'
    },
    {
      id: 4,
      title: 'BLUM',
      link: 'https://t.me/blum/app?startapp=ref_y8VQwOm6aS',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzJYpEp0dLnUb113LLfTUJ7yvv_TfnhjblQ&s'
    },
    {
      id: 5,
      title: 'ZEN COIN',
      link: 'https://t.me/theZencoin_bot/zencoin?startapp=r=900939286',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://preview.redd.it/zen-coin-telegram-airdrop-v0-zgiuxykc7azd1.png?width=1080&crop=smart&auto=webp&s=af130e5ce4bf9928ce728433f8763e4e7641a679'
    },
    {
      id: 6,
      title: 'TAPSWAP',
      link: ' https://t.me/tapswap_mirror_1_bot?start=r_900939286',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4EGUMaDiGjK_20AqlIuL338KRk-ksyis33Q&s'
    },
    {
      id: 7,
      title: 'DROPEE',
      link: 'https://t.me/PAWSOG_bot/PAWS?startapp=zGoHlRkT',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOd9RlamXN-5J8L4oDJnwS5sDtwxcpwW1Uw&s'
    },
    {
      id: 8,
      title: 'PAWS',
      link: 'https://t.me/DropeeBot/play?startapp=ref_DzKjFDU-PbW',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ19uCPZC_5bqGHqdbEZ27FF6DB7I6dSisxrQ&s'
    },
    {
      id: 9,
      title: 'SEED',
      link: 't.me/seed_coin_bot/app?startapp=900939286',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRex3549c0uQy_w1CWgSlXi_VkYWGcczYYyTg&s'
    },
    {
      id: 10,
      title: 'TAP COINS BOT',
      link: 'https://t.me/tapcoinsbot?start=ref_3BCasX',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUy3WK5SZLqJYR9-rJ78591gOdqV_0vbbgQ&s'
    },
    {
      id: 11,
      title: 'TON STATION',
      link: 'https://t.me/tonstationgames_bot/app?startapp=ref_3qauimmwnvcjooo8pm1nbd',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOBHQ1WDHnleKO7CsLjMpKnjqzzsxRbBuag&s'
    },
    {
      id: 12,
      title: 'OGComunity',
      link: 'https://app.ogcom.xyz/invite/enhFpG_7siVY7g1o',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://pbs.twimg.com/profile_images/1782049229135056896/nGFUOvG-_400x400.jpg'
    },
    {
      id: 13,
      title: 'QBX AIRDROP',
      link: 'https://t.me/onus_tap_tap_tap_bot/join?startapp=1733152918355',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOhUhTLnmQkWPII-eYzUVM-7ch9x-xvNKqPw&s'
    },
    {
      id: 14,
      title: 'MONEY DOGS',
      link: 'https://t.me/money_dogs_bot/money_dogs?startapp=ofuC8ItL',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://www.shutterstock.com/image-photo/funny-dog-wearing-sunglasses-holds-600nw-2259331283.jpg'
    },
    {
      id: 15,
      title: 'TIME FARM',
      link: 'https://t.me/TimeFarmCryptoBot?start=13wrnzFQGgp2Z8Isr',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2CnS2Zx7qkgF6r5hXjeRR_LNOhlaI68KyQ&s'
    },
    {
      id: 16,
      title: 'POCKETFI',
      link: 'https://t.me/pocketfi_bot/Mining?startapp=900939286',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmw--hC7tbcLwOeK1lCeWcsIx56uOBYDgJfQ&s'
    },
    {
      id: 17,
      title: 'SIDE KICK',
      link: 'https://t.me/sidekick_fans_bot?start=900939286',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://coinalert.net/wp-content/uploads/2024/10/IMG_20241014_190826_307.jpg'
    },
    {
      id: 18,
      title: 'TOMARKET',
      link: 'https://t.me/Tomarket_ai_bot/app?startapp=0003c85r',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTxKW41C3lazNLTzRbKhhgJZmVjwf-eF7qmQ&s'
    },
    {
      id: 19,
      title: 'HRUM AIRDROP',
      link: 't.me/hrummebot/game?startapp=ref900939286',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83-6rEqaG3q1mpRRypx77aWv2b7vk3EHNwpe_ggpDCTJaL8n9KQXSEssgsAB9iXRE9Dc&usqp=CAU'
    },
    {
      id: 20,
      title: 'GOATS',
      link: ' https://t.me/realgoats_bot/run?startapp=edac7912-3508-4b34-8679-3c3bd12e27f7',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p2/183/2024/09/04/goatseJPG-2950585762.jpg'
    },
    {
      id: 21,
      title: 'DOGIATORS',
      link: 'https://t.me/Dogiators_bot/game?startapp=Jb0Z3ZUBewblBbXl',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQemE4wp7taHjFUgbew6cLg6F5Ei8T5fWLRrA&s'
    },
    {
      id: 22,
      title: 'FRIENDS FACTORY',
      link: 'https://t.me/fabrika/app?startapp=ref_3128773',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://miro.medium.com/v2/resize:fit:1144/format:webp/1*sd_4EiRlJZK2vApSwasQLQ.png'
    },
    {
      id: 23,
      title: 'SIMPLE COIN',
      link: 'https://t.me/Simple_Tap_Bot/app?startapp=1732252852795',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsnr3VmiC8KHb-gYzB4WBw5eyNJJXt5dWB8Q&s'
    },
    {
      id: 24,
      title: 'NOT PIXEL',
      link: 'https://t.me/notpixel/app?startapp=f900939286',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3U4qLJauqll9cX_Qqojxq6giPkUpCZSDGGg&s'
    },
    {
      id: 25,
      title: 'CEX IO',
      link: 'https://t.me/cexio_tap_bot?start=1731668386856413',
      airdrop: 'Airdrop',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mQuSuR0taOAf8Hcart-vD_OAPxcAznpKtw&s'
    },
  ];

  // LISTING BURSA
  const listing = [
    {
      id: 1,
      title: 'HAMSTER KOMBAT',
      link: 'https://t.me/hamster_kombat_Bot/start?startapp=kentId900939286',
      airdrop: 'Seasen 2',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGfU_3leKDvCcBFbqxmiYp-AO4KdNKCjIPQ&s'
    },
    {
      id: 2,
      title: 'CATIZEN',
      link: 'https://t.me/catizenbot/gameapp?startapp=rp_45568902',
      airdrop: 'Listing',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://www.worldcoinindex.com/data/news/news-index-4279.png'
    },
    {
      id: 3,
      title: 'LOST DOGS AIRDROP',
      link: 'https://t.me/lost_dogs_bot/lodoapp?startapp=ref-u_900939286',
      airdrop: 'Listing',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://freecoins24.io/wp-content/uploads/2024/08/lots-dogs-airdrop-logo.jpg'
    },
    {
      id: 4,
      title: 'WATCOIN AIRDROP',
      link: 'https://t.me/gamee/start?startapp=ref_900939286',
      airdrop: 'Listing',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://www.airdropsmob.com/wp-content/uploads/2024/08/WatCoin-Airdrop-l.jpg'
    },
    {
      id: 5,
      title: 'CATS',
      link: 'https://t.me/catsgang_bot/join',
      airdrop: 'Listing',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNilLlLBKaruSbZLvyblkkfCxayRdVeriPmA&s'
    },
    {
      id: 6,
      title: 'PIXELTAP BY PIXELVERSE',
      link: 'https://t.me/pixelversexyzbot?start=900939286',
      airdrop: 'Listing',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZuA4m5_pOMNUvia6PJJl4DgNMCevOsA_9JA&s'
    },
    {
      id: 7,
      title: 'X EMPIRE',
      link: 'https://s2.coinmarketcap.com/static/img/coins/200x200/33108.png',
      airdrop: 'Listing',
      deskripsi: 'Airdrop Hamster Kombat adalah distribusi token $HMSTR kepada pemain melalui Telegram',
      image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/33108.png'
    },
  ];

  // COROUSEL TESTIMONIAL
  const testimoni = [
    {
      id: 1,
      title: 'Hamster Kombat',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPAucR3F2PC049sIqqf9aSHVXBtWVrcxnGTA&s'
    },
    {
      id: 2,
      title: 'Dogs',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBK1jxnLlxJIR-LrlpTmTGlro-ZirD1zhfig&s'
    },
    {
      id: 3,
      title: 'X Empire',
      image: 'https://preview.redd.it/x-empire-not-bad-at-all-v0-k826s2gzbnvd1.jpeg?width=640&crop=smart&auto=webp&s=d403a7deb9524e499dfce8ba7ddcb7dc30674bdc'
    },
    {

         
      title: 'Pixeltap',
      image: 'https://lh7-us.googleusercontent.com/docsz/AD_4nXeQwOLBa5Q96uaqU9Ip2A0xvVFYLtqHpkpMlyA0SzwOtIFuRcjXjFgmvY82P2uAs61JOE3s111maurAn3suoR1u_v85LXjhd2_tMKedVjhvWuIOij_rNo7v7y0qNl_IMKVps77rl8hhI5j0y6zQUOXAWXqp?key=Yl2SaiVzkW06Zoit7eEA9A'
    },
    {
      id: 5,
      title: 'PLPA',
      image: 'https://static.bittime.com/cms-static/upload/Cara_Withdraw_Palapa_Token_dari_Game_PLPA_Tap_Tap_Hero_ke_Bittime_1_ce4bdac8aa.webp'
    },
    {
      id: 6,
      title: 'Lost Dogs',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAt7opgaE3mAnYYtezAOQTUBQExSYpM1XrQXsIDhvDqTLkWiuhyTq2BG85TQMuKpaH_l8&usqp=CAU'
    },
    {
      id: 7,
      title: 'Watcoin',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYnprSVgN7sT6rrZ73qTNglCn5ZQfjngT8ZQ&s'
    },
    {
      id: 8,
      title: 'Catizen',
      image: 'https://i.ytimg.com/vi/lAvKRMYR7O0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDJGxNada9pQG5rNC4z4qQWE5gOGw'
    },
    {
      id: 8,
      title: 'Cats',
      image: 'https://miro.medium.com/v2/resize:fit:501/1*XsdQ8SUtxw8gKVvGjxy15A.png'
    },
  ];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  

  return (
    <div className="App">
      <header className="relative z-50 flex justify-between items-center p-4 bg-gray-800 index-2">
        <h2 class="text-2xl font-bold text-white">Cuan Airdrop</h2>
        {/* <button className="md:hidden p-2 text-white"onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? 'Close' : 'Menu'}</button> */}
        <button className="md:hidden p-2 text-white"onClick={() => {console.log('Menu button clicked');setIsMenuOpen(!isMenuOpen);}}>{isMenuOpen ? <i class="bi bi-x-lg"></i> : <i class="bi bi-list"></i>}</button>


        <nav className={`absolute top-20 z-50 ${isMenuOpen ? 'block' : 'hidden'} md:static md:flex md:flex-row md:space-x-4 md:justify-end`}>
          <ul className={`flex flex-col md:flex-row space-y-2 md:space-y-0 ${isMenuOpen ? 'w-300' : 'w-full'} md:w-auto bg-white px-10 py-5 rounded-md md:p-0 md:bg-transparent`}>
            <li><a href="#beranda" className="hover:text-red-500 text-black md:text-white md:me-5">Beranda</a></li>
            <li><a href="#nodefarming" className="hover:text-red-500 text-black md:text-white md:me-5">Node Farming</a></li>
            <li><a href="#telegramfarming" className="hover:text-red-500 text-black md:text-white md:me-5">Telegram Farming</a></li>
            <li><a href="#tentang" className="hover:text-red-500 text-black md:text-white md:me-5">Tentang</a></li>
          </ul>
        </nav>
      </header>

      {/* HOMO COROUSEL */}
       <div className="relative w-full mx-auto" id='beranda'>
          <div className="overflow-hidden shadow-lg">
            <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {slides.map((slide) => (
                <div className="min-w-full" key={slide.id}>
                  <img src={slide.image} alt={slide.title} className="w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">&#10094; </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">&#10095;</button>
        </div>

      <main className="max-w-5xl mx-auto px-8">
      
      {/* NODE FARMING */}
       <div className='py-8' id='nodefarming'>
        <h2 class='text-3xl font-semibold text-gray-600 mb-2' >Node Farming</h2>
          <p className='text-gray-500 mb-6'>Airdrop Node Farming adalah strategi inovatif dalam ekosistem blockchain yang memungkinkan pengguna untuk mendapatkan token gratis dengan berpartisipasi dalam jaringan node.</p>
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {node.map((n) => (
            <div className="bg-gray-800 rounded-lg overflow-hidden" key={n.id}>
              <a href={n.link}>
                <img className="h-[160px] md:h-[220px] w-full object-cover" src={n.image} alt="Movie Title" />
                <div className="p-2">
                  <h2 className="font-semibold md:text-1xl text-sm text-red-600">{n.title}</h2>
                  <p className="text-gray-300 hidden md:block">{n.deskripsi}</p>
                  <h3 className='px-3 bg-gray-300 rounded-[35px] flex flex-col text-center md:mt-3 text-sm'>{n.referal}</h3>
                </div>
              </a>
            </div>
            ))}
          </section>
       </div>


        {/* FARMING TELEGRAM */}
        <div className='py-8' id='telegramfarming'>
          <h2 class='text-3xl font-semibold text-gray-600 mb-2'>Telegram Farming</h2>
          <p className='text-gray-500 mb-6'>Airdrop Farming Telegram adalah metode yang memanfaatkan platform Telegram untuk mendapatkan token kripto secara gratis melalui partisipasi dalam airdrop.</p>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {telegram.map((t) => (
            <a href={t.link} key={t.id}>
                <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg overflow-hidden flex p-3 gap-1 items-center">
                  <img className="h-[60px] w-[60px] md:h-[90px] md:w-[90px] rounded-full object-cover" src={t.image} alt={t.title} />
                  <div className="p-2">
                    <h2 className="font-semibold text-white text-1xl mb-1">{t.title}</h2>
                    <button className='bg-blue-500 px-3 rounded-[30px] text-gray-300 font-semibold'>{t.airdrop}</button>
                  </div>
              </div>
            </a>
            ))}
          </section>
        </div>


        {/* LISTING BURSA */}
        <div className='py-8'>
          <h2 class='text-3xl font-semibold text-gray-600 mb-2'>Proyek Yang Sudah Berakhir & Terdaftar</h2>
          <p className='text-gray-500 mb-6'>Airdrop yang sudah listing merujuk pada distribusi token kripto secara gratis yang telah terdaftar di bursa perdagangan. Setelah airdrop dilakukan, token tersebut dapat diperdagangkan di bursa, memberikan kesempatan bagi penerima untuk menjual atau memperdagangkan token yang mereka ter ima.</p>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {listing.map((l) => (
                <a href={l.link} key={l.id}>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg overflow-hidden flex p-3 gap-2 items-center">
                      <img className="h-[60px] w-[60px] md:h-[90px] md:w-[90px] rounded-full object-cover" src={l.image} alt={l.title} />
                      <div className="p-2">
                        <h2 className="font-semibold text-white text-1xl mb-1">{l.title}</h2>
                        <button className='bg-blue-500 px-3 rounded-[30px] text-gray-200 font-semibold'>{l.airdrop}</button>
                      </div>
                  </div>
                </a>
            ))}
          </section>
        </div>

        {/* COROUSEL TESTIMONI */}
       <div className='py-8'>
        <h2 class='text-3xl font-semibold text-gray-600 mb-2'>Testimoni</h2>
          <p className='text-gray-500 mb-6'>Beberapa airdrop yang telah berhasil listing, memberikan kesempatan kepada pengguna untuk mendapatkan token secara gratis dan berpartisipasi dalam ekosistem kripto yang lebih luas.</p>
          <div className='w-3/3 m-auto'>
            <div className=''>
              <Slider {...settings}>
              {testimoni.map((tes) => (
                <div className='overflow-hidden rounded-lg relative h-[175px] md:h-[450px]'>
                  <img className='w-full h-full object-cover' src={tes.image} alt={tes.title} />
                  <div class="absolute bottom-0 right-0 left-0 h-[150px] w-full bg-gradient-to-t from-blue-900 to-transparent rounded-lg flex items-center justify-center text-center">
                      <h2 class="text-white text-sm md:text-xl font-semibold mt-[100px] text-semibold shadow">{tes.title}</h2>
                  </div>
                </div>
              ))}
              </Slider>
            </div>
          </div>
       </div>

        {/* TENTANG */}
        <div className='py-8' id="tentang">
          <h2 class="text-3xl font-semibold text-gray-600 mb-2">Tentang Airdrop</h2>
          <p class="text-gray-500 mb-6">
              Airdrop adalah strategi pemasaran yang digunakan oleh proyek cryptocurrency untuk memperkenalkan token baru mereka kepada publik. Dengan menyebarkan link airdrop, proyek-proyek ini bertujuan untuk menarik perhatian dan membangun komunitas yang lebih besar.
          </p>

          <h2 class="text-3xl font-semibold text-gray-600 mb-2">Tujuan Website Airdrop</h2>
          <ul class="list-disc list-inside text-gray-500 mb-6">
              <li><strong>Menyebarkan Kesadaran:</strong> Website ini bertujuan untuk meningkatkan kesadaran tentang berbagai airdrop yang akan datang, terutama yang berpotensi menguntungkan di tahun 2024 dan 2025.</li>
              <li><strong>Membangun Komunitas:</strong> Airdrop sering kali digunakan untuk membangun komunitas di sekitar proyek cryptocurrency. Dengan menyebarkan link airdrop, website ini berkontribusi pada pengembangan komunitas yang aktif dan terlibat.</li>
              <li><strong>Menyediakan Informasi Terpercaya:</strong> Website ini berfungsi sebagai sumber informasi terpercaya mengenai airdrop yang sedang berlangsung dan yang akan datang.</li>
              <li><strong>Mendukung Pengguna dalam Menghasilkan Cuan:</strong> Dengan fokus pada airdrop yang berpotensi menguntungkan, website ini membantu pengguna untuk menemukan peluang yang dapat meningkatkan portofolio cryptocurrency mereka.</li>
              <li><strong>Edukasi tentang Cryptocurrency:</strong> Selain menyebarkan link airdrop, website ini juga berkomitmen untuk mendidik pengguna tentang dunia cryptocurrency dan teknologi blockchain.</li>
          </ul>
          <p className='pt-8 text-gray-500'>@cuanairdrop 2024 - 2025</p>
        </div>
      </main>
    </div>
  );
}

export default App;