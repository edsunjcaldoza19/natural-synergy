(function () {
  const articles = [
    {"title": "What's in your drinking water? You'd be surprised!", "date": "Aug 29, 2022", "image": "../images/tap-water.png", "url": "whats-in-your-drinking-water.html", "excerpt": "Four different kinds of poisons may be hiding in drinking water. Learn what to look for and how to make a more informed choice.", "categories": ["Health"]},
    {"title": "Dementia Warning: Avoid These Health Hazards At All Costs!", "date": "Jul 7, 2022", "image": "../images/dementia.webp", "url": "dementia-warning-avoid-these-health-hazards-at-all-costs.html", "excerpt": "Dementia risk factors can be closer to home than we expect. Discover everyday habits worth understanding.", "categories": ["Brain Health", "Health"]},
    {"title": "Research Confirmed: Dark Chocolate Is A Superfood", "date": "Feb 25, 2022", "image": "../images/chocolate.webp", "url": "the-health-benefits-of-dark-chocolate.html", "excerpt": "The health benefits of dark chocolate are not just wishful thinking. Here is what the research says.", "categories": ["Diet", "Health"]},
    {"title": "11 Natural Remedies That Prevent Hair Loss and Promote Hair Regrowth", "date": "Jan 22, 2022", "image": "../images/hair.webp", "url": "11-natural-remedies-that-prevent-hair-loss-promotes-hair-regrowth.html", "excerpt": "Natural remedies can support a healthy scalp and a daily routine that encourages stronger hair.", "categories": ["Health"]},
    {"title": "The Incredible Health Benefits Of Cold Showers", "date": "Jan 12, 2022", "image": "../images/cold.webp", "url": "the-incredible-health-benefits-of-cold-showers.html", "excerpt": "Cold water is a simple practice with a surprisingly rich history. Explore the possible benefits and how to begin.", "categories": ["Health"]},
    {"title": "Feel Tired All The Time, No Matter How Much Rest You Get?", "date": "Dec 8, 2021", "image": "../images/fatigue.webp", "url": "feel-tired-all-the-time-no-matter-how-much-rest-you-get.html", "excerpt": "Persistent tiredness has many possible causes. Start with a clearer look at the habits and signals around you.", "categories": ["Health"]},
    {"title": "Toxic Blood, Toxic Seawater, and Toxic Pool", "date": "Oct 13, 2021", "image": "../images/chlorine.webp", "url": "toxic-pool-toxic-seawater-toxic-blood.html", "excerpt": "Water quality matters. Learn why the water we swim in and drink deserves more thoughtful attention.", "categories": ["Health", "Hormones", "Toxins"]},
    {"title": "8 Science Backed Reasons Why You Should Drink More Coffee", "date": "Sep 29, 2021", "image": "../images/coffee.webp", "url": "8-science-backed-reasons-why-you-should-drink-more-coffee.html", "excerpt": "Coffee is part of many daily rituals. These science-backed reasons may change the way you think about your cup.", "categories": ["Health"]},
    {"title": "Weight Loss Warning: Protein Shakes, Smoothies, and Meal Replacement Drinks", "date": "Jul 20, 2021", "image": "../images/smoothie.webp", "url": "weight-loss-warning.html", "excerpt": "A quick drink is not always as nourishing as it sounds. Look more closely at what is inside the glass.", "categories": ["Health"]},
    {"title": "14 Little Known Natural Therapies For Pain Relief", "date": "May 31, 2021", "image": "../images/pain.webp", "url": "14-little-known-natural-therapies-for-pain-relief.html", "excerpt": "From movement to traditional practices, explore gentle options that may support a more comfortable day.", "categories": ["Health"]},
    {"title": "Without 'Earthing' You're Prone to A Cascade of Modern Illnesses", "date": "Jul 16, 2020", "image": "../blog/images/earthing-for-wellbeing/earthing_55.webp", "url": "earthing-for-wellbeing.html", "excerpt": "The practice of earthing has a long history. Here is why connection with the ground remains part of the conversation.", "categories": ["Electromagnetic frequencies", "Health", "Sound healing"]},
    {"title": "Acid Reflux Medication Warning. Try 7 Natural Alternatives", "date": "Jul 2, 2020", "image": "../blog/images/chronic-acid-reflux-the-dangers-of-omeprazole/ar3.webp", "url": "chronic-acid-reflux-the-dangers-of-omeprazole.html", "excerpt": "Understand the everyday triggers behind reflux and the natural alternatives people often explore.", "categories": ["Health"]},
    {"title": "The Immense Benefits Of Listening To Classical Music", "date": "Jun 22, 2020", "image": "../blog/images/the-immense-benefits-of-listening-to-classical-music/music1.webp", "url": "the-immense-benefits-of-listening-to-classical-music.html", "excerpt": "Music can shift the mood of a room and the rhythm of a day. Explore its place in a calmer routine.", "categories": ["Health"]},
    {"title": "Treat Yeast Infections At Its Root Cause, Naturally", "date": "Jun 18, 2020", "image": "../blog/images/treat-yeast-infections-at-its-root-cause-naturally/thrush_2.webp", "url": "treat-yeast-infections-at-its-root-cause-naturally.html", "excerpt": "A closer look at the habits, systems and natural approaches connected to recurring imbalance.", "categories": ["Health"]},
    {"title": "A Healthy Microbiome Is More Important Than You Think", "date": "Apr 22, 2020", "image": "../blog/images/a-healthy-gut-biome-is-more-important-than-you-think/gut_health_3.webp", "url": "a-healthy-gut-biome-is-more-important-than-you-think.html", "excerpt": "The gut is a living ecosystem. Learn why supporting it can be part of a broader approach to wellbeing.", "categories": ["Health"]},
    {"title": "We've Been Lied-To About Heart Disease", "date": "Mar 15, 2020", "image": "../blog/images/weve-been-lied-to-about-heart-disease/heart_blog_2.webp", "url": "weve-been-lied-to-about-heart-disease.html", "excerpt": "Question familiar assumptions about heart health and learn which daily signals deserve attention.", "categories": ["Health"]},
    {"title": "13 Festive Season Hacks That Allow You To Have Your Cake and Eat It Too", "date": "Dec 21, 2019", "image": "../blog/images/13-christmas-health-hacks/Christmas_cheer.webp", "url": "13-christmas-health-hacks.html", "excerpt": "Enjoy the festive season with a few simple ways to keep energy, digestion and balance in mind.", "categories": ["Health"]},
    {"title": "Can Hormones Slow Metabolism and Increase Fat Storage?", "date": "Oct 17, 2019", "image": "../blog/images/can-hormones-slow-metabolism-and-increase-fat-storage/metabolism.webp", "url": "can-hormones-slow-metabolism-and-increase-fat-storage.html", "excerpt": "Metabolism is shaped by more than willpower. Explore the role hormones can play in the bigger picture.", "categories": ["Hormones"]},
    {"title": "Harvard Confirms: Inflammation Is The Root Of Most Diseases", "date": "Oct 13, 2019", "image": "../blog/images/inflammation-is-the-root-of-disease/inflammation_pic.webp", "url": "inflammation-is-the-root-of-disease.html", "excerpt": "Chronic inflammation is a useful signal to understand. Learn how small choices can support the body.", "categories": ["Health"]},
    {"title": "Miracle Healing Herb Poison Warning", "date": "Oct 3, 2019", "image": "../blog/images/miracle-healing-herb-poison-warning/turmeric.webp", "url": "miracle-healing-herb-poison-warning.html", "excerpt": "Natural does not always mean harmless. Read why quality, dose and context matter with herbal products.", "categories": ["Health", "Toxins"]},
    {"title": "5300-Year-Old Mummy Practiced Acupressure", "date": "Sep 23, 2019", "image": "../blog/images/otzi-practiced-acupressure/Otzi-1.webp", "url": "otzi-practiced-acupressure.html", "excerpt": "A discovery from the past offers a fascinating glimpse into the long history of bodywork.", "categories": ["Acupressure", "Healing"]},
    {"title": "Acu-therapies Delivering Astounding Results", "date": "Sep 17, 2019", "image": "../blog/images/the-power-of-tcm/yin_yang.webp", "url": "the-power-of-tcm.html", "excerpt": "Traditional Chinese Medicine offers a different lens for understanding balance, movement and energy.", "categories": ["Health", "TCM"]},
    {"title": "Insulin Resistance: Why You Can't Lose Weight", "date": "Sep 10, 2019", "image": "../blog/images/insulin-resistance/carbs.webp", "url": "insulin-resistance.html", "excerpt": "Learn how the body manages energy and why steady habits can matter more than quick fixes.", "categories": ["Diet", "Health", "Hormones"]},
    {"title": "Household Items That Zap Your Testosterone", "date": "Aug 9, 2019", "image": "../blog/images/boost-testosterone-naturally/T2.webp", "url": "boost-testosterone-naturally.html", "excerpt": "Everyday surroundings can influence wellbeing. Take a closer look at the products around you.", "categories": ["Diet", "Health", "Hormones"]},
    {"title": "The Magic Pill", "date": "Jul 26, 2019", "image": "../blog/images/the-magic-pill/red_pill.webp", "url": "the-magic-pill.html", "excerpt": "There is no single shortcut to good health. This article explores a more grounded approach.", "categories": ["Diet", "Healing", "Health"]},
    {"title": "A Common Disease That Nobody's Heard Of", "date": "Jul 12, 2019", "image": "../blog/images/fatty-liver-disease/fatty_liver_pic_2.webp", "url": "fatty-liver-disease.html", "excerpt": "Fatty liver disease can be quiet for a long time. Learn why awareness and simple habits matter.", "categories": ["Diet", "Health", "Hormones", "Toxins"]},
    {"title": "How To Get The Most Out Of The Natural Synergy App", "date": "Jun 4, 2019", "image": "../blog/images/how-to-get-the-most-out-of-the-natural-synergy-app/feature_image.webp", "url": "how-to-get-the-most-out-of-the-natural-synergy-app.html", "excerpt": "A clear starting point for exploring the app, sound sessions and practical learning library.", "categories": ["Healing"]},
    {"title": "It's OK To Enjoy Your Bacon", "date": "Jun 3, 2019", "image": "../blog/images/its-ok-to-enjoy-your-bacon/bacon.webp", "url": "its-ok-to-enjoy-your-bacon.html", "excerpt": "A balanced approach to food leaves room for pleasure, context and a little common sense.", "categories": ["Diet"]},
    {"title": "Frequency and Vibration", "date": "May 14, 2019", "image": "../blog/images/frequency-and-vibration/Nikola.webp", "url": "frequency-and-vibration.html", "excerpt": "An introduction to the ideas behind sound, frequency and the body.", "categories": ["Frequencies"]},
    {"title": "Five Habits For A Fulfilling Life", "date": "May 9, 2019", "image": "../blog/images/five-habits-for-a-fulfilling-life/Marcus_Aurelius.webp", "url": "five-habits-for-a-fulfilling-life.html", "excerpt": "Small, repeatable habits can add up to a calmer and more meaningful everyday rhythm.", "categories": ["Stoicism"]},
    {"title": "The Invisible Poison We Can't Live Without", "date": "Mar 25, 2019", "image": "../blog/images/the-invisible-poison-we-cant-live-without/radiation.webp", "url": "the-invisible-poison-we-cant-live-without.html", "excerpt": "A thoughtful look at the hidden exposures that can become part of modern life.", "categories": ["Toxins"]},
    {"title": "How To Be Happy", "date": "Feb 20, 2019", "image": "../blog/images/10-rules-for-a-happier-and-more-fulfilling-life/how-to-be-happy.jpg", "url": "10-rules-for-a-happier-and-more-fulfilling-life.html", "excerpt": "Simple reflections for creating more ease, connection and contentment in a busy world.", "categories": ["Stress management"]},
    {"title": "Human Guinea Pigs and GMO's", "date": "Feb 1, 2019", "image": "../blog/images/human-guinea-pigs-gmos/human-guinea-pig.jpg", "url": "human-guinea-pigs-gmos.html", "excerpt": "Questions about food, research and informed choice in a changing food system.", "categories": ["Diet", "Toxins"]},
    {"title": "Breakfast Vs Fasting", "date": "Jan 9, 2019", "image": "../blog/images/breakfast-vs-fasting/breakfast.jpg", "url": "breakfast-vs-fasting.html", "excerpt": "Compare two familiar approaches to eating and consider what works for your own day.", "categories": ["Diet", "Healing"]},
    {"title": "The Science Of Yoga", "date": "Dec 12, 2018", "image": "../blog/images/the-science-of-yoga/yoga.jpg", "url": "the-science-of-yoga.html", "excerpt": "Movement, breath and attention come together in this practical look at yoga.", "categories": ["Yoga"]},
    {"title": "Essential Oils: A Natural Medicine", "date": "Nov 28, 2018", "image": "../blog/images/benefits-of-essential-oils/essential-oils.jpg", "url": "benefits-of-essential-oils.html", "excerpt": "Explore the history of essential oils and the care needed when using concentrated botanicals.", "categories": ["Healing"]},
    {"title": "The Healing Power Of Herbs", "date": "Nov 18, 2018", "image": "../blog/images/the-healing-power-of-herbs/herbs.jpg", "url": "the-healing-power-of-herbs.html", "excerpt": "A gentle introduction to phytotherapy and the many ways herbs have supported people over time.", "categories": ["Diet", "Healing", "Health"]},
    {"title": "The Power Of Acupuncture", "date": "Nov 16, 2018", "image": "../blog/images/the-power-of-acupuncture/acupuncture.jpg", "url": "the-power-of-acupuncture.html", "excerpt": "Understand the principles behind acupuncture and its place in traditional practice.", "categories": ["Healing"]},
    {"title": "The Health Food That Poisons", "date": "Nov 14, 2018", "image": "../blog/images/the-dangers-of-soy/soy-health-food.jpg", "url": "the-dangers-of-soy.html", "excerpt": "A closer look at soy, assumptions and the importance of context when choosing food.", "categories": ["Diet", "Health", "Toxins"]},
    {"title": "Thyroid Facts Everyone Should Know", "date": "Nov 9, 2018", "image": "../blog/images/important-thyroid-facts/thyroid.jpg", "url": "important-thyroid-facts.html", "excerpt": "Learn the basics of thyroid function and the signals that can be easy to overlook.", "categories": ["Health", "Hormones"]},
    {"title": "How To Eat Organic On A Budget", "date": "Oct 22, 2018", "image": "../blog/images/how-to-eat-organic-on-a-tight-budget/organic-food.jpeg", "url": "how-to-eat-organic-on-a-tight-budget.html", "excerpt": "Practical ways to make thoughtful food choices without making the grocery bill impossible.", "categories": ["Diet"]},
    {"title": "How Astroturfing Is Hazardous For Your Health", "date": "Sep 20, 2018", "image": "../blog/images/astroturfing-is-hazardous-for-your-health/astroturfing-scaled.jpg", "url": "astroturfing-is-hazardous-for-your-health.html", "excerpt": "A guide to spotting manufactured health messaging and finding information you can trust.", "categories": ["Health"]},
    {"title": "Shattering Cancer With Resonant Frequencies", "date": "Jul 30, 2018", "image": "../blog/images/shattering-cancer-with-resonant-frequencies-video-proof/frequencies.jpg", "url": "shattering-cancer-with-resonant-frequencies-video-proof.html", "excerpt": "Explore the history of resonant frequencies and the questions they raise about sound and healing.", "categories": ["Healing", "Sound healing"]},
    {"title": "Tuning Forks Are More Effective Than Acupuncture Needles", "date": "Jul 26, 2018", "image": "../blog/images/tuning-forks-are-more-effective-than-acupuncture-needles/tuning-forks.png", "url": "tuning-forks-are-more-effective-than-acupuncture-needles.html", "excerpt": "A look at tuning forks, vibration and the evolving conversation around non-invasive therapy.", "categories": ["Healing", "Sound healing"]},
    {"title": "Rewiring Your Brain For Serenity", "date": "Jul 11, 2018", "image": "../blog/images/rewiring-your-brain-for-serenity/rewire-your-brain.jpg", "url": "rewiring-your-brain-for-serenity.html", "excerpt": "Build a calmer inner rhythm with attention, repetition and a more supportive environment.", "categories": ["Stress management"]},
    {"title": "The Ketogenic Diet", "date": "Jun 4, 2018", "image": "../blog/images/the-ketogenic-diet/keto-diet.jpg", "url": "the-ketogenic-diet.html", "excerpt": "An accessible overview of the ketogenic approach and the questions worth asking before you begin.", "categories": ["Diet"]},
    {"title": "The Top 9 Cancer Causing Foods", "date": "May 21, 2018", "image": "../blog/images/the-top-9-cancer-causing-foods-that-we-all-eat-regularly/junkfood3.webp", "url": "the-top-9-cancer-causing-foods-that-we-all-eat-regularly.html", "excerpt": "A critical look at popular food claims and the importance of evidence when making decisions.", "categories": ["Toxins"]},
    {"title": "Alarming Links Between Behavioral Disorders and EMF", "date": "May 17, 2018", "image": "../blog/images/how-emf-causes-autism-and-adhd/alarming-link.jpg", "url": "how-emf-causes-autism-and-adhd.html", "excerpt": "Learn more about electromagnetic fields, evidence and how to think carefully about health claims.", "categories": ["Electromagnetic frequencies"]},
    {"title": "Sound Healing Pyramids Of Egypt", "date": "Jan 9, 2018", "image": "../blog/images/sound-healing-pyramids-of-egypt/sound-healing-pyramids.jpg", "url": "sound-healing-pyramids-of-egypt.html", "excerpt": "A fascinating journey through ancient spaces, resonance and the human relationship with sound.", "categories": ["Sound healing"]},
    {"title": "Healing Science Of Cymatics", "date": "Dec 18, 2017", "image": "../blog/images/cymatics/cymatics.jpg", "url": "cymatics.html", "excerpt": "Discover the visual language of vibration and why cymatics continues to capture our imagination.", "categories": ["Healing"]},
    {"title": "The Grounded", "date": "Dec 12, 2017", "image": "../blog/images/archive/grounding.jpg", "url": "grounding-for-health.html", "excerpt": "A grounded introduction to the relationship between nature, movement and wellbeing.", "categories": ["Healing", "Health"]},
    {"title": "The Healing Power Of Sound", "date": "Dec 7, 2017", "image": "../blog/images/archive/sound-healing.jpg", "url": "the-healing-power-of-sound.html", "excerpt": "Why sound has always been part of human rituals for rest, connection and healing.", "categories": ["Sound healing"]},
    {"title": "Schumann Resonance For Optimum Health", "date": "Dec 1, 2017", "image": "../blog/images/archive/Schumann-resonance.jpg", "url": "schumann-resonance.html", "excerpt": "Explore the idea of planetary rhythm and its place in the natural health conversation.", "categories": ["Stress management"]},
    {"title": "The Cascading Effects Of Anger", "date": "Aug 22, 2017", "image": "../blog/images/archive/cascading-anger.jpg", "url": "the-cascading-effects-of-anger.html", "excerpt": "A calm, practical look at how emotions can ripple through our bodies and relationships.", "categories": ["Stress management"]}
  ];

  const topicNames = ['All topics', 'Acupressure', 'Binaural beats', 'Brain Health', 'Diet', 'Electromagnetic frequencies', 'Frequencies', 'Healing', 'Health', 'Hormones', 'Sound healing', 'Stoicism', 'Stress management', 'TCM', 'Toxins', 'Yoga'];
  const pageSize = 8;
  let activeTopic = 'All topics';
  let activePage = 1;
  let query = '';

  const grid = document.querySelector('[data-article-grid]');
  const pagination = document.querySelector('[data-pagination]');
  const count = document.querySelector('[data-archive-count]');
  const search = document.querySelector('#article-search');
  const topics = document.querySelector('[data-topic-list]');

  const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
  const scriptUrl = document.currentScript ? document.currentScript.src : window.location.href;
  const imageMarkup = (item) => item.image ? '<img src="' + escapeHtml(new URL(item.image, scriptUrl).href) + '" alt="' + escapeHtml(item.title) + '" loading="lazy" decoding="async">' : '<span class="media-placeholder" aria-hidden="true"></span>';

  function filteredArticles() {
    return articles.filter((article) => {
      const matchesTopic = activeTopic === 'All topics' || article.categories.includes(activeTopic);
      const haystack = (article.title + ' ' + article.excerpt + ' ' + article.categories.join(' ')).toLowerCase();
      return matchesTopic && (!query || haystack.includes(query));
    });
  }

  function renderArticles() {
    const filtered = filteredArticles();
    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    activePage = Math.min(activePage, totalPages);
    const start = (activePage - 1) * pageSize;
    const visible = filtered.slice(start, start + pageSize);
    const total = filtered.length;
    count.textContent = total + (total === 1 ? ' article' : ' articles');
    if (!visible.length) {
      grid.innerHTML = '<p class="empty-results">No articles match that search. Try another word or topic.</p>';
    } else {
      grid.innerHTML = visible.map((article) => '<article class="article-card"><a class="article-card__media" href="' + escapeHtml(article.url) + '" target="_blank" rel="noopener">' + imageMarkup(article) + '</a><div class="article-card__body"><p class="article-card__meta"><span>' + escapeHtml(article.categories[0]) + '</span><span>' + escapeHtml(article.date) + '</span></p><h3><a href="' + escapeHtml(article.url) + '" target="_blank" rel="noopener">' + escapeHtml(article.title) + '</a></h3><p>' + escapeHtml(article.excerpt) + '</p><a class="text-link" href="' + escapeHtml(article.url) + '" target="_blank" rel="noopener">Read more</a></div></article>').join('');
    }
    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    if (totalPages < 2) {
      pagination.innerHTML = '';
      return;
    }
    const buttons = [];
    for (let page = 1; page <= totalPages; page += 1) {
      buttons.push('<button type="button" data-page="' + page + '" aria-label="Page ' + page + '"' + (page === activePage ? ' aria-current="page"' : '') + '>' + page + '</button>');
    }
    pagination.innerHTML = buttons.join('');
    pagination.querySelectorAll('button').forEach((button) => button.addEventListener('click', (event) => {
      activePage = Number(button.dataset.page);
      renderArticles();
      pagination.querySelector('[data-page="' + activePage + '"]').focus({ preventScroll: event.detail > 0 });
      if (event.detail > 0) document.querySelector('.archive-toolbar').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));
  }

  function renderTopics() {
    topics.innerHTML = topicNames.map((topic) => '<button class="topic-button' + (topic === activeTopic ? ' is-active' : '') + '" type="button" data-topic="' + escapeHtml(topic) + '"' + (topic === activeTopic ? ' aria-pressed="true"' : ' aria-pressed="false"') + '>' + escapeHtml(topic) + '</button>').join('');
    topics.querySelectorAll('[data-topic]').forEach((button) => button.addEventListener('click', () => {
      activeTopic = button.dataset.topic;
      activePage = 1;
      topics.querySelectorAll('[data-topic]').forEach((topic) => {
        const selected = topic.dataset.topic === activeTopic;
        topic.classList.toggle('is-active', selected);
        topic.setAttribute('aria-pressed', String(selected));
      });
      renderArticles();
    }));
  }

  if (search) search.addEventListener('input', () => {
    query = search.value.trim().toLowerCase();
    activePage = 1;
    renderArticles();
  });

  renderTopics();
  renderArticles();
}());
