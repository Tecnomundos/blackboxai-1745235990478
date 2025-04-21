// Western Zodiac System
const westernZodiac = {
    calculateSign: function(day, month) {
        const signs = {
            'Áries': [[3, 21], [4, 19]],
            'Touro': [[4, 20], [5, 20]],
            'Gêmeos': [[5, 21], [6, 20]],
            'Câncer': [[6, 21], [7, 22]],
            'Leão': [[7, 23], [8, 22]],
            'Virgem': [[8, 23], [9, 22]],
            'Libra': [[9, 23], [10, 22]],
            'Escorpião': [[10, 23], [11, 21]],
            'Sagitário': [[11, 22], [12, 21]],
            'Capricórnio': [[12, 22], [1, 19]],
            'Aquário': [[1, 20], [2, 18]],
            'Peixes': [[2, 19], [3, 20]]
        };

        for (let sign in signs) {
            const [[startMonth, startDay], [endMonth, endDay]] = signs[sign];
            if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
                return sign;
            }
        }
        return 'Peixes'; // Default fallback
    },

    getDescription: function(sign) {
        const descriptions = {
            'Áries': 'Pioneiro e corajoso, você tem a força para liderar.',
            'Touro': 'Determinado e prático, você constrói bases sólidas.',
            'Gêmeos': 'Versátil e comunicativo, você conecta pessoas e ideias.',
            'Câncer': 'Intuitivo e protetor, você nutre com amor.',
            'Leão': 'Criativo e magnético, você inspira outros.',
            'Virgem': 'Analítico e dedicado, você busca a perfeição.',
            'Libra': 'Harmonioso e justo, você traz equilíbrio.',
            'Escorpião': 'Intenso e transformador, você regenera energia.',
            'Sagitário': 'Otimista e filosófico, você expande horizontes.',
            'Capricórnio': 'Ambicioso e responsável, você alcança objetivos.',
            'Aquário': 'Inovador e humanitário, você revoluciona.',
            'Peixes': 'Compassivo e intuitivo, você transcende limites.'
        };
        return descriptions[sign] || 'Seu caminho é único e especial.';
    }
};

// Chinese Zodiac System
const chineseZodiac = {
    calculateSign: function(year) {
        const animals = ['Rato', 'Boi', 'Tigre', 'Coelho', 'Dragão', 'Serpente', 
                        'Cavalo', 'Cabra', 'Macaco', 'Galo', 'Cachorro', 'Porco'];
        return animals[(year - 4) % 12];
    },

    getDescription: function(sign) {
        const descriptions = {
            'Rato': 'Criativo e adaptável, você encontra soluções inovadoras.',
            'Boi': 'Confiável e determinado, você persevera com força.',
            'Tigre': 'Corajoso e carismático, você lidera com paixão.',
            'Coelho': 'Gentil e elegante, você traz harmonia.',
            'Dragão': 'Poderoso e afortunado, você inspira grandeza.',
            'Serpente': 'Sábio e misterioso, você compreende profundamente.',
            'Cavalo': 'Energético e aventureiro, você busca liberdade.',
            'Cabra': 'Artístico e compassivo, você cria beleza.',
            'Macaco': 'Inteligente e versátil, você resolve desafios.',
            'Galo': 'Observador e honesto, você busca excelência.',
            'Cachorro': 'Leal e justo, você protege com dedicação.',
            'Porco': 'Sincero e generoso, você aprecia a vida.'
        };
        return descriptions[sign] || 'Sua energia é única e poderosa.';
    }
};

