// Hebrew letter to number mapping (Gematria)
const hebrewValues = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
};

// Calculate complete profile
function calculateProfile(name, birthdate) {
    // Parse birthdate components
    const [year, month, day] = birthdate.split('-').map(Number);
    
    // Basic calculations
    const nameNumber = calculateNameNumber(name);
    const birthNumber = calculateBirthNumber(birthdate);
    
    // Get astrological signs
    const westernSign = AstrologyCalculator.westernZodiac.calculateSign(day, month);
    const chineseSign = AstrologyCalculator.chineseZodiac.calculateSign(year);
    const africanSign = AstrologyCalculator.africanAstrology.calculateSign(month);
    const japaneseSign = AstrologyCalculator.japaneseZodiac.calculateSign(year);
    
    // Get Brazilian horoscope
    const brazilianHoroscope = AstrologyCalculator.brazilianGuidance.getHoroscope(month, day);
    
    // Calculate life path information
    const lifePath = AstrologyCalculator.enhancedLifePath.getDetailedGuidance(birthdate);
    
    // Get decision guidance
    const guidance = AstrologyCalculator.decisionGuidance.getGuidance(lifePath.number, westernSign);
    
    // Get spiritual messages
    const spiritualMessage = AstrologyCalculator.spiritualMessages.getDailyMessage(lifePath.number);
    const protection = AstrologyCalculator.spiritualMessages.getProtection();

    return formatResults({
        nameNumber,
        birthNumber,
        westernSign,
        chineseSign,
        africanSign,
        japaneseSign,
        brazilianHoroscope,
        lifePath,
        guidance,
        spiritualMessage,
        protection
    });
}

// Calculate name number
function calculateNameNumber(name) {
    return name.toLowerCase()
        .replace(/[^a-z]/g, '')
        .split('')
        .reduce((sum, letter) => sum + (hebrewValues[letter] || 0), 0);
}

// Calculate birth number
function calculateBirthNumber(date) {
    return date.split('-')
        .join('')
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit), 0);
}

