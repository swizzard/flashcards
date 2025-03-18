const cards = [
  {
    front: "এ সব লিখে নেব?",
    back: "e sɔb likhe nebô?\nshall i write all this down?",
  },
  { front: "দাদা", back: "dada\nelder brother" },
  { front: "আমরা আসিনি", back: "amra asini\nwe did not come" },
  { front: "দিন", back: "din\nday" },
  { front: "ওই বইগুলো ওর?", back: "oi bôigulo or?\nare those books his/hers?" },
  { front: "ওর", back: "or\nhis, her" },
  { front: "ইনি", back: "ini\nhe, she" },
  { front: "বোনের", back: "bonerô\nsister's" },
  { front: "এর", back: "er\nhis, her" },
  { front: "মেয়ে", back: "meye\ngirl, daughter" },
  { front: "বিয়ে", back: "biye\nmarriage" },
  { front: "খায়", back: "khay\nhe/she eats" },
  { front: "খুব", back: "khub\nvery" },
  { front: "অসুখ", back: "ɔsukh\nillness" },
  { front: "আমার সঙ্গে আসুন", back: "amar sɔŋge asun\ncome with me" },
  { front: "সকল", back: "sɔkôl\nall" },
  { front: "সঙ্গে", back: "sɔŋge\nwith" },
  { front: "নখ", back: "nɔkh\nfingernail, toenail" },
  {
    front: "ওর দিদির নাম সরলা",
    back: "or didir nam sɔrôla\nhis/her older sister's name is sarala",
  },
  { front: "খাওয়া-দাওয়া", back: "khaoya-daoya\nfood, meal" },
  { front: "এসে", back: "ese\nhaving come" },
  { front: "সে", back: "se\nhe, she" },
  { front: "মাসী", back: "masī\nmaternal aunt" },
  { front: "উনি উমার বাবা?", back: "uni umar baba?\nis he uma's father?" },
  { front: "আমরা বাঙালী নই", back: "amra bangalī noi\nwe are not bengali" },
  { front: "নাম", back: "nam\nname" },
  {
    front: "আমি আর বসবোনা",
    back: "ami ar bôsbona\ni shall not sit/wait any longer",
  },
  { front: "ওই সব আমার?", back: "oi sɔb amar?\nis all of that mine?" },
  { front: "নুন নিই?", back: "nun nii?\nmay i take (some) salt?" },
  { front: "আমার", back: "amar\nmy" },
  { front: "রুমাল", back: "rumal\nhandkerchief" },
  { front: "দিক", back: "dik\ndirection" },
  { front: "কখন?", back: "kɔkhôn?\nwhen?" },
  { front: "কেউ", back: "keu\nanyone" },
  { front: "কঅর?", back: "kar?\nwhose?" },
  { front: "আমাকে", back: "amake\nme" },
  { front: "ওকে", back: "oke\nhim, her" },
  { front: "একে", back: "eke\nhim, her" },
  { front: "আমি খেয়ে এলাম", back: "ami kheye elam\ni came after eating" },
  { front: "ও শুলনা", back: "o ʃulôna\nhe/she did not lie down" },
  { front: "এনে", back: "ene\nhaving brought" },
  { front: "শেকখে", back: "ʃekhe\nhe/she learns" },
  {
    front: "সে নৌকো করে অনেক দূর গেল",
    back: "se noǔko kɔre ɔnek dūr gælô\nhe/she went a long way by boat",
  },
  { front: "কেউ আমাকে বলেনি", back: "keu amake bɔleni\nnobody told me" },
  { front: "নুন", back: "nun\nsalt" },
  { front: "গা", back: "ga\nbody" },
  { front: "বাগান", back: "bagan\ngarden" },
  { front: "আম আনুন", back: "am anun\nbring (some) mangoes" },
  { front: "এ বইখানা কার?", back: "e boikhana kar?\nwhose is this book?" },
  { front: "নিন না", back: "nin na\nplease take (some)" },
  { front: "ওর নাম কি?", back: "or nam ki?\nwhat is his/her name?" },
  { front: "আমরা কিনি", back: "amra kini\nwe buy" },
  {
    front: "আমি শনিবার আসবোনা",
    back: "ami ʃônibar asbona\ni shall not come (on) saturday",
  },
  { front: "আমি করি", back: "ami kôri\ni do" },
  { front: "রবিবার", back: "rôbibar\n(on) sunday" },
  { front: "শনিবার", back: "ʃônibar\n(on) saturday" },
  { front: "আমরা নিইনি", back: "amra niini\nwe did not take" },
  { front: "উনি আমার মামা", back: "uni amar mama\nhe is my (maternal) uncle" },
  { front: "কেমন", back: "kal\nyesterday, tomorrow" },
  { front: "কেমন?", back: "kæmôn?\nhow?" },
  { front: "ওরা নিলনা", back: "ora nilôna\nthey did not take" },
  { front: "আমি আনিনি", back: "ami anini\ni did not bring" },
  { front: "ওরা", back: "ora\nthey" },
  { front: "নৌকো", back: "noǔko\nboat" },
  { front: "কলম", back: "kɔlôm\npen" },
  { front: "না", back: "na\nno, not" },
  { front: "আমাদের দেবেননা", back: "amader debenna\ndon't give (it) to us" },
  { front: "বইখানা নিয়ে এসো", back: "boikhana niya eso\nbring the book" },
  { front: "আমার রুমাল নিন", back: "amar rumal nin\ntake my handkerchief" },
  {
    front: "না, উনি রিমির বাবা",
    back: "na, uni rimir baba\nno, he is rimi's father",
  },
  { front: "আমার নাম রাউল", back: "amar nam raul\nmy name is raul" },
  { front: "শুনুন!", back: "ʃunun!\nlisten!" },
  { front: "লোক", back: "lok\nperson" },
  { front: "কে?", back: "ke?\nwho?" },
  { front: "কি?", back: "ki?\nwhat?" },
  { front: "আমরা নিইনি", back: "amra niini\nwe did not take" },
  { front: "আবার", back: "abar\nagain" },
  { front: "লাল", back: "lal\nred" },
  { front: "দিদি", back: "didi\nelder sister" },
  { front: "মূল", back: "mūl\nroot" },
  { front: "ইনি আমার মা", back: "uni amar ma\nshe is my mother" },
  { front: "উনি", back: "uni\nhe/she" },
  { front: "সোমবার", back: "sombar\n(on) monday" },
  { front: "আমরা শুনবো", back: "amra ʃunbo\nwe shall listen" },
  { front: "সব", back: "sɔb\nall" },
  { front: "উনি আসেননি? না", back: "uni asenni? na\nhasn't he/she come? no" },
  { front: "ওরা দুই বোন", back: "ora dui bon\nthey are two sisters" },
  { front: "ও এখুনি এল", back: "o ekhuni elô\nhe/she has just come" },
  { front: "আরো দই দাও", back: "aro dôi dao\ngive more yogurt" },
  { front: "ও দিল", back: "o dilô\nhe/she gave" },
  { front: "নীল", back: "nīl\nblue" },
  { front: "ওর নাম বল", back: "or nam bɔlô\ntell (me) his/her name" },
  { front: "রাখে", back: "rakhe\nhe/she puts/keeps" },
  { front: "মাংস", back: "maɱsô\nmeat" },
  {
    front: "ও এলে খাবে?",
    back: "o ele khabe?\nwill he/she eat when he/she comes?",
  },
  {
    front: "সে মঙ্গলবার আসবেনা",
    back: "se mɔŋgôlbar asbena\nhe/she will not come (on) tuesday",
  },
  { front: "আমি লিখবোনা", back: "ami likhbona\ni shall not write" },
  { front: "আমি খাব", back: "ami khabô\ni will eat" },
  { front: "মঙ্গলবার", back: "mɔŋgôlbar\ntuesday" },
  { front: "রবিবার আসুন", back: "rôbibar asun\ncome (on) sunday" },
  { front: "আমরা নিইনা", back: "amra niina\nwe do not take" },
  {
    front: "এরা সবাই শুক্রবার এগাল",
    back: "era sɔbai sukrônbar gælô\nthey all went on friday",
  },
  { front: "এখন দেব?", back: "ækhôn debô?\nshall i give it now?" },
  {
    front: "এঁর কাছে এসে বস",
    back: "ẽr kache ese bɔsô\ncome and sit near him/her",
  },
  { front: "সকাল", back: "sɔkal\nmorning" },
  { front: "খাবে", back: "khabe\nhe/she will eat" },
  { front: "গেল", back: "gælô\nhe/she went" },
  { front: "এগার", back: "ægarô\neleven" },
  { front: "এঁকে", back: "ẽke\nhim, her" },
  { front: "এঁরা", back: "ẽra\nthey" },
  { front: "এঁদের", back: "ẽder\ntheir" },
  { front: "এঁর", back: "ẽr\nhis, her" },
  { front: "ওঁকে", back: "õke\nhim, her" },
  { front: "ওঁরা", back: "õra\nthey" },
  { front: "ওঁদের", back: "õder\ntheir" },
  { front: "ওঁর", back: "õr\nhis, her" },
  { front: "ছেলে", back: "chele\nboy, son" },
  { front: "ছবি", back: "chôbi\npicture" },
  { front: "ছয়", back: "chɔy\nsix" },
  { front: "ছুরি", back: "churi\nknife" },
  { front: "আমি আছি", back: "ami achi\ni am (present)" },
  { front: "আমরা ছিলাম", back: "amra chilam\nwe were (present)" },
  { front: "সে ছিলনা", back: "se chilôna\nhe/she was not present" },
  { front: "ওথানে রেখেছি", back: "okhane rekhechi\n(i) have put (it) there" },
  {
    front: "এঁকে আরো মাছ দাও",
    back: "ẽke aro mach dao\ngive him/her more fish",
  },
  { front: "আমরা খেয়েছিলাম", back: "amra khayechilam\nwe ate" },
  { front: "সে আসছে", back: "se asche\nhe/she is coming" },
  { front: "আমি বসেছিলাম", back: "ami bôsechilam\ni sat" },
  { front: "আমি করছি", back: "ami kôrchi\ni am doing" },
  {
    front: "এখানে গোলমাল করোনা",
    back: "ekhane golmal kôrona\ndon't make a noise here",
  },
  { front: "কে কেনে?", back: "ke kene?\nwho buys?" },
  { front: "দশ", back: "dɔʃ\nten" },
  { front: "উনি করেন", back: "uni kɔren\nhe/she does" },
  { front: "আম", back: "am\nmango" },
  { front: "মা", back: "ma\nmother" },
];

export default cards;
