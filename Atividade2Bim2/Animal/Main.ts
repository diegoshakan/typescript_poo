import { Cachorro } from "./Cachorro";
import { Cavalo } from "./Cavalo";
import { Soinho } from "./Soinho";


let cachorro = new Cachorro("Cachoro", 4, 1);
cachorro.subirNaArvore(3);
cachorro.descerDaArvore();

let cavalo = new Cavalo("Cavalo", 7, 3);
cavalo.subirNaArvore(3);
cavalo.descerDaArvore();

let soinho = new Soinho("Preguiça", 2, 1);
soinho.subirNaArvore(3);
soinho.descerDaArvore();