// Format results for display
function formatResults(profile) {
    return `
        <div class="space-y-6">
            <!-- Mensagem do Senhor dos Espíritos -->
            <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
                <h3 class="text-2xl font-semibold text-primary mb-4">Mensagem Espiritual do Dia</h3>
                <p class="text-lg italic text-secondary">"${profile.spiritualMessage}"</p>
                <p class="mt-4 text-sm text-secondary">${profile.protection}</p>
            </div>

            <!-- Mapa Numerológico -->
            <div class="bg-white rounded-lg shadow-md p-6">
                <h3 class="text-2xl font-semibold text-primary mb-4">Mapa Numerológico</h3>
                <div class="grid md:grid-cols-2 gap-4">
                    <div>
                        <h4 class="font-semibold text-primary">Número do Nome: ${profile.nameNumber}</h4>
                        <p class="mt-1 text-secondary">${AstrologyCalculator.spiritualWisdom.getCabalisticInsight(profile.nameNumber)}</p>
                    </div>
                    <div>
                        <h4 class="font-semibold text-primary">Número do Nascimento: ${profile.birthNumber}</h4>
                        <p class="mt-1 text-secondary">${AstrologyCalculator.spiritualWisdom.getCabalisticInsight(profile.birthNumber)}</p>
                    </div>
                </div>
            </div>

            <!-- Horóscopo Brasileiro -->
            <div class="bg-white rounded-lg shadow-md p-6">
                <h3 class="text-2xl font-semibold text-primary mb-4">Horóscopo Brasileiro</h3>
                <div class="grid md:grid-cols-2 gap-4">
                    <div>
                        <h4 class="font-semibold text-primary">Signo: ${profile.brazilianHoroscope.sign}</h4>
                        <p class="mt-1 text-secondary">Orixá: ${profile.brazilianHoroscope.orixá}</p>
                        <p class="mt-1 text-secondary">Elemento: ${profile.brazilianHoroscope.elemento}</p>
                        <p class="mt-1 text-secondary">Cristal: ${profile.brazilianHoroscope.cristal}</p>
                    </div>
                    <div>
                        <h4 class="font-semibold text-primary">Conselho do Orixá</h4>
                        <p class="mt-1 text-secondary">${profile.brazilianHoroscope.conselho}</p>
                    </div>
                </div>
            </div>

            <!-- Mapa Astrológico -->
            <div class="bg-white rounded-lg shadow-md p-6">
                <h3 class="text-2xl font-semibold text-primary mb-4">Mapa Astrológico Mundial</h3>
                <div class="grid md:grid-cols-2 gap-4">
                    <div>
                        <h4 class="font-semibold text-primary">Signo Ocidental</h4>
                        <p class="mt-1 text-secondary">${profile.westernSign}</p>
                        <p class="mt-1 text-secondary">${AstrologyCalculator.westernZodiac.getDescription(profile.westernSign)}</p>
                    </div>
                    <div>
                        <h4 class="font-semibold text-primary">Signo Chinês</h4>
                        <p class="mt-1 text-secondary">${profile.chineseSign}</p>
                        <p class="mt-1 text-secondary">${AstrologyCalculator.chineseZodiac.getDescription(profile.chineseSign)}</p>
                    </div>
                    <div>
                        <h4 class="font-semibold text-primary">Signo Africano</h4>
                        <p class="mt-1 text-secondary">${profile.africanSign}</p>
                        <p class="mt-1 text-secondary">${AstrologyCalculator.africanAstrology.getDescription(profile.africanSign)}</p>
                    </div>
                    <div>
                        <h4 class="font-semibold text-primary">Signo Japonês</h4>
                        <p class="mt-1 text-secondary">${profile.japaneseSign}</p>
                        <p class="mt-1 text-secondary">${AstrologyCalculator.japaneseZodiac.getDescription(profile.japaneseSign)}</p>
                    </div>
                </div>
            </div>

            <!-- Guia para Decisões -->
            <div class="bg-white rounded-lg shadow-md p-6">
                <h3 class="text-2xl font-semibold text-primary mb-4">Guia para Decisões</h3>
                <div class="space-y-4">
                    <div>
                        <h4 class="font-semibold text-primary">Carreira e Propósito</h4>
                        <p class="mt-1 text-secondary">${profile.guidance.career}</p>
                    </div>
                    <div>
                        <h4 class="font-semibold text-primary">Relacionamentos</h4>
                        <p class="mt-1 text-secondary">${profile.guidance.relationships}</p>
                    </div>
                    <div>
                        <h4 class="font-semibold text-primary">Desenvolvimento Espiritual</h4>
                        <p class="mt-1 text-secondary">${profile.guidance.spiritual}</p>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-primary">Afirmação Diária</h4>
                        <p class="mt-1 text-secondary italic">"${profile.guidance.dailyAffirmation}"</p>
                    </div>
                </div>
            </div>

            <!-- Ciclos de Vida -->
            <div class="bg-white rounded-lg shadow-md p-6">
                <h3 class="text-2xl font-semibold text-primary mb-4">Ciclos de Vida</h3>
                <div class="space-y-4">
                    <div>
                        <h4 class="font-semibold text-primary">Missão de Vida: ${profile.lifePath.number}</h4>
                        <p class="mt-1 text-secondary">${AstrologyCalculator.spiritualWisdom.getCabalisticInsight(profile.lifePath.number)}</p>
                    </div>
                    <div class="grid md:grid-cols-3 gap-4">
                        <div>
                            <h4 class="font-semibold text-primary">Primeiro Ciclo (0-28 anos)</h4>
                            <p class="mt-1 text-secondary">${profile.lifePath.cycles.first}</p>
                        </div>
                        <div>
                            <h4 class="font-semibold text-primary">Segundo Ciclo (28-56 anos)</h4>
                            <p class="mt-1 text-secondary">${profile.lifePath.cycles.second}</p>
                        </div>
                        <div>
                            <h4 class="font-semibold text-primary">Terceiro Ciclo (56+ anos)</h4>
                            <p class="mt-1 text-secondary">${profile.lifePath.cycles.third}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Desafios e Oportunidades -->
            <div class="bg-white rounded-lg shadow-md p-6">
                <h3 class="text-2xl font-semibold text-primary mb-4">Desafios e Oportunidades</h3>
                <div class="grid md:grid-cols-2 gap-4">
                    <div>
                        <h4 class="font-semibold text-primary">Primeiro Desafio</h4>
                        <p class="mt-1 text-secondary">${profile.lifePath.challenges.first}</p>
                        <p class="mt-1 text-secondary italic">Uma oportunidade de crescimento através da superação.</p>
                    </div>
                    <div>
                        <h4 class="font-semibold text-primary">Segundo Desafio</h4>
                        <p class="mt-1 text-secondary">${profile.lifePath.challenges.second}</p>
                        <p class="mt-1 text-secondary italic">Um convite para evolução pessoal.</p>
                    </div>
                    <div>
                        <h4 class="font-semibold text-primary">Terceiro Desafio</h4>
                        <p class="mt-1 text-secondary">${profile.lifePath.challenges.third}</p>
                        <p class="mt-1 text-secondary italic">Uma chance de transformação profunda.</p>
                    </div>
                    <div>
                        <h4 class="font-semibold text-primary">Quarto Desafio</h4>
                        <p class="mt-1 text-secondary">${profile.lifePath.challenges.fourth}</p>
                        <p class="mt-1 text-secondary italic">Um portal para sua maior realização.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('numerologyForm');
    const results = document.getElementById('results');
    const resultContent = document.getElementById('resultContent');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const birthdate = document.getElementById('birthdate').value;
        
        if (!name || !birthdate) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        resultContent.innerHTML = calculateProfile(name, birthdate);
        results.classList.remove('hidden');
        
        // Smooth scroll to results
        results.scrollIntoView({ behavior: 'smooth' });
    });
});
