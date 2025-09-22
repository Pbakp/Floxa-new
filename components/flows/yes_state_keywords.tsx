export const matchesKeywords = (userInput: string, expectedAnswer: string, additionalKeywords: string[] = []): boolean => {
    const input = userInput.toLowerCase().trim();
    const expected = expectedAnswer.toLowerCase().trim();

    // Check for exact match first
    if (input === expected) {
        return true;
    }

    // Extract important keywords from expected answer
    const importantKeywords = expected
        .split(/[^a-zA-Z0-9]+/)
        .filter(word => word.length > 3) // Only words longer than 3 characters
        .map(word => word.toLowerCase());

    // Combine with additional keywords
    const allKeywords = [...importantKeywords, ...additionalKeywords.map(k => k.toLowerCase())];

    // Basic "yes" state keywords that indicate positive response
    const yesStateKeywords = [
        'yes', 'yeah', 'yep', 'yup', 'sure', 'ok', 'okay', 'okey', 'alright', 'all right',
        'do', 'proceed', 'continue', 'go', 'start', 'begin', 'please', 'sounds good',
        'good', 'great', 'excellent', 'perfect', 'fine', 'right', 'correct', 'absolutely',
        'definitely', 'certainly', 'of course', 'why not', 'let\'s', 'lets', 'i agree',
        'agreed', 'accept', 'approve', 'confirm', 'confirmed', 'ready', 'willing'
    ];

    // Check if input contains basic yes state keywords
    const hasYesState = yesStateKeywords.some(word => input.includes(word));

    // Check if input contains important keywords from expected answer
    const keywordMatches = allKeywords.filter(keyword => input.includes(keyword)).length;

    // Match if: has yes state (regardless of other keywords), OR at least 2 important keywords, OR just yes state for simple confirmations
    return hasYesState || keywordMatches >= 2;
};