(function () {
  // Source-verified reviews in their original order, including both Tania entries.
  const testimonials = [
  {
    "name": "Brigitte",
    "image": "../images/brigitte.jpg",
    "alt": "Brigitte",
    "content": "<p>I am super impressed, best purchase and value for money I have made in the field of health as I’m a clinical nutritionist and herbalist. I just wanted to share how happy and delighted I am with the program and the app is simply amazing, so much value here for the money. The book, pictures and guidance in application is so valuable that I’m sharing it with everyone who comes into my clinic.</p><p>Once again thank you so much for this wonderful gift.</p>",
    "attribution": "<p class=\"testimonial-name\">Brigitte <span class=\"testimonial-location\">Australia</span></p>",
    "supplemental": ""
  },
  {
    "name": "Cynthia",
    "image": "../images/go/Cynthia.jpg",
    "alt": "Cynthia",
    "content": "<p>Not only is customer service awesome with Natural Synergy, but their program is absolutely the BEST!  When you receive natural balance for your body, have it be noninvasive and inexpensive you have a winning formula and Natural Synergy has that formula! The format is easy to follow, and the in-depth content is phenomenal!</p><p>I have purchased and used similar programs, but this one is my favorite by far.  You can’t go wrong when you purchase their program!</p>",
    "attribution": "<p class=\"testimonial-name\">Cynthia <span class=\"testimonial-location\">Montana, USA</span></p>",
    "supplemental": ""
  },
  {
    "name": "Tania",
    "image": "../images/index/Tania-e1588306709214.jpg",
    "alt": "Tania",
    "content": "<p>Thank you for your wonderful gift of healing Emily. I have already in just a few sessions shifted some really heavy pain in my shoulders and am very excited to share this therapy with my friends and family. It’s a great app which is easy to follow and use.</p><p>I also love that you stay in touch with extra notes and information. The video with the baby listening/responding to the Om chanting is golden. </p><p>Thanks again for this wonderful healing tool. </p>",
    "attribution": "<p class=\"testimonial-name\">Tania <span class=\"testimonial-location\">Australia</span></p>",
    "supplemental": ""
  },
  {
    "name": "Rodiani",
    "image": "../images/rodiani.jpg",
    "alt": "Rodiani",
    "content": "<p>Natural Synergy is a serious program of self help in healing. Sometimes it offers relief very soon or right after application of the suggested action, in cases of pain or in cases of mild discomfort. I also found it especially helpful in cases of seasonal dizziness I experience recently. I keep this program in high esteem because of its helpfulness to me.  Also, I appreciate the clarity of the way it is presented and the fact that it is easy to use. I wholeheartedly recommend it and confirm that it is immediately applicable: no need of preliminary knowledge or study, just read the instructions. Of course, one can also appreciate the introductory chapters of the book, especially if one is not familiar with Chinese Medicine, meridians, acupuncture and the properties of sound frequencies. Thank you for creating such a wonderful program!</p>",
    "attribution": "<p class=\"testimonial-name\">Rodiani <span class=\"testimonial-location\">Greece</span></p>",
    "supplemental": ""
  },
  {
    "name": "William",
    "image": "../images/william.jpg",
    "alt": "William",
    "content": "<p>A short while ago, my wife woke up one morning with a frozen shoulder. My experience as a naturopath is that this usually takes quite a while to resolve using a mix of treatments. This time, I did the acupressure and frequency sounds on all 6 of the points for 3 minutes each – once only. The following day, my wife woke up with no pain, discomfort or movement restriction.</p><p>That was around a month ago, and since then, no recurrence …</p><p>Magic, yes?</p><p>Thank you so much for this program.</p>",
    "attribution": "<p class=\"testimonial-name\">William <span class=\"testimonial-location\">Israel</span></p>",
    "supplemental": ""
  },
  {
    "name": "Grezthen",
    "image": "../images/go/grezthen-philippines.jpg",
    "alt": "Grezthen",
    "content": "<p>Before using Natural Synergy (NS), I was taking my medication (maintenance) for my blood pressure on a daily basis. At the first month of using NS daily, I didn’t stop my medication yet. But on my 2<sup>nd</sup> month of using NS, I gradually refrain using my high blood medication on a daily basis. On the 1<sup>st</sup> week of my 2<sup>nd</sup> month of using NS, I took my medication every other day. On my 2<sup>nd</sup> week of my 2<sup>nd</sup> month of using NS, I took my medication twice only. On my 3<sup>rd</sup> week, I took my medication only once. Finally, on my 4<sup>th</sup> week, I tried using your Natural Synergy without taking even a single medication.</p><p>Luckily, for 10 months now, I’m practicing your Natural synergy without taking any of my medication at all. In other words, I’m now free from taking my medication!</p><p>Not only that. Every time I feel sick, I listen to the <strong>Theta Healing</strong> preset beat and the <strong>528 Hz</strong> and <strong>Schumann Resonance</strong> frequencies. I easily get well and feel great again. Sometimes, even if I had only 3 hrs of sleep if I listen to those frequencies before retiring to bed, I felt like I had 8 hrs of sleep. They are really amazing!</p><p>Regarding the acupressure with corresponding audio, using my fingers or my acupressure pen in pressing the acupressure points, I noticed that the effect is the same. But I prefer using my acupressure pen for convenience.</p><p>For 10 months now, NS has become my healing companion. I even use it to other people. I became an instant Healer!</p><p>I’m really grateful to you Emily for sharing to us your Natural Synergy.</p><p>Thanks again, Emily! God Bless you!</p>",
    "attribution": "<p class=\"testimonial-name\">Grezthen <span class=\"testimonial-location\">Philippines</span></p>",
    "supplemental": ""
  },
  {
    "name": "Don",
    "image": "../images/go/no-photo.jpg",
    "alt": "No portrait supplied for Don",
    "content": "<p>I have been using your program for about 2 months. I think it is brilliant combining frequencies with the pressure points. When I first purchased your program I had a very painful neck and right shoulder. I had been seeing a Doctor and chiropractor for 3 weeks prior to buying your program with little relief. I reduced my pain by 50% after using recommended pressure points. My pain was totally gone after 3 treatments. I also have been struggling with tinniutus for 4 years. Doctors said there was nothing they could do. Applying your recommended pressure points I have greatly reduced the noise in my ears and am now experiencing period of zero tinnitus. This is really exciting for me.</p>",
    "attribution": "<p class=\"testimonial-name\">Don <span class=\"testimonial-location\">USA</span></p>",
    "supplemental": ""
  },
  {
    "name": "Astrid",
    "image": "../images/testimonials/Astrid.jpg",
    "alt": "Astrid",
    "content": "<p>When I was presented Natural Synergy in December 2018, I just had started cancer treatment. As I ordered it, I was driven by interest and curiosity about it. I was in lack of energy, and also struggled with sleeping through the nights. I was “taken down” in chemotherapy, at the same time as I was coping with a special family situation after a family member earlier had a serious injury after a traffic accident, and had to stay in bed for months.</p><p>As I had a lot of stress, and often negatively loaded thoughts and worries, I started testing Natural Synergy. I started listening to the different sound tracks, and found myself more peaceful and relaxed, and got paused from worry-thoughts for some time. Like the sounds from nature, allowing me to be mindful just listening. Like also the beats calming down or set joy into feeling. For a long period I have used the delta brainwave-track going into sleep. And my sleep comes more easy. As I now try to recover and gain some more energy, I’ll explore more of the content in the program.</p><p>I also appreciate very much the long music meditations, lasting for about one hour, that Emily sent me during my most difficult times, helping me overcome my obstacles in a better way.</p>",
    "attribution": "<p class=\"testimonial-name\">Astrid <span class=\"testimonial-location\">Holland</span></p>",
    "supplemental": ""
  },
  {
    "name": "Lynette",
    "image": "../images/lynette.jpg",
    "alt": "Lynette",
    "content": "<p>I can’t believe the amount of information that was immediately available once my purchase was completed. It is so comprehensive but so easy to read and the information is invaluable. I can see Natural Synergy to be such a blessing to myself and my family. It has a beautiful energy surrounding it. Even though I have only just purchased it, I have already used it to rid myself of a headache. Yay. I know if I have any questions I can confidently contact you and know i will receive and answer. I know the support is there and it is so encouraging to feel this.</p><p>I love it and can’t thank you enough for this system to be shared with the world.</p>",
    "attribution": "<p class=\"testimonial-name\">Lynette <span class=\"testimonial-location\">Australia</span></p>",
    "supplemental": ""
  },
  {
    "name": "Jim",
    "image": "../images/go/jim-usa.jpg",
    "alt": "Jim",
    "content": "<p>The Natural Synergy app is great. I really enjoy it. I’m able to enter a relaxed state so much easier, and my meditations are more insightful. Sleeping, I can experience a lot more lucid dreams.</p><p>Thank you Natural Synergy</p>",
    "attribution": "<p class=\"testimonial-name\">Jim <span class=\"testimonial-location\">USA</span></p>",
    "supplemental": ""
  },
  {
    "name": "Anne",
    "image": "../images/testimonials/anne.jpg",
    "alt": "Anne",
    "content": "<p>Having bought NATURAL SYNERGY a number of years ago, (around 2018) and using it as needed, I loaned my old phone to a friend as she had lost hers.  I never thought to say to her, DO NOT remove the Natural Synergy!</p><p>A month later she got her new phone and returned mine to me.  The more mobile I got after the last op, the more pain there was, but now I had my Natural Synergy back, I could start using it to take the pain away, again.</p><p>…. HORROR of horrors, when I opened the phone, it was cleared off, back to factory settings… I cried…..!</p><p>Immediately I wrote to Natural Synergy thinking… I have not a hope of getting my program back without having to pay for it again….   BUT… to my surprise, an instant reply from them, saying I was still on record and I can download the program again.</p><p>I cannot thank you guys enough, you have given me life back because I am free from pain once again.</p><p>I am a 73 year old healthy female, but as everyone knows, constant PAIN is torture!    Using this program again… I have found my OLD FRIEND… and i am nearly back to normal again. </p><p>This program works for me, the sounds, the music.. 🙂</p><p>I thank NATURAL SYNERGY SOLUTION for their program and for helping me to get to be pain free once more.</p>",
    "attribution": "<p class=\"testimonial-name\">Anne <span style=\"font-weight: 400\">South Africa</span></p>",
    "supplemental": ""
  },
  {
    "name": "David",
    "image": "../images/go/no-photo.jpg",
    "alt": "No portrait supplied for David",
    "content": "<p>I have tried other acupressure apps for phone and web versions before but I think Natural Synergy is superior in terms of content and practicality.</p><p>Thank you so much</p>",
    "attribution": "<p class=\"testimonial-name\">David <span class=\"testimonial-location\">Australia</span></p>",
    "supplemental": ""
  },
  {
    "name": "Cindy",
    "image": "../images/go/no-photo.jpg",
    "alt": "No portrait supplied for Cindy",
    "content": "<p>The sounds linked with acupuncture is amazing.  Even without touch I can feel the tones working. Thank you again.</p>",
    "attribution": "<p class=\"testimonial-name\">Cindy <span class=\"testimonial-location\">California, USA</span></p>",
    "supplemental": ""
  },
  {
    "name": "Lori",
    "image": "../images/lori.jpg",
    "alt": "Lori",
    "content": "<p>My back pain was GONE! I am in AWE of this program. I love this program and app! Even when I am not able to do all of the acupressure points because I’m out running around, I will listen to the coinciding meridian sounds specific to my ailment and much to my delight, I find relief! I’m very active and suffered two back injuries years ago that continue to cause me pain on occasion. This pain never goes away in its own and requires a trip to the chiropractor which I don’t always have the time for. I had been suffering the pain for several weeks when I purchased Natural Synergy. While at work the other day, feeling much pain from a workout the previous evening, I decided to listen to the meridian sounds related to back pain. Before I had even finished them all, my back pain was GONE! This truly has never happened! It’s been two days and the pain has not returned! But just for good measure, I listen at least once a day…</p><p>I am in AWE of this program. Thank you Natural Synergy!</p>",
    "attribution": "<p class=\"testimonial-name\">Lori <span class=\"testimonial-location\">Phoenix, USA</span></p>",
    "supplemental": ""
  },
  {
    "name": "Nora",
    "image": "../images/nora.jpg",
    "alt": "Nora",
    "content": "<p>I have used the Natural Synergy app to relieve pain in my knee, relieve discomfort in my teeth and boost my immune system and am convinced that the system works. Sometimes you don’t even need to work on all the points!</p>",
    "attribution": "<p class=\"testimonial-name\">Nora <span class=\"testimonial-location\">England</span></p>",
    "supplemental": ""
  },
  {
    "name": "Elsje",
    "image": "../images/elsje.jpg",
    "alt": "Elsje",
    "content": "<p>I must say that your approach works miracles for me.</p><p>Real acupuncture hurts too much, and you offer the perfect solution for home treatment. Here in Belgium the doctors have never even heard about brain waves. </p><p>I suffer from fibromyalgia, spasmophelia and chronic fatigue syndrome, maximum score on the first two.</p><p>I built off all opioids and most of my benzodiazepines. And i make medicinal cannabis tea when the spasms build up.</p><p>Your program is groundbreaking! Thank you ever so much.</p>",
    "attribution": "<p class=\"testimonial-name\">Elsje <span class=\"testimonial-location\">Belgium</span></p>",
    "supplemental": ""
  },
  {
    "name": "Rachel",
    "image": "../images/go/no-photo.jpg",
    "alt": "No portrait supplied for Rachel",
    "content": "<p>I have your program which I LOVE – it’s so Informative and clear and its so enjoyable to create different ‘recipes’ using the app. So thank you for putting it together and offering it at an affordable price.</p>",
    "attribution": "<p class=\"testimonial-name\">Rachel <span class=\"testimonial-location\">England</span></p>",
    "supplemental": ""
  },
  {
    "name": "Santanita",
    "image": "../images/testimonials/Santanita.jpg",
    "alt": "Santanita",
    "content": "<p>I found Natural Synergy and began using it as soon as I got everything downloaded. The books have great images to help you find your acupoints along with written location descriptions. It really was easy to find the points. It’s only been a few weeks for me so just getting started and feeling better each and every day. I’m excited to see what a few months will do for me. I have convinced my husband to try this program to help him with his thyroid. Its just been a few days, but his energy is getting stronger and his ability to concentrate is getting better. I love having the ability to feel better placed in my own hands. Thank you Natural Synergy!</p>",
    "attribution": "<p class=\"testimonial-name\">Santanita <span class=\"testimonial-location\">USA</span></p>",
    "supplemental": ""
  },
  {
    "name": "Philippe",
    "image": "../images/testimonials/Philippe.jpg",
    "alt": "Philippe",
    "content": "<p>Natural Synergy is just a wonderful tool for learning to relax, meditate and even relieving a lot of pains and ailments. It is very easy to use with so many different tracks, you just choose the one you need or feel comfortable with and it is done, you just sit back and enjoy some wonderful tracks. Try it, I am sure you won’t regret it. I sure didn’t, and I’ve been using it for almost a year.</p><p>Good health to you all,</p>",
    "attribution": "<p class=\"testimonial-name\">Philippe</p>",
    "supplemental": ""
  },
  {
    "name": "Ann",
    "image": "../images/go/no-photo.jpg",
    "alt": "No portrait supplied for Ann",
    "content": "<p>I use the natural synergy information nearly every day. It is one of the really worthwhile files on my computer. Thank you so much.</p>",
    "attribution": "<p class=\"testimonial-name\">Ann <span class=\"testimonial-location\">Switzerland</span></p>",
    "supplemental": ""
  },
  {
    "name": "Orla",
    "image": "../images/testimonials/Orla.jpg",
    "alt": "Orla",
    "content": "<p>I love the way Natural Sounds, can add a depth of healing to any session. It gives each individual a connection point to release and unblock on many levels.</p>",
    "attribution": "<p class=\"testimonial-name\">Orla</p>",
    "supplemental": ""
  },
  {
    "name": "Wendy",
    "image": "../images/testimonials/wendy.jpg",
    "alt": "Wendy",
    "content": "<p>I’ve been using the natural synergy app for a few short days now.</p><p>I’m finding myself having better meditation with it, as well as less pain from fibromyalgia.</p><p>Thank You for creating this app that I have on my cell phone!</p><p>I know as I continue to use it my health will continue to get better.</p>",
    "attribution": "<p class=\"testimonial-name\">Wendy</p>",
    "supplemental": ""
  },
  {
    "name": "Greg",
    "image": "../images/index/Greg.jpg",
    "alt": "Greg",
    "content": "<p>In my reading I was led to Natural Synergy which provided not only a wealth of information, but the addition of a ‘application’ that addresses wave frequencies and their specifically targeted areas where they can be applied to healing, along with sounds that achieve those frequencies that you can use by listening or applying acupressure therapy.  I could read all kinds of books on various topics, and did, but Natural Synergy Application serves as a portal to reference information and actual tools, along with information news as new research yields results.  <br><br>My investment is well worth the available tools and information.  If any of the above, or all of the above intrigue you, I recommend Natural Synergy to you.  Whether the reference set, the tools, the blog and/or updates…each is worth the investment alone. <br><br>I am just over 60, generally lean a bit more on the conservative side.  I have an open mind and readily embrace the incredible long standing components as well as emerging information and tools available at this fortunate time.</p>",
    "attribution": "<p class=\"testimonial-name\">Greg</p>",
    "supplemental": ""
  },
  {
    "name": "Jacques",
    "image": "../images/go/no-photo.jpg",
    "alt": "No portrait supplied for Jacques",
    "content": "<p>I can tell you that after using the Blood Pressure balancer for quite a while, I have lowered and kept my 190/90 High Blood Pressure down to a mean 135/67-145/70 Pressure, without any drug…that is quite good for a 81 year old man, is it not !!!…thanks to you…</p>",
    "attribution": "<p class=\"testimonial-name\">Jacques <span class=\"testimonial-location\">Canada</span></p>",
    "supplemental": ""
  },
  {
    "name": "Paul",
    "image": "../images/testimonials/Jacques.jpg",
    "alt": "Source portrait accompanying Paul’s review",
    "content": "<p>Natural Synergy worked for my skin problems. Eczema i had for years. When i feel it coming on i apply the pressure to the different points on my body a few times per day and it keeps eczema from becoming a problem. Now its been a few months since i had any problems.</p><p>I am very happy i bought the products. </p>",
    "attribution": "<p class=\"testimonial-name\">Paul</p>",
    "supplemental": ""
  },
  {
    "name": "Dr. Martin Siu",
    "image": "../images/go/Martin.jpg",
    "alt": "Dr. Martin Siu",
    "content": "<p>I used the Natural Synergy protocol on my patient for eczema twice weekly for 3 weeks together with a change of diet. Result was excellent. Patient recovered fully.</p>",
    "attribution": "<p class=\"testimonial-name\">Dr. Martin Siu <span class=\"testimonial-location\">DNM, DHS, IMD, PhD</span></p><p class=\"testimonial-credentials\"><span class=\"testimonial-location\">Doctor of Natural Medicine, Doctor of Humanitarian Services</span></p><p class=\"testimonial-credentials\"><span class=\"testimonial-location\">Doctor of Integrative Medicine. Doctor of Chinese Medicine &amp; Acupuncture, Qigong Medicine</span></p>",
    "supplemental": ""
  },
  {
    "name": "Coco",
    "image": "../images/coco.jpg",
    "alt": "Coco",
    "content": "<p>The concept of a dual benefit from Acupressure combined with the Entrainment Concept is so unique.</p><p>The Binaural and others beats/ Audios combined make it awfully good and relaxing during the day and night too, while sleeping.</p><p>I am an RA (Rheumatoid arthritis) sufferer for the past two decades and sleep was totally deprived because of constant pain all over, BUT, i must say these audios helped me most.</p><p>Was surprised when other members of my family (in other rooms) came up to me playing these beats and said, “What music is this? It is so soothing and really relaxes you”. <br><br>Thanks for this.</p>",
    "attribution": "<p class=\"testimonial-name\">Coco</p>",
    "supplemental": ""
  },
  {
    "name": "Karen",
    "image": "../images/go/no-photo.jpg",
    "alt": "No portrait supplied for Karen",
    "content": "<p>Our son was diagnosed with schizophrenia 13 years ago.</p><p>This is the first combination of your acu-frequencies we were using.</p><p>I have steadily been playing the combination of Binaural beats, ethereal, Triple burner and Joy.</p><p>This combination  for the last week, on an off throughout the day.</p><p>Today he just made an off the wall, comment as we were visiting.</p><p>He said you know mom I feel different.  I asked him how the only thing he would say is I am more aware of what is going on around me and I feel safe.</p><p>Those were the best words I have heard from him during the last 15 years.</p><p>Thank you for making this tool affordable.</p><p>I asked him if he liked the music I was playing for him.</p><p>He stated that is when he feels like himself,  the voices are not in his head while he is listening to the music and he feel peaceful inside.</p><p>I am recommending you to other families who could use this.</p><p>Please keep on your path’s work. You are doing outstanding 🙂</p>",
    "attribution": "<p class=\"testimonial-name\">Karen <span class=\"testimonial-location\">Wyoming</span></p>",
    "supplemental": ""
  },
  {
    "name": "Lynn",
    "image": "../images/testimonials/lynn.jpg",
    "alt": "Lynn",
    "content": "<p>Thank you so much for the Natural Synergy program.  I’ve been using it for a couple of months.  I listen to the meridian tones almost daily.  Sometimes twice a day, morning and evening.  I feel they are benefitting me.  I’m learning much from the book about blood pressure.  I share your blogs with some of my friends, too.  Thank you again for all the wealth of good information you provide.  I’m learning so much from you!</p>",
    "attribution": "<p class=\"testimonial-name\">Lynn</p>",
    "supplemental": ""
  },
  {
    "name": "Tania",
    "image": "../images/index/Tania-e1588306709214.jpg",
    "alt": "Tania",
    "content": "<p>I have attached photos of an experiment I did with a pot plant which had deteriorated significantly after being transplanted. It was fading fast over the course of a couple of days so with nothing to lose I attached my headphones around the pot and played the Schumann Resonance for about an hour over three days and the result was amazing as you can see in the before and after photos.</p>",
    "attribution": "<p class=\"testimonial-name\">Tania <span class=\"testimonial-location\">Australia</span></p>",
    "supplemental": "<img class=\"testimonial-evidence\" src=\"images/testimonials/plant-on-a-pot.png\" alt=\"Before-and-after photographs of Tania’s potted plant experiment\" width=\"449\" height=\"449\" loading=\"lazy\" decoding=\"async\">"
  },
  {
    "name": "Joe",
    "image": "../images/go/no-photo.jpg",
    "alt": "No portrait supplied for Joe",
    "content": "<p>I have used the app many times, it is easy and so helpful.  I have it on my phone, and use it in my classes.  I teach Qi Gong / Tai Qi in senior centers.  There are always questions about their ailments and what they might do for themselves.  I whip out my phone and give them a pressure point they can use.   The folks so appreciate having and seeing something with a picture and seeming just for them.  Great app!</p>",
    "attribution": "<p class=\"testimonial-name\">Joe</p>",
    "supplemental": ""
  },
  {
    "name": "Stella",
    "image": "../images/index/Stella.jpg",
    "alt": "Stella",
    "content": "<p>After suffering insomnia for many years, I came across Natural Synergy, and to say that my life has changed would be an understatement.  I am amazed that by using something so simple as acupressure I can sleep for a full eight hours without waking.  I now feel totally refreshed when I wake up and have more energy throughout the day.</p>",
    "attribution": "<p class=\"testimonial-name\">Stella</p>",
    "supplemental": ""
  }
];

  const list = document.querySelector('[data-testimonials]');
  if (!list) return;
  const scriptUrl = document.currentScript.src;
  const fragment = document.createDocumentFragment();

  testimonials.forEach((item) => {
    const article = document.createElement('article');
    article.className = 'testimonial-card';
    const media = document.createElement('div');
    media.className = 'testimonial-card__media';
    const image = document.createElement('img');
    image.className = 'testimonial-avatar';
    image.src = new URL(item.image, scriptUrl).href;
    image.alt = item.alt;
    image.width = 120;
    image.height = 120;
    image.loading = 'lazy';
    image.decoding = 'async';
    media.appendChild(image);
    const copy = document.createElement('div');
    copy.className = 'testimonial-card__copy';
    copy.innerHTML = item.content + item.attribution + item.supplemental;
    article.append(media, copy);
    fragment.appendChild(article);
  });
  list.replaceChildren(fragment);
}());
