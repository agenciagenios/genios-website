
import cities from '../app/data/cities.json';

function toSlug(text: string): string {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-");
}

function check(slug: string, expected: string) {
    const found = cities.find(c => toSlug(c.name) === slug);
    const result = found ? found.name : "NOT FOUND";

    if (result === expected) {
        console.log(`PASS: ${slug} -> ${result}`);
    } else {
        console.error(`FAIL: ${slug} -> GOT: ${result}, EXPECTED: ${expected}`);
    }
}

console.log("Verifying City Name Resolution...");
check("foz-do-iguacu", "Foz do Iguaçu");
check("sao-paulo", "São Paulo");
check("brasilia", "Brasília");
check("atlantida-sul", "Atlântida Sul"); // Hypothetical check if it existed, but likely handled by fallback or not found.
check("rio-de-janeiro", "Rio de Janeiro");
