
import fs from 'fs';
import path from 'path';

const IBGE_API_URL = "https://servicodados.ibge.gov.br/api/v1/localidades/municipios";

interface Municipio {
    id: number;
    nome: string;
    microrregiao: {
        id: number;
        nome: string;
        mesorregiao: {
            id: number;
            nome: string;
            UF: {
                id: number;
                sigla: string;
                nome: string;
                regiao: {
                    id: number;
                    sigla: string;
                    nome: string;
                }
            }
        }
    }
}

async function fetchInternalLocations() {
    try {
        console.log("Fetching cities from IBGE...");
        const response = await fetch(IBGE_API_URL);

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data: Municipio[] = await response.json();
        console.log(`Fetched ${data.length} cities.`);

        const simplifiedCities = data.map(city => {
            const stateSigla = city.microrregiao?.mesorregiao?.UF?.sigla ??
                city["microrregiao"]?.["mesorregiao"]?.["UF"]?.["sigla"] ??
                "BR"; // Fallback

            return {
                id: city.id,
                name: city.nome,
                state: stateSigla
            };
        }).filter(c => c.state !== "BR" || c.name === "Brasília"); // Keep Brasília even if structure differs, but likely it has UF.

        // Sort alphabetically
        simplifiedCities.sort((a, b) => a.name.localeCompare(b.name));

        const outputPath = path.join(process.cwd(), 'app', 'data', 'cities.json');

        // Ensure directory exists
        const dir = path.dirname(outputPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(outputPath, JSON.stringify(simplifiedCities, null, 2));
        console.log(`Successfully saved ${simplifiedCities.length} cities to ${outputPath}`);

    } catch (error) {
        console.error("Error fetching locations:", error);
        process.exit(1);
    }
}

fetchInternalLocations();