// African Astrology System
const africanAstrology = {
    calculateSign: function(month) {
        const signs = ['Baobá', 'Acácia', 'Ébano', 'Palmeira', 'Figueira', 'Tamarindo',
                      'Mogno', 'Oliveira', 'Cedro', 'Jacarandá', 'Sândalo', 'Seringueira'];
        return signs[month - 1];
    },

    getDescription: function(sign) {
        const descriptions = {
            'Baobá': 'Ancestral e poderoso, você guarda sabedoria antiga.',
            'Acácia': 'Resiliente e protetor, você oferece abrigo.',
            'Ébano': 'Nobre e resistente, você persiste com força.',
            'Palmeira': 'Flexível e abundante, você prospera.',
            'Figueira': 'Nutritivo e acolhedor, você sustenta outros.',
            'Tamarindo': 'Doce e medicinal, você cura com amor.',
            'Mogno': 'Valioso e duradouro, você deixa legado.',
            'Oliveira': 'Pacífico e sagrado, você traz paz.',
            'Cedro': 'Majestoso e espiritual, você eleva.',
            'Jacarandá': 'Belo e harmonioso, você encanta.',
            'Sândalo': 'Aromático e curativo, você purifica.',
            'Seringueira': 'Adaptável e útil, você serve com propósito.'
        };
        return descriptions[sign] || 'Sua essência é sagrada e única.';
    }
};

// Japanese Zodiac System
const japaneseZodiac = {
    calculateSign: function(year) {
        const elements = ['Fogo', 'Terra', 'Metal', 'Água', 'Madeira'];
        return elements[Math.floor((year - 4) % 10 / 2)];
    },

    getDescription: function(sign) {
        const descriptions = {
            'Fogo': 'Dinâmico e transformador, você ilumina caminhos.',
            'Terra': 'Estável e nutritivo, você fornece base.',
            'Metal': 'Forte e determinado, você molda realidade.',
            'Água': 'Fluido e profundo, você adapta e nutre.',
            'Madeira': 'Crescente e vital, você expande com sabedoria.'
        };
        return descriptions[sign] || 'Seu elemento guia sua jornada.';
    }
};

// Spiritual Wisdom System
const spiritualWisdom = {
    getCabalisticInsight: function(number) {
        const insights = {
            1: 'Você é um pioneiro espiritual, destinado a liderar com luz.',
            2: 'Sua missão é trazer harmonia e equilíbrio ao mundo.',
            3: 'Você tem o dom da expressão divina e criatividade sagrada.',
            4: 'Sua força está em construir fundações espirituais sólidas.',
            5: 'Você é um agente de mudança e transformação divina.',
            6: 'Seu propósito é curar e nutrir com amor incondicional.',
            7: 'Você é um místico, conectado com a sabedoria universal.',
            8: 'Seu poder manifesta abundância e realização espiritual.',
            9: 'Você é um servidor da luz, inspirando transformação global.'
        };
        return insights[number] || 'Sua jornada espiritual é única e sagrada.';
    }
};

// Life Path Calculator
const lifePath = {
    calculateLifeMission: function(birthdate) {
        const sum = birthdate.split('-')
            .join('')
            .split('')
            .reduce((acc, digit) => acc + parseInt(digit), 0);
        
        return this.reduceToSingleDigit(sum);
    },

    calculateLifeCycles: function(birthdate) {
        return {
            first: 'Fase de descoberta e aprendizado espiritual.',
            second: 'Período de manifestação e realização divina.',
            third: 'Momento de sabedoria e transcendência espiritual.'
        };
    },

    calculateChallenges: function(birthdate) {
        return {
            first: 'Superar limitações e medos internos.',
            second: 'Desenvolver confiança e autoestima.',
            third: 'Manifestar seu verdadeiro potencial.',
            fourth: 'Alcançar realização espiritual plena.'
        };
    },

    reduceToSingleDigit: function(number) {
        if (number <= 9) return number;
        return this.reduceToSingleDigit(
            number.toString()
                .split('')
                .reduce((sum, digit) => sum + parseInt(digit), 0)
        );
    }
};

