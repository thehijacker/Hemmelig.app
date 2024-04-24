const adjectives = [
    'abundant',
    'accommodative',
    'accomplished',
    'accurate',
    'achievable',
    'adaptable',
    'adaptive',
    'adequate',
    'adjustable',
    'admirable',
    'admiring',
    'adorable',
    'adored',
    'adoring',
    'adroit',
    'adulatory',
    'advanced',
    'advantageous',
    'adventuresome',
    'adventurous',
    'affable',
    'affectionate',
    'affirmative',
    'affluent',
    'affordable',
    'agile',
    'agreeable',
    'alluring',
    'altruistic',
    'amazed',
    'amazing',
    'ambitious',
    'amenable',
    'amiable',
    'amicable',
    'ample',
    'amusing',
    'angelic',
    'appealing',
    'appreciable',
    'appreciated',
    'appreciative',
    'appropriate',
    'ardent',
    'articulate',
    'artistic',
    'assuring',
    'astonished',
    'astonishing',
    'astounded',
    'astounding',
    'athletic',
    'attentive',
    'attractive',
    'audible',
    'auspicious',
    'authentic',
    'authoritative',
    'autonomous',
    'available',
    'avid',
    'awed',
    'awesome',
    'awestruck',
    'balanced',
    'beauteous',
    'beautiful',
    'believable',
    'beloved',
    'beneficent',
    'beneficial',
    'beneficiary',
    'benevolent',
    'best',
    'best-known',
    'best-performing',
    'best-selling',
    'better',
    'better-known',
    'better-than-expected',
    'blameless',
    'blissful',
    'blithe',
    'bonny',
    'booming',
    'boundless',
    'bountiful',
    'brainiest',
    'brainy',
    'brand-new',
    'brave',
    'breathtaking',
    'bright',
    'brighter',
    'brightest',
    'brilliant',
    'brisk',
    'brotherly',
    'bullish',
    'buoyant',
    'calm',
    'calming',
    'capable',
    'captivating',
    'carefree',
    'catchy',
    'celebrated',
    'celebratory',
    'champion',
    'charismatic',
    'charitable',
    'charming',
    'chaste',
    'cheaper',
    'cheapest',
    'cheerful',
    'cheery',
    'cherished',
    'chivalrous',
    'classic',
    'classy',
    'clean',
    'cleaner',
    'cleanest',
    'cleanly',
    'clear',
    'clear-cut',
    'cleared',
    'clearer',
    'clever',
    'coherent',
    'cohesive',
    'colorful',
    'comely',
    'comfortable',
    'comforting',
    'comfy',
    'commendable',
    'commodious',
    'compact',
    'compassionate',
    'compatible',
    'competitive',
    'complementary',
    'compliant',
    'complimentary',
    'comprehensive',
    'conciliatory',
    'concise',
    'confident',
    'congenial',
    'congratulatory',
    'conscientious',
    'considerate',
    'consistent',
    'constructive',
    'consummate',
    'contrasty',
    'convenient',
    'convincing',
    'cool',
    'coolest',
    'cooperative',
    'correct',
    'cost-effective',
    'cost-saving',
    'courageous',
    'courteous',
    'courtly',
    'cozy',
    'creative',
    'credible',
    'crisp',
    'crisper',
    'cure-all',
    'cushy',
    'cute',
    'daring',
    'darling',
    'dashing',
    'dauntless',
    'dazzled',
    'dazzling',
    'dead-cheap',
    'dead-on',
    'decent',
    'decisive',
    'dedicated',
    'defeated',
    'deft',
    'delectable',
    'delicate',
    'delicious',
    'delighted',
    'delightful',
    'dependable',
    'deserving',
    'desirable',
    'desirous',
    'detachable',
    'devout',
    'dexterous',
    'dextrous',
    'dignified',
    'diligent',
    'diplomatic',
    'dirt-cheap',
    'distinctive',
    'distinguished',
    'diversified',
    'divine',
    'dominated',
    'dumbfounded',
    'dumbfounding',
    'dummy-proof',
    'durable',
    'dynamic',
    'eager',
    'earnest',
    'eased',
    'easier',
    'easiest',
    'easy',
    'easy-to-use',
    'easygoing',
    'ebullient',
    'economical',
    'ecstatic',
    'educated',
    'effective',
    'effectual',
    'efficacious',
    'efficient',
    'effortless',
    'effusive',
    'elated',
    'elegant',
    'elite',
    'eloquent',
    'eminent',
    'enchanted',
    'enchanting',
    'encouraging',
    'endearing',
    'endorsed',
    'energetic',
    'energy-efficient',
    'energy-saving',
    'engaging',
    'engrossing',
    'enhanced',
    'enjoyable',
    'enough',
    'enraptured',
    'enterprising',
    'entertaining',
    'enthralled',
    'enthusiastic',
    'enticing',
    'entranced',
    'entrancing',
    'enviable',
    'envious',
    'equitable',
    'err-free',
    'erudite',
    'ethical',
    'euphoric',
    'evaluative',
    'eventful',
    'everlasting',
    'evocative',
    'exalted',
    'exalting',
    'exceeding',
    'excellent',
    'exceptional',
    'excited',
    'exciting',
    'exemplary',
    'exhilarating',
    'expansive',
    'exquisite',
    'extraordinary',
    'exuberant',
    'exultant',
    'eye-catching',
    'fabulous',
    'fair',
    'faithful',
    'famed',
    'famous',
    'fancier',
    'fancy',
    'fantastic',
    'fascinating',
    'fashionable',
    'fast',
    'fast-growing',
    'fast-paced',
    'faster',
    'fastest',
    'fastest-growing',
    'faultless',
    'favorable',
    'favored',
    'favorite',
    'fearless',
    'feasible',
    'feature-rich',
    'feisty',
    'felicitous',
    'fertile',
    'fervent',
    'fervid',
    'festive',
    'fiery',
    'fine',
    'fine-looking',
    'finer',
    'finest',
    'firmer',
    'first-class',
    'first-in-class',
    'first-rate',
    'flashy',
    'flatter',
    'flattering',
    'flawless',
    'flexible',
    'flourishing',
    'fluent',
    'fond',
    'foolproof',
    'foremost',
    'formidable',
    'fortuitous',
    'fortunate',
    'fragrant',
    'free',
    'freed',
    'fresh',
    'fresher',
    'freshest',
    'friendly',
    'frugal',
    'fruitful',
    'fun',
    'funny',
    'futuristic',
    'gainful',
    'gallant',
    'galore',
    'generous',
    'genial',
    'gentle',
    'gentlest',
    'genuine',
    'gifted',
    'glad',
    'glamorous',
    'gleeful',
    'glimmering',
    'glistening',
    'glorious',
    'glowing',
    'god-given',
    'godlike',
    'gold',
    'golden',
    'good',
    'goodly',
    'gorgeous',
    'graceful',
    'gracious',
    'grand',
    'grateful',
    'gratified',
    'gratifying',
    'great',
    'greatest',
    'groundbreaking',
    'guiltless',
    'gutsy',
    'halcyon',
    'hale',
    'hallowed',
    'handier',
    'hands-down',
    'handsome',
    'handy',
    'happier',
    'happy',
    'hard-working',
    'hardier',
    'hardy',
    'harmless',
    'harmonious',
    'healthful',
    'healthy',
    'heartening',
    'heartfelt',
    'heartwarming',
    'heavenly',
    'helpful',
    'heroic',
    'high-quality',
    'high-spirited',
    'hilarious',
    'holy',
    'honest',
    'honorable',
    'honored',
    'hopeful',
    'hospitable',
    'hot',
    'hottest',
    'humane',
    'humble',
    'humorous',
    'humourous',
    'ideal',
    'idolized',
    'idyllic',
    'illuminating',
    'illustrious',
    'imaginative',
    'immaculate',
    'immense',
    'impartial',
    'impassioned',
    'impeccable',
    'important',
    'impressed',
    'impressive',
    'improved',
    'improving',
    'incredible',
    'indebted',
    'individualized',
    'indulgent',
    'industrious',
    'inestimable',
    'inexpensive',
    'infallible',
    'influential',
    'ingenious',
    'ingenuous',
    'innocuous',
    'innovative',
    'insightful',
    'inspirational',
    'inspiring',
    'instructive',
    'instrumental',
    'integral',
    'integrated',
    'intelligent',
    'intelligible',
    'interesting',
    'intimate',
    'intricate',
    'intriguing',
    'intuitive',
    'invaluable',
    'inventive',
    'invigorating',
    'invincible',
    'inviolable',
    'inviolate',
    'invulnerable',
    'irreplaceable',
    'irreproachable',
    'irresistible',
    'issue-free',
    'jaw-dropping',
    'jolly',
    'jovial',
    'joyful',
    'joyous',
    'jubilant',
    'judicious',
    'keen',
    'kid-friendly',
    'kindly',
    'knowledgeable',
    'large-capacity',
    'laudable',
    'lavish',
    'law-abiding',
    'lawful',
    'leading',
    'lean',
    'legendary',
    'light-hearted',
    'lighter',
    'likable',
    'like',
    'liked',
    'lionhearted',
    'lively',
    'logical',
    'long-lasting',
    'lovable',
    'loved',
    'lovely',
    'loving',
    'low-cost',
    'low-price',
    'low-priced',
    'low-risk',
    'lower-priced',
    'loyal',
    'lucid',
    'luckier',
    'luckiest',
    'lucky',
    'lucrative',
    'luminous',
    'lush',
    'lustrous',
    'luxuriant',
    'luxurious',
    'luxury',
    'lyrical',
    'magic',
    'magical',
    'magnanimous',
    'magnificent',
    'majestic',
    'manageable',
    'maneuverable',
    'marvellous',
    'marvelous',
    'masterful',
    'matchless',
    'mature',
    'meaningful',
    'memorable',
    'merciful',
    'meritorious',
    'merry',
    'mesmerized',
    'mesmerizing',
    'meticulous',
    'mighty',
    'mind-blowing',
    'miraculous',
    'modern',
    'modest',
    'momentous',
    'monumental',
    'motivated',
    'multi-purpose',
    'navigable',
    'neat',
    'neatest',
    'nice',
    'nicer',
    'nicest',
    'nifty',
    'nimble',
    'noble',
    'noiseless',
    'non-violent',
    'noteworthy',
    'nourishing',
    'observant',
    'obtainable',
    'optimal',
    'optimistic',
    'opulent',
    'orderly',
    'organized',
    'outstanding',
    'overjoyed',
    'pain-free',
    'painless',
    'palatial',
    'pampered',
    'panoramic',
    'paramount',
    'passionate',
    'patient',
    'patri',
    'otic',
    'peaceable',
    'peaceful',
    'peerless',
    'peppy',
    'perfect',
    'permissible',
    'personalized',
    'phenomenal',
    'picturesque',
    'playful',
    'pleasant',
    'pleased',
    'pleasing',
    'pleasurable',
    'plentiful',
    'plush',
    'poetic',
    'poignant',
    'poised',
    'polished',
    'polite',
    'popular',
    'portable',
    'posh',
    'positive',
    'powerful',
    'praiseworthy',
    'praising',
    'pre-eminent',
    'precious',
    'precise',
    'preeminent',
    'preferable',
    'premier',
    'prestigious',
    'pretty',
    'priceless',
    'principled',
    'privileged',
    'prize',
    'proactive',
    'problem-free',
    'prodigious',
    'productive',
    'proficient',
    'profound',
    'profuse',
    'progressive',
    'prolific',
    'prominent',
    'promised',
    'promising',
    'prompt',
    'proper',
    'propitious',
    'prosperous',
    'protective',
    'proud',
    'proven',
    'prudent',
    'punctual',
    'pure',
    'purposeful',
    'quaint',
    'qualified',
    'quicker',
    'quiet',
    'quieter',
    'radiant',
    'rapid',
    'rapt',
    'rapturous',
    'rational',
    'razor-sharp',
    'reachable',
    'readable',
    'ready',
    'realistic',
    'realizable',
    'reasonable',
    'reasoned',
    'receptive',
    'recommended',
    'record-setting',
    'redeeming',
    'refined',
    'reformed',
    'refreshed',
    'refreshing',
    'regal',
    'rejoicing',
    'relaxed',
    'reliable',
    'remarkable',
    'renewed',
    'renowned',
    'replaceable',
    'reputable',
    'resilient',
    'resolute',
    'resounding',
    'resourceful',
    'respectable',
    'respectful',
    'resplendent',
    'responsive',
    'restful',
    'restored',
    'retractable',
    'reverent',
    'revolutionary',
    'rewarding',
    'rich',
    'richer',
    'right',
    'righteous',
    'rightful',
    'risk-free',
    'robust',
    'rock-star',
    'romantic',
    'roomier',
    'roomy',
    'rosy',
    'safe',
    'saintly',
    'salutary',
    'sane',
    'satisfactory',
    'satisfied',
    'satisfying',
    'scenic',
    'seamless',
    'seasoned',
    'secure',
    'selective',
    'self-determination',
    'self-respect',
    'self-satisfaction',
    'self-sufficiency',
    'self-sufficient',
    'sensational',
    'sensible',
    'sensitive',
    'serene',
    'sexy',
    'sharp',
    'sharper',
    'sharpest',
    'shiny',
    'significant',
    'silent',
    'simpler',
    'simplest',
    'simplified',
    'sincere',
    'skilled',
    'skillful',
    'sleek',
    'slick',
    'smart',
    'smarter',
    'smartest',
    'smiling',
    'smitten',
    'smooth',
    'smoother',
    'smoothest',
    'snappy',
    'snazzy',
    'sociable',
    'soft',
    'softer',
    'solicitous',
    'solid',
    'sophisticated',
    'soulful',
    'spacious',
    'sparkling',
    'spectacular',
    'speedy',
    'spellbinding',
    'spellbound',
    'spirited',
    'spiritual',
    'splendid',
    'spontaneous',
    'sporty',
    'spotless',
    'sprightly',
    'stable',
    'stainless',
    'state-of-the-art',
    'stately',
    'statuesque',
    'staunch',
    'steadfast',
    'steadiest',
    'steady',
    'stellar',
    'stimulating',
    'stimulative',
    'straightforward',
    'streamlined',
    'striking',
    'strong',
    'stronger',
    'strongest',
    'stunned',
    'stunning',
    'stupendous',
    'sturdier',
    'sturdy',
    'stylish',
    'stylized',
    'suave',
    'sublime',
    'subsidized',
    'substantive',
    'succeeding',
    'successful',
    'sufficient',
    'suitable',
    'sumptuous',
    'super',
    'superb',
    'superior',
    'supple',
    'supported',
    'supporting',
    'supportive',
    'supreme',
    'surreal',
    'sustainable',
    'swank',
    'swankier',
    'swankiest',
    'swanky',
    'sweeping',
    'sweet',
    'sweetheart',
    'swift',
    'talented',
    'tantalizing',
    'tempting',
    'tenacious',
    'tender',
    'terrific',
    'thankful',
    'thinner',
    'thoughtful',
    'thrifty',
    'thrilled',
    'thrilling',
    'thriving',
    'thumb-up',
    'thumbs-up',
    'tidy',
    'time-honored',
    'timely',
    'titillating',
    'tolerable',
    'toll-free',
    'top',
    'top-notch',
    'top-quality',
    'topnotch',
    'tops',
    'tough',
    'tougher',
    'toughest',
    'tranquil',
    'transparent',
    'trendy',
    'triumphal',
    'triumphant',
    'trouble-free',
    'trusted',
    'trusting',
    'trustworthy',
    'trusty',
    'truthful',
    'twinkly',
    'ultra-crisp',
    'unabashed',
    'unaffected',
    'unassailable',
    'unbeatable',
    'unbiased',
    'unbound',
    'uncomplicated',
    'unconditional',
    'undamaged',
    'undaunted',
    'understandable',
    'undisputable',
    'undisputed',
    'unencumbered',
    'unequivocal',
    'unfettered',
    'unforgettable',
    'unlimited',
    'unmatched',
    'unparalleled',
    'unquestionable',
    'unreal',
    'unrestricted',
    'unrivaled',
    'unselfish',
    'unwavering',
    'upbeat',
    'upscale',
    'usable',
    'useable',
    'useful',
    'user-friendly',
    'user-replaceable',
    'valiant',
    'valuable',
    'verifiable',
    'veritable',
    'versatile',
    'vibrant',
    'victorious',
    'viewable',
    'vigilant',
    'virtuous',
    'visionary',
    'vivacious',
    'vivid',
    'warm',
    'warmer',
    'warmhearted',
    'wealthy',
    'welcome',
    'well',
    'well-backlit',
    'well-balanced',
    'well-behaved',
    'well-being',
    'well-bred',
    'well-connected',
    'well-educated',
    'well-established',
    'well-informed',
    'well-intentioned',
    'well-known',
    'well-made',
    'well-managed',
    'well-mannered',
    'well-positioned',
    'well-received',
    'well-regarded',
    'well-rounded',
    'well-run',
    'well-wishers',
    'wholesome',
    'wieldy',
    'willing',
    'winning',
    'wise',
    'witty',
    'won',
    'wonderful',
    'wondrous',
    'workable',
    'world-famous',
    'worth',
    'worthwhile',
    'worthy',
    'young',
    'youthful',
    'zippy',
];

const getRandomAdjective = () => {
    const len = adjectives.length;

    return adjectives[Math.floor(Math.random() * len - 1)];
};

export default getRandomAdjective;