async function loadCSV(path){
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Failed to load ${path}`);
    }
    const data = await response.text();
    return await $.csv.toArrays(data);
}