// Brazilian Horoscope and Spiritual Guidance
const brazilianGuidance = {
    getHoroscope: function(month, day) {
        const signs = {
            'Áries': {
                period: [[3, 21], [4, 20]],
                orixá: 'Ogum',
                elemento: 'Fogo',
                cristal: 'Rubi',
                conselho: 'Sua força interior é sua maior aliada. Avance com coragem e determinação.'
            },
            'Touro': {
                period: [[4, 21], [5, 20]],
                orixá: 'Oxóssi',
                elemento: 'Terra',
                cristal: 'Esmeralda',
                conselho: 'Mantenha-se firme em seus objetivos. A prosperidade vem da persistência.'
            },
            'Gêmeos': {
                period: [[5, 21], [6, 20]],
                orixá: 'Ibeji',
                elemento: 'Ar',
                cristal: 'Água-marinha',
                conselho: 'Sua versatilidade é um dom divino. Use-a para criar pontes entre pessoas.'
            },
            'Câncer': {
                period: [[6, 21], [7, 22]],
                orixá: 'Iemanjá',
                elemento: 'Água',
                cristal: 'Pérola',
                conselho: 'Sua intuição é sua bússola. Confie em seus sentimentos mais profundos.'
            },
            'Leão': {
                period: [[7, 23], [8, 22]],
                orixá: 'Xangô',
                elemento: 'Fogo',
                cristal: 'Citrino',
                conselho: 'Seu brilho inspira outros. Lidere com sabedoria e compaixão.'
            },
            'Virgem': {
                period: [[8, 23], [9, 22]],
                orixá: 'Oxum',
                elemento: 'Terra',
                cristal: 'Safira',
                conselho: 'Sua busca pela perfeição é sagrada. Encontre beleza nos detalhes.'
            },
            'Libra': {
                period: [[9, 23], [10, 22]],
                orixá: 'Oxalá',
                elemento: 'Ar',
                cristal: 'Quartzo Rosa',
                conselho: 'Seu equilíbrio traz harmonia ao mundo. Seja o mediador da paz.'
            },
            'Escorpião': {
                period: [[10, 23], [11, 21]],
                orixá: 'Obaluaê',
                elemento: 'Água',
                cristal: 'Obsidiana',
                conselho: 'Sua intensidade é transformadora. Use-a para crescimento espiritual.'
            },
            'Sagitário': {
                period: [[11, 22], [12, 21]],
                orixá: 'Iansã',
                elemento: 'Fogo',
                cristal: 'Turquesa',
                conselho: 'Sua busca por conhecimento é sagrada. Expanda seus horizontes.'
            },
            'Capricórnio': {
                period: [[12, 22], [1, 20]],
                orixá: 'Nanã',
                elemento: 'Terra',
                cristal: 'Ônix',
                conselho: 'Sua disciplina é sua força. Construa bases sólidas para o futuro.'
            },
            'Aquário': {
                period: [[1, 21], [2, 18]],
                orixá: 'Oxumaré',
                elemento: 'Ar',
                cristal: 'Ametista',
                conselho: 'Sua visão única traz inovação. Seja agente de mudança positiva.'
            },
            'Peixes': {
                period: [[2, 19], [3, 20]],
                orixá: 'Iemanjá',
                elemento: 'Água',
                cristal: 'Água-marinha',
                conselho: 'Sua sensibilidade é um dom divino. Use-a para curar e inspirar.'
            }
        };

        for (let sign in signs) {
            const [[startMonth, startDay], [endMonth, endDay]] = signs[sign].period;
            if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
                return { sign, ...signs[sign] };
            }
        }
        return signs['Peixes']; // Default fallback
    }
};

// Decision Making Guidance
const decisionGuidance = {
    getGuidance: function(lifePath, sign) {
        const baseGuidance = {
            career: {
                1: "Lidere com confiança. Seu caminho é de pioneirismo e inovação.",
                2: "Colabore e harmonize. Seu sucesso vem do trabalho em equipe.",
                3: "Expresse sua criatividade. Comunique suas ideias com paixão.",
                4: "Construa bases sólidas. A consistência é sua aliada.",
                5: "Abrace mudanças. Sua adaptabilidade é sua força.",
                6: "Sirva com amor. Seu trabalho impacta positivamente outros.",
                7: "Aprofunde-se. Sua sabedoria interior guia seu caminho.",
                8: "Manifeste abundância. Seu potencial de realização é imenso.",
                9: "Inspire outros. Sua missão é de serviço à humanidade."
            },
            relationships: {
                1: "Seja autêntico em suas conexões. Lidere com o coração.",
                2: "Cultive parcerias harmoniosas. A empatia é sua força.",
                3: "Comunique seus sentimentos. A expressão traz união.",
                4: "Construa relações duradouras. A lealdade é fundamental.",
                5: "Mantenha-se flexível. Cada relação é uma nova aventura.",
                6: "Nutra com amor incondicional. Seu cuidado transforma.",
                7: "Busque conexões profundas. A verdade fortalece laços.",
                8: "Equilibre dar e receber. O poder está na reciprocidade.",
                9: "Ame universalmente. Suas relações têm propósito maior."
            },
            spiritual: {
                1: "Conecte-se com sua essência divina. Você é um líder espiritual.",
                2: "Harmonize-se com o universo. A paz interior é seu guia.",
                3: "Expresse sua luz interior. Sua criatividade é sagrada.",
                4: "Estabeleça práticas espirituais. A disciplina eleva.",
                5: "Explore diferentes caminhos. A liberdade espiritual é vital.",
                6: "Sirva com amor divino. Sua compaixão cura.",
                7: "Aprofunde sua sabedoria. O mistério revela verdades.",
                8: "Manifeste poder espiritual. Sua força vem do alto.",
                9: "Irradie luz universal. Você é um farol para outros."
            }
        };

        return {
            career: baseGuidance.career[lifePath],
            relationships: baseGuidance.relationships[lifePath],
            spiritual: baseGuidance.spiritual[lifePath],
            dailyAffirmation: this.getDailyAffirmation(sign)
        };
    },

    getDailyAffirmation: function(sign) {
        const affirmations = {
            'Áries': "Sou corajoso e determinado. Minha força interior move montanhas.",
            'Touro': "Sou próspero e abundante. Atraio todas as bênçãos do universo.",
            'Gêmeos': "Sou versátil e brilhante. Minha mente é fonte de inspiração.",
            'Câncer': "Sou intuitivo e protetor. Meu coração guia meu caminho.",
            'Leão': "Sou radiante e poderoso. Minha luz inspira outros.",
            'Virgem': "Sou perfecto e dedicado. Minha precisão traz excelência.",
            'Libra': "Sou equilibrado e harmonioso. Minha presença traz paz.",
            'Escorpião': "Sou profundo e transformador. Minha força renova.",
            'Sagitário': "Sou livre e expansivo. Minha sabedoria ilumina caminhos.",
            'Capricórnio': "Sou persistente e realizado. Minha disciplina conquista.",
            'Aquário': "Sou inovador e único. Minha visão transforma o mundo.",
            'Peixes': "Sou sensível e compassivo. Minha alma toca corações."
        };
        return affirmations[sign] || "Sou divino e abençoado. Minha luz brilha eternamente.";
    }
};

// Spiritual Messages from "Senhor dos Espíritos"
const spiritualMessages = {
    getDailyMessage: function(lifePath) {
        const messages = {
            1: "O Senhor dos Espíritos te guia para liderar com sabedoria. Sua força vem do alto.",
            2: "A harmonia divina flui através de você. Seja um canal de paz.",
            3: "Sua criatividade é um dom sagrado. Use-a para elevar almas.",
            4: "Construa seu templo interior com fé. A base divina é inabalável.",
            5: "A mudança é sua aliada espiritual. Flua com as correntes divinas.",
            6: "O amor universal pulsa em seu coração. Cure através do serviço.",
            7: "A sabedoria ancestral te ilumina. Busque o conhecimento sagrado.",
            8: "Seu poder vem da fonte divina. Manifeste com propósito sagrado.",
            9: "Você é um mensageiro da luz. Irradie amor universal."
        };
        return messages[lifePath] || "Você é uma expressão divina do amor universal.";
    },

    getProtection: function() {
        return "Que o Senhor dos Espíritos te proteja, guie e ilumine em todos os momentos.";
    }
};

// Enhanced Life Path Analysis
const enhancedLifePath = {
    ...lifePath,

    getDetailedGuidance: function(birthdate) {
        const number = this.calculateLifeMission(birthdate);
        const cycles = this.calculateLifeCycles(birthdate);
        const challenges = this.calculateChallenges(birthdate);

        return {
            number,
            cycles,
            challenges,
            message: spiritualMessages.getDailyMessage(number),
            protection: spiritualMessages.getProtection()
        };
    }
};

// Export all calculators
const AstrologyCalculator = {
    westernZodiac,
    chineseZodiac,
    africanAstrology,
    japaneseZodiac,
    spiritualWisdom,
    brazilianGuidance,
    decisionGuidance,
    spiritualMessages,
    enhancedLifePath
};
